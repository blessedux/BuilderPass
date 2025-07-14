'use client'

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Github, ExternalLink, Star, Trophy, Users, Calendar, MapPin, LinkIcon, Mail, Download, Share2, RotateCcw } from "lucide-react"
import { CredentialBadge } from "@/components/3d-credential/credential-badge"
import { useState } from "react"

// Mock user data - in a real app, this would come from your database
const mockUserInfo = {
  name: "John Doe",
  username: "johndoe",
  cherryScore: 847,
  role: "Full-Stack Developer",
  location: "San Francisco, CA",
  skills: ["Solidity", "React", "TypeScript", "DeFi", "Smart Contracts"],
  achievements: [
    "ETH Denver 2024 Winner",
    "Polygon Hackathon Finalist",
    "DeFi Protocol Contributor",
    "Open Source Maintainer"
  ],
  avatar: "/placeholder-user.jpg"
}

export default function CredentialPage() {
  const [isRotating, setIsRotating] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">3D Credential Pass</h2>
            <p className="text-muted-foreground">Your interactive Web3 builder credential</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 3D Credential Badge */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Interactive 3D Badge
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRotating(!isRotating)}
              >
                <RotateCcw className={`w-4 h-4 mr-2 ${isRotating ? 'animate-spin' : ''}`} />
                {isRotating ? 'Stop' : 'Auto Rotate'}
              </Button>
            </CardTitle>
            <CardDescription>
              Hover and click to interact with your 3D credential
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <CredentialBadge userInfo={mockUserInfo} />
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-sm text-center">
                  🎮 Drag to rotate • Scroll to zoom • Click to interact
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Stats and Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={mockUserInfo.avatar} />
                  <AvatarFallback>{mockUserInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{mockUserInfo.name}</h3>
                  <p className="text-muted-foreground">@{mockUserInfo.username}</p>
                  <Badge className="mt-1">{mockUserInfo.role}</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CherryScore</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold">{mockUserInfo.cherryScore}</span>
                  </div>
                </div>
                <Progress value={84} className="h-2" />
                <p className="text-xs text-muted-foreground">Top 15% of builders</p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <p className="text-sm text-muted-foreground">Hackathons</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">28</div>
                  <p className="text-sm text-muted-foreground">Teams</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9</div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockUserInfo.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockUserInfo.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <Trophy className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Hackathons Won</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Users className="w-8 h-8 mx-auto text-blue-500 mb-2" />
            <div className="text-2xl font-bold">28</div>
            <p className="text-sm text-muted-foreground">Teams Joined</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Star className="w-8 h-8 mx-auto text-purple-500 mb-2" />
            <div className="text-2xl font-bold">4.9</div>
            <p className="text-sm text-muted-foreground">Team Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Github className="w-8 h-8 mx-auto text-green-500 mb-2" />
            <div className="text-2xl font-bold">47</div>
            <p className="text-sm text-muted-foreground">Repos Contributed</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest Web3 building activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="hackathons" className="space-y-4">
            <TabsList>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
            </TabsList>

            <TabsContent value="hackathons" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "ETH Denver 2024",
                    description: "Won 1st place with DeFi Yield Optimizer",
                    prize: "$15,000",
                    date: "Feb 2024",
                    status: "Winner"
                  },
                  {
                    title: "Polygon Hackathon",
                    description: "Built NFT Marketplace with advanced features",
                    prize: "$8,000",
                    date: "Jan 2024",
                    status: "Finalist"
                  }
                ].map((hackathon, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{hackathon.title}</CardTitle>
                          <CardDescription>{hackathon.date}</CardDescription>
                        </div>
                        <Badge variant={hackathon.status === 'Winner' ? 'default' : 'secondary'}>
                          {hackathon.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{hackathon.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">{hackathon.prize}</span>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Project
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="text-center py-8">
                <Github className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
                <p className="text-muted-foreground">Your ongoing Web3 projects and contributions</p>
              </div>
            </TabsContent>

            <TabsContent value="contributions">
              <div className="text-center py-8">
                <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Open Source</h3>
                <p className="text-muted-foreground">Your contributions to the Web3 ecosystem</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 