import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Wallet } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-4 bg-secondary text-secondary-foreground border-border" variant="secondary">
          🚀 The Future of Web3 Building
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
          Discover. Build. Connect. Scale.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate platform for Web3 builders to find hackathons, form teams, showcase credentials, and turn ideas
          into funded startups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Github className="w-5 h-5 mr-2" />
              Sign Up with GitHub
            </Button>
          </Link>
          <Link href="/auth">
            <Button size="lg" variant="outline" className="border-border text-muted-foreground hover:bg-accent hover:text-foreground">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 