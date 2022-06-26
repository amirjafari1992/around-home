import { days } from 'src/Constants'
import { CompanyDto, TimeSlotDto } from 'src/DTOs'

export const getDay = (isoTime: string): string => {
  const date = new Date(isoTime)
  const dayNum = date.getUTCDay()
  return days[dayNum - 1]
}

export const getTime = (isoTime: string): string => {
  const date = new Date(isoTime)
  const time = date.toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'Europe/Berlin'
  })
  return time
}

export const generateData = (data: CompanyDto[]) => {
  for (const company of data) {
    for (const time of company.time_slots) {
      const startTime = getTime(time.start_time)
      const endTime = getTime(time.end_time)

      time.day = getDay(time.start_time)
      time.start = startTime
      time.end = endTime
    }
  }
  return data
}

export const selectedItem = (
  companyId: number,
  data: CompanyDto[],
  start: string,
  end: string,
  activeItems: TimeSlotDto[]
) => {
  for (const company of data) {
    for (const time of company.time_slots) {
      const startTime = time.start_time
      const endTime = time.end_time
      const isTheSlot = start === startTime && end === endTime
      const isTheCompany = company.id === companyId
      const beginTimeHasIssue = (start >= startTime && start < endTime)
      const endTimeHasIssue = (end > startTime && end <= endTime)
      const isTheSameTimeRange = beginTimeHasIssue || endTimeHasIssue

      if (isTheSameTimeRange) {
        time.disable = true
      } else {
        time.disable = false
      }

      if (isTheCompany) {
        time.active = false
        time.disable = false
      }
      if (isTheSlot && isTheCompany) {
        time.active = true
      }
      if (activeItems.length) {
        for (const activeItem of activeItems) {
          const beginTimeHasIssue = (startTime >= activeItem.start_time && startTime < activeItem.end_time)
          const endTimeHasIssue = (endTime > activeItem.start_time && endTime <= activeItem.end_time)
          const isTheSameTimeRange = beginTimeHasIssue || endTimeHasIssue
          if (isTheSameTimeRange) {
            time.disable = true
          }
        }
      }
    }
  }
  return data
}
