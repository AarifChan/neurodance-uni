export interface SleepId {
  sleepId: number
  sleepType: number //0 小睡 1 夜间睡眠
}
export interface SleepStagingAnalyze {
  deepSleepPercentage: number
  deepSleepMin: number
  lightSleepPercentage: number
  lightSleepMin: number
  remSleepPercentage: number
  remSleepMin: number
  wakePercentage: number
  wakeCount: number
  wakeMin: number
  sleepLatencyMin: number
}

export interface SleepPositionAnalyze {
  sleepTurns: number
  supinePercentage: number
  supineMin: number
  pronePercentage: number
  proneMin: number
  rightPercentage: number
  rightMin: number
  leftPercentage: number
  leftMin: number
  uprightPercentage: number
  uprightMin: number
}

export interface SleepBreathingAnalyze {
  snoreCount: number
}

export interface SleepData {
  sleepId: number
  sleepStart: number
  deepSleepStart: number
  sleepEnd: number
  wakeUp: number
  wakeupTimeStart: number
  wakeupTimeEnd: number
  turnOffLight: number
  durationMin: number
  avgRelaxIndex: number
  bodyPositionInfo: string
  sleepScore: number
  stagingData: number[]
  stagingAnalyze: SleepStagingAnalyze
  positionAnalyze: SleepPositionAnalyze
  breathingAnalyze: SleepBreathingAnalyze
}
