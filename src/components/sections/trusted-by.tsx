"use client";

import { cn } from "@/lib/utils";

// Using Simple Icons CDN for reliable, consistent SVG logos
const companies = [
    { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/white" },
    { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/white" },
    { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/white" },
    { name: "Snapchat", logo: "https://cdn.simpleicons.org/snapchat/white" },
    { name: "Pinterest", logo: "https://cdn.simpleicons.org/pinterest/white" },
    { name: "Twitch", logo: "https://cdn.simpleicons.org/twitch/white" },
    { name: "BuzzFeed", logo: "https://cdn.simpleicons.org/buzzfeed/white" },
    { name: "Vimeo", logo: "https://cdn.simpleicons.org/vimeo/white" },
];

export function TrustedBy() {
    return (
        <section className="py-24 border-b border-white/5 bg-black overflow-hidden relative">
            <div className="text-center mb-12">
                <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Trusted by these companies</p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* 
               Marquee Container 
               We use a mask-image to create the soft usage on the edges (300px as requested).
               The mask makes the content transparent at the start and end of the container.
            */}
                <div
                    className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row w-full max-w-7xl relative"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    {/* 
                   We render the list multiple times to ensure seamless looping without gaps.
                   5 times is usually safe for most screen widths with this number of logos.
                */}
                    {Array(5).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row items-center",
                                // Pause animation on hover if desired, but user didn't explicitly ask for it
                                // "group-hover:[animation-play-state:paused]" 
                            )}
                        >
                            {companies.map((company, j) => (
                                <div key={`${i}-${j}`} className="flex items-center justify-center h-12 w-32 px-4 opacity-40 hover:opacity-100 transition-opacity">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-8 md:h-9 w-auto object-contain"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
            @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% - var(--gap))); }
            }
            .animate-marquee {
                animation: marquee 80s linear infinite; /* Slower, smoother speed */
            }
        `}</style>
        </section>
    );
}
