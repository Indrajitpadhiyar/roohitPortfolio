import { useState } from 'react';
import { motion } from 'framer-motion';
import MangaBook from './MangaBook';

const StoryArc = ({ panelsImg }) => {
    const [isBookOpen, setIsBookOpen] = useState(false);
    const [selectedPanelIdx, setSelectedPanelIdx] = useState(0);

    const panels = [
        { id: 1, title: 'The Blank Genesis', desc: 'Where the first erratic strokes met a burning soul.' },
        { id: 2, title: 'Digital Descent', desc: 'Wrestling with pixels in the silence of the night.' },
        { id: 3, title: 'The Master Protocol', desc: 'When chaos finally obeyed the designer’s command.' },
    ];

    const openBook = (idx) => {
        setSelectedPanelIdx(idx);
        setIsBookOpen(true);
    };

    return (
        <section id="story" className="py-24 bg-white relative overflow-hidden">
            {/* Scribble background details */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20rem] font-black absolute -top-20 -left-20 rotate-12 text-black">MANGA</span>
                <span className="text-[20rem] font-black absolute -bottom-20 -right-20 -rotate-12 text-black">DESIGN</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                        • My <span className="text-purple-600 underline decoration-black decoration-8">Story Arc</span> •
                    </h2>
                    <p className="text-xl text-black/60 max-w-2xl font-medium">
                        Every masterpiece starts as a simple stroke. Here's how my designer journey unfolded.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {panels.map((panel, index) => (
                        <motion.div
                            key={panel.id}
                            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1 : 1 }}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => openBook(index)}
                            className="bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(124,58,237,1)] transition-all flex flex-col group cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] border-2 border-black mb-6">
                                <img
                                    src={panelsImg}
                                    alt={`Panel ${panel.id}`}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    style={{
                                        objectPosition: `${index * 50}% center` // Simple simulation of different panels from one image
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                    Episode {panel.id}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-black uppercase italic tracking-tight group-hover:text-purple-600 transition-colors">
                                    {panel.title}
                                </h3>
                                <p className="text-black/70 font-medium leading-relaxed">
                                    {panel.desc}
                                </p>
                            </div>

                            {/* Speech bubble decor */}
                            <div className="mt-6 flex justify-end">
                                <div className="relative text-xs font-bold uppercase tracking-tighter border-2 border-black rounded-full px-4 py-2 group-hover:bg-black group-hover:text-white transition-all">
                                    READ MANGA...
                                    <div className="absolute -bottom-2 right-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45 group-hover:bg-black group-hover:border-black transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Manga Book Overlay */}
            <MangaBook
                isOpen={isBookOpen}
                onClose={() => setIsBookOpen(false)}
                panels={panels}
                initialPage={selectedPanelIdx}
                panelsImg={panelsImg}
            />
        </section>
    );
};

export default StoryArc;

