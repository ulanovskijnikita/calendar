import { memo } from "react";
import type CalendarTableContentRowProps from "../model/CalendarTableContentRowProps";
import CalendarHeaderCell from "./CalendarHeaderCell";

const CalendarTableContentRow = ({ columnCount, hours, minutes }: CalendarTableContentRowProps) => {

    

    return (

        <>

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
            
                Array.from({length: columnCount}).map((_value, dayIndex) => {

                    return <CalendarHeaderCell key={dayIndex}></CalendarHeaderCell>
                })
            }
        </>
    )
}

export default memo( CalendarTableContentRow )