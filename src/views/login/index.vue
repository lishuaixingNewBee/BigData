<template>
  <div class="login-container">
    <header class="header_container" :class="{'active_header': page !== 1}">
      <div class="header_content">
        <div class="logo">
          <img src="~@/assets/img/logo.png">
        </div>
        <div class="right">
          <el-button size="mini" type="primary" plain @click="handlerOpen">登入</el-button>
          <div class="icon_wrap">
            <a href="https://github.com/lishuaixingNewBee/BigData" target="_blank" class="icon github"></a>
            <i class="icon weixin" @click="dialogVisible = true"></i>
            <i class="icon zhifubao" @click="dialogVisible = true"></i>
          </div>
        </div>
      </div>
    </header>
    <swiper class="swiper" ref="mySwiper" :options="swiperOption">
      <swiper-slide>
        <div class="page g1">
          <div class="bg-footer">
            <img src="http://c2.h54hterh.top/manage/common/d22d9ef82d971aed9e19fe18fae6b11f.png">
          </div>
          <div class="banner">
            <div class="text">
              <p class="h1">聚合数据</p>
              <p class="h2">狗蛋实验室推出的智能化数据抓取、处理、分析，挖掘平台</p>
            </div>
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
              <div class="gordan ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1s">
                <img src="http://c2.h54hterh.top/manage/thumbnail/33fcaae9bc24630861e054c4f733b406.png">
              </div>
            </div>
          </div>
          <div class="login-wrap">
            <transition name="el-zoom-in-center">
              <el-form v-show="show" ref="loginForm" style="width:350px" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
                <el-form-item prop="username">
                  <span class="svg-container">
                    <svg-icon icon-class="user" />
                  </span>
                  <el-input v-model="loginForm.username" name="username" style="width:280px;" type="text" auto-complete="on" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item prop="password" style="width:350px">
                  <span class="svg-container">
                    <svg-icon icon-class="password" />
                  </span>
                  <el-input :type="pwdType" v-model="loginForm.password" style="width:280px;" name="password" auto-complete="on" placeholder="密码" @keyup.enter.native="handleLogin" />
                  <span class="show-pwd" @click="showPwd">
                    <svg-icon icon-class="eye" />
                  </span>
                </el-form-item>
                <footer>
                  <el-button type="info" style="width:110px;" @click.native.prevent="show = false">
                    返回
                  </el-button>
                  <el-button :loading="loading" type="primary" style="width:110px;" @click.native.prevent="handleLogin">
                    登入
                  </el-button>
                </footer>
              </el-form>
            </transition>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page g2">
          <div class="banner">
            <div class="title">
              <p class="h1">我们提供的不止于数据分析工具
              </p>
              <p class="h2">更是专属于你的完整数据解决方案，帮助企业沉淀数据资产
              </p>
            </div>
            <div class="list">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content bg-purple ani" swiper-animate-effect="fadeInRight" swiper-animate-delay="0s" swiper-animate-duration=".5">
                    <div class="wrap_img">
                      <img src="~@/assets/img/data-1.png">
                    </div>
                    <p>采集数据</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple ani" swiper-animate-effect="fadeInRight" swiper-animate-delay="0.5s" swiper-animate-duration=".5">
                    <div class="wrap_img">
                      <img src="~@/assets/img/data-2.png">
                    </div>
                    <p>数据接入与储存</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple ani" swiper-animate-effect="fadeInRight" swiper-animate-delay="1s" swiper-animate-duration=".5">
                    <div class="wrap_img">
                      <img src="~@/assets/img/data-3.png">
                    </div>
                    <p>可视化查询与分析</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple ani" swiper-animate-effect="fadeInRight" swiper-animate-delay="1.5s" swiper-animate-duration=".5">
                    <div class="wrap_img">
                      <img src="~@/assets/img/data-4.png">
                    </div>
                    <p>驱动产品智能</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination other" slot="pagination"></div>
    </swiper>
    <div class="bottom" @click="slideNext" v-if="page !== 2">
      <i class="el-icon-arrow-down"></i>
    </div>
    <!-- 弹框 -->
    <el-dialog title="支持赞助" :visible.sync="dialogVisible">
      <div class="popup_wrap">
        <img src="http://c2.h54hterh.top/manage/thumbnail/780f6ae844f7bfe9828a5486a07f4666.png">
        <p class="text">gordan实验的所有成果,均为开源项目,感谢赞助我们（用于服务器费用)</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { validatAlphabets } from '@/utils/validate'
import { swiperAnimateCache, swiperAnimate } from '@/utils/animate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validatAlphabets(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      dialogVisible: false,
      loading: false,
      show: true, // 登入框
      pwdType: 'password',
      redirect: undefined,
      page: 1,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function () {
            swiperAnimateCache(this)
            swiperAnimate(this)
          },
          slideChangeTransitionEnd: () => {
            this.page = this.swiper.activeIndex + 1
            swiperAnimate(this.swiper)
          }
        }
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handlerOpen() {
      this.swiper.slideTo(0, 1000, true)
      this.show = true
    },
    slideNext() {
      this.swiper.slideNext()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    input {
      background: #fff;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #000;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fbfdff inset !important;
        -webkit-text-fill-color: #999 !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid #e5e9f4;
    background: #fbfdff;
    color: #253545;
    border-radius: 5px;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.popup_wrap {
  width: 100%;
  img {
    width: 400px;
    display: block;
    margin: auto;
  }
  .text {
    text-align: center;
  }
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  .login-form {
    position: absolute;
    right: 0px;
    bottom: 20%;
    width: 420px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.4);
    padding: 20px 20px 10px 20px;
    footer {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  .header_container {
    position: fixed;
    height: 70px;
    z-index: 2;
    transition: all 1s;
    top: 0;
    left: 0;
    right: 0;
    .header_content {
      height: 70px;
      width: initial;
      max-width: 1280px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        img {
          height: 40px;
          display: block;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .icon_wrap {
          display: flex;
          align-items: center;
          margin-left: 10px;
          height: 28px;
          width: 82px;
          justify-content: space-between;
          padding: 0 5px;
          background: #ecf5ff;
          border: 1px solid #b3d8ff;
          border-radius: 3px;
          .icon {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #fff;
            background-size: cover;
            cursor: pointer;
          }
          .github {
            background-image: url('~@/assets/img/github.svg');
          }
          .weixin {
            background-image: url('~@/assets/img/weixin.svg');
          }
          .zhifubao {
            background-image: url('~@/assets/img/zhifubao.svg');
          }
        }
      }
    }
  }
  .active_header {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
  .bottom {
    height: 47px;
    width: 47px;
    border-radius: 50%;
    text-align: center;
    line-height: 47px;
    color: #fff;
    font-size: 24px;
    position: fixed;
    bottom: 35px;
    left: 50%;
    cursor: pointer;
    margin-left: -14px;
    display: inline-block;
    background-image: linear-gradient(
      -90deg,
      rgba(5, 152, 182, 0.6) 0,
      rgba(54, 0, 159, 0.6) 100%
    );
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.2);
    opacity: 1;
    z-index: 200;
    animation: jumping 1.5s linear 0.5s infinite;
    transition: opacity 2s;
    i {
      cursor: pointer;
    }
  }
  .swiper {
    position: relative;
    height: 100%;
    width: 100%;
    .g1 {
      height: 100%;
      width: 100%;
      position: absolute;
      background-image: url(http://c2.h54hterh.top/manage/common/a936e85d39ae4713102a0651a9d92337.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      overflow: hidden;
      .bg-footer {
        width: 260px;
        height: 90px;
        position: absolute;
        bottom: 0;
        left: 0;
        img {
          width: 100%;
        }
      }
      .banner,
      .login-wrap {
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        max-width: 1280px;
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        #advert {
          margin: 0;
          .gordan {
            width: 86px;
            position: absolute;
            z-index: 11;
            left: 110px;
            top: 107px;
            cursor: pointer;
            img {
              opacity: 0.9;
              width: 100%;
            }
          }
        }
        .text {
          .h1 {
            font-family: PingFangSC-Medium;
            font-size: 40px;
            color: #222;
            letter-spacing: 0;
            line-height: 35px;
          }
          .h2 {
            font-family: PingFangSC-Regular;
            font-size: 24px;
            color: #515a6e;
            letter-spacing: 0;
            line-height: 18px;
          }
        }
      }
      .login-wrap {
        position: relative;
        z-index: 66;
        align-items: flex-end;
      }
    }
    .g2 {
      height: 100%;
      width: 100%;
      position: absolute;
      background-image: url('http://c2.h54hterh.top/manage/common/ba30fa539027990dbc5019c277b6ab33.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      overflow: hidden;
      .banner {
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          .h1 {
            font-size: 45px;
            font-weight: 700;
            color: #253545;
            line-height: 63px;
          }
          .h2 {
            font-size: 25px;
            color: #7388aa;
            transition-delay: 0.8s;
            line-height: 45px;
          }
        }
        .list {
          width: 100%;
        }
        .grid-content {
          height: 274px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
          border-radius: 6px;
          p {
            font-size: 20px;
            color: #111;
            margin-top: 20%;
            font-weight: 700;
          }
          .wrap_img {
            width: 50%;
            margin: 0 auto;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
.login-container {
  .swiper .swiper-pagination {
    left: inherit;
    right: 10px;
    top: 40%;
    transform: none;
  }
  .swiper .swiper-pagination .swiper-pagination-bullet {
    background: #f7f9fa;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    cursor: pointer;
    opacity: 1;
  }
  .swiper .swiper-pagination .swiper-pagination-bullet-active {
    border: 4px solid #fff;
    background: transparent;
    width: 16px;
    height: 16px;
  }
  .swiper .swiper-pagination.other .swiper-pagination-bullet {
    background: #d2d4d6;
  }
  .swiper .swiper-pagination.other .swiper-pagination-bullet-active {
    border-color: #00abfc;
    background: transparent;
  }
}
@keyframes jumping {
  0% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>