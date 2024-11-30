"use client"
import React,{useEffect} from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'

const HomeContent = () => {
    useEffect (()=>{
        AOS.init({
            duration:1000,
            once:true,
        });
    }, []);
  return (
    <div>
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url('/background.jpg')"}}>
            <div className='pl-0 md:pl-16 text-white text-center'>
                <h1 className='text-6xl font-bold drop-shadow-md 'data-aos="fade-up">Welcome My MakeUp City </h1>
                <p className='text-2xl mt-4'>It's Not A Just MakeUp  <br />   It's Beauty From My Own  City...</p>
                <button className='mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-800 rounded-md font-bold'>Shop Now</button>
                
            </div>
        </section>
    </div>
  )
}

export default HomeContent