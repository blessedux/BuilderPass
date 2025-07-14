import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Github, ExternalLink, Star, Trophy, Users, Calendar, MapPin, LinkIcon, Mail } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Builder Profile</h2>
            <p className="text-muted-foreground">Your public profile showcasing your Web3 building journey</p>
          </div>
        </div>
        <Button>
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">@johndoe</p>
                <Badge className="mt-2">Full-Stack Developer</Badge>
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CherryScore</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold">847</span>
                  </div>
                </div>
                <Progress value={84} className="h-2" />
                <p className="text-xs text-gray-500">Top 15% of builders</p>
              </div>

              <div className="w-full pt-4 border-t space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>john@example.com</span>
                </div>
              </div>

              <div className="w-full pt-4 border-t">
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <LinkIcon className="w-4 h-4 mr-1" />
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-4">
          {/* Bio */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Passionate full-stack developer with 5+ years of experience building Web3 applications. Specialized in
                DeFi protocols, smart contract development, and user-friendly dApps. Love participating in hackathons
                and contributing to open-source projects.
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Solidity", "TypeScript", "JavaScript", "Python", "Rust"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Hardhat", "Foundry", "Web3.js", "Ethers.js"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Blockchain Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Ethereum", "Polygon", "Arbitrum", "Base", "DeFi", "NFTs", "DAOs"].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-gray-600">Hackathons Won</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                <div className="text-2xl font-bold">28</div>
                <p className="text-sm text-gray-600">Teams Joined</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                <div className="text-2xl font-bold">4.9</div>
                <p className="text-sm text-gray-600">Team Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Projects Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>My Projects</CardTitle>
          <CardDescription>Showcase of completed and ongoing projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="completed" className="space-y-4">
            <TabsList>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
            </TabsList>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "DeFi Yield Optimizer",
                    description: "Automated yield farming strategy optimizer for multiple protocols",
                    tags: ["DeFi", "Solidity", "React"],
                    prize: "$15,000",
                    event: "ETH Denver 2024",
                  },
                  {
                    title: "NFT Marketplace",
                    description: "Decentralized marketplace for trading NFTs with advanced features",
                    tags: ["NFTs", "Next.js", "IPFS"],
                    prize: "$8,000",
                    event: "Polygon Hackathon",
                  },
                ].map((project, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <CardDescription>{project.event}</CardDescription>
                        </div>
                        <Badge variant="secondary">{project.prize}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="text-center py-8">
                <Trophy className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ongoing Projects</h3>
                <p className="text-gray-600">Projects currently in development</p>
              </div>
            </TabsContent>

            <TabsContent value="hackathons">
              <div className="text-center py-8">
                <Trophy className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hackathon History</h3>
                <p className="text-gray-600">All hackathon participations and achievements</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
