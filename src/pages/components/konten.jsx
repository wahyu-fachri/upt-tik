import Link from 'next/link'
import React from 'react'

const konten = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];

      
  return (
    <div className=' container mx-auto m-auto my-auto '>    
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-1 relative group'>
            <div
            style={{ backgroundImage: `url(${slides[2].url})` }}
            className='w-full h-full rounded-3xl bg-center bg-cover duration-100'
            ></div>
        </div>
        
       

        <div className='container w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 px-16 pt-6 pb-8'>
            <p>hello selamat datang apa yang harus di lakukan </p>
            <p>hello selamat datang apa yang harus di lakukan </p>
            <p>hello selamat datang apa yang harus di lakukan </p>
            <p>hello selamat datang apa yang harus di lakukan </p>
            <p>hello selamat datang apa yang harus di lakukan </p>
            <p>hello selamat datang apa yang harus  </p>
        </div> 

    </div>
    

  );
  
}

export default konten