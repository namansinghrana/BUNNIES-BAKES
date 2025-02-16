import Sanidhya from "../images/sanidhya.jpg";
import Naman from "../images/naman.jpg";
import Chip from "../images/oschip.png";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut" } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2, ease: "easeInOut" } },
};

const leftchipVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1,  transition: { duration: 0.2, ease: "easeInOut" } },
  exit: { x: "-100vw", opacity: 1,  transition: { duration: 0.2, ease: "easeInOut" } }, // Moves out smoothly
};

const rightchipVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1,rotate: [0, -180],  transition: { duration: 0.2, ease: "easeInOut" } },
  exit: { x: "-100vw", opacity: 1,  transition: { duration: 0.2, ease: "easeInOut" } }, // Moves out smoothly
};

const OurStory = () => {
  return (
    <AnimatePresence mode="wait">
      <section className="relative bg-gradient-to-b from-[#e7c58d] via-[#E171C4] to-[#E171C4] min-h-screen">
        <motion.div
          className="relative flex flex-col justify-between items-center"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* White Card */}
          <motion.div className="mt-20 md:min-h-[38rem] lg:h-[35rem] md:w-[32rem] bg-white relative">
            {/* Floating Profile Images */}
            <motion.div className="relative">
              <motion.div className="absolute h-24 w-24 top-36 -left-20 rounded-full">
                <motion.img src={Naman} className="h-24 w-24 rounded-full" />
              </motion.div>
              <motion.div className="absolute h-24 w-24 top-5 -left-20 rounded-full">
                <motion.img src={Sanidhya} className="rounded-full" />
              </motion.div>
            </motion.div>

            {/* Story Text */}
            <motion.div className="flex flex-col justify-between items-center text-sm mb-10 mt-7 font-[20px] text-black font-crimson min-h-[26rem] px-4 pt-14">
              <p>
                Hi, we’re Sanidhya and Naman, co-founders of BUNNY BAKES. We’ve been friends for eight years: met at
                school, even started a previous business together (you could call us “snacks” entrepreneurs…).
                <br />
                <br />
                We both grew up eating cookies every morning for breakfast binging on the sugary crunch of the classic
                brands and then crashing in the afternoon when we were supposed to be at our most productive.
                <br />
                <br />
                Now that we’re adults, we’ve searched for years for a snack that has the same addictive quality but
                actually fuels us. We've turned up nothing.
                <br />
                <br />
                Plus, as we learned more about the snacks industry, we were shocked by the true scope of the problem.
                The average INDIAN eats thousands of snacks a year (this even includes people who don’t eat a single
                snack!), and kids are one of the largest consumers. Yet almost every version in the aisle is stuck in
                that old paradigm of grains and sugar.
                <br />
                <br />
                We experimented for over a year to create a snack inspired by the flavors and nostalgia of
                Saturday-morning-cartoon cookies but upgraded for a 21st-century consumer. A guilt-free treat that
                tastes like you remember and you can eat at any time of day.
                <br />
                <br />
                That’s what BUNNY BAKES is all about—we hope you enjoy!
              </p>
                  <motion.div className="mb-40"></motion.div>
            </motion.div>
            {/* Chips Animation */}
            <motion.img
              src={Chip}
              alt="Packet"
              className="absolute md:top-[30rem] left-[-6rem] w-[19rem]"
              variants={leftchipVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              exit="exit"
            />
          </motion.div>

          {/* Another Chip Rotated (Floating) */}
          <motion.img
            src={Chip}
            alt="Packet"
            className="absolute top-3 rotate-[180deg] left-[53%] w-[18rem]"
            variants={rightchipVariants}
            initial={{ rotate: 180, opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit="exit"
          />
        </motion.div>
        <motion.div className="pb-10"></motion.div>
      </section>
    </AnimatePresence>
  );
};

export default OurStory;
