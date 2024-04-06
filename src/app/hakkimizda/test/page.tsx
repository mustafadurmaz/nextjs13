import React from 'react'

async function delay(ms:number){
    return new Promise((resolve, reject) => setTimeout(resolve,ms));
}

type Props = {}

async function Test({}: Props) {
    await delay(3000);
  return (
    <div>Test Page</div>
  )
}

export default Test