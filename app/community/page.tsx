import Image from "next/image"
import { MessageCircle, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample community events data
const events = [
  {
    id: 1,
    title: "Clothing Swap Meet",
    date: "May 15, 2025",
    location: "Central Park, Delhi",
    description: "Bring your gently used clothes and swap them with other community members. Refreshments provided.",
    attendees: 42,
    image: "/swap.webp?height=300&width=500",
  },
  {
    id: 2,
    title: "Sustainable Fashion Workshop",
    date: "June 2, 2025",
    location: "Community Center, Bangalore",
    description: "Learn how to mend, upcycle, and care for your clothes to extend their lifespan.",
    attendees: 28,
    image: "/work.jpg?height=300&width=500",
  },
  {
    id: 3,
    title: "Vintage Fashion Show",
    date: "June 18, 2025",
    location: "The Art Gallery, Mumbai",
    description: "A celebration of vintage fashion through the decades. Come dressed in your favorite era!",
    attendees: 65,
    image: "/fash.png?height=300&width=500",
  },
]

// Sample marketplace listings
const listings = [
  {
    id: 1,
    title: "Bundle of Men's Shirts (Size M)",
    price: 650.0,
    seller: {
      name: "Sam S.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    location: "Bhopal, MP",
    image: "/bundle.webp?height=200&width=300",
  },
  {
    id: 2,
    title: "Women's Accessories Collection",
    price: 30.0,
    seller: {
      name: "Pari S..",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    location: "Mumbai, MH",
    image: "/coll.jpg?height=200&width=300",
  },
  {
    id: 3,
    title: "Vintage Leather Bags (Set of 2)",
    price: 75.0,
    seller: {
      name: "Sanjeevni K.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    location: "Bangalore, KA",
    image: "/bags.webp?height=200&width=300",
  },
  {
    id: 4,
    title: "Children's Clothing Bundle (Age 5-7)",
    price: 35.0,
    seller: {
      name: "Kaushal P.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    location: "Delhi, DL",
    image: "/bundle.webp?height=200&width=300",
  },
]

// Sample forum posts
const forumPosts = [
  {
    id: 1,
    title: "Tips for identifying quality vintage denim?",
    author: {
      name: "DenimLover",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 days ago",
    replies: 14,
    tags: ["Vintage", "Denim", "Quality"],
  },
  {
    id: 2,
    title: "Best places to thrift in Pune?",
    author: {
      name: "WindyThrifter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "5 days ago",
    replies: 23,
    tags: ["Pune", "Locations"],
  },
  {
    id: 3,
    title: "How to remove stains from silk?",
    author: {
      name: "SilkCare",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "1 week ago",
    replies: 19,
    tags: ["Care", "Silk", "Stains"],
  },
  {
    id: 4,
    title: "Sustainable alternatives to dry cleaning?",
    author: {
      name: "EcoFashion",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 weeks ago",
    replies: 31,
    tags: ["Sustainability", "Cleaning"],
  },
]

export default function CommunityPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Community Exchange</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with other thrifters, swap items, attend events, and share your knowledge about sustainable fashion.
        </p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="forum">Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button>Create Event</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {event.attendees} attending
                  </div>
                  <Button size="sm">RSVP</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Community Marketplace</h2>
            <Button>List Items</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id}>
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">{listing.title}</CardTitle>
                  <CardDescription>Rs.{listing.price.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={listing.seller.avatar || "/placeholder.svg"} alt={listing.seller.name} />
                      <AvatarFallback>{listing.seller.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{listing.seller.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{listing.location}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forum" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Community Forum</h2>
            <Button>New Topic</Button>
          </div>

          <div className="space-y-4">
            {forumPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="p-4">
                  <div className="flex justify-between">
                    <CardTitle className="text-base">{post.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.replies}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {post.author.name} • {post.date}
                    </span>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <div className="flex-1"></div>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
