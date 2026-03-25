import { useState } from "react";
import PasswordGate from "./components/PasswordGate";
import Timeline from "./components/Timeline";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
  <AnimatePresence mode="wait">
    {!unlocked ? (
      <motion.div key="gate">
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      </motion.div>
    ) : (
      <motion.div key="timeline">
        <Timeline />
      </motion.div>
    )}
  </AnimatePresence>
);
}

export default App;