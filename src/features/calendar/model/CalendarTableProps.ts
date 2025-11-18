import Lesson from "@/shared/model/Leasson";
import Schedule from "@/shared/model/Schedule";

type CalendarTableProps = {

    startDate: Date
    schedule: Schedule[]
    lessons: Lesson[];
    onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void
}

export default CalendarTableProps