import * as React from 'react'

import { CompanyDto } from 'src/DTOs'
import { CompanyName } from './CompanyName'
import { CompanySelectedTime } from './CompanySelectedTime'
import { CompanyTimes } from './CompanyTimes'

import styles from './Company.module.scss'

type Props = {
  company: CompanyDto
  onItemClick: (companyId: number, start: string, end: string) => void
};

export const Company: React.FC<Props> = ({ company, onItemClick }) => {
  const selectedItem = company.time_slots.filter(item => item.active)[0]

  return (
    <div className={styles.company}>
      <CompanyName name={company.name} />
      <div className={styles.companySelectedTimeBox}>
        {selectedItem && (
          <CompanySelectedTime
            start={selectedItem.start}
            end={selectedItem.end}
          />
        )}
      </div>
      <CompanyTimes
        onItemClick={onItemClick}
        timeSlots={company.time_slots}
        companyId={company.id}
      />
    </div>
  )
}
