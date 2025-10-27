"use client"

interface Tweet {
  text: string
  handle: string
  name: string
  url: string
  profileImage: string
  isHighlighted?: boolean
  isRetweet?: boolean
  originalTweet?: {
    text: string
    handle: string
    name: string
  }
  stats?: {
    views?: string
    likes?: string
    retweets?: string
  }
}

const tweets: Tweet[] = [
  // Featured Tweet - Ben South's retweet with commentary (most viral)
  {
    text: "vibe coder: how do I save this version?\n\nthese guys: ok first git init && git remote add origin, create a feature branch, git add ., git commit -m 'feat: initial commit', push to create a PR, then later when you hit conflicts just git rebase -i HEAD~3, stash pop, resolve the...",
    handle: "@bnj",
    name: "Ben South",
    url: "https://t.co/Iip1owCIDe",
    profileImage: "/images/profiles/bnj.jpg",
    isRetweet: true,
    originalTweet: {
      text: 'Cursor/Windsurf need a way to "save" a checkpoint and name it—versioning for vibe coders',
      handle: "@bnj",
      name: "Ben South",
    },
    stats: {
      views: "88.9K",
      likes: "366",
      retweets: "22",
    },
  },
  // Second - Tom Dörr (389.6K views)
  {
    text: "The biggest mistake in vibe coding is prompting the agent to fix errors instead of rolling back",
    handle: "@tom_doerr",
    name: "Tom Dörr",
    url: "https://x.com/tom_doerr/status/1907293098557809124",
    profileImage: "/images/profiles/tom.jpg",
    stats: {
      views: "389.6K",
      likes: "3.8K",
      retweets: "219",
    },
  },
  // Third - Kitze (369.5K views)
  {
    text: "they should invent a tool where vibe code can be stored in the cloud so from time to time you do a 'checkin' of your code and you can always revert to it and go to a previous version\n\nlike a ... hub for code",
    handle: "@thekitze",
    name: "Kitze",
    url: "https://t.co/IPd6mRr7qI",
    profileImage: "/images/profiles/kitze.jpg",
    stats: {
      views: "369.5K",
      likes: "8.1K",
      retweets: "358",
    },
  },
  // Fourth - Ian Nuttall (31.4K views)
  {
    text: "cursor pro tip for vibe coders: use the git tab to save changes and roll back quickly if the ai messes up\n\nseeing too many stories of vibe coders unable to get back to a working version 😰\n\nwatch the video",
    handle: "@iannuttall",
    name: "Ian Nuttall",
    url: "https://t.co/ILoFbVkcDP",
    profileImage: "/images/profiles/ian.jpg",
    stats: {
      views: "31.4K",
      likes: "333",
      retweets: "28",
    },
  },
  // Fifth - Ben South's original tweet
  {
    text: 'Cursor/Windsurf need a way to "save" a checkpoint and name it—versioning for vibe coders',
    handle: "@bnj",
    name: "Ben South",
    url: "https://x.com/bnj/status/1902151456645640595",
    profileImage: "/images/profiles/bnj.jpg",
    stats: {
      views: "174.2K",
      likes: "1.1K",
      retweets: "62",
    },
  },
  // Sixth - CC Anuj (unknown views but included)
  {
    text: "Today was the worst day ever☹️\nThe project I had been working on for the last two weeks got corrupted, and everything was lost. Just like that, my SaaS was gone. Two weeks of hard work, completely ruined.",
    handle: "@vid_anuj",
    name: "CC Anuj",
    url: "https://x.com/vid_anuj/status/1902379748501880934",
    profileImage: "/images/profiles/anuj.jpg",
    stats: {
      likes: "121",
      retweets: "31",
    },
  },
  // Seventh - anushk (951 views)
  {
    text: "git scares people who just wanna code. give them the damn save button",
    handle: "@anushkmittal",
    name: "anushk",
    url: "https://x.com/anushkmittal/status/1902412183096717334",
    profileImage: "/images/profiles/anushk.jpg",
    stats: {
      views: "951",
      likes: "25",
    },
  },
]

export default function VibeCodingTweetsSection() {
  return null
}
