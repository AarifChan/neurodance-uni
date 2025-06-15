import { http } from '@/utils/http'

import { IDSPSNBinding, IDSPDevice } from './index.typings'

export const bindDeviceRequest = (params: IDSPSNBinding) => {
  return http.post('/Device/dspSNBinding', params)
}

export const getBoundDeviceListRequest = (deviceType: string) => {
  return http.get<IDSPDevice[]>('/device/snBindingList', {
    deviceType,
  })
}

export const getDeviceDetail = (deviceType: string, sn: string) => {
  return http.get(`/${deviceType}/${sn}`)
}

export const getDeviceLastUploadRequest = (sn: string) => {
  return
}
