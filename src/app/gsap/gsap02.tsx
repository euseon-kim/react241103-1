import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 스크롤트리거 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Gsap02 = () => {
    const boxRef = useRef(null);

    useEffect(()=> {
        gsap.to(boxRef.current, {
            scrollTrigger : {
                // 스크롤 트리거 대상 : 어떤 요소를 만났을 때 애니메이션 시작
                trigger : boxRef.current,
                // 요소의 top 부분이 뷰포트 80% 지점에 도달할 때 애니메이션 시작
                start : 'top 80%',
                // 요소의 top 부분이 뷰포트 30% 지점에 도달할 때 애니메이션 끝
                end : 'top 30%',
                // markers : true,
                scrub:true,
            },
            x : 100,
            duration : 1,
        })
    })
  return (
    <section className='h-[200vh] flex justify-center items-center'>
        <div ref={boxRef} className='size-20 bg-red-600'>
            BOX
        </div>

    </section>
  )
}

export default Gsap02