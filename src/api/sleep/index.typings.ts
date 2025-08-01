export interface SleepId {
  sleepId: number
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
  stagingData: string[]
  stagingAnalyze: SleepStagingAnalyze
  positionAnalyze: SleepPositionAnalyze
  breathingAnalyze: SleepBreathingAnalyze
}
