"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const page = () => {
 // you can generate a list of links to the dynamic route
  const params = useParams()
const router =useRouter()

  return (
    <div>
      {/* // you can generate a list of links to the dynamic route */}
      <div>{params.slug} </div> 

      
      <button type='button' onClick={()=>router.push('/dashboard')}></button>
    </div>
  )
}

export default page
