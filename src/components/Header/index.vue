<template>
  <div class="header">
    <div class="line">
      <div class="logo"></div>
      <van-search
        lazy-load
        placeholder="搜索商品，共109876款好物"
        input-align="center"
        class="topsearchIpt"
      >
      </van-search>
      <van-button
        v-if="!token"
        class="toLogin"
        plain
        type="danger"
        @click="toLogin"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.header {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  .line {
    display: flex;
    align-items: center;
    padding: 8px 15px;
    .logo {
      width: 72px;
      height: 20px;
      background-image: url("../../static/home/home.png");
      background-position: -60.5px -125px;
      background-size: 187.5px 187.5px;
      .topsearchIpt {
        padding: 0;
        margin: 2px 10px;
        flex: 1;
        border-radius: 4px;
        padding-left: 6px;
        ::-webkit-input-placeholder {
          color: #666;
        }
        .van-search__content {
          background-color: #ededed !important;
        }
      }
    }
    .toLogin {
      width: 35px;
      height: 18px;
      white-space: nowrap;
      font-size: 3.36px;
      line-height: 18px;
      border-radius: 3px;
    }
  }
}
</style>
