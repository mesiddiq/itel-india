/* eslint-disable react/prop-types */
export default function Enjoy({ part1, part2, part3 }) {
    return (
        <div className="FFMarkBold relative w-full lg:w-1/3 h-[108px] overflow-hidden bg-[#181818] rounded-[16px]">
        {/* Background text rows */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {[-1, 0, 1].map((index) => (
            <div
              key={index}
              className="absolute w-full flex justify-center items-center overflow-hidden"
              style={{
                transform: `translateY(calc(${index * 20}px))`,
              }}
            >
              <p className="text-transparent text-[60px] font-bold whitespace-nowrap blur-[2px] stroke-red-700 stroke-[1.5px] opacity-80" style={{ WebkitTextStroke: '1.5px #b91c1c', textStroke: '1.5px #b91c1c' }}>
                {part1} <span className="stroke-red-600" style={{ WebkitTextStroke: '1.5px #dc2626', textStroke: '1.5px #dc2626' }}>{part2}</span> {part3}
              </p>
            </div>
          ))}
        </div>
  
        {/* Centered ENJOY text */}
        <h3 className="absolute inset-0 flex items-center justify-center text-[60px] font-bold text-red-500 stroke-red-600 stroke-[1px] z-10" style={{ WebkitTextStroke: '1px #dc2626', textStroke: '1px #dc2626' }}>
          { part2 }
        </h3>
        </div>
  
    )
  }