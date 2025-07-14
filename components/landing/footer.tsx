import { Zap } from "lucide-react"

const footerLinks = {
  platform: [
    "Hackathons",
    "Grants", 
    "Team Matching",
    "Builder Profiles"
  ],
  resources: [
    "Documentation",
    "API",
    "Support", 
    "Blog"
  ],
  community: [
    "Discord",
    "Twitter",
    "GitHub",
    "Telegram"
  ]
}

export function Footer() {
  return (
    <footer className="bg-muted text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Builder Pass</span>
            </div>
            <p className="text-muted-foreground">Empowering the next generation of Web3 builders</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.community.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Builder Pass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 