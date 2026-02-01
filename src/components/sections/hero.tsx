"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-black pt-32 pb-16 md:pt-48">
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/20 rounded-full blur-[120px] opacity-30 pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 pl-1 pr-3 py-1 backdrop-blur-md"
                >
                    <span className="flex h-2 w-2 rounded-full bg-orange-500 mx-1"></span>
                    <span className="text-[10px] font-bold tracking-wider text-zinc-300 uppercase">Coming soon to App Store</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-[family-name:var(--font-fraunces)] italic text-6xl font-medium tracking-tight text-white md:text-8xl lg:text-9xl leading-[0.9] md:leading-[0.9]"
                >
                    Create viral videos <br />
                    <span className="bg-gradient-to-r from-red-400 via-rose-500 to-red-600 bg-clip-text text-transparent pb-4 inline-block">
                        In One Click
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl font-light"
                >
                    No complex editing. No wasted time. Just enter a prompt, choose a model, and get a share-ready video instantly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button
                        className="rounded-full bg-white text-black hover:bg-gray-100 px-8 h-14 text-base font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 384 512" fill="currentColor">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 79.9c14.7 39.4 39.2 81.3 69.8 111.9 23.3 22.8 51.5 22.1 71.2 7 20.2-15 48.7-15 70.4 0 25.1 16.2 51.1 11.2 73.4-6.4 25.4-20 54.4-60 54.4-60s-40.1-15.6-38.3-77.2zm-58.4-177.3c15-18.8 24.3-43.2 21-69.5-20.9 1.1-46.7 14.3-61.9 32.5-13.6 15.9-22 40-19.4 62.4 23.3 1.8 47.9-10.4 60.3-25.4z" />
                        </svg>
                        Download on the App Store
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-full border border-white/10 bg-zinc-900/60 text-white hover:bg-white/5 px-6 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-md"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6154] text-white font-bold text-xs">P</span>
                        Product Hunt
                    </Button>
                </motion.div>



            </Container>
        </section>
    );
}
