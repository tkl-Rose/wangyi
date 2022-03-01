<template>
  <div class="category">
    <!--头部-->
    <div class="category-header">
      <img class="category-img" src="../Category/image/26.png" alt="" />
      <div class="header-search">
        <img class="category-img" src="../Category/image/24.png" alt="" />
        <span class="category-text">今晚全场林公子请客</span>
      </div>
    </div>

    <!--侧边栏-->
    <div class="search-wrap">
      <div class="left"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.category {
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
.category-header {
  // position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #999999;
}
.category-img {
  width: 16px;
  height: 16px;
}
.header-search {
  display: flex;
  align-items: center;
  width: 70%;
  height: 30px;
  line-height: 30px;
  margin: 0 50px 0 0;
  padding-left: 20px;
  border-radius: 20px;
  border: 1px solid #ffff;
  background-color: #f7f7f7;
}
.category-text {
  width: 173px;
  height: 20px;
  line-height: 20px;
  // text-align: center;
  padding-bottom: 2px;
  font-size: 13px;
  padding-left: 10px;
}
</style>
