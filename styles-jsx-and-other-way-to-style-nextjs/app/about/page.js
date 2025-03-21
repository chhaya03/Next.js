"use client"
import React from 'react'

const page = () => {
  return (
  <div>
    {/* first container */}
      <div className='container'>
      <h1>About me</h1>
      <p>Hey i am good girl</p>
    

    <style jsx>{`

      .container{
       background-color:red
      }
    `}
    </style>

  </div>

{/* second container */}
    <div className='container'>
      Hey i am fine
    </div>
  </div>
  )
}

export default page
