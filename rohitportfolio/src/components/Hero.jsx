import { motion } from 'framer-motion';

const Hero = ({ heroBg, heroChar }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroBg}
                    alt="Anime City Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col md:flex-row items-center justify-between">

                {/* Text Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="md:w-1/2 text-white space-y-6"
                >
                    <div className="inline-block px-4 py-1 bg-purple-600/30 backdrop-blur-sm border-l-4 border-purple-500 text-sm font-mono tracking-widest uppercase">
                        Chapter 01: The Beginning
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none [text-shadow:4px_4px_0px_#7c3aed]">
                        A Designer <br />
                        <span className="text-purple-400">in The Making</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-white/80 max-w-xl italic">
                        • Still Struggling... Still Creating. •
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-white text-black font-black text-xl uppercase tracking-wider transition-all shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 border-2 border-black"
                    >
                        Enter My Story
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                </motion.div>

                {/* Hero Character Frame */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="md:w-1/2 mt-12 md:mt-0 relative group"
                >
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border-4 border-white shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden rounded-sm"
                        >
                            <img
                                src={heroChar}
                                alt="Hero Character"
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Manga halftone overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                        </motion.div>

                        {/* Status Badge */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 font-black rotate-12 border-2 border-black text-xs uppercase shadow-lg">
                            Designer Lv. 85
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Manga Lines */}
            <div className="absolute bottom-0 right-0 w-full h-32 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        </section>
    );
};

export default Hero;
