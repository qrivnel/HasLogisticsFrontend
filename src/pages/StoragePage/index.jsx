import React from 'react'

export default function index() {
  return (
    <div id='mainDiv' className='w-screen h-screen'>
            <div id='labelDiv' className={`flex flex-col w-screen h-screen p-4 bg-storage bg-cover bg-no-repeat items-end justify-end`} >
                <label className='text-9xl font-serif'>
                    Depolama
                </label>
                <label className='text-9xl font-serif'>
                    Hizmeti
                </label>
            </div>
        </div>
  )
}
