import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Wallet, Github, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your public profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="handle">Handle</Label>
                <Input id="handle" defaultValue="@johndoe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Opportunities</Label>
                  <p className="text-sm text-gray-500">Get notified about new hackathons and grants</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Team Invitations</Label>
                  <p className="text-sm text-gray-500">Receive notifications for team invites</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Project Updates</Label>
                  <p className="text-sm text-gray-500">Updates from your active projects</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Emails</Label>
                  <p className="text-sm text-gray-500">Receive product updates and tips</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy Settings
              </CardTitle>
              <CardDescription>Control your profile visibility and data sharing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Public Profile</Label>
                  <p className="text-sm text-gray-500">Make your profile visible to other builders</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show CherryScore</Label>
                  <p className="text-sm text-gray-500">Display your CherryScore on your profile</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Project History</Label>
                  <p className="text-sm text-gray-500">Display your completed projects</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Allow Team Invites</Label>
                  <p className="text-sm text-gray-500">Let other builders invite you to teams</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="w-5 h-5 mr-2" />
                Connected Accounts
              </CardTitle>
              <CardDescription>Manage your connected wallets and social accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Github className="w-6 h-6" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-500">Connected as @johndoe</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wallet className="w-6 h-6" />
                  <div>
                    <p className="font-medium">Ethereum Wallet</p>
                    <p className="text-sm text-gray-500">0x1234...5678</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                <Wallet className="w-4 h-4 mr-2" />
                Connect New Wallet
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
