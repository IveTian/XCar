<template>
  <div id="app">
    <div id="navBar">
      <el-row>
        <el-col :span="4">
          <router-link to="/" @click="show2 = !show2">
            <img src="./assets/XCarLogo.png" alt="" id="titleImg" />
          </router-link>
        </el-col>
        <el-col :span="1" :offset="15">
          <router-link to="/aboutPage" id="navBarLoginBtn" @click="show2 = !show2"><el-link>关于我们</el-link></router-link
          >
        </el-col>
        <el-col :span="1" :offset="1">
          <router-link to="/newsPage" id="navBarLoginBtn" @click="show2 = !show2"><el-link>新闻中心</el-link></router-link>
        </el-col>
        <el-col :span="1" :offset="1">
          <router-link to="/loginPage" id="navBarLoginBtn" @click="show2 = !show2"><el-link>登录</el-link></router-link>
        </el-col>
      </el-row>
    </div>
    <transition name="el-fade-in-linear">
    <router-view />
    </transition>
    <footerPage />
  </div>
</template>

<script>
import footerPage from "./components/footerPage.vue";

console.log('老师你好，这是一个小彩蛋，感谢你打开了Console。我使用 Vue 写过无数的应用，这一次我也很高兴能够使用 Vue + ElementUI + Webpack 技术栈制作这个结课内容。如果有什么不足的地方也欢迎老师指正。')
console.log('我的个人网站:https://tzih.top')
console.log('我的GitHub:https://github.com/IveTian')
console.log('我上大学以来最引以为傲的作品：https://inlushan.top')
console.log('Made with ❤️')
export default {
  components: { footerPage },
  name: "App",
  data: () => ({
    show2: false,
  }),
};
</script>

<style>
#navBar {
  padding: 20px;
  top: 0;
  background-color: #fff;
}
#navBarLoginBtn {
  color: #000;
  font-size: 18px;
  text-decoration: none;
  font-family: '微软雅黑', cursive;
}
#titleImg {
  height: 30px;
}
</style>
