import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'framer-motion';

const Framer07 = () => {
    const ref1 = useRef(null);
    
    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: ref1, // 스크롤 진행도 측정할 대상요소 지정
        offset : ['start end', 'end start'] 
        // 시작 - 요소의 시작점이 start, 뷰포트가 end // 끝 - 요소의 시작점 end, 뷰포트 start

    }) 
    const scale = useTransform(scrollYProgress1,[0.4,0.6],[0.5,1])
    const rotate = useTransform(scrollYProgress1,[0.4,0.6],[0,360])

  return (
    <>
    <section className='h-screen '></section>
    <section ref={ref1} className='h-screen bg-gray-100 flex justify-center items-center'>
        <motion.div 
            style={{scale, rotate}}
            className='bg-blue-500 size-40 rounded-lg'
        >
            섹션1
        </motion.div>
    </section>
    <section className='h-screen bg-gray-100 flex justify-center items-center'>
        <motion.div 
            style={{rotate}}
            className='bg-green-500 size-40 rounded-lg'
        >
            섹션2
        </motion.div>
    </section>
    <section className='h-screen '></section>
    </>
    
  )
}

export default Framer07