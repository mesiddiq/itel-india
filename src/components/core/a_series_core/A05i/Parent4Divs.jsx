import DisplayElephant from "./DisplayElephant"
import HighPerformance from "./HighPerformance"
import MultiTaskEase from "./MultiTaskEase"
import QuickBoost from "./QuickBoost"
import RAMHighPerformance from "./RAMHighPerformance"

const Parent4Divs = () => {
  return (
    <div className="h-auto w-full bg-white py-[100px]">

        <div className="content lg:border border-[#FCCE8D] rounded-[64px] p-4 flex flex-col gap-4">
            <DisplayElephant />
            <QuickBoost />
            <RAMHighPerformance />
            <MultiTaskEase />
            <HighPerformance />
        </div>

    </div>
  )
}

export default Parent4Divs