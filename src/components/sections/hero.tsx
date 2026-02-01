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



            </Container>
        </section>
    );
}
