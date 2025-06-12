import { http } from '@/utils/http'

import { IDSPSNBinding } from './index.typings'

const bindDeviceRequest = (params: IDSPSNBinding) => {
  return http.post('/Api/Device/DSPSNBinding', params)
}
