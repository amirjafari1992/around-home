import * as React from 'react'

import styles from './TimeSlot.module.scss'
import clsx from 'clsx'

type Props = {
  selected?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
};

export const TimeSlot: React.FC<Props> = ({ selected, disabled, children, className, onClick }) => {
  return (
    <div
      onClick={onClick || undefined}
      className={clsx(styles.timeSlot, { [styles.selected]: selected, [styles.disabled]: disabled }, className)}
    >
      {children}
    </div>
  )
}
