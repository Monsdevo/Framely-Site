import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyFramely } from "@/components/sections/why-framely";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Testimonials />
      <Features />
      <div id="how-it-works" />
      <HowItWorks />
      <WhyFramely />
      <Footer />
    </main>
  );
}
