// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/panhwar11090')
    return response.json()
}