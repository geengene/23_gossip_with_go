import { Header } from "@/components/Header"
import { SidebarCommunity } from "@/components/Sidebar"
import { Post } from "@/components/Post"

const SAMPLE_POSTS = [
  {
    id: "1",
    subreddit: "programming",
    author: "asdf",
    timestamp: "2 hours ago",
    title: "post 1",
    content:
      "post 1",
    upvotes: 2341,
    comments: 234,
  },
  {
    id: "2",
    subreddit: "coding",
    author: "qwer",
    timestamp: "6 hours ago",
    title: "post 2",
    content: "",
    upvotes: 3456,
    comments: 432,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {SAMPLE_POSTS.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </div>

          <div>
            {/* <Sidebar /> */}
            <div className="mt-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
                Recommended Topics 
              </h3>
              <div className="space-y-4">
                <SidebarCommunity
                  name="programming"
                  members={2500}
                  online={450}
                  created="8 years ago"
                />
                <SidebarCommunity
                  name="coding"
                  members={890}
                  online={120}
                  created="10 years ago"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
