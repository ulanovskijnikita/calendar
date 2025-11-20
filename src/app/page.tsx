import Calendar from "@/features/calendar/ui/Calendar";
import { Suspense } from "react";

export default function Home() {

  return (

    <main>

      <Suspense fallback={<p>Loading...</p>} >

        <Calendar />
      </Suspense>
    </main>
  )
}