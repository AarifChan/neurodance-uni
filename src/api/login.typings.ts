/**
 * 用户信息
 */
export type IUserInfoVo = {
  area?: string
  areaId?: number
  birthday?: IBirthday
  email?: string
  id: number
  isReadAgreement?: boolean
  name: string
  phone?: string
  pic: string
  sex?: number
}

/**
 * 登录返回的信息
 */
export type IUserLogin = {
  accessToken: string
  refreshToken: string
}

/**
 * 获取验证码
 */
export type ICaptcha = string
/**
 * 上传成功的信息
 */
export type IUploadSuccessInfo = {
  fileId: number
  originalName: string
  fileName: string
  storagePath: string
  fileHash: string
  fileType: string
  fileBusinessType: string
  fileSize: number
}
/**
 * 更新用户信息
 */
export type IUpdateInfo = {
  name: string
  sex: number
  pic: string
  area: string
  birthday?: IBirthday
}

export type IBirthday = {
  year: number
  month: number
  day: number
  dayOfWeek: number
}
/**
 * 更新用户信息
 */
export type IUpdatePassword = {
  id: number
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
