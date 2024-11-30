import React from 'react'
import {motion} from 'framer-motion';

const Framer01 = () => {
  return (
      <>
          <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
              className='bg-blue-500 text-white rounded size-40 flex justify-center items-center'
          >

              CLICK

          </motion.div>

      </>
  )
}

export default Framer01