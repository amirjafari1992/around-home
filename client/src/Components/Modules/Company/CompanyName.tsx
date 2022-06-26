import * as React from 'react'

import { Box } from 'src/Components/UI/Box'

import styles from './Company.module.scss'

type Props = {
    name: string
}

export const CompanyName: React.FC<Props> = ({ name }) => {
  return (
        <Box className={styles.companyName}>
            <img src={require('./assets/company.png')} alt="" />
            <span>{name}</span>
        </Box>
  )
}
