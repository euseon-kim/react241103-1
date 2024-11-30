import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion';


const Framer04 = () => {
    const ref = useRef(null);
    /*
        [useInView]
        특정 요소가 뷰포트에 보이는지 여부를 감지하는데 사용
        반환값 : boolean
    */

    const isInView = useInView(ref, {
        once: false, // 한 번만 실행여부
        amount : 0.5, // 50% 보일 때 true로 바뀜
    })
    console.log(isInView)
  return (
    <>
        <div className='h-[200vh]'></div>
        <div className='border border-red-500'>
            <motion.div 
            ref = {ref}
            initial={{opacity:0}}
            animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : 200}}
            transition={{duration:1, ease:'easeInOut'}}
            className='bg-blue-500 size-40'>
                Box
            </motion.div>
        </div>
    </>
  )
}

export default Framer04