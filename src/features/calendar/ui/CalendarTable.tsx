import type CalendarTableProps from "../model/CalendarTableProps";
import weekDays from "./weekDays";
import CalendarTableContentRow from "./CalendarTableContentRow";
import CalendarHeaderCell from "./CalendarHeaderCell";
import ScheduleSupport from "./ScheduleSupport";
import mapCalendarContent from "./mapCalendarContent";
import LessonSupport from "./LessonSupport";
import { useSearchParams } from "next/navigation";
import { memo, useMemo } from "react";
import { endDateSearch, startDateSearch } from "./calendarSearchParam";

const CalendarTable = ({ lessons, schedule, beetwenDays }: CalendarTableProps) => {

    const columnCount = beetwenDays / (1000 * 60 * 60 * 24)

    const searchParams = useSearchParams()

    const startDate = useMemo<Date>( () => new Date( searchParams.get( startDateSearch ) ?? Date.now() ), [searchParams] )
    const endDate = useMemo<Date>( () => new Date( searchParams.get( endDateSearch ) ?? Date.now() ), [searchParams] )

    const currentDay = startDate.getDay()

    const dayArr: number[] = []

    return (
            
        <div className="w-2/3 mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 relative">

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

                    const currentDate = new Date( new Date( startDate.setHours(0, 0) ).setMinutes(timeIndex * 30) )

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

                    const res = mapCalendarContent({ currentDay: currentDay, value: value, searchEndDate: endDate, searchStartDate: startDate })

                    if ( !res ) return

                    return (

                        <ScheduleSupport

                            dayArr={dayArr}
                            endColumn={res.endColumn}
                            endDate={res.endDate}
                            endRow={res.endRow}
                            startColumn={res.startColumn}
                            startDate={res.startDate}
                            startRow={res.startRow}
                            key={index}
                        />
                    )
                })
            }

            {/* Leassons */}
            {

                lessons.map((value, index) => {

                    const res = mapCalendarContent({ currentDay: currentDay, value: value, searchEndDate: endDate, searchStartDate: startDate })

                    if ( !res ) return

                    return (

                        <LessonSupport

                            dayArr={dayArr}
                            endColumn={res.endColumn}
                            endDate={res.endDate}
                            endRow={res.endRow}
                            startColumn={res.startColumn}
                            startDate={res.startDate}
                            startRow={res.startRow}
                            key={index}
                            student={value.student}
                        />
                    )
                })
            }
        </div>
    )
}

export default memo( CalendarTable )