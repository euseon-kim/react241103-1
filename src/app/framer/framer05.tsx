import React from 'react'
import {motion, useInView, useScroll, useTransform} from 'framer-motion';


const Framer05 = () => {
    /*
        [useScroll]
        스크롤 진행도를 0에서 1사이의 값으로 나타내는 motionValue 객체
    */
   const {scrollYProgress} = useScroll();
   /*
        [useTransform]
        Motion Value(number)를 가져와 입력값의 범위만큼 출력값의 범위로 변화
   */
    const backgroundColor = useTransform(
        scrollYProgress,  // 변환의 입력값
        [0.5,1], // 입력값의 범위를 정의
        ['#f00', '#00f'] // 출력값의 범위를 정의
    )
    window.addEventListener('scroll', ()=>{
        console.log(scrollYProgress.get());
    })
  return (
    <>
        <motion.div 
        className='h-[200vh] flex justify-center items-center '
        style={{backgroundColor}}>
            <h1 
            className='text-white text-4xl'>
                스크롤에 따라 색상 바꾸기</h1>
        </motion.div>
    </>
  )
}

export default Framer05