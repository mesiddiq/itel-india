import ReactPlayer from 'react-player'

const VideoA70 = () => {

  return (
    <div className='w-full overflow-hidden relative items-center justify-center bg-[#050036]' style={{ marginTop: '0px' }}>
   
      <div data-aos='zoom-in-up'>
        <ReactPlayer
          playing
          controls={false}
          loop={true}
          muted={true}
          width='100%'
          height='100%'
          url={[{ src: '/s_twenty_three_plus/s23plus.mp4', type: 'video/mp4' }]}
        />
      </div>
      <img src='/smartphone/a70/A70VideoPattern.png' className='w-full' />
    </div>
  );
};

export default VideoA70;
