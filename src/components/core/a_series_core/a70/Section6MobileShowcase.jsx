
const Section6MobileShowcase = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${'/smartphone/a70/phonesbg.webp'})`, // Use mobileBgImage for mobile
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          padding: '0',
        }}
      >
        <div className="lg:h-[850px] md:h-[500px] h-[200px] flex justify-center items-end">
          <p className="text-mobile/h6 text-center md:text-desktop/h3 lg:text-desktop/h2 pb-[26px] lg:pb-[80px]">
            Epic Vibes: Dive into <span className="text-itel-red">Awesomeness!</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Section6MobileShowcase
