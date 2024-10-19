
import First from "../../components/core/a_series_core/a05/First"
import Second from "../../components/core/a_series_core/a05/Second"
import Third from "../../components/core/a_series_core/a05/Third"

export default function A05() {
  return (
    <div className="bg-white font-[Mark OT]">
      <img src="/SmartPhone/a05/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
      <img src="/SmartPhone/a05/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
      <First />
      <Second />
      <Third />
    </div>
  )
}
