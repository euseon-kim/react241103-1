import React from 'react'
import {motion} from 'framer-motion';

const Framer02 = () => {
  return (
    <>
        <motion.div 
        initial = {{opacity:0, y : 100}} // 요소의 초기상태
        animate = {{opacity:1, y : 0}} // 요소의 최종상태
        transition={{
            duration: 1.5, // 애니메이션 지속시간
            delay : 0.5, // 애니메이션 시작 전 대기시간
            ease : 'easeInOut', // 가속도
            type : 'spring',
            bounce : 0.25, // spring의 탄성
            repeat : Infinity, // 반복횟수
            repeatType : 'reverse',
            repeatDelay : 1, 
        }}  
        className='bg-green-500 size-32 m-4'>

        </motion.div>
    </>
  )
}

export default Framer02