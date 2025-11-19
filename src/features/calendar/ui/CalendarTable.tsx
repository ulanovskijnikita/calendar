import type CalendarTableProps from "../model/CalendarTableProps";
import weekDays from "./weekDays";
import CalendarTableContentRow from "./CalendarTableContentRow";
import CalendarHeaderCell from "./CalendarHeaderCell";
import ScheduleSupport from "./ScheduleSupport";

const CalendarTable = ({ calendarState, lessons, schedule }: CalendarTableProps) => {

    const columnCount = calendarState ? calendarState.beetwenDays / (1000 * 60 * 60 * 24) : 0

    const currentDay = calendarState.startDate.getDay()

    const dayArr: number[] = []

    return (
            
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 relative">

            {/* Header */}
            <CalendarHeaderCell>Time</CalendarHeaderCell>

            {

                Array.from({length: columnCount}).map((_value, index) => {

                    dayArr.push( (currentDay + index > weekDays.length - 1) ? currentDay + index - weekDays.length : currentDay + index)

                    return <CalendarHeaderCell key={index}>

                        {

                            (currentDay + index > weekDays.length - 1) ? weekDays[currentDay + index - weekDays.length] : weekDays[currentDay + index]
                        }
                    </CalendarHeaderCell>
                })
            }

            {/* Main */}
            {

                Array.from({length: 48}).map((_value, timeIndex) => {

                    const currentDate = new Date( new Date( calendarState.startDate.setHours(0, 0) ).setMinutes(timeIndex * 30) )

                    const hours = currentDate.getHours()

                    const minutes = currentDate.getMinutes()

                    return <CalendarTableContentRow

                        hours={hours}
                        minutes={minutes}
                        key={timeIndex}
                        columnCount={columnCount}
                    />
                })
            }

            {/* Schedule */}
            {

                schedule.map((value, index) => {

                    let scheduleStartDate = new Date( value.startTime )
                    let scheduleEndDate = new Date( value.endTime )

                    const scheduleStartDateIsFeilure = scheduleStartDate.getTime() <= calendarState.startDate.getTime() || scheduleStartDate.getTime() >= calendarState.endDate.getTime()
                    const scheduleEndDateIsFailure = scheduleEndDate.getTime() <= calendarState.startDate.getTime() || scheduleEndDate.getTime() >= calendarState.endDate.getTime()

                    if (scheduleStartDateIsFeilure && scheduleEndDateIsFailure) return

                    let startColumn = currentDay > scheduleStartDate.getDay() ? scheduleStartDate.getDay() + 7 - currentDay : scheduleStartDate.getDay() - currentDay
                    let endColumn = currentDay > scheduleEndDate.getDay() ? scheduleEndDate.getDay() + 7 - currentDay : scheduleEndDate.getDay() - currentDay

                    let startRow = scheduleStartDate.getMinutes() ? (scheduleStartDate.getHours() + 1) * 2 : scheduleStartDate.getHours() * 2 + 1
                    let endRow = scheduleEndDate.getMinutes() < 30 ? (scheduleEndDate.getHours() + 1) * 2 : (scheduleEndDate.getHours() + 1) * 2 + 1

                    if ( scheduleStartDateIsFeilure ) {

                        scheduleStartDate = new Date( new Date( scheduleEndDate ).setHours(0, 0, 0) )

                        startColumn = endColumn + 1
                        startRow = 1
                    }

                    if ( scheduleEndDateIsFailure ) {

                        scheduleEndDate = new Date( new Date ( scheduleEndDate ).setHours(0, 0, 0, 0) - 1 )

                        endColumn = startColumn + 1
                        endRow = 49
                    }

                    return (

                        <ScheduleSupport

                            dayArr={dayArr}
                            endColumn={endColumn}
                            endDate={scheduleEndDate}
                            endRow={endRow}
                            startColumn={startColumn}
                            startDate={scheduleStartDate}
                            startRow={startRow}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default CalendarTable