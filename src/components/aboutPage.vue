<template>
<div>
    <div id="titleText">
        <h2>关于我们</h2>
        <p style="margin-top:-20px; color:#909399; letter-spacing:3px">ABOUT XCAR</p>
    </div>
    <div id="aboutPageCard">
        <p id="paragraphTitleText">用科技为人类创造更便捷愉悦的出行生活</p>
        <div id="paragraphText">
                    <p>XCar 成立于2077年，是一家专注未来出行的科技公司。我们一直坚持饱和式研发投入，构建全栈自研的核心能力，今天 XCar 已经成为中国领先的智能电动汽车公司之一。
XCar 的使命是，用科技为人类创造更便捷愉悦的出行生活。</p>
        </div>
        <p id="paragraphTitleText">自主研发，智能智造</p>
        <div id="paragraphText">
            <p>XCar 坚持通过自主研发，以领先的软件、数据及硬件技术为核心，为自动驾驶、智能网联和核心汽车系统带来创新，为中国消费者带来广受欢迎的智能电动汽车。我们是中国唯一一家自主开发包含定位和高精地图融合、感知算法和传感器融合及行为规划、运动规划和控制的全栈式自动驾驶技术，并在量产汽车上应用该软件的汽车公司。</p>
<p>XCar 的生产理念以质量、持续改进、灵活性和高运营效率为中心，采取精益生产方式，以不断优化运营效率和产品质量。为此，XCar 在广西柳州、山东菏泽和四川成都布局智能智造生产基地，极限年产能峰值可达50万辆。</p>
        </div>
        <p id="paragraphTitleText">品质制造是基础，生态运营是核心</p>
        <div id="paragraphText">
            <p>品质制造是基础，生态运营是核心。XCar 汽车在打磨产品品质的同时，全面布局销售、售后以及充电服务等各项工作，通过产品运营闭环和服务运营闭环，满足产品全生命周期的用户全触点体验。</p>
            <p>XCar 汽车通过“自建自营+授权经营、2S+2S、线上+线下”的新零售模式为用户提供“一体化，多触点”的服务体验，实现全国线上线下价格统一、销售流程一致、服务标准一致，保障用户体验；XCar 汽车官方金融服务品牌 XCar 金服，包括融资租赁、汽车保险等，致力于为用户提供高效便捷的一站式购车金融服务；XCar 汽车自建自营超级充电站，并持续通过高质量对外合作和服务运营，与优秀的伙伴共建智能生态圈，为用户提供便捷的免费充电服务，有效解决智能电动车用户的里程焦虑；售后服务方面，XCar 汽车依托自主开发的远程诊断系统、智能理赔、移动服务等功能，提高用户的服务效率和智能体验。</p>
            <p>成立以来，XCar 汽车获得了阿里巴巴集团、小米集团、IDG资本、五源资本、GGV纪源资本、春华资本、高瓴资本、红杉中国等国内外顶级投资者的支持。</p>
        </div>

    </div>
    <footerPage />
</div>
</template>

<script>
import footerPage from './footerPage.vue'
export default {
    components: { footerPage },
    name: 'aboutPage',
    data() {
        return {
            msg: 'Here is aboutPage'
        }
    }
}
</script>

<style scoped>
#aboutPageCard {
    text-align: center;
    margin: auto;
    margin-top: 20px;
    Max-width: 60%;
    border-radius: 10px;
    border: solid 1px #dcdfe6;
    padding: 20px;
}
#titleText {
    margin: auto;
    margin-top: 30px;
    text-align: center;
    color: #000;
    font-size: 20px;
}
#paragraphTitleText {
    color: #000;
    font-size: 30px;
    font-weight: 500;
}
#paragraphText{
    Max-width: 820px;
    margin: auto;
}
</style>