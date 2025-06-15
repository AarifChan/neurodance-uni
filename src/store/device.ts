import {
  getBoundDeviceListRequest,
  bindDeviceRequest,
  unbindDeviceRequest,
  getDeviceDetail,
} from '@/api/device'
import { IDSPDevice, IDSPSNBinding, IDSPDeviceDetailInfo } from '@/api/device/index.typings'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { showToast, toast } from '@/utils/toast'

export const useDeviceStore = defineStore(
  'device',
  () => {
    // 用户绑定设备列表
    const deviceList = ref<IDSPDevice[]>([])

    const deviceStatus = ref(false)

    const deviceDetail = ref<IDSPDeviceDetailInfo | null>(null)

    /**
     * 获取已绑定设备列表
     */
    const getBindDeviceList = () => {
      getBoundDeviceListRequest('WIRELESS-REPEATER-DSP').then((res) => {
        console.log('deviceList:', res)
        deviceList.value = res.data
      })
    }

    const getDeviceCurrentStatus = (sn: string) => {
      getDeviceDetail(sn).then((res) => {
        if (res.state === 200) {
          deviceDetail.value = res.data
          deviceStatus.value = true
        } else {
          deviceDetail.value = null
          deviceStatus.value = false
        }
        console.log('getDeviceCurrentStatus:', res)
      })
    }

    /**
     * 通过SN绑定设备
     * @param params sn 设备SN deviceType 设备类型
     * @returns
     */
    const startBindDevice = async (params: IDSPSNBinding) => {
      return new Promise((resolve) => {
        bindDeviceRequest(params)
          .then((res) => {
            if (res.state === 200) {
              toast.info('绑定成功')
              resolve(true)
              getBindDeviceList()
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

    const unbindDevice = async (params: IDSPSNBinding) => {
      return new Promise((resolve) => {
        unbindDeviceRequest(params)
          .then((res) => {
            if (res.state === 200) {
              toast.info('解绑成功')
              resolve(true)
              getBindDeviceList()
            } else {
              toast.info(res.message)
              resolve(false)
            }
          })
          .catch((err) => {
            resolve(false)
          })
      })
    }

    const logout = () => {
      deviceList.value = []
    }

    return {
      deviceDetail,
      unbindDevice,
      deviceStatus,
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
