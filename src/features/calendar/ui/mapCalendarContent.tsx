import type MapCalendarContentParam from "../model/MapCalendarContentParam"
import type MapCalendarContentRes from "../model/MapCalendarContentRes"

export default function mapCalendarContent({ value, calendarState, currentDay }: MapCalendarContentParam): MapCalendarContentRes | undefined {

    let startDate = new Date( value.startTime )
    let endDate = new Date( value.endTime )

    const startDateIsFeilure = startDate.getTime() <= calendarState.startDate.getTime() || startDate.getTime() >= calendarState.endDate.getTime()
    const endDateIsFailure = endDate.getTime() <= calendarState.startDate.getTime() || endDate.getTime() >= calendarState.endDate.getTime()

    if (startDateIsFeilure && endDateIsFailure) return

    let startColumn = currentDay > startDate.getDay() ? startDate.getDay() + 7 - currentDay : startDate.getDay() - currentDay
    let endColumn = currentDay > endDate.getDay() ? endDate.getDay() + 7 - currentDay : endDate.getDay() - currentDay

    let startRow = startDate.getMinutes() ? (startDate.getHours() + 1) * 2 : startDate.getHours() * 2 + 1
    let endRow = endDate.getMinutes() < 30 ? (endDate.getHours() + 1) * 2 : (endDate.getHours() + 1) * 2 + 1

    if ( startDateIsFeilure ) {

        startDate = new Date( new Date( endDate ).setHours(0, 0, 0) )

        startColumn = endColumn + 1
        startRow = 1
    }

    if ( endDateIsFailure ) {

        endDate = new Date( new Date ( endDate ).setHours(0, 0, 0, 0) - 1 )

        endColumn = startColumn + 1
        endRow = 49
    }

    return {

        endColumn: endColumn,
        endDate: endDate,
        endRow: endRow,
        startColumn: startColumn,
        startDate: startDate,
        startRow: startRow,
    }
}