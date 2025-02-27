import Chip from '../images/oschip.png';
import Bunny from '../images/bunny.png';
import Logo from '../images/logo.png';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.4, ease: "easeInOut" } },
};

const Contact = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <section className="bg-gradient-to-b from-[#e7c58d] via-[#E171C4] to-[#E171C4] min-h-screen relative overflow-visible">
          <motion.div
            className="flex flex-col justify-around items-center relative"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Contact Box */}
            <motion.div className="relative mt-20 sm:h-[10rem] sm:w-[5rem]  md:h-[32rem] md:w-[23rem] lg:w-[28rem] bg-white shadow-lg rounded-lg">
              <motion.div className="flex flex-col items-center text-base text-black font-crimson px-6 py-10">
                <h2 className="mb-2 text-2xl font-black mt-[2.8rem]">CONTACT US</h2>
                <p className="text-black font-[20px] text-center mb-5">
                  Don't cry over someone eating your snacks—we're here to help!
                  Get in touch with us for order questions or general feedback.
                  We're hungry for all of your thoughts!
                </p>
                <h5 className="font-semibold">hello@BUNNYBAKES.com</h5>
                <p>Hop into happiness with every bite!</p>
                <motion.img src={Logo} className="mt-[4rem] w-40" />
              </motion.div>

            {/* Extra Chips */}
            <motion.img
              src={Chip}
              alt="Packet"
              initial={{ rotate: 180, opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              className="absolute -top-20 md:left-[12rem] lg:left-[17rem] -translate-x-1/2 w-[16rem]"
            />
              {/* Chips (Fixed Positioning + Animation) */}
              <motion.img
                src={Chip}
                alt="Packet"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                className="absolute -bottom-20 lg:-left-[5rem] md:-left-[5rem] w-[16rem]"
              />
            </motion.div>
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
};

export default Contact;
