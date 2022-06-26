import * as React from 'react'

import { Companies } from './Components/Modules/Companies'
import { CompanyDto } from './DTOs'
import { services } from './Services'
import { generateData, selectedItem } from './Helpers/index'
import { TimeSlotDto } from 'src/DTOs'

import styles from './App.module.scss'

const App: React.FC = () => {
  const [data, setData] = React.useState<CompanyDto[]>([])
  const [activeItems, setActiveItems] = React.useState<TimeSlotDto[]>([])

  React.useEffect(() => {
    services.getTimes().then(data => setData(generateData(data)))
  }, [])

  const handleActiveItems = (items: any, companyId: number) => {
    const companyItem = activeItems.filter(item => item.companyId !== companyId)
    setActiveItems([...companyItem, items])
  }

  const handleSelectedItem = (companyId: number, start: string, end: string) => {
    handleActiveItems({ start_time: start, end_time: end, companyId }, companyId)
    setData(selectedItem(companyId, data, start, end, activeItems))
  }

  return (
    <div className={styles.App}>
      <Companies onItemClick={handleSelectedItem} companies={data} />
    </div>
  )
}

export default App
