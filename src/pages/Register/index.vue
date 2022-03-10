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
            type="tel"
            maxlength="11"
            placeholder="请输入手机号"
            v-model="phone"
          />
        </div>
      </div>
      <div class="van-cell">
        <div class="van-cell-title">
          <span>密码 :</span>
        </div>
        <div class="van-cell-value">
          <input class="van-field" type="text" name="username" placeholder="" />
        </div>
      </div>

      <div class="inputtop1">
        <input
          class="input-box1"
          type="tel"
          maxlength="11"
          placeholder="请输入短信验证码"
          v-model="code"
        />
        <button @click="getCode" class="inputCa">获取验证码</button>
      </div>

      <div class="buton">
        <router-link to="login">
          <div class="link-register">已有登录账号</div>
        </router-link>
        <van-button @click="register" class="but" type="primary" size="normal"
          >注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      // password,
    };
  },
  methods: {
    //发请求拿到注册的信息
    async register() {
      let { phone, password, code } = this;
      try {
        await this.$store.dispatch("user/userRegister", {
          phone,
          password,
          code,
        });
        alert("用户注册成功");
        this.$router.push("../Login");
      } catch (error) {
        alert("用户注册失败");
      }
    },
    //发请求拿到验证码的信息
    async getCode() {
      try {
        const result = await this.$store.dispatch("getCode", this.phone);
        console.log(result);
        this.code = result;
      } catch (error) {
        alert("获取验证码失败" + error.message);
      }
    },
  },
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
.inputtop1 {
  display: flex;
  width: 335px;
  align-items: center;
  padding-top: 20px;
  border-bottom: 1px solid #ececec;

  .input-box1 {
    width: 310px;
    height: 40px;
    margin-left: 10px;
    font-size: 15px;
    border: none;

    color: #424542;
    line-height: 40px;
  }

  .inputCa {
    width: 95px;
    height: 30px;
    font-size: 10px;
  }
}
</style>
