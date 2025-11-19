import { memo } from "react"
import type LessonProps from "../model/LessonProps"

const Lesson = ({endColumn, endRow, startColumn, startRow, endDate, startDate, student}: LessonProps) => {

    return (

        <div

            className="bg-red-300 hover:bg-red-400 absolute inset-0 z-20 grid place-items-center"
            style={{

                gridColumnStart: startColumn + 2,
                gridColumnEnd: endColumn + 2,
                gridRowStart: startRow + 1,
                gridRowEnd: endRow + 1,
            }}
            onClick={() => {

                window.alert("Lesson hours from " + startDate.toLocaleString() + " to " + endDate.toLocaleString())
            }}
        >{ student }</div>
    )
}

export default memo( Lesson )