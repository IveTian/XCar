<template>
  <div>
    <div id="titleText">
      <h2>新闻中心</h2>
      <p style="margin-top: -20px; color: #909399; letter-spacing: 3px">
        XCAR NEWS
      </p>
    </div>
    <div id="newsContentCard">
        <div>
            <h3>XCar 2077年第1季度交付114514台</h3>
            <el-tag>业绩表现</el-tag>
            <i class="el-icon-time"> 2077-4-18</i>
            <hr />
        </div>
                <div>
            <h3>XCar 车上搭载的黑科技</h3>
            <el-tag type="success">媒体报道</el-tag>
            <i class="el-icon-time"> 2077-1-26</i>
            <hr />
        </div>
                <div>
            <h3>共同迎接2077年的到来</h3>
            <el-tag type="success">媒体报道</el-tag>
            <i class="el-icon-time"> 2076-12-31</i>
            <hr />
        </div>
                <div>
            <h3>达到国际权威标准！XCar 汽车通过ISO 27001与ISO 27701双认证</h3>
            <el-tag>业绩表现</el-tag>
            <i class="el-icon-time"> 2076-11-28</i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsPage",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
#titleText {
  margin: auto;
  margin-top: 30px;
  text-align: center;
  color: #000;
  font-size: 20px;
}
#newsContentCard{
    padding: 20px;
    margin:auto;
    border-radius: 10px;
    box-shadow: #dcdfe6 0px 0px 10px;
    max-width: 800px;
    margin-top: 20px;
    border: solid 1px #dcdfe6;
}
</style>