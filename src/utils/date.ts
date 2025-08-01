/**
 * 时间工具类
 * 格式化时间戳为指定格式字符串
 */

export function formatTimestamp(
  timestamp: number | string,
  format: string = 'YYYY-MM-DD HH:mm:ss',
): string {
  const date = new Date(Number(timestamp))
  const pad = (n: number) => n.toString().padStart(2, '0')

  const map: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (key) => map[key])
}

/**
 * 获取当前时间加/减指定天数后的时间戳
 * @param days 正数为加天数，负数为减天数
 * @param baseTimestamp 基础时间戳，默认当前时间
 */
export function addDays(days: number, baseTimestamp: number = Date.now()): number {
  const date = new Date(baseTimestamp)
  date.setDate(date.getDate() + days)
  return date.getTime()
}

/**
 * 判断传入的时间戳是否为今天
 * @param timestamp 毫秒级时间戳或Date对象
 * @returns boolean
 */
export function isToday(timestamp: number | Date): boolean {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp
  const now = new Date()
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  )
}
