"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Framely makes me enjoy creating content again.",
        author: "Dan V",
        handle: "@danv_creates",
        role: "Content Creator"
    },
    {
        quote: "No other video AI app compares! The quality is insane.",
        author: "Dave G",
        handle: "@gdave",
        role: "TikTok Star"
    },
    {
        quote: "I love how fast it is. I'm fully transitioning my workflow to Framely.",
        author: "Scott R",
        handle: "@scottrych",
        role: "Video Editor"
    },
    {
        quote: "Finally a video generator with a useful style selector!",
        author: "Evan",
        handle: "@evanshots",
        role: "Filmmaker"
    },
    {
        quote: "The video experience I've been looking for. Better than I expected compared to Sora.",
        author: "Michael Marques",
        handle: "@mmarques",
        role: "Tech Reviewer"
    },
    {
        quote: "Simply the best generation experience for iOS. Framely makes it easier to centralize all workflows.",
        author: "Bernardo M.",
        handle: "@bernardo_m",
        role: "Creative Director"
    },
    {
        quote: "Sleek, modern, intuitive. Feels like editing on a Mac.",
        author: "Chris M",
        handle: "@chrism_art",
        role: "Designer"
    },
    {
        quote: "Definitely Better Video Tool than anything I used. Feels Snappy and Focused.",
        author: "Dharana",
        handle: "@dharan_ai",
        role: "AI Artist"
    },
    {
        quote: "The Beam experience, but for Video AI.",
        author: "Rafa Pagès",
        handle: "@rafapages",
        role: "Product Designer"
    },
    {
        quote: "I deleted 3 other AI apps after using this. The consistency is unmatched.",
        author: "Sarah J.",
        handle: "@sarah_j_vids",
        role: "Social Manager"
    },
    {
        quote: "The UI is just stunning. A masterclass in design.",
        author: "Alex D.",
        handle: "@alexdesign",
        role: "UX Designer"
    },
    {
        quote: "Being able to export directly to TikTok without watermark is a game changer.",
        author: "Jessica K.",
        handle: "@jessicak_reels",
        role: "Influencer"
    },
    {
        quote: "Fastest rendering I've seen on mobile.",
        author: "Tom H.",
        handle: "@tech_tom",
        role: "Developer"
    },
    {
        quote: "The 'Prompt to Video' feature actually understands context.",
        author: "Maria S.",
        handle: "@maria_stories",
        role: "Writer"
    },
    {
        quote: "Framely is what I expected AI video to be 2 years ago. It's finally here.",
        author: "Kevin L.",
        handle: "@kevin_future",
        role: "Futurist"
    },
    {
        quote: "The cinematic models are Hollywood level. I can't believe this runs on my phone.",
        author: "James Cameron (No, not that one)",
        handle: "@indie_james",
        role: "Director"
    },
    {
        quote: "My engagement tripled since I started using Framely for my hooks.",
        author: "Growth Guru",
        handle: "@viral_growth",
        role: "Marketer"
    },
    {
        quote: "It's so simple even my grandma could make a viral short.",
        author: "Family Vlogger",
        handle: "@fam_daily",
        role: "YouTuber"
    },
    {
        quote: "Vertical video first. Finally someone gets it.",
        author: "Mobile First",
        handle: "@vertical_vision",
        role: "Strategist"
    },
    {
        quote: "Updates are frequent and creating videos is addictive.",
        author: "App Addict",
        handle: "@app_reviewer_101",
        role: "Critic"
    }
];

export function Testimonials() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-24 bg-black border-t border-white/5 relative">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Loved by <span className="text-red-500">Creators</span>
                    </h2>
                    <p className="text-zinc-400">Join thousands of creators building their audience with Framely.</p>
                </div>

                <div className={cn(
                    "relative transition-all duration-700 ease-in-out",
                    !isExpanded && "max-h-[600px] overflow-hidden"
                )}>
                    {/* Masonry Layout using Columns */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="break-inside-avoid group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <p className="text-lg text-zinc-300 font-medium mb-6 leading-relaxed">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-bold text-white shrink-0">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">{t.author}</div>
                                        <div className="text-xs text-zinc-500">{t.handle}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade overlay when collapsed */}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-10" />
                    )}
                </div>

                <div className="mt-8 flex justify-center relative z-20">
                    <Button
                        variant="outline"
                        className="rounded-full bg-zinc-900 border-white/10 text-white hover:bg-zinc-800 hover:text-white px-8 h-12 gap-2"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>See all testimonials <ChevronDown className="w-4 h-4" /></>
                        )}
                    </Button>
                </div>
            </Container>
        </section>
    );
}
