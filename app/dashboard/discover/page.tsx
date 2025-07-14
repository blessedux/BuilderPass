"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Calendar,
  DollarSign,
  Users,
  ExternalLink,
  Bookmark,
  Clock,
  Trophy,
  Gift,
  Target,
} from "lucide-react"

const opportunities = [
  {
    id: 1,
    type: "hackathon",
    title: "ETH Global London 2024",
    organizer: "ETH Global",
    prize: "$100,000",
    deadline: "March 15, 2024",
    daysLeft: 5,
    participants: 1200,
    description: "Build the future of Ethereum with cutting-edge tools and infrastructure.",
    tags: ["Ethereum", "DeFi", "Infrastructure", "Layer 2"],
    requirements: ["Solidity", "Web3.js", "React"],
    location: "London, UK",
    format: "In-person",
  },
  {
    id: 2,
    type: "grant",
    title: "Polygon zkEVM Grant Program",
    organizer: "Polygon Labs",
    prize: "$50,000",
    deadline: "March 22, 2024",
    daysLeft: 12,
    participants: 89,
    description: "Build innovative applications on Polygon zkEVM and scale Ethereum.",
    tags: ["Polygon", "zkEVM", "Scaling", "DApps"],
    requirements: ["Solidity", "JavaScript", "zkEVM"],
    location: "Remote",
    format: "Online",
  },
  {
    id: 3,
    type: "bounty",
    title: "Uniswap V4 Hook Development",
    organizer: "Uniswap Foundation",
    prize: "$25,000",
    deadline: "April 1, 2024",
    daysLeft: 22,
    participants: 156,
    description: "Create innovative hooks for Uniswap V4 to enhance trading experiences.",
    tags: ["Uniswap", "DeFi", "AMM", "Hooks"],
    requirements: ["Solidity", "DeFi Knowledge", "Testing"],
    location: "Remote",
    format: "Online",
  },
]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChain, setSelectedChain] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return <Trophy className="w-4 h-4" />
      case "grant":
        return <Gift className="w-4 h-4" />
      case "bounty":
        return <Target className="w-4 h-4" />
      default:
        return <Trophy className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-purple-100 text-purple-800"
      case "grant":
        return "bg-green-100 text-green-800"
      case "bounty":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Discover Opportunities</h2>
            <p className="text-muted-foreground">
              Find hackathons, grants, and bounties to accelerate your Web3 journey
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedChain} onValueChange={setSelectedChain}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select chain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Chains</SelectItem>
                <SelectItem value="ethereum">Ethereum</SelectItem>
                <SelectItem value="polygon">Polygon</SelectItem>
                <SelectItem value="arbitrum">Arbitrum</SelectItem>
                <SelectItem value="base">Base</SelectItem>
                <SelectItem value="optimism">Optimism</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hackathon">Hackathons</SelectItem>
                <SelectItem value="grant">Grants</SelectItem>
                <SelectItem value="bounty">Bounties</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Opportunities</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          <TabsTrigger value="grants">Grants</TabsTrigger>
          <TabsTrigger value="bounties">Bounties</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeColor(opportunity.type)}>
                          {getTypeIcon(opportunity.type)}
                          <span className="ml-1 capitalize">{opportunity.type}</span>
                        </Badge>
                        <Badge variant="outline">{opportunity.format}</Badge>
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <CardDescription>
                        by {opportunity.organizer} • {opportunity.location}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{opportunity.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {opportunity.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">{opportunity.prize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>{opportunity.daysLeft} days left</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{opportunity.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>{opportunity.deadline}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex space-x-2">
                      {opportunity.requirements.slice(0, 3).map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {opportunity.requirements.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{opportunity.requirements.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hackathons">
          <div className="text-center py-8">
            <Trophy className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hackathons</h3>
            <p className="text-gray-600">Filter results to show hackathons only</p>
          </div>
        </TabsContent>

        <TabsContent value="grants">
          <div className="text-center py-8">
            <Gift className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Grants</h3>
            <p className="text-gray-600">Filter results to show grants only</p>
          </div>
        </TabsContent>

        <TabsContent value="bounties">
          <div className="text-center py-8">
            <Target className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Bounties</h3>
            <p className="text-gray-600">Filter results to show bounties only</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
