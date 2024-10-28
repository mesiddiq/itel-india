import PowerPerformance from "./PowerPerformance"
import HighPerformance from "./HighPerformance"
import ClearCamera from "./ClearCamera"
import DisplayAnimation from "./DisplayAnimation"

const Parent4Divs = () => {
  return (
    <div className="h-auto w-full bg-white py-10 lg:py-[100px]">

        <div className="content lg:border border-[#FCCE8D] rounded-[64px] px-4 lg:p-4 flex flex-col gap-4">
            <PowerPerformance />
            <DisplayAnimation />
            <HighPerformance />
            <ClearCamera />
            
        </div>

    </div>
  )
}

export default Parent4Divs