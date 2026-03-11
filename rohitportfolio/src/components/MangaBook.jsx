import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Page = forwardRef((props, ref) => {
    return (
        <div className="bg-[#f4f1ea] border-l-2 border-black/10 shadow-inner flex flex-col h-full overflow-hidden" ref={ref}>
            <div className="p-8 flex-grow flex flex-col relative">
                {/* Manga Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

                {props.children}

                {/* Page Number */}
                <div className="absolute bottom-4 right-6 text-black/30 font-serif italic text-sm">
                    {props.number}
                </div>
            </div>
        </div>
    );
});

const MangaBook = ({ isOpen, onClose, panels, initialPage, panelsImg }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                >
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-6 right-6 z-50 p-3 bg-white border-4 border-black text-black hover:bg-purple-600 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </motion.button>

                    <motion.div
                        initial={{ scale: 0.8, rotateY: -20, opacity: 0 }}
                        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                        exit={{ scale: 0.8, rotateY: 20, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="relative w-full max-w-5xl aspect-[1.4/1] bg-transparent flex items-center justify-center perspective-[1000px]"
                    >
                        <HTMLFlipBook
                            width={500}
                            height={700}
                            size="stretch"
                            minWidth={315}
                            maxWidth={1000}
                            minHeight={400}
                            maxHeight={1533}
                            maxShadowOpacity={0.5}
                            showCover={false}
                            mobileScrollSupport={true}
                            startPage={initialPage * 2} // Assuming 2 pages per episode (left/right)
                            className="shadow-2xl"
                        >
                            {/* Intro Page */}
                            <Page number="i">
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                    <div className="w-24 h-1 bg-black mb-4" />
                                    <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">My Story Arc</h1>
                                    <p className="text-black/60 font-medium italic">A Portfolio Manga</p>
                                    <div className="w-12 h-1 bg-black mt-4" />
                                    <div className="mt-12 animate-pulse">
                                        <p className="text-xs font-bold uppercase tracking-widest text-purple-600">Flip to start</p>
                                    </div>
                                </div>
                            </Page>

                            {/* Spread each panel over 2 pages */}
                            {panels.map((panel, idx) => {
                                const storyDetails = [
                                    {
                                        reflection: "The world was a grayscale blur until I held that first HB pencil. It wasn't just lead on paper; it was the birth of a universe.",
                                        quote: "Before the grid, there was only the ghost of an idea.",
                                        sketchLabel: "RAW SOUL",
                                        finalLabel: "GENESIS",
                                        sideNote: "Every hero has a beginning. Mine was a messy sketch in the back of a notebook."
                                    },
                                    {
                                        reflection: "Thousands of hours lost in the neon glow of the monitor. Pixels became my obsession, and the 'Undo' button my only friend.",
                                        quote: "The screen is a cruel master, but a brilliant canvas.",
                                        sketchLabel: "WIRE BATTLE",
                                        finalLabel: "PIXEL WAR",
                                        sideNote: "The struggle isn't about the tools; it's about the vision surviving the technology."
                                    },
                                    {
                                        reflection: "I finally stopped chasing trends and started creating movements. The design didn't just look good; it felt inevitable.",
                                        quote: "Order emerges from chaos only when the creator finds their voice.",
                                        sketchLabel: "STRATEGY",
                                        finalLabel: "ASCENSION",
                                        sideNote: "The Master Protocol is the moment where logic and art collide at terminal velocity."
                                    }
                                ][idx];

                                return [
                                    <Page key={`l-${panel.id}`} number={idx * 2 + 1}>
                                        <div className="h-full flex flex-col">
                                            <div className="border-4 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-grow overflow-hidden">
                                                <div className="relative h-full overflow-hidden">
                                                    <img
                                                        src={panelsImg}
                                                        alt={`Panel ${panel.id}`}
                                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                                        style={{ objectPosition: `${idx * 50}% center` }}
                                                    />
                                                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                                        VOL {panel.id}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <h2 className="text-3xl font-black italic uppercase tracking-tighter border-b-4 border-black pb-2 inline-block">
                                                    {panel.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </Page>,
                                    <Page key={`r-${panel.id}`} number={idx * 2 + 2}>
                                        <div className="h-full flex flex-col justify-center space-y-8">
                                            <div className="relative">
                                                <div className="absolute -top-10 -left-6 text-6xl font-black opacity-10 select-none">ACT {panel.id}</div>
                                                <p className="text-xl font-medium leading-relaxed text-black/80 font-serif italic border-l-4 border-purple-600 pl-4 py-2">
                                                    "{storyDetails.reflection}"
                                                </p>
                                            </div>

                                            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-purple-600 rotate-45 border-2 border-black" />
                                                <p className="text-xs font-bold uppercase tracking-tight italic leading-snug">
                                                    {storyDetails.sideNote}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 h-32">
                                                <div className="border-2 border-black p-2 flex items-center justify-center relative overflow-hidden group/tile cursor-help">
                                                    <div className="absolute inset-0 bg-black/5 group-hover/tile:bg-transparent transition-colors" />
                                                    <span className="text-[10px] font-black uppercase rotate-90 w-full text-center group-hover/tile:text-purple-600 transition-colors">
                                                        {storyDetails.sketchLabel}
                                                    </span>
                                                </div>
                                                <div className="border-2 border-black p-2 bg-black flex items-center justify-center relative group/tile cursor-help overflow-hidden">
                                                    <div className="absolute inset-0 bg-purple-600/20 group-hover/tile:bg-transparent transition-colors" />
                                                    <span className="text-[10px] font-black uppercase text-white group-hover/tile:text-purple-400 transition-colors">
                                                        {storyDetails.finalLabel}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-[10px] font-bold text-center uppercase tracking-[0.2em] opacity-30 italic">
                                                {storyDetails.quote}
                                            </p>
                                        </div>
                                    </Page>
                                ];
                            })}

                            {/* Ending Page */}
                            <Page number="End">
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                    <h2 className="text-4xl font-black italic uppercase tracking-tighter">To Be Continued...</h2>
                                    <p className="text-black/60 font-medium italic">Every project is a new chapter.</p>
                                    <button
                                        onClick={onClose}
                                        className="mt-12 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-purple-600 transition-colors"
                                    >
                                        Close Story
                                    </button>
                                </div>
                            </Page>
                        </HTMLFlipBook>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MangaBook;
