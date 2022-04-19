<template>
  <div id="threedViewBody">
    <el-table
    :data="tableData"
    stripe>
    <el-table-column
      prop="name"
      label="项目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="car1"
      label="2022款 后轮驱动版">
    </el-table-column>
    <el-table-column
      prop="car2"
      label="2022款 长续航全轮驱动版本">
    </el-table-column>
    <el-table-column
      prop="car3"
      label="2021款 Performance 高性能全轮驱动版">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: "threedView",
  data() {
    return {
        tableData: [{
          name: '价格',
          car1: '31.69 万元',
          car2: '37.59 万元',
          car3: '41.79 万元',
        },{
          name: '上市时间',
          car1: '2021.11',
          car2: '2021.12',
          car3: '2021.01',
        },{
          name: '纯电续航里程(km)',
          car1: '545',
          car2: '660',
          car3: '615',
        },{
          name: '最大功率(kW)',
          car1: '194',
          car2: '331',
          car3: '357',
        },{
          name: '最大扭矩N·m',
          car1: '340',
          car2: '559',
          car3: '659',
        },{
          name: '电动机(Ps)',
          car1: '264',
          car2: '450',
          car3: '486',
        },{
          name: '最高车速(km/h)',
          car1: '217',
          car2: '217',
          car3: '250',
        },{
          name: '0-100km/h加速(s)',
          car1: '6.9',
          car2: '5',
          car3: '3.7',
        },{
          name: '电机类型',
          car1: '永磁/同步',
          car2: '前感应/异步 后永磁/同步',
          car3: '前感应/异步 后永磁/同步',
        },{
          name: '电池类型',
          car1: '磷酸铁锂电池',
          car2: '三元锂电池',
          car3: '三元锂电池',
        },{
          name: 'CLTC纯电续航里程(km)',
          car1: '545',
          car2: '660',
          car3: '615',
        },{
          name: '电池能量(kWh)',
          car1: '60',
          car2: '78.4',
          car3: '78.4',
        },{
          name: '电池组质保',
          car1: '八年或16万公里',
          car2: '八年或19.2万公里',
          car3: '八年或19.2万公里',
        },{
          name: '驱动方式',
          car1: '后置后驱',
          car2: '双电机四驱',
          car3: '双电机四驱',
        },{
          name: '四驱形式',
          car1: '-',
          car2: '电动四驱',
          car3: '电动四驱',
        }]
      };
  },
  methods: {},
};
</script>

<style scoped>
#threedViewBody {
  text-align: center;
  margin: auto;
  margin-top: 20px;
  Max-width: 70%;
  height: auto;
  border-radius: 10px;
  border: solid 1px #dcdfe6;
}
</style>