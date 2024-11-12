import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EnjoyBetterLife = () => {
  const RenderContent = ({ header, colwidth, colImg, colBgImg, colBgImgHeight, colBgImgWidth, colImgHeight, colImgWidth, mobRes, mobRes1, colClass, posClasses, resClass, resclass2 }) => (
    <div className={`${colClass} bg-[#232322] rounded-[16px] overflow-hidden group relative`}>
      <div className={`flex flex-col ${colwidth}`}>
        <div className="pt-4 px-4 md:px-5 gap-2 w-full">
          <p className="text-sm md:text-lg lg:text-xl ">{header}</p>
          <img
            src="/static_page/homepage/Arrow_right.svg"
            alt="Arrow"
            className="w-6 h-6 lg:w-8 lg:h-8"
          />
        </div>
        <div className={`absolute ${posClasses[0]} ${resClass} ${mobRes} transition-transform duration-500 group-hover:scale-105`}>
          <img src={colBgImg} alt="" style={{ height: colBgImgHeight, width: colBgImgWidth }} className="object-cover" />
        </div>
        <div className={`absolute ${posClasses[1]} ${resclass2} ${mobRes1} transition-transform duration-500 group-hover:scale-105`}>
          <img src={colImg} alt="Column Image" style={{ height: colImgHeight, width: colImgWidth }} className="object-cover" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <img src="/static_page/homepage/EnjoyBetterLifeHeader.png" alt="Header" className="w-full hidden lg:block" />
      <div className="relative content px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 h-auto lg:h-[545px] lg:mt-[-91px]">
          <Link to='/products'>
            <RenderContent
              colClass="w-full h-[200px] md:h-[250px] lg:max-w-[522px] lg:h-[543px]"
              header="Amp Your Style with itel Latest Smartphones"
              colImg="/static_page/homepage/EnjoyBetterLifeCol1.png"
              colBgImg="/static_page/homepage/EnjoyBetterLifeCol1Bg.png"
              colBgImgHeight="100%" colBgImgWidth="100%"
              colImgHeight="100%" colImgWidth="100%"
              posClasses={["top-[30%] left-0 lg:top-[158px] lg:left-0", "md:top-[15%] top-[26%] left-[25%] lg:top-[178px] lg:left-0"]}
              mobRes="mob-res"
              mobRes1="mob-res1"
              colwidth="w-[455px]"
            />
          </Link>

          <div className="hidden lg:flex flex-col w-full lg:max-w-[738px] gap-5 lg:gap-6">
            <Link to='/featurephones'>
              <RenderContent
                colClass="lg:h-[268px]"
                header="Stay Effortlessly Connected All Day, Every Day"
                colImg="/static_page/homepage/EnjoyBetterLifeCol2.png"
                colBgImg="/static_page/homepage/2CompImg.png"
                colBgImgHeight="100%" colBgImgWidth="100%"
                colImgHeight="100%" colImgWidth="100%"
                posClasses={["top-[10%] left-0 lg:top-[60px]", "top-[20%] left-[50%] z-20 lg:top-[51px] lg:left-[25rem]"]}
                colwidth="w-[372px]"
                mobRes1="mob-effortless"
                // mobRes="mob-effortless1"
              />
            </Link>

            <div className="flex gap-5">
              <Link to='/coming-soon'>
                <RenderContent
                  colClass="w-1/2 lg:w-full h-[200px] md:h-[250px] lg:h-[258px]"
                  header="Dive into Endless Entertainment: itel Smart TV"
                  colImg="/static_page/homepage/EnjoyBetterLifeCol3.png"
                  colBgImg="/static_page/homepage/EnjoyBetterLifeCol3Bg.png"
                  colBgImgHeight="100%" colBgImgWidth="100%"
                  colImgHeight="100%" colImgWidth="100%"
                  posClasses={["top-[10%] left-[10%]", "top-[30%] left-[60%] z-20"]}
                />
              </Link>
              <Link to='/coming-soon'>
                <RenderContent
                  colClass="w-1/2 lg:w-full h-[200px] md:h-[250px]  lg:h-[258px]"
                  header="Enjoy Your Favorite Shows"
                  colImg="/static_page/homepage/EnjoyBetterLifeCol4.png"
                  colBgImg="/static_page/homepage/EnjoyBetterLifeCol3Bg.png"
                  colBgImgHeight="100%" colBgImgWidth="100%"
                  colImgHeight="100%" colImgWidth="100%"
                  posClasses={["top-[39%] left-[5%]", "top-[50%] left-[30%] z-20"]}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:hidden">
            <div className="flex gap-5">
              <RenderContent
                colClass="w-1/2 h-[250px]"
                header="Dive into Endless Entertainment: itel Smart TV"
                colImg="/static_page/homepage/mobileforM.png"
                colBgImg="/static_page/homepage/EnjoyBetterLifeCol3Bg.png"
                colBgImgHeight="100%" colBgImgWidth="100%"
                colImgHeight="100%" colImgWidth="100%"
                posClasses={["md:top-[10px] md:left-[60px] top-[11rem] left-0", "md:top-[74px] md:left-[6rem] z-20 top-[6rem] left-[1rem]"]}
                resClass="responsive-section"
                resclass2="responsive-section2"

              />
              <RenderContent
                colClass="w-1/2 h-[250px]"
                header="Enjoy Your Favorite Shows"
                colImg="/static_page/homepage/EnjoyBetterLifeCol3.png"
                colBgImg="/static_page/homepage/EnjoyBetterLifeCol3Bg.png"
                colBgImgHeight="100%" colBgImgWidth="100%"
                colImgHeight="100%" colImgWidth="100%"
                posClasses={["md:top-[10px] md:left-[60px] top-[11rem] left-0", "md:top-[74px] md:left-[6rem] z-20 top-[6rem] left-[1rem]"]}
                resClass="responsive-section"
                resclass2="responsive-section2"
              />
            </div>
            <RenderContent
              colClass="h-[205px]"
              header="Stay Effortlessly Connected All Day, Every Day"
              colImg="/static_page/homepage/EnjoyBetterLifeCol4.png"
              // colBgImg="/static_page/homepage/EnjoyBetterLifeCol3Bg.png"
              colBgImgHeight="120px" colBgImgWidth="100%"
              colImgHeight="100%" colImgWidth="100%"
              posClasses={["md:top-[10px] md:left-[60px] top-[5rem] left-[5rem]", "md:top-[74px] top-[5rem] left-[6rem]"]}
              mobRes="mob-res-AllDay"
              mobRes1="mob-res-AllDay"
            />
          </div>
        </div>
      </div>
      <img src="/static_page/homepage/EnjoyBetterLifeFooter.png" alt="Footer" className="w-full -mt-[50px] md:-mt-[75px] hidden lg:block" />
    </div>
  );
};

export default EnjoyBetterLife;
