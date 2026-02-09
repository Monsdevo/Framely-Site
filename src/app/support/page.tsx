import { Container } from "@/components/ui/container";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-red-500" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
                    <p className="text-zinc-400 text-lg mb-8">
                        Have questions, feedback, or need help with Framely? We&apos;re here for you.
                    </p>

                    <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="text-zinc-400 mb-6">
                            For any inquiries, bug reports, or feature requests, please reach out via email:
                        </p>
                        <a
                            href="mailto:info@framelyapp.net"
                            className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            info@framelyapp.net
                        </a>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        We typically respond within 24-48 hours.
                    </p>

                    <div className="mt-12">
                        <Link href="/" className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </Container>
        </main>
    );
}
