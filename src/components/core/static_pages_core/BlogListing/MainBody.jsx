import React, { useState } from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
const BlogCard = ({ category, title,id, image,data }) => {
  return (
    <div  className="bg-white space-y-[12px] lg:space-y-[16px] ">
      <img
        src={image}
        alt={title}
        className=" lg:w-[412px] w-[328px] h-[337px] lg:h-[424px] object-contain"
      />
      <div className=" space-y-3 lg:space-y-4">
        <div className=" space-y-2 ">
          <p  className=" text-desktop/body/2/regular text-grey/grey/5">{category}</p>
          <p className=" lg:text-desktop/h5/medium text-mobile/h6 line-clamp-2 text-brand/black">{title}</p>
        </div>
        
        <Link t to={`/blog/${id}`}  state={{data}} className=" inline-block">
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
  const [filterType, setFilterType] = useState('ALL');


  const filteredData = data.filter((item) => {
    if (filterType === 'ALL') return true;
    return item.category === filterType;
  });

  return (
    <div className='font-markot lg:content  space-y-[28px]  lg:space-y-[40px] px-4'>
      <div className='flex lg:items-center lg:flex-row lg:gap-0 gap-7  flex-col-reverse lg:justify-between'>
        <div className='flex lg:w-[228px] lg:justify-between text-grey/grey/5 lg:text-desktop/h6/medium'>
          <button className={`px-2 ${filterType === 'ALL' ? ' border-b-4 border-itel-red' : ''}`}
             onClick={() => setFilterType('ALL')}>ALL</button>
          <button className={`px-2 ${filterType === 'NEWS' ? 'border-b-4 border-itel-red' : ''}`}
             onClick={() => setFilterType('NEWS')}>NEWS</button>
          <button className={`px-2 ${filterType === 'BLOG' ? 'border-b-4 border-itel-red' : ''}`}
             onClick={() => setFilterType('BLOG')}>BLOGS</button>
        </div>
        <div className='w-[88px] flex justify-between items-center'>
          <img src="/static_page/BlogListing/setting-3.png" alt=""/>
          <p className='text-desktop/button text-brand/black'>FILTER</p>
        </div>
      </div>

      <div className='lg:grid lg:gap-x-[20px] lg:space-y-0  space-y-[28px]  gap-y-[52px] lg:grid-cols-3'>
        {
          filteredData.map((data, index) =>
            <BlogCard category={data.category} data={data} image={data.img} id={data.id} key={data.id} title={data.title}/>
          )
        }
      </div>
    </div>
  );
}

export default MainBody;
