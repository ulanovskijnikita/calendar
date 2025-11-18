"use client"

import { useState } from "react"
import CalendarTable from "./CalendarTable"

const Calendar = () => {

    const currentDate = new Date()

    const [date, setDate] = useState( currentDate )

    return (

        <section>

            {/* Pagination */}
            <div className="flex justify-between items-center mx-3 mt-6">

                <img

                    alt="left-icon"
                    src="/left-icon.svg"
                    className="block aspect-square w-1/6 md:w-1/12 cursor-pointer"
                    onClick={() => {

                        setDate((date) => new Date( date.getTime() - (1000 * 60 * 60 * 24) ))
                    }}
                />

                <div className="text-center grid gap-1">

                    <h2 className="capitalize text-2xl md:text-4xl">teacher's calendar</h2>

                    <h3 className="capitalize md:text-left">current date: {date.toDateString()}</h3>
                </div>
                
                
                <img

                    alt="right-icon"
                    src="/right-icon.svg"
                    className="block aspect-square w-1/6 md:w-1/12 cursor-pointer"
                    onClick={() => {

                        setDate((date) => new Date( date.getTime() + (1000 * 60 * 60 * 24) ))
                    }}
                />
            </div>
            
            <CalendarTable startDate={date} />
        </section>
    )
}

export default Calendar