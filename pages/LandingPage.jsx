
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import profilePic from "../src/assets/profile.png";
import bg from "../src/assets/background.jpg";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.45 } },
};

export default function LandingPage({ onEnter }) {
  const firedRef = useRef(false);
  const touchStartRef = useRef(null);

  useEffect(() => {
    if (!onEnter) return;

    const ENTER_DELAY = 700; // ms delay before actually entering (slower load)
    function triggerEnter() {
      if (firedRef.current) return;
      firedRef.current = true;
      setTimeout(() => {
        try {
          onEnter();
        } catch (err) {
          // swallow errors to avoid breaking the page
          console.error(err);
        }
      }, ENTER_DELAY);
    }

    function handleWheel(e) {
      if (firedRef.current) return;
      // require a larger downward scroll to avoid accidental triggers
      if (e.deltaY > 80) {
        triggerEnter();
      }
    }

    function handleKey(e) {
      if (firedRef.current) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        triggerEnter();
      }
    }

    function handleTouchStart(e) {
      touchStartRef.current = e.touches?.[0]?.clientY ?? null;
    }

    function handleTouchMove(e) {
      if (firedRef.current) return;
      const current = e.touches?.[0]?.clientY ?? null;
      if (touchStartRef.current != null && current != null) {
        // require a stronger swipe up to trigger
        if (touchStartRef.current - current > 100) {
          triggerEnter();
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [onEnter]);

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen cursor-pointer select-none"
      title="Click to enter portfolio"
      onClick={onEnter}
      variants={containerVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* dark overlay for readability */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center">
        <motion.img
          src={profilePic}
          alt="Pranav T S S"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-white mb-6 shadow-2xl object-cover ring-4 ring-indigo-500/20"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.08 }}
        />

        <motion.h1
          className="text-5xl font-extrabold mb-2 tracking-wide text-white drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 520, damping: 22, delay: 0.22 }}
        >
          PRANAV T S S
        </motion.h1>

        <motion.p
          className="text-xl text-indigo-300 font-semibold"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
        >
          Web Developer
        </motion.p>
        <motion.p className="mt-6 text-gray-400 italic text-sm select-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Click anywhere to enter
        </motion.p>
      </div>
    </motion.div>
  );
}

LandingPage.defaultProps = {};

