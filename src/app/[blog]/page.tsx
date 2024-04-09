import { notFound } from 'next/navigation'
import React from 'react'

// interface Props {
//     params:any,
// }

// function Blog({params}: Props) {
//   return (
//     <div>Blog:{params.blog} </div>
//   )
// }

function Blog({searchParams}:any) {
  if(searchParams.test==="true"){
    notFound();
  }
  return (
    <div>Blog </div>
  )
}



export default Blog