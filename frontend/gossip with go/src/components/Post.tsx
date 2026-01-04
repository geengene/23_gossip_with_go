import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, MessageCircle, Share } from "lucide-react"

interface PostProps {
  id: string
  subreddit: string
  author: string
  timestamp: string
  title: string
  content?: string
  upvotes: number
  comments: number
  image?: string
}

export function Post({
  subreddit,
  author,
  timestamp,
  title,
  content,
  upvotes,
  comments,
  image,
}: PostProps) {
  return (
    <Card className="mb-4 hover:border-slate-400 transition-colors">
      <CardContent className="p-0">
        <div className="flex">
          <div className="flex flex-col items-center justify-start bg-slate-50 dark:bg-slate-900 p-3 gap-2 rounded-l-lg">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              {upvotes}
            </span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-3">
            <div className="flex items-center gap-2 mb-2 text-xs">
              <span className="font-bold text-slate-900 dark:text-slate-100">
                r/{subreddit}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                Posted by u/{author} {timestamp}
              </span>
            </div>

            <h2 className="text-base font-semibold mb-2 text-slate-900 dark:text-slate-100 cursor-pointer hover:text-blue-600">
              {title}
            </h2>

            {content && (
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                {content}
              </p>
            )}

            {image && (
              <div className="mb-3 rounded bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img
                  src={image}
                  alt="Post content"
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            )}

            <div className="flex gap-6 text-slate-500 dark:text-slate-400 text-xs">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 h-8 px-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{comments}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 h-8 px-2"
              >
                <Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
