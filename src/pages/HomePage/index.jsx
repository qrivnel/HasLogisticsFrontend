import React from 'react'
import Photo from '../../assets/logistics.png'

export default function index() {
    return (
        <div id='mainDiv' className='w-screen h-screen'>
            <div id='labelDiv' className='flex flex-col w-screen h-[980px] p-4 bg-logistics bg-contain bg-no-repeat justify-between'>
                <label className='text-8xl font-bold font-mono'>
                    Hızlı, Güvenli Taşımacılık
                </label>
                <label className='text-8xl font-bold font-mono'>
                    Has Lojistik
                </label>
            </div>
        </div>
    )
}
