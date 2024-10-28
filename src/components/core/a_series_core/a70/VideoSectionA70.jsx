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
          url={[{ src: 'https://res.cloudinary.com/djwj42mic/video/upload/v1728905021/itel_A70_Product_Video_1080p_udveqi.mp4', type: 'video/mp4' }]}
        />
      </div>
      <img src='/smartphone/a70/A70VideoPattern.png' className='w-full' />
    </div>
  );
};

export default VideoA70;
