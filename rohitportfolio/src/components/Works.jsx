import { motion } from 'framer-motion';
import { ExternalLink, Database, Layout, Smartphone } from 'lucide-react';

const Works = () => {
    const projects = [
        {
            title: 'Nexus UI Kit',
            category: 'System Design',
            icon: <Layout className="text-purple-500" />,
            color: 'bg-purple-50',
            borderColor: 'border-purple-200'
        },
        {
            title: 'Aura App',
            category: 'Mobile Design',
            icon: <Smartphone className="text-orange-500" />,
            color: 'bg-orange-50',
            borderColor: 'border-orange-200'
        },
        {
            title: 'Zenith Dashboard',
            category: 'Web Interface',
            icon: <Database className="text-blue-500" />,
            color: 'bg-blue-50',
            borderColor: 'border-blue-200'
        }
    ];

    return (
        <section id="works" className="py-24 bg-[#f8f8f8] border-t-4 border-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-20"
                >
                    <div className="h-1 w-24 bg-black" />
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase italic tracking-tighter">
                        Portfolio <span className="text-purple-600">Gallery</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative ${project.color} border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[15px_15px_0px_0px_#000] transition-all`}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-4 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {project.icon}
                                </div>
                                <motion.div
                                    whileHover={{ rotate: 45 }}
                                    className="p-2 cursor-pointer"
                                >
                                    <ExternalLink size={24} />
                                </motion.div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-bold uppercase tracking-widest text-black/50">
                                    {project.category}
                                </p>
                                <h3 className="text-3xl font-black uppercase italic tracking-tight group-hover:text-purple-600 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Manga decorative brush stroke overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] grayscale" />

                            <motion.div
                                className="mt-8 flex items-center gap-2 font-black uppercase text-sm cursor-pointer group-hover:translate-x-2 transition-transform"
                            >
                                View Project <span className="text-purple-600">»</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Creative Projects Label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block border-2 border-black border-dashed px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black/40">
                        ••• More Creative Projects Loading •••
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Works;
