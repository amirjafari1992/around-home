import * as React from 'react'

import { TimeSlot } from 'src/Components/UI/TimeSlot'
import { CustomTimeSlotDto } from 'src/DTOs'

import styles from '../Company.module.scss'

type Props = {
    items: CustomTimeSlotDto[]
    companyId: number
    onItemClick: (companyId: number, start: string, end: string) => void
}

export const CompanyTimesDaySlots: React.FC<Props> = ({ items, companyId, onItemClick }) => {
  return (
        <div>
          {items.map(item => (
            <TimeSlot
              onClick={() => onItemClick(companyId, item.start_time, item.end_time)}
              className={styles.companySlot}
              key={item.start_time}
              disabled={item.disable || false}
              selected={item.active || false}
            >
              {`${item.start} - ${item.end}`}
            </TimeSlot>
          ))}
        </div>
  )
}
