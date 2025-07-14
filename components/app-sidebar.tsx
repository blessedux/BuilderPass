import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Home, Search, Users, Trophy, User, Rocket, MessageSquare, Settings, Zap, Target, Calendar } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Discover",
    url: "/dashboard/discover",
    icon: Search,
  },
  {
    title: "My Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Team Finder",
    url: "/dashboard/teams",
    icon: Users,
  },
  {
    title: "My Projects",
    url: "/dashboard/projects",
    icon: Trophy,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: MessageSquare,
    badge: "3",
  },
]

const toolsItems = [
  {
    title: "Startup Toolkit",
    url: "/dashboard/startup",
    icon: Rocket,
  },
  {
    title: "Milestones",
    url: "/dashboard/milestones",
    icon: Target,
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2 py-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            BuilderHub
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard/settings" className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">John Doe</div>
                  <div className="text-xs text-gray-500 truncate">@johndoe</div>
                </div>
                <Settings className="w-4 h-4" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
