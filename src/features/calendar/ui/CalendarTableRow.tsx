import { PropsWithChildren } from "react";

const CalendarTableRow = ({ children }: PropsWithChildren) => {

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 max-h-16 overflow-hidden">

            {

                children
            }
        </div>
    )
}

export default CalendarTableRow