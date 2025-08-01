export interface MeditationId {
  meditationId: number
}

export interface MeditationReport {
  meditationId: number
  meditationStart: number
  meditationEnd: number
  durationMin: number
  avgRelaxIndex: number
  meditationTimes: number
  meditationDays: number
  meditationDayDurationTotalMin: number
  meditationScore: number
  meditationData: number[]
}
