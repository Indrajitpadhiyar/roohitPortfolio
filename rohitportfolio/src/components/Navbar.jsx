import { motion } from 'framer-motion';
import { Ghost, Home, Briefcase, BookOpen, Send } from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { name: 'Home', icon: <Home size={20} />, id: 'home' },
        { name: 'Story', icon: <BookOpen size={20} />, id: 'story' },
        { name: 'Works', icon: <Briefcase size={20} />, id: 'works' },
        { name: 'Contact', icon: <Send size={20} />, id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            className="fixed top-6 left-1/2 -ms-px z-50 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border-2 border-black/80 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-8"
        >
            <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="text-black font-bold text-xl flex items-center gap-2 cursor-pointer"
            >
                <Ghost className="fill-purple-500" />
                <span className="hidden sm:inline font-mono tracking-tighter">ROHIT.art</span>
            </motion.div>

            <div className="w-px h-6 bg-black/20" />

            <div className="flex items-center gap-6">
                {navItems.map((item) => (
                    <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        whileHover={{ y: -2, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-black/70 hover:text-black transition-colors font-medium group"
                    >
                        <span className="group-hover:text-purple-600 transition-colors">
                            {item.icon}
                        </span>
                        <span className="hidden md:inline text-sm uppercase tracking-widest font-bold">
                            {item.name}
                        </span>
                    </motion.a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
