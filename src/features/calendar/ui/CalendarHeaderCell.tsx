import type { PropsWithChildren } from "react";

const CalendarHeaderCell = ({ children }: PropsWithChildren) => {

    return (

        <span className="h-16 grid place-items-center hover:bg-amber-50">{ children }</span>
    )
}

export default CalendarHeaderCell