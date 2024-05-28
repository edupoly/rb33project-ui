import React from 'react'
import { useGetAllPostsQuery } from '../../services/postsApi'

function Posts() {
  var {isLoading,data}=useGetAllPostsQuery()
  return (
    <div>
        <h1>Posts</h1>
        {
          !isLoading && data?.map((post)=>{
            return <li>{post.title}</li>
          })
        }
    </div>
  )
}

export default Posts