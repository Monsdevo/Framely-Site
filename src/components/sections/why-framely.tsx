"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Check } from "lucide-react";

const benefits = [
    "No prompt engineering required",
    "Optimized for TikTok & Reels aspect ratios",
    "Consistent character styling",
    "Automated audio sync",
    "One-tap social sharing",
    "Cloud rendering (saves your battery)"
];

export function WhyFramely() {
    return (
        <section id="why-framely" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual / Screenshot Side */}
                    <div className="order-2 lg:order-1 relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[320px] rounded-[3rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-red-500/10 -rotate-3 hover:rotate-0 transition-transform duration-500"
                        >
                            <img src="/screenshots/library.jpg" alt="Framely Library Screen" className="w-full h-full object-cover" />
                            {/* Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Decorative Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                            <p className="text-white font-bold text-lg mb-1">1k+</p>
                            <p className="text-zinc-500 text-sm">Videos Generated</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-[family-name:var(--font-fraunces)] italic text-4xl md:text-6xl text-white mb-6"
                        >
                            Why <span className="text-red-500">Framely?</span>
                        </motion.h2>
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            Most video generators are over-complicated tools built for pros. Framely is built for creators who want results <strong>now</strong>. We handle the technical heavy lifting so you can focus on the story.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-zinc-300 text-sm font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
