import * as React from 'react'

import { CustomTimeSlotDto } from 'src/DTOs'
import { CompanyTimesDaySlots } from './CompanyTimesDaySlots'

import styles from '../Company.module.scss'

type Props = {
  day: string;
  timeSlots: CustomTimeSlotDto[]
  companyId: number
  onItemClick: (companyId: number, start: string, end: string) => void
};

export const CompanyTimesDay: React.FC<Props> = ({ day, timeSlots, companyId, onItemClick }) => {
  const items = timeSlots.filter(item => item.day === day)
  if (items.length > 0) {
    return (
      <>
        <div className={styles.companyTimesDayName}>{day}</div>
        <CompanyTimesDaySlots companyId={companyId} onItemClick={onItemClick} items={items} />
      </>
    )
  }
  return null
}
