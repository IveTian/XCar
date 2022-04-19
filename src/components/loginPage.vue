<template>
<div>
  <div id="loginCard">
    <h2>登录</h2>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item id="loginNowBtn">
        <el-button type="primary" @click="submitForm('form')"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
  <footerPage />
  </div>
</template>

<script>
import footerPage from "./footerPage.vue";
export default {
  components: { footerPage },
  name: "loginPage",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "登陆成功",
            type: "success",
          }),
            this.$router.push("/");
        } else {
          this.$message({
            message: "请输入用户或密码",
            type: "warning",
          });
          return false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loginCard {
  margin: 100px auto;
  width: 400px;
  padding: 20px;
  border: solid 1px #dcdfe6;
  border-radius: 10px;
  box-shadow: #dcdfe6 0px 0px 50px;
}
</style>
