<!-- 当前睡姿 -->
<template>
  <view class="content_view">
    <view class="state_bg_view">
      <view
        :class="
          state == '已佩戴' ? 'state_view' : state == '设备已连接' ? 'state_view' : 'state_view2'
        "
      ></view>
      <view class="state_t2_view">{{ state }}</view>

      <view class="state_p_view">
        <image
          :class="position == '坐立' ? 'state_p_image2' : 'state_p_image'"
          :src="position_icon"
        ></image>
        <view class="state_t_view">{{ position }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      timeUpdateInterval: null,
      state: '设备不在线',
      position: '暂无',
      xhr: undefined,
      position_icon: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_1_icon.png',
      time: 1000,
    }
  },
  onLoad(option) {},
  onUnload() {
    clearInterval(this.timeUpdateInterval)
  },
  mounted() {
    this.isDeviceInfo(1000)
  },
  methods: {
    // 是否获取设备
    isDeviceInfo(date) {
      const _this = this
      this.timeUpdateInterval = setInterval(() => {
        let val = uni.getStorageSync(this.$key.device)
        if (val != null && val.data != null) {
          if (val.data.length > 0 && val.data[0].sn != null) {
            this.tcpPosition(val.data[0].sn)
            clearInterval(this.timeUpdateInterval)
            this.timeUpdateInterval = null
          } else {
            _this.state = '无绑定设备'
          }
        }
      }, date)
    },

    // Tcp链接获取身位
    tcpPosition(val) {
      const _this = this

      var receivedLength = 0
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = true

      xhr.open('GET', '/sw-api' + this.$http.GET_BODY_LEAD_STATUS_STREAM + val)
      // xhr.open("GET", this.$http.GET_BODY_LEAD_STATUS_STREAM + val);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onprogress = function (event) {
        var newData = xhr.responseText.substr(receivedLength)
        receivedLength = xhr.responseText.length

        if (newData) {
          try {
            var json = JSON.parse(newData)
            if (json.Body) {
              let num = json.Body[0]
              switch (num) {
                case -1:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_3_icon.png'
                  _this.position = '暂无'
                  break

                case 0:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_0_icon.png'
                  _this.position = '坐立'
                  break

                case 1:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_1_icon.png'
                  _this.position = '俯卧'
                  break

                case 2:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_2_icon.png'
                  _this.position = '左侧卧'
                  break

                case 3:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_3_icon.png'
                  _this.position = '仰卧'
                  break

                case 4:
                  _this.position_icon =
                    'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/position_4_icon.png'
                  _this.position = '右侧卧'
                  break
              }
            }

            if (json.LeadOffStatus) {
              let num = json.LeadOffStatus[0]
              switch (num) {
                case -1:
                  _this.state = '设备不在线'
                  break

                case 0:
                  _this.state = '设备已连接'
                  break

                case 3:
                  _this.state = '已佩戴'
                  break
              }
            }
          } catch (e) {}
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 3) {
          // 连接中ing...
        }

        if (xhr.readyState === 4) {
          // 结束请求
          _this.isDeviceInfo(8000)
          _this.position = '暂无'
          _this.state = '设备不在线'
          console.log('结束请求')
        }
      }

      xhr.onload = () => {
        if (xhr.status === 200) {
          // console.log(JSON.stringify(this.xhr.response));
        } else {
          // 请求失败
          // console.log("请求失败")
        }
      }

      xhr.onerror = () => {
        // 请求失败！！
        // console.log("请求失败!!")
      }
      xhr.send()
    },

    // 中断链接
    tcpStop() {
      if (this.xhr != undefined) {
        this.xhr.abort()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: auto;
  height: auto;
}

.state_bg_view {
  display: flex;
  align-items: center;
  justify-content: center;
}

.state_t2_view {
  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 31rpx;
  color: #ffffff;
  text-align: center;

  margin-left: 12rpx;
  margin-right: 40rpx;
}

.state_view {
  width: 30rpx;
  height: 30rpx;

  background: #57dc6f;
  border-radius: 50%;
}

.state_view2 {
  width: 30rpx;
  height: 30rpx;

  background: #f7682c;
  border-radius: 50%;
}

.state_p_view {
  padding-left: 20rpx;
  padding-right: 20rpx;
  width: auto;
  height: 44rpx;
  background: #3b76f2;
  border-radius: 6rpx 6rpx 6rpx 6rpx;

  display: flex;
  align-items: center;
  justify-content: center;
}

.state_p_image {
  width: 74rpx;
  height: 17rpx;
}

.state_p_image2 {
  width: 34rpx;
  height: 34rpx;
}

.state_t_view {
  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 25rpx;
  color: #ffffff;

  margin-left: 11rpx;
  margin-bottom: 4rpx;
}
</style>
