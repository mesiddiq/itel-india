import { useEffect } from 'react';
import React from 'react'
import { useLocation } from 'react-router-dom'
import { data } from '../BlogListing/data'
import { Link } from 'react-router-dom';


const BlogCard = ({ category, title, image,data }) => {
  return (
    <div className="bg-white space-y-[12px] lg:space-y-[16px] ">
      <img
        src={image}
        alt={title}
        className=" lg:w-[412px] w-[328px] h-[337px] lg:h-[424px]"
      />
      <div className=" space-y-3 lg:space-y-4">
        <div className=" space-y-2 ">
          <p className=" text-desktop/body/2/regular text-grey/grey/5">{category}</p>
          <p className=" lg:text-desktop/h5/medium text-mobile/h6 line-clamp-2 text-brand/black">{title}</p>
        </div>
        
        <Link to="/blog"  state={{data}} className=" inline-block">
          <div className=" flex items-center">
            <p className=" lg:text-desktop/button text-mobile/button text-brand/black">VIEW</p>
            <img src={"/static_page/homepage/Union.png"} className=" w-5 h-3 ml-2" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const MainBody = () => {
    const data1= useLocation()
    const Maindata = data1.state.data
    console.log(Maindata)
    useEffect(() => {
        window.scrollTo(0,0)
    })
  return (
    <div className=' lg:content py-[60px] flex  lg:space-y-[120px] space-y-10 flex-col  items-center px-4 font-markot'>
        <div className=' lg:space-y-[60px] lg:w-[846px]'>
            <div className=' space-y-[60px]'>
               <div className=' space-y-[16px] lg:space-y-[20px]'>
                  <p className=' text-mobile/h7 lg:text-desktop/h5/medium text-grey/grey/5'>{Maindata.category}</p>
                 <p className=' text-mobile/h4 lg:text-desktop/h3 text-brand/black'>{Maindata.title}</p>
                <div className=' flex lg:flex-row items-start lg:items-center flex-col lg:space-y-0 space-y-[16px] justify-between'>
                    <p className=' text-grey/grey/4  text-desktop/body/2/regular lg:text-desktop/body/1'>{Maindata.publisedon}</p>
                    <div className=' flex items-center space-x-[6px]'>
                        <p className=' text-grey/grey/5 text-desktop/h6'>Share</p>
                         <img src="/static_page/BlogListing/fb.png" alt="" />
                         <img src="/static_page/BlogListing/X.png" alt="" />

                         <img src="/static_page/BlogListing/linkedin.png" alt="" />

                         <img src="/static_page/BlogListing/link-circle.png" alt="" />

                    </div>
                </div>


               </div>
              
              <img className=' w-full h-[417px]' src={Maindata.img} alt="" />
              <div className=' lg:space-y-[30px] space-y-[24px] text-desktop/body/1 lg:text-desktop/body/large  text-black/1'>
                {
                    Maindata.description.map((data,index) => {
                        return <p  key={index}>{data}</p>
                    })
                }
              </div>
            </div>

        </div>

<div className=' space-y-[60px] '>
    <p className=' text-mobile/h4 lg:text-desktop/h2 text-brand/black'>More Blogs</p>

      <div className='lg:grid lg:gap-x-[20px] gap-y-[52px] lg:grid-cols-3'>
        {
          data .filter(item => item.id !== Maindata.id).slice(0,4).map((data, index) =>
        
         <BlogCard category={data.category} data={data} image={data.img} key={data.id} title={data.title}/>
            )
        }
      </div>

</div>
      
    </div>
  )
}

export default MainBody