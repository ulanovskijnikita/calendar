import type CalendarState from "./CalendarState"

type MapCalendarContentParam = {

    value: {

        startTime: string
        endTime: string
    }
    calendarState: CalendarState
    currentDay: number
}

export default MapCalendarContentParam