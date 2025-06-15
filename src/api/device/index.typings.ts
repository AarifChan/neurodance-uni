/**
 * 设备绑定信息的信息
 */
export interface IDSPSNBinding {
  sn: string
  deviceType: string
}

export interface IDSPDevice {
  deviceType: string
  sn: string
  status: number
}

export interface IDSPDeviceDeviceInfo {
  battery: number
  firmware: string
  lastDeviceMeetTime: string
  model: string
  status: number
  sn: string
}

export interface IDSPDeviceHostInfo {
  battery: number
  firmware: string
  model: string
  sn: string
}
export interface IDSPDeviceDetailInfo {
  address: string
  connectedTime: string
  deviceInfo: IDSPDeviceDeviceInfo
  hostBaseInfo: IDSPDeviceHostInfo
  lastMeetTime: string
  lastSyncTime: string
  sn: string
}
