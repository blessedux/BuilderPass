import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Wallet, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome to BuilderHub</h1>
          <p className="text-gray-600">Sign in to start your Web3 building journey</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle>Choose Your Sign-In Method</CardTitle>
            <CardDescription>Connect your GitHub and wallet to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/onboarding">
              <Button className="w-full" size="lg">
                <Github className="w-5 h-5 mr-2" />
                Continue with GitHub
              </Button>
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>

            <Link href="/onboarding">
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
            </Link>

            <div className="text-center text-sm text-gray-500 mt-6">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
