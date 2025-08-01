import { http } from '@/utils/http'
import { MeditationId, MeditationReport } from './index.typings'
export * from './index.typings'

export const getMeditationSummary = (timestamp: number) => {
  return http.get<MeditationId[]>(`/sleep/dayMeditationSummary`, {
    day: timestamp,
  })
}

export const getMeditationDetail = (params: MeditationId) => {
  return http.get<MeditationReport>(`/sleep/meditationReport`, params)
}
