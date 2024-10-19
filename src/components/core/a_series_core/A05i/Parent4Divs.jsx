import DisplayElephant from "./DisplayElephant"
import HighPerformance from "./HighPerformance"
import MultiTaskEase from "./MultiTaskEase"
import QuickBoost from "./QuickBoost"
import RAMHighPerformance from "./RAMHighPerformance"
import TimelessLeatherEleganceMobile from "./TimelessLeatherEleganceMobile"

const Parent4Divs = () => {
  return (
    <div className="h-auto w-full bg-white py-10 lg:py-[100px]">

        <div className="content lg:border border-[#FCCE8D] rounded-[64px] px-4 lg:p-4 flex flex-col gap-4">
            <DisplayElephant />
            <QuickBoost />
            <RAMHighPerformance />
            <MultiTaskEase />
            <HighPerformance />
            
            {/* Will be only visible in mobile devices */}
            <TimelessLeatherEleganceMobile />
        </div>

    </div>
  )
}

export default Parent4Divs