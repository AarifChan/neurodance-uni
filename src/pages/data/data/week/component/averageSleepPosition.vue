<!-- 平均睡眠姿势研究 -->
<template>
  <view class="content_view">
    <view class="sleep_position_view">
      <view class="sleep_tip_view">
        <text>平均睡眠姿势研究</text>
      </view>

      <view v-for="(item, index) in list" :key="index">
        <view class="position_item_view">
          <view v-for="(item2, index2) in item" :key="index2">
            <text v-if="item2.average" class="item_3_view">
              <view class="bg_view"></view>
              <text class="tip_view">日均翻身次数</text>
              <text class="num_view">{{ item2.num }}次</text>
            </text>

            <view
              v-if="!item2.average"
              :class="
                item2.long
                  ? 'item_2_view'
                  : item2.type == 4 || item2.average
                    ? 'item_1_view'
                    : 'item_view'
              "
            >
              <image
                :class="item2.type == 4 ? 'image2' : 'image1'"
                :src="getSleepImage(item2.type, item2.long)"
              ></image>

              <view class="list_text_viwe">
                <text>{{ item2.timeStr }}</text>
                <text class="scale_view">{{ item2.scale }}%</text>
              </view>
            </view>
          </view>
        </view>
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
      flipsList: [
        {
          timeStr: '1小时50分钟',
          scale: 35,
          type: 0,
          long: true,
          url: '/static/icon_yangwo_highlight_long.png',
        },
        {
          timeStr: '1小时20分钟',
          scale: 25,
          type: 1,
          long: false,
          url: '/static/ico_fuwo_nor.png',
        },
        {
          timeStr: '1小时20分钟',
          scale: 21,
          type: 2,
          long: false,
          url: '/static/ico_youcewo_nor.png',
        },
        {
          timeStr: '1小时10分钟',
          scale: 19,
          type: 3,
          long: false,
          url: '/static/ico_zuocewo_nor.png',
        },
        {
          timeStr: '0分钟',
          scale: 0,
          type: 4,
          long: false,
          url: '/static/ico_zhan_zuozi_nor.png',
        },
        {
          average: true,
          num: 5,
        },
      ],
      list: [],
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.list = this.$public.chunkArray(this.flipsList, 2)
    },
    getSleepImage(val, long) {
      switch (val) {
        case 0:
          if (long) {
            return '/static/icon_yangwo_highlight_long.png'
          } else {
            return '/static/icon_yangwo_highlight.png'
          }
          break

        case 1:
          if (long) {
            return '/static/ico_fuwo_highlight_long.png'
          } else {
            return '/static/ico_fuwo_nor.png'
          }
          break

        case 2:
          if (long) {
            return '/static/ico_youcewo_highligh_long.png'
          } else {
            return '/static/ico_youcewo_nor.png'
          }
          break

        case 3:
          if (long) {
            return '/static/ico_zuocewo_highlight_long.png'
          } else {
            return '/static/ico_zuocewo_nor.png'
          }
          break

        case 4:
          if (long) {
            return '/static/ico_zhan_zuozi_highlight_long.png'
          } else {
            return '/static/ico_zhan_zuozi_nor.png'
          }
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 37rpx;
}

.sleep_position_view {
  width: 689rpx;
  height: 366rpx;

  background: linear-gradient(98deg, #ffffff 0%, #e2ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  .sleep_tip_view {
    margin-top: 30rpx;
    margin-left: 30rpx;
    margin-bottom: 19rpx;

    text {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #1d2129;
      line-height: 36rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .position_item_view {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item_view {
    width: 266rpx;
    height: 65rpx;

    background: #ffffff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.15);
    border-radius: 8rpx 8rpx 8rpx 8rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 19rpx;
    margin: 8rpx 10rpx;

    .image1 {
      width: 69rpx;
      height: 45rpx;
    }

    .image2 {
      width: 69rpx;
      height: 68rpx;
    }

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .list_text_viwe {
      margin-bottom: 10rpx;
    }

    .scale_view {
      margin-left: 8rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #3b76f2;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .item_1_view {
    width: 266rpx;
    height: 86rpx;

    background: #ffffff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.15);
    border-radius: 8rpx 8rpx 8rpx 8rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 19rpx;
    margin: 8rpx 10rpx;

    .image1 {
      width: 69rpx;
      height: 45rpx;
    }

    .image2 {
      width: 69rpx;
      height: 68rpx;
    }

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .list_text_viwe {
      margin-bottom: 10rpx;
    }

    .scale_view {
      margin-left: 8rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #3b76f2;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .item_2_view {
    width: 266rpx;
    height: 65rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #c4d6fb;
    border-radius: 8rpx 8rpx 8rpx 8rpx;

    padding: 0 19rpx;
    margin: 8rpx 10rpx;

    .image1 {
      width: 69rpx;
      height: 45rpx;
    }

    .image2 {
      width: 69rpx;
      height: 68rpx;
    }

    .list_text_viwe {
      margin-bottom: 10rpx;
    }

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .scale_view {
      margin-left: 8rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #3b76f2;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .item_3_view {
    width: 266rpx;
    height: 86rpx;

    background: #ffffff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.15);
    border-radius: 8rpx 8rpx 8rpx 8rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 19rpx;
    margin: 8rpx 10rpx;

    position: relative;

    .bg_view {
      width: 103rpx;
      height: 68rpx;

      position: absolute;
      top: 12rpx;
      right: 13rpx;
      z-index: 0;

      background: url('~@/static/img_shuimianqianfuqi.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    .num_view {
      position: absolute;
      top: 26rpx;
      right: 19rpx;
      z-index: 1;

      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 27rpx;
      color: #3b76f2;
      line-height: 31rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .tip_view {
      position: absolute;
      top: 26rpx;
      left: 19rpx;
      z-index: 1;

      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 27rpx;
      color: #4e5969;
      line-height: 31rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
