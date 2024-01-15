import { Contact } from "@/components/MainViewComponents/Contact"
import { Deals } from "@/components/MainViewComponents/Deals"
import { Home } from "@/components/MainViewComponents/Home"
import { Locations } from "@/components/MainViewComponents/Locations"
import { Schedule } from "@/components/MainViewComponents/Schedule"
import { Services } from "@/components/MainViewComponents/Services"

export default function Main() {
  return (
    <main className="pt-[52px] md:pt-[88px]">
      <Home />
      <Services />
      <Deals />
      {/** <Contact /> */}
      <Locations />
      <Schedule />
    </main>
  )
}
