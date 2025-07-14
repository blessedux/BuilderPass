import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of builders already using Builder Pass to accelerate their Web3 journey
        </p>
        <Link href="/auth">
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
} 