import * as React from 'react'
import clsx from 'clsx'

import styles from './Box.module.scss'

type Props = {
  className?: string
}

export const Box: React.FC<Props> = ({ children, className }) => {
  return (
        <div className={clsx(styles.box, className)}>
            {children}
        </div>
  )
}
