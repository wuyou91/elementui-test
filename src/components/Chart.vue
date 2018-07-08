<template>
  <div class="chart">
    <el-row>
      <el-col :span="12"><div id="barChart"></div></el-col>
      <el-col :span="12"><div id="pieChart"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div id="lineChart"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// 引入echarts基础模块
let echarts = require('echarts/lib/echarts')
// 引入折线图，柱状图，饼状图
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框、标题、图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default {
  name: 'Chart',
  data () {
    return {
      barOption: {
        title: {
          text: '本周营业额',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{b}<br />{a}: {c}万'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销售额',
          type: 'bar',
          barMaxWidth: 30,
          data: [120, 200, 150, 80, 70, 110, 130]
        },
        {
          name: '销售额',
          type: 'line',
          lineStyle: {
            color: '#E6A23C'
          },
          data: [120, 200, 150, 80, 70, 110, 130]
        }
        ]
      },
      pieOption: {
        title: {
          text: '访问统计',
          subtext: '最近30天内的数据'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 0,
          top: 50
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      },
      lineOption: {
        title: {
          text: '与同行对比',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['业内龙头', '业内领先', '自己', '行业平均'],
          top: 30
        },
        grid: {
          top: 80
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '业内龙头',
            type: 'line',
            data: [568, 765, 732, 625, 658, 622, 725]
          },
          {
            name: '业内领先',
            type: 'line',
            data: [421, 385, 566, 325, 422, 368, 542]
          },
          {
            name: '自己',
            type: 'line',
            data: [365, 568, 358, 425, 336, 368, 410]
          },
          {
            name: '行业平均',
            type: 'line',
            data: [325, 332, 301, 334, 390, 330, 320]
          }
        ]
      }
    }
  },
  methods: {
    drawChart (id, option) {
      let myChart = echarts.init(document.getElementById(id), 'light')
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  },
  mounted () {
    this.drawChart('barChart', this.barOption)
    this.drawChart('pieChart', this.pieOption)
    this.drawChart('lineChart', this.lineOption)
  }
}
</script>

<style scoped>
.chart{
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}
#barChart{
  box-sizing: border-box;
  height: 400px;
  padding: 10px;
  margin-right: 10px;
  background-color: #eee;
}
#pieChart{
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  padding: 10px;
  background-color: #eee;
}
#lineChart{
  box-sizing: border-box;
  width: 100%;
  height: 450px;
  padding: 10px;
  margin-top: 10px;
  background-color: #eee;
}
</style>
