import type Lesson from "@/shared/model/Leasson";
import type Schedule from "@/shared/model/Schedule";
import type CalendarState from "./CalendarState";

type CalendarTableProps = {

    // startDate: Date
    // onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void
    
    schedule: Schedule[]
    lessons: Lesson[];
    calendarState: CalendarState
}

export default CalendarTableProps