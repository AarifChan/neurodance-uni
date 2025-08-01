import { http } from '@/utils/http'
import { SleepId, SleepData } from './index.typings'
export * from './index.typings'

export const getSleepSummary = (timestamp: number) => {
  return http.get<SleepId[]>(`/sleep/daySleepSummary`, {
    day: timestamp,
  })
}

export const getSleepDetail = (sleepId: number) => {
  return http.get<SleepData>(`/sleep/sleepReport`, {
    sleepId,
  })
}
