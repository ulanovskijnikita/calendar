import { memo } from "react"
import type ScheduleProps from "../model/ScheduleProps"

const Schedule = ({endColumn, endRow, startColumn, startRow, endDate, startDate}: ScheduleProps) => {

    return (

        <div

            className="bg-green-200 hover:bg-green-300 absolute inset-0 z-10"
            style={{

                gridColumnStart: startColumn + 2,
                gridColumnEnd: endColumn + 2,
                gridRowStart: startRow + 1,
                gridRowEnd: endRow + 1,
            }}
            onClick={() => {

                window.alert("Время работы с " + startDate.toLocaleString() + " до " + endDate.toLocaleString())
            }}
        ></div>
    )
}

export default memo( Schedule )