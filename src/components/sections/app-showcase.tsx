"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function AppShowcase() {
    return (
        <section className="py-32 bg-black overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Power in your <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Pocket</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        Designed for iOS. Fluid animations, haptic feedback, and a native experience that feels right at home.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative perspective-[2000px]">
                    {/* Phone 1: Create */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateY: -10 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-[300px] md:w-[350px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-red-500/10"
                    >
                        <img src="/screenshots/create.jpg" alt="Framely Create Interface" className="w-full h-full object-cover" />
                        {/* Screen Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Phone 2: Library */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateY: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-[300px] md:w-[350px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-red-500/10 mt-12 md:mt-0"
                    >
                        <img src="/screenshots/library.jpg" alt="Framely Library Interface" className="w-full h-full object-cover" />
                        {/* Screen Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                    </motion.div>
                </div>

            </Container>
        </section>
    );
}
