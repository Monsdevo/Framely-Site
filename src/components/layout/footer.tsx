"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 text-muted-foreground">
            <Container>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Framely Logo" className="h-8 w-8 object-contain" />
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
                            <Link href="https://instagram.com/tryframely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="https://youtube.com/@framelyapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
                            <Link href="https://tiktok.com/@framelyapp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/5 pt-8 text-xs">
                    <p>© 2026 Mons Games. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
