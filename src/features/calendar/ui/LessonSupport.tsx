import { memo } from "react"
import Lesson from "./Lesson"
import type LessonSupportProps from "../model/LessonSupportProps"

const LessonSupport = ({dayArr, endColumn, endDate, endRow, startColumn, startDate, startRow, student}: LessonSupportProps) => {

    const isOtherDays = startDate.getDay() != endDate.getDay()

    return (

        <>

            {

                !isOtherDays && <Lesson

                    endColumn={endColumn}
                    endRow={endRow}
                    startColumn={startColumn}
                    startRow={startRow}
                    startDate={startDate}
                    endDate={endDate}
                    student={student}
                />
            }

            {

                isOtherDays && <>
                
                    {

                        dayArr.includes( startDate.getDay() ) && <Lesson

                            endColumn={startColumn + 1}
                            endRow={49}
                            startColumn={startColumn}
                            startRow={startRow}
                            startDate={startDate}
                            endDate={new Date( new Date ( endDate ).setHours(0, 0, 0, 0) - 1 )}
                            student={student}
                        />
                    }

                    {

                        dayArr.includes( endDate.getDay() ) && <Lesson

                            endColumn={endColumn}
                            endRow={endRow}
                            startColumn={startColumn + 1}
                            startRow={1}
                            startDate={new Date( new Date( endDate ).setHours(0, 0, 0) )}
                            endDate={endDate}
                            student={student}
                        />
                    }
                </>
            }
        </>
    )
}

export default memo( LessonSupport )