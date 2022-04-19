<template>
  <div class="hello">
    <div>
      <img src="../assets/heroPic.jpg" id="heroPic" />
      <div id="heroText">
        <p>全新一代纯电动车</p>
        <p style="margin-top: -50px">现已接受预定</p>
      </div>
      <div id="heroBtn">
        <el-button type="primary" round @click="show3 = !show3">查看汽车参数</el-button>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="show3">
        <threedView />
      </div>
    </el-collapse-transition>
    <footerPage />
  </div>
</template>

<script>
import threedView from "./threedView.vue";
import footerPage from "./footerPage.vue";
export default {
  components: { threedView, footerPage },
  name: "homePage",
    data: () => ({
      show3: false
    })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#heroPic {
  max-width: 100%;
  border-radius: 10px;
}
#heroText {
  text-align: center;
  font-size: 60px;
  letter-spacing: 5px;
  font-weight: 600;
}
#heroBtn {
  margin-top: -20px;
  margin-bottom: 80px;
  text-align: center;
}
</style>
