import { CompanyDto } from 'src/DTOs'

export const services = {
  getTimes: (): Promise<CompanyDto[]> => fetch('/api/times').then(data => data.json())
}
