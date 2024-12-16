import React from 'react'
import MainBody from '../../components/core/static_pages_core/Blog/MainBody'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Blog = () => {

	const { id } = useParams()

	return (
		<>
		
		<Helmet>
        <title>Blog</title>
        <meta
          name="description"
          content={`Blog,blogs`}
        />
      </Helmet>
		
		<div>
			<MainBody id={id} />
		</div></>
	)
}

export default Blog