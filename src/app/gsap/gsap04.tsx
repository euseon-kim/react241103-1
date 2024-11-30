import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Gsap04 = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect (()=> {
        gsap.timeline({
            scrollTrigger : {
                trigger:sectionRef.current,
                start : 'top top',
                end: 'bottom bottom',
                scrub: true,
                markers: true,
            }
        })
        .fromTo(
            cardsRef.current!.children,
            {y : '40%', opacity:0},
            // stagger 각 요소들 지연 시간(초)
            {y : '0%', opacity:1, duration:0.5,ease:'power2.out',stagger:0.2,}
        )
    },[])

  return (
    <>
        <section className='h-screen'></section>
        <section ref={sectionRef} className='h-[200vh] bg-gray-100'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mt-20 text-8xl font-bold mb-8 z-10 text-[#ccc'>GALLERY</h1>
            </div>
            <div ref={cardsRef} className='relative z-20'>
                <div className='w-64 h-48 bg-blue-500 rounded-lg mb-12'></div>
                <div className='w-64 h-48 bg-green-500 rounded-lg mb-12'></div>
                <div className='w-64 h-48 bg-red-500 rounded-lg mb-12'></div>
            </div>
        </section>
        <section className='h-screen'></section>
    </>
  )
}

export default Gsap04