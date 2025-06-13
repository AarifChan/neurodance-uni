import { http } from '@/utils/http'

import { IDSPSNBinding } from './index.typings'

export const bindDeviceRequest = (params: IDSPSNBinding) => {
  return http.post('/Api/Device/DSPSNBinding', params)
}

export const getBoundDeviceListRequest = (deviceType: string) => {
  return http.get('/Api/Device/SNBindingList', {
    deviceType,
  })
}

export const getDeviceLastUploadRequest = (sn: string) => {
  return
}
