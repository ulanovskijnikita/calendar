import schedule from "@/shared/api/schedule";
import type CalendarTableProps from "../model/CalendarTableProps";
import weekDays from "./weekDays";
import CalendarTableRow from "./CalendarTableRow";
import CalendarHeaderCell from "./CalendarHeaderCell";

const CalendarTable = (props: CalendarTableProps) => {

    return (

        <div className="w-2/3 mx-auto">

            {/* Header */}
            <CalendarTableRow>

                <CalendarHeaderCell>Time</CalendarHeaderCell>

                {

                    Array.from({length: 7}).map((_value, index) => {

                        const currentDay = props.startDate.getDay()

                        return <CalendarHeaderCell key={index} >

                            {

                                (currentDay + index > weekDays.length - 1) ? weekDays[currentDay + index - weekDays.length] : weekDays[currentDay + index]
                            }
                        </CalendarHeaderCell>
                    })
                }
            </CalendarTableRow>

            {/* Main */}
            {

                Array.from({length: 48}).map((_value, timeIndex) => {

                    const currentDate = new Date( new Date( props.startDate.setHours(0, 0) ).setMinutes(timeIndex * 30) )

                    const hours = currentDate.getHours()

                    const minutes = currentDate.getMinutes()

                    return (

                        <CalendarTableRow key={timeIndex} >

                            <CalendarHeaderCell>

                                {

                                    hours.toString()[1] == undefined ? '0' + hours : hours
                                }
                                :
                                {
                                    
                                    minutes.toString()[1] == undefined ? '0' + minutes : minutes
                                }
                            </CalendarHeaderCell>

                            {
                            
                                Array.from({length: 7}).map((_value, dayIndex) => {

                                    return <CalendarHeaderCell key={dayIndex}>e</CalendarHeaderCell>
                                })
                            }
                        </CalendarTableRow>
                    )
                })
            }
        </div>
    )
}

export default CalendarTable