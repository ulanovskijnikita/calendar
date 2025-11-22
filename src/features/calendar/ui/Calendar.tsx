"use client"

import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react"
import CalendarTable from "./CalendarTable"
import matchMediaEndDate from "./matchMediaEndDate"
import lessons from "@/shared/api/lessons"
import schedule from "@/shared/api/schedule"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { endDateSearch, startDateSearch } from "./calendarSearchParam"

const Calendar = () => {

    const [beetwenDays, setBeetwenDays] = useState< number | null >( null )

    const router = useRouter()

    const pathname = usePathname()

    const searchParams = useSearchParams()

    const startDate = useMemo<Date>( () => new Date( searchParams.get( startDateSearch ) ?? new Date().setHours(0, 0, 0, 0) ), [searchParams] )

    const endDate = useMemo<Date>( () => new Date( searchParams.get( endDateSearch ) ?? Date.now() ), [searchParams] )

    const addSearchParams = useCallback( () => {

        const params = new URLSearchParams()

        const {beetwenDays, endDate} = matchMediaEndDate( startDate )

        params.set(startDateSearch, startDate.toString())
        params.set(endDateSearch, endDate.toString())

        router.push(pathname + '?' + params)

        setBeetwenDays( beetwenDays )
    }, [searchParams] )

    const handleResize = useCallback( () => {
        
        addSearchParams()
    }, [searchParams] )

    useEffect(() => {        

        window.addEventListener('resize', handleResize)

        return () => {

            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize])

    useLayoutEffect(() => {

        addSearchParams()
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

                        const params = new URLSearchParams()

                        if (beetwenDays) {

                            params.set(startDateSearch, new Date( startDate.getTime() - beetwenDays ).toString())
                            params.set(endDateSearch, new Date( endDate.getTime() - beetwenDays ).toString())

                            router.replace(pathname + '?' + params)
                        }
                    }}
                />

                <div className="text-center grid gap-1">

                    <h2 className="capitalize text-2xl md:text-4xl">teacher's calendar</h2>

                    <h3 className="capitalize md:text-left"><span className="hidden md:inline">start</span> date: {startDate.toDateString()}</h3>
                    
                    <h3 className="capitalize md:text-left hidden md:block">end date: {endDate.toDateString()}</h3>
                </div>                
                
                <img

                    alt="right-icon"
                    src="/right-icon.svg"
                    className="block aspect-square w-1/6 md:w-1/12 cursor-pointer"
                    onClick={() => {

                        const params = new URLSearchParams()

                        if (beetwenDays) {

                            params.set(startDateSearch, new Date( startDate.getTime() + beetwenDays ).toString())
                            params.set(endDateSearch, new Date( endDate.getTime() + beetwenDays ).toString())

                            router.replace(pathname + '?' + params)
                        }
                    }}
                />
            </div>
            
            {
                
                beetwenDays && <CalendarTable

                    beetwenDays={beetwenDays}
                    lessons={lessons}
                    schedule={schedule}
                />
            }
        </section>
    )
}

export default Calendar