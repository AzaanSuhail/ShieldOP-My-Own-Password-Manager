import React from 'react'

export default function Footer() {
  return (
    <div className='text-white bg-slate-800 flex flex-col justify-center items-center'>
         <div className="text-2xl font-bold logo">
          <span className="text-green-400">&lt;</span>
          Shied<span className="text-green-500">OP</span>
          <span className="text-green-500">/&gt;</span>
        </div>  

        <div className='flex'>
      Created with <img src='icons/heart.png' alt='heart' />by<a href="https://github.com/AzaanSuhail" target="_blank">&nbsp;Azaan Suhail</a>
        </div>

        
    </div>
  )
}
