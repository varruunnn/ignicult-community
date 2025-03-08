import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const emotes = ["⚡", "🚀", "🔥", "💨", "⚡", "🚀"]; 

const LoadingScreen = ({ loading }) => {
  const [currentEmote, setCurrentEmote] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentEmote((prev) => (prev + 1) % emotes.length);
      }, 180); 
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          style={{position:"fixed",inset:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"black",backgroundColorOpacity:"80%",color:"white"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key={currentEmote}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-6xl"
          >
            {emotes[currentEmote]}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-xl font-semibold"
          >
            Loading Community...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
