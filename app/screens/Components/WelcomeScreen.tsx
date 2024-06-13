"use client";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { useState, useEffect } from "react";

const WelcomeScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleText, setIsVisibleText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleText(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ clipPath: "circle(100%)" }}
          animate={{ clipPath: "circle(0% at 50% 150%)" }}
          transition={{ duration: 1.5, delay: 2 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center bg-grey-950 text-primary-300"
        >
          <AnimatePresence>
            {isVisibleText && (
              <motion.div
                key={"name"}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 500, opacity: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className=" text-4xl font-bold flex flex-col items-center"
              >
                <span>DAKSH SRIVASTAVA</span>
                <span className="opacity-70 mt-3">@Folio 2024</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default WelcomeScreen;
