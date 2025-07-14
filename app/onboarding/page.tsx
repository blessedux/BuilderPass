"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Upload, X } from "lucide-react"
import Link from "next/link"

const skillOptions = [
  "Solidity",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Rust",
  "Go",
  "Smart Contracts",
  "DeFi",
  "NFTs",
  "Web3.js",
  "Ethers.js",
  "UI/UX Design",
  "Product Management",
  "DevOps",
  "Security",
]

export default function OnboardingPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Builder Profile</h1>
          <p className="text-gray-600">Help us understand your skills and interests</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= step ? "bg-purple-600" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-xl">
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Set up your public builder profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="handle">Handle</Label>
                    <Input id="handle" placeholder="@yourhandle" />
                  </div>
                  <div>
                    <Label htmlFor="name">Display Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself and your building experience..." rows={3} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="github">GitHub Username</Label>
                    <Input id="github" placeholder="github-username" />
                  </div>
                  <div>
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input id="wallet" placeholder="0x..." />
                  </div>
                </div>

                <Button onClick={() => setStep(2)} className="w-full">
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
                <CardDescription>Select your technical skills and areas of expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Select Your Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillOptions.map((skill) => (
                      <Badge
                        key={skill}
                        variant={selectedSkills.includes(skill) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-purple-100"
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                        {selectedSkills.includes(skill) && <X className="w-3 h-3 ml-1" />}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Beginner (0-1 years)</option>
                    <option>Intermediate (1-3 years)</option>
                    <option>Advanced (3-5 years)</option>
                    <option>Expert (5+ years)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Full-time (40+ hours/week)</option>
                    <option>Part-time (20-40 hours/week)</option>
                    <option>Weekends only</option>
                    <option>Project-based</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Interests & Goals</CardTitle>
                <CardDescription>What are you looking to build and achieve?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Preferred Chains</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "Solana", "Avalanche"].map((chain) => (
                      <Badge key={chain} variant="outline" className="cursor-pointer hover:bg-purple-100">
                        {chain}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Interested In</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Hackathons", "Grants", "Bounties", "Full-time Roles", "Freelance", "Mentoring"].map(
                      (interest) => (
                        <Badge key={interest} variant="outline" className="cursor-pointer hover:bg-purple-100">
                          {interest}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="goals">Goals</Label>
                  <Textarea id="goals" placeholder="What do you hope to achieve on BuilderHub?" rows={3} />
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Link href="/dashboard" className="flex-1">
                    <Button className="w-full">
                      Complete Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
