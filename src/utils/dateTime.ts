import dayjs from "dayjs"

export const getDateTimeDiff = (value: number | string) => {
  const now = dayjs()
  const target = dayjs(value)

  const hourDiff = now.hour() - target.hour()
  const dayDiff = now.day() - target.day();
  
  return hourDiff > 0 ? `${hourDiff}시간 전` : `${dayDiff}일 전`;
}