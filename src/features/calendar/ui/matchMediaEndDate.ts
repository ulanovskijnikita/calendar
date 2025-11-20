import type MatchMediaEndDateRes from "../model/MatchMediaEndDateRes"

export default function matchMediaEndDate(startDate: Date): MatchMediaEndDateRes {

    const tableMedia = window.matchMedia('(min-width: 768px)')

    const laptopMedia = window.matchMedia('(min-width: 1280px)')

    let endTime: number

    let beetwenDays: number

    let endDate: Date

    if ( laptopMedia.matches ) {

        endTime = startDate.getTime() + 1000 * 60 * 60 * 24 * 7

        beetwenDays = endTime - startDate.getTime()

        endDate = new Date( endTime - 1 )

        return {

            endDate: endDate,
            beetwenDays: beetwenDays,
        }
    }

    if ( tableMedia.matches ) {

        endTime = startDate.getTime() + 1000 * 60 * 60 * 24 * 3

        beetwenDays = endTime - startDate.getTime()

        endDate = new Date( endTime - 1 )

        return {

            endDate: endDate,
            beetwenDays: beetwenDays,
        }
    }

    endTime = startDate.getTime() + 1000 * 60 * 60 * 24
    beetwenDays = endTime - startDate.getTime()
    endDate = new Date( endTime - 1 )

    return {

        endDate: endDate,
        beetwenDays: beetwenDays,
    }
}