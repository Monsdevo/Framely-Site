"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Sparkles, Zap, Share2, Wand2 } from "lucide-react";

const features = [
    {
        title: "Prompt to Video",
        description: "Turn text into viral video instantly. No prompt engineering needed.",
        icon: Sparkles,
        gradient: "from-red-500/20 to-orange-500/20",
        delay: 0,
    },
    {
        title: "Premium Models",
        description: "Access top-tier cinematic models optimized for short-form content.",
        icon: Wand2,
        gradient: "from-purple-500/20 to-blue-500/20",
        delay: 0.1,
    },
    {
        title: "Instant Export",
        description: "Render in 1080p and export directly to TikTok, Reels, or Shorts.",
        icon: Share2,
        gradient: "from-pink-500/20 to-rose-500/20",
        delay: 0.2,
    },
    {
        title: "Zero Config",
        description: "We handle the parameters. You focus on the creative vision.",
        icon: Zap,
        gradient: "from-emerald-500/20 to-teal-500/20",
        delay: 0.3,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black pointer-events-none" />
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-end mb-12">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-4"
                        >
                            Built for <span className="text-red-500">Speed</span> & Quality
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400 text-lg"
                        >
                            Everything you need to create viral content, packed into one powerful app.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 hover:border-white/20 transition-all hover:-translate-y-1"
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    feature.gradient
                                )}
                            />

                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
