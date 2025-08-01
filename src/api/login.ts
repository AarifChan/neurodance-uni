import { ICaptcha, IUpdateInfo, IUpdatePassword, IUserInfoVo, IUserLogin } from './login.typings'
import { http } from '@/utils/http'

/**
 * 登录表单
 */
export interface ILoginForm {
  userName: string
  operationId: string
  verificationCode: string
}

/**
 * 获取验证码
 * @returns ICaptcha 验证码
 */
export const getCode = (mobile: string) => {
  return http.post<ICaptcha>('/account/sendSMSCodeToMobile', { UserName: mobile })
}

/**
 * 用户登录
 * @param loginForm 登录表单
 */
export const login = (loginForm: ILoginForm) => {
  return http.post<IUserLogin>('/account/loginRegisterSMSConfirm', loginForm)
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return http.get<IUserInfoVo>('/account/detail')
}

/**
 * 退出登录
 */
export const logout = () => {
  return http.get<void>('/user/logout')
}

/**
 * 修改用户信息
 */
export const updateInfo = (data: IUpdateInfo) => {
  return http.post('/account/edit', data)
}

/**
 * 修改用户密码
 */
export const updateUserPassword = (data: IUpdatePassword) => {
  return http.post('/user/updatePassword', data)
}

/**
 * 获取微信登录凭证
 * @returns Promise 包含微信登录凭证(code)
 */
export const getWxCode = () => {
  return new Promise<UniApp.LoginRes>((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (res) => resolve(res),
      fail: (err) => reject(new Error(err)),
    })
  })
}

/**
 * 微信登录参数
 */

/**
 * 微信登录
 * @param params 微信登录参数，包含code
 * @returns Promise 包含登录结果
 */
export const wxLogin = (data: { code: string }) => {
  return http.post<IUserLogin>('/user/wxLogin', data)
}
