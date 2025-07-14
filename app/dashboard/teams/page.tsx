"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, MessageSquare, UserPlus, Star, MapPin, Clock, Filter, Heart } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Alice Chen",
    handle: "@alicedev",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    cherryScore: 892,
    location: "San Francisco, CA",
    timezone: "PST",
    availability: "Full-time",
    matchScore: 95,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Bob Wilson",
    handle: "@bobwilson",
    role: "Smart Contract Developer",
    skills: ["Solidity", "Hardhat", "Security"],
    cherryScore: 756,
    location: "New York, NY",
    timezone: "EST",
    availability: "Part-time",
    matchScore: 88,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Carol Davis",
    handle: "@caroldesign",
    role: "Product Designer",
    skills: ["Figma", "Prototyping", "User Research"],
    cherryScore: 634,
    location: "Austin, TX",
    timezone: "CST",
    availability: "Weekends",
    matchScore: 82,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Kim",
    handle: "@davidkim",
    role: "Backend Developer",
    skills: ["Node.js", "GraphQL", "PostgreSQL"],
    cherryScore: 723,
    location: "Seattle, WA",
    timezone: "PST",
    availability: "Full-time",
    matchScore: 79,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const activeTeams = [
  {
    id: 1,
    name: "DeFi Dashboard Team",
    project: "ETH Global London",
    members: 3,
    needed: ["Backend Developer"],
    deadline: "5 days",
    description: "Building a comprehensive DeFi portfolio tracker",
  },
  {
    id: 2,
    name: "NFT Marketplace Squad",
    project: "Polygon Hackathon",
    members: 2,
    needed: ["Smart Contract Dev", "Designer"],
    deadline: "12 days",
    description: "Creating a gas-efficient NFT trading platform",
  },
]

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkill, setSelectedSkill] = useState("all")
  const [selectedAvailability, setSelectedAvailability] = useState("all")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Team Finder</h2>
            <p className="text-muted-foreground">Find teammates and join projects that match your skills</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="find-teammates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="find-teammates">Find Teammates</TabsTrigger>
          <TabsTrigger value="join-teams">Join Teams</TabsTrigger>
          <TabsTrigger value="my-teams">My Teams</TabsTrigger>
        </TabsList>

        <TabsContent value="find-teammates" className="space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, skills, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="solidity">Solidity</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Availability</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription>{member.handle}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold">{member.matchScore}%</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge className="mb-2">{member.role}</Badge>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">CherryScore</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold">{member.cherryScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{member.location}</span>
                      <span className="text-gray-400">•</span>
                      <span>{member.timezone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{member.availability}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4 border-t">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" className="flex-1">
                      <UserPlus className="w-4 h-4 mr-1" />
                      Invite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="join-teams" className="space-y-4">
          <div className="grid gap-4">
            {activeTeams.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.project}</CardDescription>
                    </div>
                    <Badge variant="outline">{team.deadline} left</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{team.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{team.members} members</span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {team.needed.map((role) => (
                        <Badge key={role} variant="secondary" className="text-xs">
                          Need: {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">Request to Join</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-teams">
          <div className="text-center py-8">
            <Users className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">My Teams</h3>
            <p className="text-gray-600">Teams you're currently part of</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
