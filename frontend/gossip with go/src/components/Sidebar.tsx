import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Users, Flame, Clock, Bell } from "lucide-react"

interface Community {
  name: string
  members: number
  online: number
  created: string
}

export function SidebarCommunity({ name, members, online, created }: Community) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">r/{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-slate-400">Members</span>
            <span className="font-semibold">{members.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600 dark:text-slate-400">Online</span>
            <span className="font-semibold">{online.toLocaleString()}</span>
          </div>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t">
          Created {created}
        </div>
        <Button className="w-full">Join</Button>
      </CardContent>
    </Card>
  )
}

