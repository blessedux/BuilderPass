import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Builder Pass
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent">
              Dashboard
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 