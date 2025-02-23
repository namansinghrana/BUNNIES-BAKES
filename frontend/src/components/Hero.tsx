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
    <motion.div  className="lg:w-8xl mx-auto px-4 sm:px-6 lg:px-3 py-20 overflow-x-hidden bg-gradient-to-b from-[#e9d4b9] via-[#E171C4] to-[#E171C4] min-h-screen">
      <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit">
            <motion.div className='relative lg:w-full lg:h-screen'>
            <motion.div 
              className='absolute lg:top-[7rem] top-[1.4rem] left-36 lg:left-[33.7rem] -translate-x-1/2 -translate-y-1/2 z-2'
              variants={pageVariants}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 0, y: 0, transition: {delay: 0.2 } }}>
              <motion.div 
              className='text-white lg:text-[3.1rem] md:text-[2.8rem] md:pl-14 lg:pl-15  font-crimson mx-4 w-max'>INSPIRING MINDFUL</motion.div>
              <motion.div className='text-white lg:text-7xl md:text-6xl font-crimson lg:w-[565px] md:pl-12 lg:ml-9 md:ml-14'>S N A C K I N G</motion.div>
              </motion.div>
              <motion.div className='flex flex-row items-start justify-center mr-32'>
            <motion.img 
              variants={chipAnimation}
              initial='initial'
              animate='animate'
              exit='exit'
              src={Chip2}
              alt="Packet" 
              className="absolute top-40 lg:-left-[38rem] md:-left-[26rem] -rotate-[6deg] z-0 -translate-x-[24rem] -translate-y-24 w-[74%]"/>
            <motion.img 
            src={Packet} 
            alt="Packet"
            className='lg:w-[76rem] md:w-[46rem] lg:h-auto lg:left-[72rem] md:left-[72rem] lg:mt-5 -mt-5 z-10'
            variants={pageVariants} />
            
            <motion.img 
            src={Chip} 
            alt="Packet" 
            className="absolute left-52 lg:-top-[12rem] lg:left-[77rem] md:-top-[8rem] md:left-[44rem] rotate-[33deg] translate-x-96 -translate-y-24 z-0 md:w-[70%]"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            />
            
            </motion.div>
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