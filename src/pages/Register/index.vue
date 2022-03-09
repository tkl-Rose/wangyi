<template>
  <div>
    <!--头部-->
    <div class="simple-header">
      <router-link to="Home"
        ><img class="category-img" src="../Category/image/26.png" alt=""
      /></router-link>
      <div class="simple-header-name">注册</div>
      <img class="category-img1" src="../Cart/image/25.png" alt="" />
    </div>

    <!--中间logo部分-->
    <div class="logoto">
      <img
        class="logo"
        src="http://s.weituibao.com/1582958061265/mlogo.png"
        alt=""
      />
    </div>

    <div class="logon-body">
      <div class="van-cell">
        <div class="van-cell-title">
          <span>用户名 :</span>
        </div>
        <div class="van-cell-value">
          <input
            class="van-field"
            type="text"
            name="username"
            placeholder="请输入用户名"
            id=""
          />
        </div>
      </div>
      <div class="van-cell">
        <div class="van-cell-title">
          <span>密码 :</span>
        </div>
        <div class="van-cell-value">
          <input
            class="van-field"
            type="text"
            name="username"
            placeholder=""
            id=""
          />
        </div>
      </div>

      <div class="verify">
        <div class="cerify-code-panel">
          <div class="verify-code">
            <span class="main">8</span>
            <span class="main">6</span>
            <span class="main"></span>
            <span class="main">+</span>
            <span class="main">5</span>
            <span class="main">6</span>
            <span class="main"></span>
            <span class="main">=</span>
            <span class="main"></span>
            <span class="main">?</span>
          </div>
        </div>
        <div class="verify-code-area">
          <div class="verify-input-area">
            <input type="text" class="varify-input-code" />
          </div>
          <div class="verify-change-area">
            <a class="verify-change-code">换一张</a>
          </div>
        </div>
      </div>

      <div class="buton">
        <router-link to="login">
          <div class="link-register">已有登录账号</div>
        </router-link>
        <van-button class="but" type="primary" size="normal">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.simple-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
}
.category-img {
  width: 18px;
  height: 18px;
  margin-left: 10px;
}
.simple-header-name {
  font-size: 15px;
}
.category-img1 {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
.logoto {
  display: flex;
  height: 120px;
  justify-content: center;
}
.logo {
  width: 120px;
  height: 120px;
  position: relative;
  top: 10%;
}
.logon-body {
  // width: 375px;
  height: 250px;
  padding: 0 20px;
  margin-top: 40px;
}
.van-cell {
  display: flex;
  box-sizing: border-box;
  width: 335px;
  align-items: center;
  font-size: 15px;
  background-color: #fff;
  border-bottom: 1px solid #f5f6f7;
}
.van-cell-title {
  font-size: 15px;
  flex: none;
  box-sizing: border-box;
}
.van-cell-value {
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
}
.van-field {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-left: 30px;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: none;
}
.buton {
  width: 303px;
  height: 102px;
  margin-top: 20px;
}
.link-register {
  font-size: 13px;
  margin-bottom: 20px;
  color: #1989fa;
  // display: inline-block;
}
.but {
  width: 303px;
  height: 50px;
  border-radius: 50px;
  margin-left: 20px;
  background-color: #1baeae;
}
.verify {
  display: flex;
  width: 335px;
  height: 70px;
  align-items: center;
  // justify-content: center;
  // text-align: center;
}
.cerify-code-panel {
  margin-top: 10px;
}
.verify-code {
  width: 136px;
  height: 47px;
  line-height: 47px;
  font-size: 16px;
  background-color: rgb(255, 255, 240);
  color: rgb(255, 0, 51);
  border: 1px solid #dddddd;
  text-align: center;
}
.main {
  margin-left: 5px;
}
.verify-code-area {
  display: flex;
  width: 180px;
  height: 44px;
  margin-left: 20px;
}
.varify-input-code {
  width: 104px;
  height: 44px;
  border: 1px solid #e9e9e9;
  padding-left: 10px;
  font-size: 15px;
}
.verify-change-area {
  line-height: 42ps;
  // float: left;
}
.verify-change-code {
  color: #337ab7;
  font-size: 13px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
