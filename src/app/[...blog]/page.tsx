import React from 'react'

interface Props {
    params:any,
}

function Blog2({params}: Props) {
  return (
    <div>Blog2:{params.blog} </div>
  )
}

export default Blog2