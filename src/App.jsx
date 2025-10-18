import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "../pages/LandingPage";
import PortfolioPage from "../pages/PortfolioPage";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LandingPage onEnter={() => setShowPortfolio(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: "anticipate" }}
          >
            <PortfolioPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;