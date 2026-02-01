"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Enter Your Prompt",
            desc: "Type a simple description of the video you want. No prompt engineering needed.",
        },
        {
            num: "02",
            title: "Choose Style",
            desc: "Select from our curated list of premium aesthetic models.",
        },
        {
            num: "03",
            title: "Share Instantly",
            desc: "Review the generated video and post directly to socials. It’s that fast.",
        },
    ];

    return (
        <section className="py-32 bg-zinc-950 text-white border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 z-10">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            From Idea to <br />
                            <span className="text-red-500">Real</span> in Seconds
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Framely removes the friction between your creativity and your audience.
                        </p>

                        <div className="grid grid-cols-1 gap-12">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-6 group"
                                >
                                    <span className="text-6xl font-bold text-white/5 group-hover:text-red-900/50 transition-colors font-mono">
                                        {step.num}
                                    </span>
                                    <div className="pt-4">
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed max-w-md">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Screenshot Integration */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 10, y: 100 }}
                        whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative w-[320px] rounded-[3rem] border-[8px] border-zinc-900 bg-black overflow-hidden shadow-2xl shadow-red-500/10 rotate-3 transition-transform hover:rotate-0 duration-500">
                            <img src="/screenshots/create.jpg" alt="Framely Create Screen" className="w-full h-full object-cover" />
                            {/* Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
