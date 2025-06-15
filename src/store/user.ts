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
import { useDeviceStore } from './device'

// 初始化状态
const userInfoState: IUserInfoVo = {
  id: 0,
  name: '游客',
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
      setToken(null)
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
      return new Promise(async (resolve, reject) => {
        _login(credentials)
          .then((res) => {
            if (res.state === 200) {
              toast.success('登录成功')
              resolve(true)
            } else {
              reject(res.message)
            }
            setToken(res.data.accessToken)
            getUserInfo()
            return res
          })
          .catch((err) => {
            reject(err.message)
          })
      })
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
      useDeviceStore().logout()
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
