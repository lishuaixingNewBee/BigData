<template>
  <div class="app-container">
    <div class="wrap_img">
      <div class="middle">
        <img src="~@/assets/img/nodata.svg">
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.wrap_img {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    display: block;
  }
  p {
    text-align: center;
  }
}
</style>

