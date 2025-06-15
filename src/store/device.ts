import { getBoundDeviceListRequest, bindDeviceRequest, getDeviceDetail } from '@/api/device'
import { IDSPDevice } from '@/api/device/index.typings'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from '@/utils/toast'

export const useDeviceStore = defineStore(
  'device',
  () => {
    // 用户绑定设备列表
    const deviceList = ref<IDSPDevice[]>([])

    /**
     * 获取已绑定设备列表
     */
    const getBindDeviceList = () => {
      getBoundDeviceListRequest('WIRELESS-REPEATER-DSP').then((res) => {
        console.log('deviceList:', res)
        deviceList.value = res.data
      })
    }

    const getDeviceCurrentStatus = (deviceType: string, sn: string) => {
      getDeviceDetail(deviceType, sn).then((res) => {
        console.log('getDeviceCurrentStatus:', res)
      })
    }

    /**
     * 通过SN绑定设备
     * @param params sn 设备SN deviceType 设备类型
     * @returns
     */
    const startBindDevice = async (params: { sn: string; deviceType: string }) => {
      return new Promise((resolve) => {
        bindDeviceRequest(params)
          .then((res) => {
            if (res.code === 200) {
              toast.info('绑定成功')
              resolve(true)
            } else {
              toast.info(res.message)
              resolve(false)
            }
          })
          .catch((err) => {
            toast.error(err.message)
            resolve(false)
          })
      })
    }

    const logout = () => {
      deviceList.value = []
    }

    return {
      getDeviceCurrentStatus,
      startBindDevice,
      deviceList,
      getBindDeviceList,
      logout,
    }
  },
  {
    persist: true,
  },
)
