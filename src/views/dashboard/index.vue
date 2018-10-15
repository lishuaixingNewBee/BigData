<template>
  <div class="app-container">
    <div class="card">
      <div class="s1">
        <div id="advert">
          <div class="bg1">
            <div>
              <img src="~@/assets/img/icon-01.png" alt="" class="icon01">
              <img src="~@/assets/img/icon-02.png" alt="" class="icon02">
              <img src="~@/assets/img/icon-03.png" alt="" class="icon03">
              <img src="~@/assets/img/icon-04.png" alt="" class="icon04">
              <img src="~@/assets/img/icon-05.png" alt="" class="icon05">
              <img src="~@/assets/img/icon-06.png" alt="" class="icon06">
              <img src="~@/assets/img/icon-07.png" alt="" class="icon07">
            </div>
          </div>
          <div class="bg2">
            <div>
              <span class="icon08">
                <img src="~@/assets/img/icon-08.png" alt="" width="10px">
              </span>
              <span class="icon09">
                <img src="~@/assets/img/icon-09.png" alt="" width="30px">
              </span>
              <span class="icon10">
                <img src="~@/assets/img/icon-10.png" alt="" width="20px">
              </span>
            </div>
          </div>
          <div class="bg3">
            <div>
              <span class="icon11">
                <img src="~@/assets/img/icon-11.png" alt="" width="26px">
              </span>
              <span class="icon12">
                <img src="~@/assets/img/icon-12.png" alt="" width="18px">
              </span>
            </div>
          </div>
          <div class="content rotateIn animated">
            <span>聚合数据</span>
            <!-- <img src="~@/assets/img/finger.png" alt="" style="height: 22px;vertical-align: middle;"> -->
          </div>
        </div>
      </div>
      <div class="s2">
        <div class="con fadeInDown animated">
          <div class="info-name">聚合数据-Gordan实验室</div>
          <div class="info-desc">
            聚合数据是由狗蛋实验室研发的互联网数据抓取、处理、分析，挖掘平台。凭借其灵活 的配置与强大的性能领先国内数据采集类产品，大数据行业的部署方案领导者，支撑 300 家企业稳定、高效的系统运行，为你数据业务的长期发展保驾护航。聚合数据 同时支持 SaaS 部署模式。并赢得众多用户的一致认可。
          </div>
        </div>
      </div>
      <div class="s3">
        <img class="rotateIn animated" width="75%" src="http://c2.h54hterh.top/manage/image/e19e4720e2ab728b40e6ac7c37f005a1.png">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container {
  padding: 0 30px;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background: linear-gradient(180deg, rgba(0, 113, 208, 0.8), #00b7a3);
  // background-image: url('http://c2.h54hterh.top/manage/common/ba30fa539027990dbc5019c277b6ab33.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  .card {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 800px;
    padding: 15px 0;
    box-sizing: border-box;
    // margin: 36px auto 48px auto;
    text-align: left;
    padding: 64px 0 72px 0;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.4);
    border-radius: 16px;
    background: #4d4d4d;
    background-size: cover;
    background-image: url('http://c2.h54hterh.top/manage/common/101987eb7753925d1943cc7926c0bddb.jpg');
    background-position: center;
    .s1 {
      width: 33%;
    }
    .s2 {
      overflow: hidden;
      width: 44%;
      .info-name {
        font-weight: 700;
        font-size: 24px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        margin-bottom: 16px;
      }
      .info-desc {
        font-size: 14px;
        color: #fff;
        line-height: 28px;
      }
    }
    .s3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33%;
    }
  }
}
</style>
