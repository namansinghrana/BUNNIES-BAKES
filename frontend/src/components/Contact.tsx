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
            className="flex flex-col justify-between items-center relative"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Animated Bunny Images */}
            <motion.div className="relative w-full">
              <motion.img
                src={Bunny}
                className="absolute md:h-40 md:w-40 lg:h-64 lg:w-64 top-[24rem] left-[50%] translate-x-[160%] md:left-[30rem] lg:left-[32rem]"
              />
              <motion.img
                src={Bunny}
                className="absolute md:h-40 md:w-40 lg:h-64 lg:w-64 top-24 left-10 md:left-[5rem] translate-y-10"
              />
            </motion.div>

            {/* Contact Box */}
            <motion.div className="relative mt-20 h-[32rem] w-[28rem] bg-white shadow-lg rounded-lg">
              <motion.div className="flex flex-col items-center text-base text-black font-crimson px-6 py-10">
                <h2 className="mb-6 text-2xl font-black">CONTACT US</h2>
                <p className="text-black text-[0.85rem] text-center">
                  Don't cry over someone eating your snacks—we're here to help!
                  Get in touch with us for order questions or general feedback.
                  We're hungry for all of your thoughts!
                </p>
                <h3 className="font-semibold mt-4">hello@BUNNYBAKES.com</h3>
                <motion.img src={Logo} className="mt-10 w-40" />
              </motion.div>

            {/* Extra Chips */}
            <motion.img
              src={Chip}
              alt="Packet"
              initial={{ rotate: 180, opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              className="absolute -top-20 left-[17rem] -translate-x-1/2 w-[16rem]"
            />
              {/* Chips (Fixed Positioning + Animation) */}
              <motion.img
                src={Chip}
                alt="Packet"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                className="absolute -bottom-24 -left-28 w-[16rem]"
              />
            </motion.div>
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
};

export default Contact;
