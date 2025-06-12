<!-- 电脑图 -->
<template>
  <view class="content_view">
    <view class="eeg_view" id="eegMain"></view>
    <view class="title_view">
      <text>脑电</text>
    </view>
  </view>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {},
  components: {},
  data() {
    return {
      data: [],
      value: Math.random() * 100,
      num: 0,
    }
  },
  onLoad(option) {},
  mounted() {
    // let h = document.documentElement.clientHeight;
    // console.log("当前高：" + h)
    this.setStart()
  },
  methods: {
    setStart() {
      this.data = []
      for (var i = 0; i < 100; i++) {
        this.data.push(this.randomData())
      }

      this.setECharts()
    },

    setECharts() {
      var myChart = echarts.init(document.getElementById('eegMain'))

      var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            // console.log(JSON.stringify(params[0].value[1]))
            return params[0].value[1] + ''
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: 'time',
          show: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          show: false,
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: this.data,
            smooth: true, // 启用平滑曲线
            color: '#A7C1FA',
            lineStyle: {
              width: 1,
            },
          },
        ],
      }

      const _this = this
      setInterval(function () {
        for (var i = 0; i < 1; i++) {
          // console.log(JSON.stringify(Date.now()))
          _this.data.shift()
          _this.data.push(_this.randomData())
        }

        option.series.data = _this.data

        myChart.setOption(option)
      }, 100)

      // myChart.setOption(option);
    },

    randomData() {
      this.value = Math.random() * 100
      this.num = this.num + 100
      return {
        name: JSON.stringify(Date.now()),
        value: [this.num, Math.round(this.value)],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;
  background: #273f7f;

  position: relative;

  display: flex;
  align-items: start;
  justify-content: center;
}

.eeg_view {
  width: 100%;
  height: 278rpx;
}

.title_view {
  position: absolute;
  z-index: 1;
  margin-top: 26rpx;

  width: 114rpx;
  height: 61rpx;
  background: rgba(29, 33, 41, 0.6);
  border-radius: 10rpx 10rpx 10rpx 10rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-family: Inter, Inter;
    font-weight: 400;
    font-size: 28rpx;
    color: #a7c1fa;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
</style>
