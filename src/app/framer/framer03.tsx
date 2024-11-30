import React from 'react'
import {motion} from 'framer-motion';

const itemVariants = {
    hidden : {opacity:0, y:20},
    visible : {opacity:1, y:0}
}
const Framer03 = () => {
  return (
    <>
        <motion.ul>
            {[1,2,3].map((item, index)=> (
                <motion.li
                    key={item}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{
                        duration:0.5,
                        delay : index * 0.4, // 각 항목마다 0.4초씩 지연
                        type : 'spring'
                        
                    }}
                >
                    리스트 항목 {item}
                </motion.li>
            ))}
        </motion.ul>
        <motion.ul 
            initial='hidden'
            animate='visible'
            transition={{
                delayChildren : 1.5, // 애니메이션 시작시간 지연
                staggerChildren : 0.4, // 자식요소 각각 애니메이션 시간 지연
            }}
        >
            {[1,2,3].map((item, index)=> (
                <motion.li
                key={item}
                variants={itemVariants} // 애니메이션 상태 객체 가져오기
                >
                    리스트 항목 {item}
                </motion.li>
            ))}
        </motion.ul>
    </>
  )
}

export default Framer03