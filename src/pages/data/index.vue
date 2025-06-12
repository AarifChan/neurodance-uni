<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '',
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>
<!-- HoST数据首页 -->
<template>
  <view class="content_view">
    <!-- 浮层 - 日、周、月、年 -->
    <view class="date_back_view">
      <view class="date_view">
        <view v-for="(item, index) in topList" :key="index" @tap="setSelected(item.id)">
          <view class="date_item_sel_view" v-if="selected == item.id">{{ item.text }}</view>
          <view class="date_item_view" v-else="selected != item.id">{{ item.text }}</view>
        </view>
      </view>
    </view>

    <!-- 内容 -->
    <view>
      <scroll-view :style="{ height: dynamicHeight }" scroll-y="true" show-scrollbar="false">
        <day v-if="selected == 0" :selected="selected" @page="getPage"></day>
        <week v-else-if="selected == 1" :selected="selected" @page="getPage"></week>
        <moon v-else-if="selected == 2" :selected="selected" @page="getPage"></moon>
        <year v-else-if="selected == 3" :selected="selected" @page="getPage"></year>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import day from './data/day/day.vue'
import week from './data/week/week.vue'
import moon from './data/moon/moon.vue'
import year from './data/year/year.vue'

export default {
  props: {},
  components: {
    day,
    week,
    moon,
    year,
  },
  data() {
    return {
      dynamicHeight: '900px',
      selected: 0,
      topList: [
        {
          id: 0,
          text: '日',
        },
        {
          id: 1,
          text: '周',
        },
        {
          id: 2,
          text: '月',
        },
        {
          id: 3,
          text: '年',
        },
      ],
    }
  },
  onLoad(options) {
    // if (options != undefined && options != null) {
    //   let ot =
    //     'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhY2Nlc3MiLCJ1aWQiOiI0MSIsIm5iZiI6MTc0NzAxNDA5MCwiZXhwIjoxNzQ3NjE4ODkwLCJqdGkiOiIwNWQxZjVhMmFhODM0ZTg0ODZiNjM1MWIwMjZmZjBmZCIsImlhdCI6MTc0NzAxNDA5MH0.TEV9YRpGPn5fDj_kh41KWNYK6gu5MGE80iSVrkT743JGVM-TwH614PfTFhc3ugFHFKk-HL_shv92eA8eyPN6Ug'
    //   let token = 'Bearer ' + ot
    //   // let token = 'Bearer ' + options.token
    //   uni.setStorageSync(this.$key.token, token)
    // }
  },
  mounted() {
    // 获取系统信息
    // uni.getSystemInfo({
    // 	success(res) {
    // 		console.log("当前系统：" + this.osName) // 系统信息
    // 	}
    // });

    this.getClineHeight()
  },
  methods: {
    setSelected(val) {
      this.selected = val
    },
    // 获取可视高度
    getClineHeight() {
      const res = uni.getSystemInfoSync()
      this.dynamicHeight = `${res.windowHeight}px`
    },
    // 获取页面响应数据
    getPage(val) {
      this.selected = val
    },

    // 请求测试
    postMessage() {
      var data = JSON.stringify({
        additionalProp1: '123',
      })

      var xhr = new XMLHttpRequest()
      xhr.withCredentials = true

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
          // console.log("到这里！！");
        }
      })

      xhr.open('POST', '/sw-api/api/Account/test')
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(JSON.stringify(xhr.response))
        } else {
          console.log('请求失败')
        }
      }

      xhr.onerror = () => {
        console.log('请求失败！！')
      }

      xhr.send(data)
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  position: relative;
  width: 100%;
  padding: 32rpx 0;
  height: calc(100vh - 128rpx - env(safe-area-inset-bottom));
}

// 顶栏切换 - 日、周、月、年
.date_back_view {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .date_view {
    width: 485rpx;
    height: 58rpx;

    background: #f1f1f1;
    border-radius: 19rpx 19rpx 19rpx 19rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    .date_item_view {
      width: 121.25rpx;
      height: 58rpx;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #4e5969;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .date_item_sel_view {
      width: 121.25rpx;
      height: 58rpx;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #3b76f2;
      text-align: center;
      font-style: normal;
      text-transform: none;

      background: #ffffff;
      box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
      border-radius: 19rpx 19rpx 19rpx 19rpx;
    }
  }
}
</style>
