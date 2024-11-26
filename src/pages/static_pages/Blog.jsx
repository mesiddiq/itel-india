import React from 'react'
import MainBody from '../../components/core/static_pages_core/Blog/MainBody'
import { useParams } from 'react-router-dom'
const Blog = () => {

	const { id } = useParams()

	return (
		<div>
			<MainBody id={id} />
		</div>
	)
}

export default Blog