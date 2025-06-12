import {
  login as _login,
  getUserInfo as _getUserInfo,
  wxLogin as _wxLogin,
  logout as _logout,
  getWxCode,
} from '@/api/login'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from '@/utils/toast'
import { IUserInfoVo } from '@/api/login.typings'

// 初始化状态
const userInfoState: IUserInfoVo = {
  id: 0,
  name: '未登录',
  pic: '',
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义用户信息
    const userInfo = ref<IUserInfoVo>({ ...userInfoState })

    const accessToken = ref<string | undefined>(uni.getStorageSync('token'))

    const setToken = (token: string) => {
      accessToken.value = token
      uni.setStorageSync('token', token)
    }

    // 设置用户信息
    const setUserInfo = (val: IUserInfoVo) => {
      console.log('设置用户信息', val)
      userInfo.value = val
    }
    // 删除用户信息
    const removeUserInfo = () => {
      userInfo.value = { ...userInfoState }
      uni.removeStorageSync('userInfo')
      uni.removeStorageSync('token')
    }
    /**
     * 用户登录
     * @param credentials 登录参数
     * @returns R<IUserLogin>
     */
    const login = async (credentials: {
      userName: string
      operationId: string
      verificationCode: string
    }) => {
      const res = await _login(credentials)
      console.log('登录信息', res)
      toast.success('登录成功')
      console.log('login res:', res.data.accessToken)
      setToken(res.data.accessToken)
      // getUserInfo()
      return res
    }
    /**
     * 获取用户信息
     */
    const getUserInfo = async () => {
      const res = await _getUserInfo()
      const userInfo = res.data
      setUserInfo(userInfo)
      uni.setStorageSync('userInfo', userInfo)

      // TODO 这里可以增加获取用户路由的方法 根据用户的角色动态生成路由
      return res
    }
    /**
     * 退出登录 并 删除用户信息
     */
    const logout = async () => {
      removeUserInfo()
      uni.reLaunch({
        url: '/pages/index/index',
      })
    }
    /**
     * 微信登录
     */
    const wxLogin = async () => {
      // 获取微信小程序登录的code
      const data = await getWxCode()
      console.log('微信登录code', data)

      const res = await _wxLogin(data)
      getUserInfo()
      return res
    }

    return {
      accessToken,
      userInfo,
      login,
      wxLogin,
      getUserInfo,
      logout,
    }
  },
  {
    persist: true,
  },
)
