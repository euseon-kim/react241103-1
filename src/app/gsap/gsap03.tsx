import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Gsap03 = () => {
    const boxRef = useRef(null);

    useEffect(()=> {
        // timeline : 애니메이션 순차적으로 제어할 때 사용
        // const tl = gsap.timeline();
        // tl.to(boxRef.current,{x:100, duration:2})
        // .to(boxRef.current,{rotation:360, duration:1})
        // .to(boxRef.current,{opacity:0, duration:1})

        gsap
        .timeline({
            scrollTrigger : {
                trigger : boxRef.current,
                start : 'top 80%',
                end : 'top 30%',
                scrub: true,
                markers:true,
            }
        }) .to(boxRef.current, {x:100, duration:1})
        .to(boxRef.current, {y:50, duration:1})
        .to(boxRef.current, {rotation:360, duration:1})
        .to(boxRef.current, {scale:1.5, duration:4})
        .to(boxRef.current, {opacity:0, duration:1})
        // duration으로 애니메이션 상대적인 진행속도 
    },[])

  return (
    <section className='h-[200vh] flex justify-center items-center'>
        <div ref={boxRef} className='size-20 bg-red-600'>
            BOX
        </div>

    </section>
  )
}

export default Gsap03