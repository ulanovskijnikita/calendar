import { memo } from "react";
import type { PropsWithChildren } from 'react';

const CalendarHeaderCell = ({ children }: PropsWithChildren) => {

    return (

        <span className="h-16 grid place-items-center bg-gray-100 hover:bg-gray-50">{ children }</span>
    )
}

export default memo( CalendarHeaderCell )