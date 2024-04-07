import React from 'react'

interface Props {
  searchParams?:{
    error?:string;
  },
  // searchParams:any
}

function ErrorTest({searchParams}: Props) {
  if(searchParams?.error==="true"){
    throw new Error("This is an error")
  }

  return (
    <div>Error Test</div>
  )
}

export default ErrorTest