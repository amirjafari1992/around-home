import * as React from 'react'

import { Box } from 'src/Components/UI/Box'
import { CustomTimeSlotDto } from 'src/DTOs'
import { days } from 'src/Constants'
import { CompanyTimesDay } from './CompanyTimesDay'

import styles from '../Company.module.scss'

type Props = {
  timeSlots: CustomTimeSlotDto[]
  companyId: number
  onItemClick: (companyId: number, start: string, end: string) => void
};

export const CompanyTimes: React.FC<Props> = ({ timeSlots, companyId, onItemClick }) => {
  return (
    <Box className={styles.companyTimes}>
      {days.map((day) => (
        <CompanyTimesDay
          companyId={companyId}
          onItemClick={onItemClick}
          timeSlots={timeSlots}
          key={day}
          day={day}
        />
      ))}
    </Box>
  )
}
