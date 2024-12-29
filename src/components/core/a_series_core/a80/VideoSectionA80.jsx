import ReactPlayer from 'react-player'

const VideoSectionA80 = () => {

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
          url={[{ src: '/videos/a70.webm', type: 'video/webm' }]}
        />
      </div>
      <img src='/smartphone/a70/A70VideoPattern.png' className='w-full' />
    </div>
  );
};

export default VideoSectionA80;
