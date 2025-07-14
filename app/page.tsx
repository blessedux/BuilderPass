import { Header, Hero, Features, CTA, Footer } from "@/components/landing"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
