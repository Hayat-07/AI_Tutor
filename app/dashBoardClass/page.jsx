import React from 'react'

function page() {
    return (
        <div className='grid   grid-cols-8 gap-4 min-h-screen bg-amber-700 text-black'>
            <div className=' col-span-1 bg-blue-700  p-4 h-fill'>left</div>

            <div className=' grid grid-rows-8 col-span-7  bg-red-700 h-fill'>

                <div className='grid row-span-1 col-span-12 bg-cyan-500 justify-center items-center '>DashBoard Class</div>

                
            </div>
        </div>
    )
}

export default page