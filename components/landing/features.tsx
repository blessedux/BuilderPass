import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Target } from "lucide-react"

const features = [
  {
    icon: Trophy,
    title: "Opportunity Aggregator",
    description: "Discover hackathons, grants, and bounties across all major chains and ecosystems",
    items: [
      "Smart filters by chain, theme, prize",
      "One-click applications",
      "Calendar integration"
    ],
    iconBg: "bg-purple-900/50",
    iconColor: "text-purple-400"
  },
  {
    icon: Users,
    title: "Team Matching",
    description: "AI-powered matchmaking to find the perfect teammates for your next project",
    items: [
      "Skill-based matching",
      "Timezone compatibility",
      "Built-in messaging"
    ],
    iconBg: "bg-blue-900/50",
    iconColor: "text-blue-400"
  },
  {
    icon: Target,
    title: "Builder Credentials",
    description: "Showcase your onchain achievements and build your reputation as a Web3 builder",
    items: [
      "CherryScore reputation system",
      "Project portfolio",
      "Skill verification"
    ],
    iconBg: "bg-teal-900/50",
    iconColor: "text-teal-400"
  }
]

export function Features() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Everything You Need to Build & Scale</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From discovering opportunities to forming teams and scaling startups - all in one platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-border bg-card shadow-lg hover:shadow-xl transition-shadow hover:bg-accent/50">
            <CardHeader>
              <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 