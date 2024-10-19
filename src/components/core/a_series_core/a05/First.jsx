import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import Frame4 from "./Frame4";


export default function First() {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center lg:py-[100px] lg:px-[80px] py-[40px] px-[16px]">
        <div className="lg:rounded-[36px] lg:border lg:border-[#FCCE8D] flex justify-center items-center flex-col lg:p-[16px] content">
            <Frame1/>
            <Frame2/>
            <Frame3/>
            <Frame4/>
        </div>
      </div>
    );
  }
  