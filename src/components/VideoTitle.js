import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute text-white ml-24 mt-[275px] w-1/3'>
        <h1 className='p-2 text-3xl font-extrabold'>{title}</h1>
        <p className='p-2'>{overview}</p>
        <button className='m-2 p-2 px-6 bg-white text-black font-bold text-xl rounded-md hover:opacity-80'>▶ Play</button>
        <button className='m-2 p-2 px-6 bg-white text-black font-bold text-xl rounded-md opacity-70 hover:opacity-50'>🛈 More Info</button>
    </div>
  )
}

export default VideoTitle