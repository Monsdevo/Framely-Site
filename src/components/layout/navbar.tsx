"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Framely Logo" className="h-8 w-8 object-contain" />
                    <span className="text-lg font-bold tracking-tight text-white">Framely</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="#why-framely" className="hover:text-white transition-colors">Why Framely?</Link>
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#waitlist">
                        <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-6 font-bold shadow-lg transition-all hidden sm:flex items-center">
                            <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 79.9c14.7 39.4 39.2 81.3 69.8 111.9 23.3 22.8 51.5 22.1 71.2 7 20.2-15 48.7-15 70.4 0 25.1 16.2 51.1 11.2 73.4-6.4 25.4-20 54.4-60 54.4-60s-40.1-15.6-38.3-77.2zm-58.4-177.3c15-18.8 24.3-43.2 21-69.5-20.9 1.1-46.7 14.3-61.9 32.5-13.6 15.9-22 40-19.4 62.4 23.3 1.8 47.9-10.4 60.3-25.4z" /></svg>
                            Download
                        </Button>
                    </Link>
                </div>
            </Container>
        </header>
    );
}
