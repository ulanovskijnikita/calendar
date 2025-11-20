import type Lesson from "@/shared/model/Leasson";
import type Schedule from "@/shared/model/Schedule";

type CalendarTableProps = {
    
    schedule: Schedule[]
    lessons: Lesson[];
    beetwenDays: number
}

export default CalendarTableProps