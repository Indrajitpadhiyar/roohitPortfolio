import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, MessageCircle, Send, ExternalLink } from 'lucide-react';

const InstagramPreview = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        className="absolute bottom-full left-0 mb-4 w-72 bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden"
    >
        {/* Manga texture overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

        <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3 border-b-2 border-black pb-3">
                <div className="w-16 h-16 border-4 border-black bg-purple-100 flex-shrink-0 relative overflow-hidden">
                    <img
                        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/1214304494f1.png"
                        alt="Profile"
                        className="w-full h-full object-contain grayscale"
                    />
                    <div className="absolute inset-0 border-t-2 border-black/20" />
                </div>
                <div>
                    <h4 className="font-black uppercase text-sm italic tracking-tighter">rohit.j.patil</h4>
                    <p className="text-[10px] font-bold text-black/40 uppercase">Designer / Visionary</p>
                    <div className="flex gap-2 mt-1">
                        <div className="px-1 bg-black text-white text-[8px] font-black uppercase tracking-tighter italic">Follow...</div>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-[10px] font-medium leading-tight text-black/70 italic">
                    "Transforming raw pixels into narratives. Every scroll is a new panel in my journey."
                </p>
                <div className="flex justify-between items-center bg-black/5 p-2 border-2 border-black text-[9px] font-black uppercase italic">
                    <span>99+ Panels</span>
                    <ExternalLink size={10} />
                </div>
            </div>
        </div>
    </motion.div>
);

const Contact = () => {
    const [isInstaHovered, setIsInstaHovered] = useState(false);

    const socials = [
        { icon: <Mail size={20} />, label: 'Email', color: 'bg-white', link: 'mailto:contact@rohit.design' },
        {
            icon: <Instagram size={20} />,
            label: 'Instagram',
            color: 'bg-[#FD1D1D]/10',
            link: 'https://www.instagram.com/rohit.j.patil',
            hasPreview: true
        },
        { icon: <MessageCircle size={20} />, label: 'Let\'s Talk!', color: 'bg-black text-white', link: '#' }
    ];

    const handleClick = (link) => {
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            {/* Geometric background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-black">
                            Let's <br />
                            <span className="text-purple-600 underline decoration-black decoration-[12px]">Connect!</span>
                        </h2>

                        <p className="text-xl font-medium text-black/70 leading-relaxed max-w-md">
                            Ready to turn your vision into a visual masterpiece? Hit me up and let's start the next chapter together!
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {socials.map((social, i) => (
                                <div key={i} className="relative">
                                    <AnimatePresence>
                                        {social.hasPreview && isInstaHovered && <InstagramPreview />}
                                    </AnimatePresence>
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        onMouseEnter={() => social.hasPreview && setIsInstaHovered(true)}
                                        onMouseLeave={() => social.hasPreview && setIsInstaHovered(false)}
                                        onClick={() => handleClick(social.link)}
                                        className={`flex items-center gap-3 px-6 py-3 border-4 border-black font-black uppercase text-sm tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(124,58,237,1)] transition-all ${social.color}`}
                                    >
                                        {social.icon}
                                        {social.label}
                                    </motion.button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(124,58,237,1)] relative overflow-hidden text-black">
                            {/* Comic book panel background lines */}
                            <div className="absolute top-0 right-0 p-4 font-black text-black/5 select-none text-4xl">
                                INBOX
                            </div>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-black">Subject Name</label>
                                    <input
                                        type="text"
                                        placeholder="TYPE YOUR NAME..."
                                        className="w-full bg-transparent border-b-4 border-black px-0 py-3 font-black placeholder:text-black/20 focus:outline-none focus:border-purple-600 transition-colors text-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-black">Electronic Mail</label>
                                    <input
                                        type="email"
                                        placeholder="YOUR@EMAIL.COM"
                                        className="w-full bg-transparent border-b-4 border-black px-0 py-3 font-black placeholder:text-black/20 focus:outline-none focus:border-purple-600 transition-colors text-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2 text-black">Your Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="SAY SOMETHING IMPACTFUL..."
                                        className="w-full bg-transparent border-b-4 border-black px-0 py-3 font-black placeholder:text-black/20 focus:outline-none focus:border-purple-600 transition-colors resize-none text-black"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full md:w-auto mt-4 px-10 py-5 bg-black text-white font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 group shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
                                >
                                    Transmit Message
                                    <Send size={20} className="group-hover:translate-x-2 transition-transform text-purple-400" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
