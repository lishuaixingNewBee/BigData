<template>
  <div class="app-container">
    <div class="filter-container">
      <div class="filter-item">
        <label for="">地区:</label>
        <el-cascader style="width:200px" filterable size="mini" expand-trigger="hover" :options="cityList" v-model="selectedCity" :props="props" @change="handleChange">
        </el-cascader>
        <el-cascader style="width:200px" size="mini" expand-trigger="hover" :options="areaList" v-model="selectedArea" :props="props2" @change="handleChange2">
        </el-cascader>
      </div>
      <div class="filter-item">
        <label for="">分类:</label>
        <el-select v-model="query.category_id" style="width:130px" size="mini" filterable placeholder="请选择分类">
          <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <el-button class="filter-item" size="mini" :disabled="!query.city_id" type="primary" icon="el-icon-search" @click="fetchData">查询</el-button>
    </div>
    <div class="app-table x-table">
      <el-table v-loading="listLoading" size="mini" style="height:100%;width:100%;" height="100%" :data="list" element-loading-text="Loading" fit highlight-current-row>
        <el-table-column size="mini" fixed="left" prop="name" label="店名" width="200">
          <template slot-scope="scope">
            <span class="ellipsis" @click='handleCopy(scope.row.name, $event)'>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column :filter-method="filterHandler" :filters="[{text: '全部', value: 1}, {text: '仅手机', value: 2}]" prop="phone" label="电话" width="190">
        </el-table-column>
        <el-table-column prop="channel_name" label="一级分类" align="center" width="80">
        </el-table-column>
        <el-table-column label="二级分类" width="80" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.category_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="封面图" width="80" align="center">
          <template slot-scope="scope" v-if="scope.row.poster_url">
            <a :href="scope.row.poster_url" target="_blank" class="table_img" :style="{backgroundImage: `url(${scope.row.poster_url})`}"></a href="">
          </template>
        </el-table-column>
        <el-table-column size="mini" prop="address" label="地址">
          <template slot-scope="scope">
            <span class="ellipsis" @click='handleCopy(scope.row.address, $event)'>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="图组" size="mini" align="center" width="180">
          <template slot-scope="scope" v-if="scope.row.images">
            <div class="table_img_container" v-if="scope.row.images.length">
              <template v-for="(item, index)  in scope.row.images">
                <a :href="item" target="_blank" class="table_img" v-if="index < 2" :style="{backgroundImage: `url(${item})`}"></a>
                <div class="table_img more" @click="handleOpen(scope.$index, scope.row)" v-if="scope.row.images.length > 2 && index === 2">
                  <i class="el-icon-more"></i>
                </div>
              </template>
            </div>
            <div v-else>暂无</div>
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" fixed="right" label="网址" width="110" align="center">
          <template slot-scope="scope">
            <el-tag><a :href="scope.row.source_url" target="_blank">打开</a></el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 翻页 -->
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination background @current-change="handleCurrentChange" :current-page.sync="pageData.page_no" :page-size="pageData.page_size" layout="prev, pager, next, jumper" :total="total_count">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog title="展示图集" :visible.sync="dialogVisible">
      <div class="wrap_image">
        <a class="table_img" :href="item" target="_blank" v-for="item in Imageslist" :style="{backgroundImage: `url(${item})`}"></a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getCategory, getList } from '@/api/meituan'
import { getAreas } from '@/api/areas'
import cities from '@/api/cities'
import clip from '@/utils/clipboard' // use clipboard directly
import category from '@/api/category'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      pageData: {
        page_no: 1,
        order: -1,
        page_size: 15,
      },
      query: {
        channel_id: 1, // 一级分类
        category_id: '', // 二级分类
        sub_area_id: undefined, // 只选择一级区域
        area_id: '', // 区域
        city_id: '' // 城市
      },
      total_count: null, // zao
      dialogVisible: false,
      selectedArea: [], // 选中的区域
      selectedCity: [], // 选中的城市
      Imageslist: [],
      list: null,
      areaList: [], // 区域数组
      cityList: cities, // 城市数组
      categoryList: category, // 分类
      props: {
        value: 'id',
        label: 'name',
        children: 'cityInfoList'
      },
      props2: {
        value: 'id',
        label: 'name',
        children: 'subAreas'
      },
      listLoading: false
    }
  },
  created() {
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.pageData, this.query).then(response => {
        this.total_count = response.data.total_count
        this.pageData.page_size = response.data.page_size
        this.pageData.page_no = response.data.page_no
        this.list = response.data.result
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
        this.$message.error('服务器异常，请重试！')
      })
    },
    handleChange(val) {
      this.query.city_id = val[1]
      this.query.area_id = undefined
      this.query.sub_area_id = undefined
      getAreas(this.query.city_id).then(response => {
        const data = response.data.areas
        if (data || data.length) {
          this.areaList = data
        } else {
          this.areaList = []
          this.$message({
            message: '该城市暂未开通',
            type: 'warning'
          }).catch(() => {
            this.listLoading = false
            this.areaList = []
            this.$message.error('服务器异常，请重试！')
          })
        }
      })
    },
    handleChange2(val) {
      console.log(val)
      if (val[0] === val[1]) { // 选择区 全部 时
        this.query.area_id = val[1]
        this.query.sub_area_id = undefined
      } else {  // 选择具体区域
        this.query.area_id = val[0]
        this.query.sub_area_id = val[1]
      }
    },
    handleCurrentChange(val) { // 翻页
      this.pageData.page_no = val
      this.fetchData()
    },
    handleOpen(index, row) {
      this.Imageslist = row.images
      this.dialogVisible = true
    },
    handleCopy(text, event) { // 复制
      clip(text, event)
    },
    filterHandler(value, row, column) { // 筛选手机号
      const property = column['property']
      const phone = row[property]
      let bol = 1
      if (phone) {
        var array = phone.split('/')
        array.forEach(v => {
          if (v.length === 11) {
            bol = 2
            return false
          }
        })
      }
      return bol === value
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.x-table {
  .el-table__column-filter-trigger i {
    color: #fff;
  }
  th > .cell.highlight {
    color: red;
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.wrap_image {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .table_img {
    margin-bottom: 10px;
  }
}
.more {
  background: #00b7a3;
  overflow: hidden;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: #fff;
}
</style>
