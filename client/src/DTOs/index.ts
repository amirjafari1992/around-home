export type TimeSlotDto = {
    start_time: string,
    end_time: string,
    companyId?: number
}

export type CustomTimeSlotDto = TimeSlotDto
    & {
        day: string,
        active?: boolean,
        disable?: boolean,
        start: string,
        end: string
    }

export type CompanyDto = {
    id: number,
    name: string,
    type: string,
    time_slots: CustomTimeSlotDto[]
}
