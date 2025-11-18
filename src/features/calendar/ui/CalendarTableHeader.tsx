import type { PropsWithChildren } from "react"

const CalendarTableHeader = ({ children }: PropsWithChildren) => {

    return (

        <span className="h-16">{ children }</span>
    )
}

export default CalendarTableHeader