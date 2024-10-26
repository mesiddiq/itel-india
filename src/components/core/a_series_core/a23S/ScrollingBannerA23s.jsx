const ScrollingBannerA23S = () => {
  const scrollDuration = 50;

  return (
    <div
      className=" bg-[#EBE8E2] text-[#6B6682] flex overflow-hidden items-center p-4"
      style={{ whiteSpace: 'nowrap' }}
    >
      <div
        className="flex"
        style={{
          display: 'flex',
          animation: `scroll ${scrollDuration}s linear infinite`,
          whiteSpace: 'nowrap',
        }}
      >
        {['AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME'].map(
          (text, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-xl uppercase text-[#6B6682]  text-[24px] font-extrabold leading-[24px] tracking-[0.08em] ml-4 font-bricolage">
                {text}
              </span>
              <div className=" w-16 h-8 flex items-center justify-center">
                <img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />
              </div>
            </div>
          )
        )}
        {['AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME', 'AWESOME SERIES', 'IMPRESSIVELY AWESOME'].map(
          (text, index) => (
            <div key={index + 6} className="flex items-center space-x-4">
              <span className="text-xl uppercase text-[#6B6682]  text-[24px] font-extrabold leading-[24px] tracking-[0.08em] ml-4 font-bricolage">
                {text}
              </span>
              <div className=" w-16 h-8 flex items-center justify-center">
                <img src="/smartphone/A23s/scrollA23.svg" alt="star" className="" />
              </div>
            </div>
          )
        )}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingBannerA23S;
