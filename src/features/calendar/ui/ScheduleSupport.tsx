import type ScheduleSupportProps from "../model/ScheduleSupportProps"
import Schedule from "./Schedule"

const ScheduleSupport = ({dayArr, endColumn, endDate, endRow, startColumn, startDate, startRow}: ScheduleSupportProps) => {

    const isOtherDays = startDate.getDay() != endDate.getDay()

    console.log(endDate)

    return (

        <>

            {

                !isOtherDays && <Schedule

                    endColumn={endColumn}
                    endRow={endRow}
                    startColumn={startColumn}
                    startRow={startRow}
                    startDate={startDate}
                    endDate={endDate}
                />
            }

            {

                isOtherDays && <>
                
                    {

                        dayArr.includes( startDate.getDay() ) && <Schedule

                            endColumn={startColumn + 1}
                            endRow={49}
                            startColumn={startColumn}
                            startRow={startRow}
                            startDate={startDate}
                            endDate={new Date( new Date ( endDate ).setHours(0, 0, 0, 0) - 1 )}
                        />
                    }

                    {

                        dayArr.includes( endDate.getDay() ) && <Schedule

                            endColumn={endColumn + 1}
                            endRow={endRow}
                            startColumn={endColumn}
                            startRow={1}
                            startDate={new Date( new Date( endDate ).setHours(0, 0, 0) )}
                            endDate={endDate}
                        />
                    }
                </>
            }
        </>
    )
}

export default ScheduleSupport