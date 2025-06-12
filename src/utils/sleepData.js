/**
 * 睡眠数据
 */
function daySleepData(echarts, val) {
  var colors = ['#0723C3', '#374DF2', '#7967F3', '#CF94F8', '#FFAE23'] // N3深睡、N2浅睡、N1浅睡、快速眼动、觉醒
  var state = ['N3深睡', 'N2浅睡', 'N1浅睡', '快速眼动', '觉醒']

  var option = {
    animation: true, // 开启动画
    color: colors,
    tooltip: {
      //提示框
      trigger: 'item',
      triggerOn: 'click',
      formatter: function (params) {
        let stt = new Date(params.value[1])
        let ett = new Date(params.value[2])
        let startTime =
          (stt.getHours() > 9 ? stt.getHours() : '0' + stt.getHours()) +
          ':' +
          (stt.getMinutes() > 9 ? stt.getMinutes() : '0' + stt.getMinutes())
        let endTime =
          (ett.getHours() > 9 ? ett.getHours() : '0' + ett.getHours()) +
          ':' +
          (ett.getMinutes() > 9 ? ett.getMinutes() : '0' + ett.getMinutes())

        return startTime + '~' + endTime
      }, //数据的值
    },
    grid: {
      //绘图网格
      left: '2%',
      right: '2%',
      top: '2%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: {
      type: 'time',
      // interval: 3600 * 1000, //以一个小时递增
      axisLabel: {
        show: false, // 显示刻度标签
        interval: 'auto', // 自动间隔
      },
      axisTick: {
        show: false, // 显示刻度线
      },
      show: false,
    },
    yAxis: {
      data: ['N3深睡', 'N2浅睡', 'N1浅睡', '快速眼动', '觉醒'],
      axisLabel: {
        show: false, // 显示刻度标签
        interval: 'auto', // 自动间隔
      },
      axisTick: {
        show: false, // 显示刻度线
      },
      show: false,
      axisLine: {
        show: true,
        lineStyle: {
          //lineStyle里面写y轴那一条线的样式
          color: '#6FC6F3',
          width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
        },
      },
    },
    series: [
      // 用空bar来显示三个图例
      {
        name: state[0],
        type: 'bar',
        data: [],
      },
      {
        name: state[1],
        type: 'bar',
        data: [],
      },
      {
        name: state[2],
        type: 'bar',
        data: [],
      },
      {
        name: state[3],
        type: 'bar',
        data: [],
      },
      {
        name: state[4],
        type: 'bar',
        data: [],
      },
      {
        type: 'custom',
        renderItem: function (params, api) {
          //开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
          var categoryIndex = api.value(0) //这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
          var start = api.coord([api.value(1), categoryIndex]) // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
          var end = api.coord([api.value(2), categoryIndex])
          var height = api.size([0, 1])[1]

          return {
            type: 'rect', // 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
            shape: echarts.graphic.clipRectByRect(
              {
                // 矩形的位置和大小。
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height,
              },
              {
                // 当前坐标系的包围盒。
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height,
              },
            ),
            style: api.style(),
          }
        },
        encode: {
          x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
          y: 0, // data 中『维度0』对应到 Y 轴
        },
        data: val,
      },
    ],
  }

  return option
}

function getList(val) {
  var list = []
  for (const item of val) {
    const data = {
      itemStyle: {
        normal: {
          color: getColor(item.stage),
        },
      },
      name: setName(item.stage),
      value: setTime(item.stage, item.startTime, item.endTime),
    }
    list.push(data)
  }
  return list
}

function setName(stage) {
  var name = '暂无'
  switch (stage) {
    case 'N3': // N3深睡
      name = 'N3深睡'
      break

    case 'N2': // N2浅睡
      name = 'N2深睡'
      break

    case 'N1': // N1浅睡
      name = 'N1深睡'
      break

    case 'R': // 快速眼动
      name = '快速眼动'
      break

    case 'W': // 觉醒
      name = '觉醒'
      break

    case '?':
      name = '暂无'
      break
  }
  return name
}

function setTime(stage, startTime, endTime) {
  var num = 0
  switch (stage) {
    case 'N3': // N3深睡
      num = 0
      break

    case 'N2': // N2浅睡
      num = 1
      break

    case 'N1': // N1浅睡
      num = 2
      break

    case 'R': // 快速眼动
      num = 3
      break

    case 'W': // 觉醒
      num = 4
      break

    case '?':
      num = 5
      break
  }

  return [num, startTime, endTime]
}

function getColor(stage) {
  var color = undefined
  switch (stage) {
    case 'N3': // N3深睡
      color = '#0723C3'
      break

    case 'N2': // N2浅睡
      color = '#374DF2'
      break

    case 'N1': // N1浅睡
      color = '#7967F3'
      break

    case 'R': // 快速眼动
      color = '#CF94F8'
      break

    case 'W': // 觉醒
      color = '#FFAE23'
      break

    case '?':
      color = '#00B4F0'
      break
  }
  return color
}

/**
 * 时长转换
 */
function getLongTime(startTime, endTime, timezone) {
  // 将日期转换为指定时区的ISO字符串，然后再创建Date对象
  const d1 = new Date(
    new Date(startTime).toLocaleString('en-US', {
      timeZone: timezone,
    }),
  )
  const d2 = new Date(
    new Date(endTime).toLocaleString('en-US', {
      timeZone: timezone,
    }),
  )

  return Math.abs(d1 - d2)
}

/**
 * 毫秒转时分
 */
function msToHMS(ms) {
  const sec = Math.floor(ms / 1000)
  const hours = Math.floor(sec / 3600)
  const minutes = Math.floor((sec - hours * 3600) / 60)
  const seconds = sec - hours * 3600 - minutes * 60

  // 只显示有值的部分
  const parts = {}
  parts.hours = hours
  parts.minutes = minutes
  parts.seconds = seconds

  return parts
}

function getSleepTime(val) {
  var list = []
  for (const item of val) {
    let longTimeMs = getLongTime(item.startTime, item.endTime, 'Asia/Shanghai')
    let longTime = msToHMS(longTimeMs)

    const date1 = new Date(item.startTime)
    let startTime = date1.getHours() + ':' + date1.getMinutes()
    let startDate = date1.getMonth() + 1 + '-' + date1.getDate()
    const date2 = new Date(item.endTime)
    let endTime = date2.getHours() + ':' + date2.getMinutes()
    let endDate = date2.getMonth() + 1 + '-' + date2.getDate()

    const data = {
      id: item.id,
      hour: longTime.hours,
      minute: longTime.minutes,
      state: '正常',
      isExtend: 0, // 0: 无变化、1: 增加、2: 减少
      name: item.type == 0 ? '夜间睡眠' : '小睡',
      startTime: startTime,
      endTime: endTime,
      startDate: startDate,
      endDate: endDate,
    }

    list.push(data)
  }

  return list
}

module.exports = {
  daySleepData,
  getColor,
  setTime,
  setName,
  getList,
  getLongTime,
  msToHMS,
  getSleepTime,
}
