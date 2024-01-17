import { Deals } from "@/components/MainViewComponents/Deals"
import { Home } from "@/components/MainViewComponents/Home"
import { Locations } from "@/components/MainViewComponents/Locations"
import { Schedule } from "@/components/MainViewComponents/Schedule"
import { Services } from "@/components/MainViewComponents/Services"

export default function Main() {
  return (
    <main className="pt-[6vh] md:pt-[10vh]">
      <Home />
      <Services />
      <Deals />
      <Locations />
      <Schedule />
    </main>
  )
}
