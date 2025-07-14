import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Calendar, TrendingUp, Star, ExternalLink, Clock, DollarSign } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back, John!</h2>
            <p className="text-muted-foreground">Here's what's happening in your builder journey</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CherryScore</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-muted-foreground">+12 from last week</p>
            <Progress value={84} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 hackathons, 1 grant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Invites</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 pending responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">From 8 completed projects</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Opportunities */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Trending Opportunities</CardTitle>
            <CardDescription>Hot hackathons and grants you might be interested in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "ETH Global London 2024",
                prize: "$100,000",
                deadline: "5 days left",
                tags: ["Ethereum", "DeFi", "Infrastructure"],
                participants: 1200,
              },
              {
                title: "Polygon zkEVM Grant",
                prize: "$50,000",
                deadline: "12 days left",
                tags: ["Polygon", "zkEVM", "Scaling"],
                participants: 89,
              },
              {
                title: "Base Summer Hackathon",
                prize: "$75,000",
                deadline: "18 days left",
                tags: ["Base", "Consumer Apps", "Social"],
                participants: 856,
              },
            ].map((opportunity, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{opportunity.title}</h3>
                    <Badge variant="secondary">{opportunity.prize}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {opportunity.deadline}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {opportunity.participants} participants
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {opportunity.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm">
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Recent activity from your teams</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                user: "Alice Chen",
                action: "submitted milestone",
                project: "DeFi Dashboard",
                time: "2 hours ago",
              },
              {
                user: "Bob Wilson",
                action: "joined team for",
                project: "NFT Marketplace",
                time: "4 hours ago",
              },
              {
                user: "Carol Davis",
                action: "completed task in",
                project: "DAO Governance",
                time: "6 hours ago",
              },
              {
                user: "David Kim",
                action: "started working on",
                project: "Cross-chain Bridge",
                time: "1 day ago",
              },
            ].map((activity, i) => (
              <div key={i} className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                    <span className="font-medium">{activity.project}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to accelerate your building</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Trophy className="w-6 h-6" />
              <span>Find Hackathon</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Users className="w-6 h-6" />
              <span>Join Team</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Calendar className="w-6 h-6" />
              <span>Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <TrendingUp className="w-6 h-6" />
              <span>Update Profile</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
