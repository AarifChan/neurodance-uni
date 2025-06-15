import { http } from '@/utils/http'

import { IDSPSNBinding, IDSPDevice, IDSPDeviceDetailInfo } from './index.typings'

export const bindDeviceRequest = (params: IDSPSNBinding) => {
  return http.post('/device/dspSNBinding', params)
}

export const unbindDeviceRequest = (params: IDSPSNBinding) => {
  return http.post('/device/snUnBinding', params)
}

export const getBoundDeviceListRequest = (deviceType: string) => {
  return http.get<IDSPDevice[]>('/device/snBindingList', {
    deviceType,
  })
}

export const getDeviceDetail = (sn: string) => {
  return http.get<IDSPDeviceDetailInfo>(`/channel/DSPRealStatus/${sn}`)
}

export const getDeviceLastUploadRequest = (sn: string) => {
  return
}
