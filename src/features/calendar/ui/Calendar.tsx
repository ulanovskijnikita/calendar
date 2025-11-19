"use client"

import { useEffect, useState } from "react"
import CalendarTable from "./CalendarTable"
import type CalendarState from "../model/CalendarState"
import matchMediaCalendarState from "./matchMediaCalendarState"
import lessons from "@/shared/api/lessons"
import schedule from "@/shared/api/schedule"

const Calendar = () => {

    const startDate = new Date()

    const [calendarState, setCalendarState] = useState<CalendarState | null>( null )

    useEffect(() => {

        setCalendarState( matchMediaCalendarState( startDate ) )

        const handleResize = () => setCalendarState( matchMediaCalendarState( startDate ) )

        window.addEventListener('resize', handleResize)

        return () => {

            setCalendarState( null )

            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (

        <section>

            {/* Pagination */}
            <div className="flex justify-between items-center mx-3 mt-6">

                <img

                    alt="left-icon"
                    src="/left-icon.svg"
                    className="block aspect-square w-1/6 md:w-1/12 cursor-pointer"
                    onClick={() => {

                        setCalendarState(calendarState => {

                            return {

                                ...calendarState!,
                                startDate: new Date( calendarState!.startDate.getTime() - calendarState!.beetwenDays ),
                                endDate: new Date( calendarState!.endDate.getTime() - calendarState!.beetwenDays ),
                            }
                        })
                    }}
                />

                <div className="text-center grid gap-1">

                    <h2 className="capitalize text-2xl md:text-4xl">teacher's calendar</h2>

                    {

                        calendarState && <h3 className="capitalize md:text-left"><span className="hidden md:inline">start</span> date: {calendarState.startDate.toDateString()}</h3>
                    }
                    
                    {

                        calendarState && <h3 className="capitalize md:text-left hidden md:block">end date: {new Date( calendarState.endDate.getTime() - (1000 * 60 * 60 * 24) ).toDateString()}</h3>
                    }
                </div>                
                
                <img

                    alt="right-icon"
                    src="/right-icon.svg"
                    className="block aspect-square w-1/6 md:w-1/12 cursor-pointer"
                    onClick={() => {

                        setCalendarState(calendarState => {

                            return {

                                ...calendarState!,
                                startDate: new Date( calendarState!.startDate.getTime() + calendarState!.beetwenDays ),
                                endDate: new Date( calendarState!.endDate.getTime() + calendarState!.beetwenDays ),
                            }
                        })
                    }}
                />
            </div>
            
            {
                
                calendarState && <CalendarTable

                    calendarState={calendarState}
                    lessons={lessons}
                    schedule={schedule}
                />
            }
        </section>
    )
}

export default Calendar