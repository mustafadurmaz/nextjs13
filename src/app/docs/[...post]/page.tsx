import React from 'react'

interface Props {
    params:any,
}

function PostPage({params}: Props) {
  return (
    <div>PostPage: {params.post} </div>
  )
}

export default PostPage