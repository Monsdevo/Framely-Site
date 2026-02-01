"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Mail } from "lucide-react";

export function TestFlightCTA() {
    return (
        <section id="waitlist" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-900/5" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto backdrop-blur-md"
                >
                    <span className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold tracking-wider mb-6 border border-red-500/20">
                        COMING SOON TO TESTFLIGHT
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Waitlist</span>
                    </h2>

                    <p className="text-lg text-zinc-400 mb-10 max-w-lg mx-auto">
                        We're opening spots for beta testing very soon. Be the first to try Framely and shape the future of video creation.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-12 bg-black/50 border border-white/10 rounded-full pl-10 pr-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                            />
                        </div>
                        <Button className="h-12 rounded-full px-8 bg-white text-black hover:bg-gray-200 font-bold">
                            Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>

                    <p className="mt-6 text-sm text-zinc-600">
                        Limited spots available. No spam, just updates.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
