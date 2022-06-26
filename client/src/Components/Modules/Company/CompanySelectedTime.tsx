import * as React from 'react'

import { TimeSlot } from '../../UI/TimeSlot/TimeSlot'

import styles from './Company.module.scss'

type Props = {
  start: string;
  end: string;
};

export const CompanySelectedTime: React.FC<Props> = ({ start, end }) => {
  return (
    <TimeSlot className={styles.companySelectedTime} selected>
      {`${start} - ${end}`}
    </TimeSlot>
  )
}
