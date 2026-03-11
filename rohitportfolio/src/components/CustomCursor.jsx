import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleHover = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [x, y]);

    return (
        <>
            {/* Primary Dot - Anime Sparkle style */}
            <motion.div
                style={{ x, y }}
                className="fixed top-0 left-0 w-4 h-4 bg-purple-600 rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 overflow-visible"
                animate={{
                    scale: isHovering ? 2 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
            >
                {/* Decorative anime lines around cursor */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-1 h-8 bg-purple-500/30 rotate-45" />
                    <div className="absolute w-1 h-8 bg-purple-500/30 -rotate-45" />
                </div>
            </motion.div>

            {/* Trailing Ring - Hand-drawn feel */}
            <motion.div
                style={{ x, y }}
                className="fixed top-0 left-0 w-12 h-12 border-2 border-black z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-lg"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    rotate: mousePos.x + mousePos.y, // Rotate based on position for a dynamic feel
                    borderRadius: isHovering ? "50%" : "20%",
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 150,
                }}
            />
        </>
    );
};

export default CustomCursor;
