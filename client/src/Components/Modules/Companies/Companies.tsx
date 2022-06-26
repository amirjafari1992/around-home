import * as React from 'react'

import { CompanyDto } from 'src/DTOs'
import { Company } from '../Company'

import styles from './Companies.module.scss'

type Props = {
    companies: CompanyDto[]
    onItemClick: (companyId: number, start: string, end: string) => void
}

export const Companies: React.FC<Props> = ({ companies, onItemClick }) => {
  return (
        <div className={styles.companies}>
            {companies?.map(company => (
                <Company onItemClick={onItemClick} key={company.id} company={company} />
            ))}
        </div>
  )
}
