import React from 'react'
import HeroSection from '../../components/core/static_pages_core/BlogListing/HeroSection'
import MainBody from '../../components/core/static_pages_core/BlogListing/MainBody'

const BlogListing = () => {
  return (
    <div className=' lg:space-y-[100px] pb-[50px] space-y-[72px]'>
        <HeroSection/>
        <MainBody/>
    </div>

)
}

export default BlogListing