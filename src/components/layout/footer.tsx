"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 text-muted-foreground">
            <Container>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-800 font-bold text-white">
                                F
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">Framely</span>
                        </Link>
                        <p className="max-w-xs text-sm">
                            The fastest way to create viral short-form videos for social media. Zero friction, maximum quality.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-red-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-red-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-red-400 transition-colors">Showcase</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacypolicy" className="hover:text-red-400 transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-red-400 transition-colors">Terms</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Social</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs md:flex-row">
                    <p>© 2024 Framely Inc. All rights reserved.</p>
                    <p>Designed with passion in San Francisco.</p>
                </div>
            </Container>
        </footer>
    );
}
