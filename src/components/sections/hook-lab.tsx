"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Gauge } from "lucide-react";

export function HookLab() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
                            <Gauge className="w-3 h-3" />
                            New Feature
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Predict Virality with <br />
                            <span className="text-red-500">Hook Lab</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Stop guessing what works. Our AI analyzes your idea and generates high-converting hooks while giving you a <strong>Viral Score</strong> out of 10.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "AI-Powered Viral Scoring",
                                "High-Retention Hook Generation",
                                "Instant Idea Optimization",
                                "Click-Through Rate Prediction"
                            ].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-zinc-300"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Screenshot Integration */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -10, y: 50 }}
                        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative flex justify-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative w-[320px] rounded-[3rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-red-500/10 -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src="/screenshots/hook-lab.jpg" alt="Framely Viral Score Screen" className="w-full h-full object-cover" />
                            {/* Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
