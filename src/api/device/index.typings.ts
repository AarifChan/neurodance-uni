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
