import Packet from '../images/chips.png';
import Chip from '../images/chip.png';
import Chip2 from '../images/chip2.png';
import { Heart } from 'lucide-react';
import Products from '../components/Products';
import { AnimatePresence, motion } from 'framer-motion';

// import { useState, useEffect } from "react"


const Hero = () => {

  const pageVariants = {
    initial: { opacity: 0, x: 50 }, // Start slightly offscreen and invisible
    animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut" } }, // Smooth fade-in with delay
    exit: { opacity: 0, x: -50, transition: { duration: 0.4, ease: "easeInOut" } }, // Smooth fade-out
  };

  const chipAnimation = {
    initial: { opacity: 0, x: 0 }, 
    animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut" } }, 
    exit: { x: -2000 ,y:-100, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
  };
  

  return (
    <>
    {/*Hero Section */}
    <AnimatePresence mode='wait'>
    <motion.div  className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-3 py-20 overflow-hidden bg-gradient-to-b from-[#e9d4b9] via-[#E171C4] to-[#E171C4] min-h-screen">
      <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit">
            <motion.div className='relative w-full h-screen'>
           <div className=''>
           <motion.img 
              variants={chipAnimation}
              initial='initial'
              animate='animate'
              exit='exit'
              src={Chip2}
              alt="Packet" 
              className="absolute top-40 -left-[38rem] -rotate-[6deg] z-0 -translate-x-[24rem] -translate-y-24 w-[74%]"/>
           </div>
           <motion.div 
            className='absolute top-[9rem] left-[27.5rem] transform -translate-x-1/2 -translate-y-1/2 z-10'
            variants={pageVariants}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0, y: 0, transition: {delay: 0.2 } }}>
            <motion.div 
            className='text-white text-6xl font-crimson mr-4 w-max'>INSPIRINGMINDFUL</motion.div>
            <motion.div className='text-white text-7xl font-crimson w-[565px] ml-2 tracking-wider '>S N A C K I N G</motion.div>
            </motion.div>
            <motion.div className='flex flex-col items-center justify-center mr-32'>
            <motion.img 
            src={Packet} 
            alt="Packet"
            className='w-[70rem] h-auto mt-5 z-10' 
             variants={pageVariants} /></motion.div>
            <motion.img 
            src={Chip} 
            alt="Packet" 
            className="absolute -top-40 left-[65rem] rotate-[33deg] translate-x-96 -translate-y-24 z-0 w-[70%]"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            />
            </motion.div>
      </motion.div>
    </motion.div>

    
      {/* Extra Hero Section */}
      <div className="hero-pattern pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Handcrafted with <Heart className="inline-block text-primary-400 h-8 w-8 mx-2" /> 
              <br className="sm:hidden" />
              in Every Bite
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our delightful collection of bunny-shaped treats, made with premium ingredients and baked to perfection.
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Products/>      
      </AnimatePresence>
    </>
  )
}

export default Hero;