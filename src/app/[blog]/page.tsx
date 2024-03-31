import React from 'react'

interface Props {
    params:any,
}

function Blog({params}: Props) {
  return (
    <div>Blog:{params.blog} </div>
  )
}

export default Blog