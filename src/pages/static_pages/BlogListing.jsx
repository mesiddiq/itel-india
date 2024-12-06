import React from 'react'
import HeroSection from '../../components/core/static_pages_core/BlogListing/HeroSection'
import MainBody from '../../components/core/static_pages_core/BlogListing/MainBody'
import { Helmet } from 'react-helmet'
const BlogListing = () => {
  return (

    <>
    
    <Helmet>
        <title>BlogListing</title>
        <meta
          name="description"
          content={`Blog Listing`}
        />
      </Helmet>

    <div className=' lg:space-y-[100px] pb-[50px] space-y-[72px]'>
        <HeroSection/>
        <MainBody/>
    </div> </>

)
}

export default BlogListing