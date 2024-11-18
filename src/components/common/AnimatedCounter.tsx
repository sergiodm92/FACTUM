import { motion, useMotionValue, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";


export const AnimatedCounter = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [displayValue, setDisplayValue] = useState(0);
    
  
    useEffect(() => {
      if (isInView) {
        const controls = animate(count, value, {
          duration: 2,
          onUpdate: (latest) => {
            setDisplayValue(Math.round(latest));
          },
        });
        return controls.stop;
      }
    }, [count, value, isInView]);
  
    return (
      <motion.div ref={ref} className="text-3xl font-bold text-gray-900 dark:text-white">
        {displayValue}{value !== 98 ? '+' : '%'}
      </motion.div>
    );
  };