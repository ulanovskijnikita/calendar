import type CalendarState from "../model/CalendarState"

export default function matchMediaCalendarState(startDate: Date): CalendarState {

    const tableMedia = window.matchMedia('(min-width: 768px)')

    const laptopMedia = window.matchMedia('(min-width: 1024px)')

    const endTime = startDate.getTime() + 1000 * 60 * 60 * 24

    const beetwenDays = endTime - startDate.getTime()

    let calendarState: CalendarState = {

        startDate: startDate,
        endDate: new Date( endTime ),
        beetwenDays: beetwenDays
    }

    if ( tableMedia.matches ) {

        const endTime = startDate.getTime() + 1000 * 60 * 60 * 24 * 3

        const beetwenDays = endTime - startDate.getTime()

        calendarState = {

            ...calendarState,
            endDate: new Date( endTime ),
            beetwenDays: beetwenDays,
        }
    }

    if ( laptopMedia.matches ) {

        const endTime = startDate.getTime() + 1000 * 60 * 60 * 24 * 7

        const beetwenDays = endTime - startDate.getTime()

        calendarState = {

            ...calendarState,
            endDate: new Date( endTime ),
            beetwenDays: beetwenDays,
        }
    }

    return calendarState
}