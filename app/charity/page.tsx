import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Sample charity initiatives data
const charityInitiatives = [
  {
    id: 1,
    title: "Ocean Cleanup Project",
    description: "Help remove plastic waste from our oceans with every purchase from this collection.",
    image: "/ocean.jpg?height=300&width=500",
    goal: 50000,
    raised: 14350,
    products: 24,
  },
  {
    id: 2,
    title: "Reforestation Initiative",
    description: "Plant trees and restore forests with your purchase. One item = One tree planted.",
    image: "/refo.webp?height=300&width=500",
    goal: 75000,
    raised: 32000,
    products: 18,
  },
  {
    id: 3,
    title: "Sustainable Fashion Education",
    description: "Fund educational programs teaching sustainable fashion practices in communities.",
    image: "/eco.jpg?height=300&width=500",
    goal: 45000,
    raised: 19000,
    products: 32,
  },
]

// Sample charity products data
const charityProducts = [
  {
    id: 1,
    name: "Upcycled Denim Tote",
    price: 199,
    image: "/totee.jpg?height=200&width=200",
    charity: "Ocean Cleanup Project",
    slug: "upcycled-denim-tote",
  },
  {
    id: 2,
    name: "Organic Cotton Sweater",
    price: 420.0,
    image: "/org.jpeg?height=200&width=200",
    charity: "Reforestation Initiative",
    slug: "organic-cotton-sweater",
  },
  {
    id: 3,
    name: "Vintage Silk Scarf",
    price: 229.0,
    image: "/scarf.jpg?height=200&width=200",
    charity: "Sustainable Fashion Education",
    slug: "vintage-silk-scarf",
  },
  {
    id: 4,
    name: "Recycled Wool Beanie",
    price: 599.0,
    image: "/cap.jpg?height=200&width=200",
    charity: "Ocean Cleanup Project",
    slug: "recycled-wool-beanie",
  },
]

export default function CharityPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">ReVibe for Good</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Shop with purpose. Every charity item purchased contributes to environmental and social initiatives.
        </p>
      </div>

      <Tabs defaultValue="initiatives" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
          <TabsTrigger value="products">Charity Products</TabsTrigger>
          <TabsTrigger value="forum">Community Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="initiatives" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charityInitiatives.map((initiative) => (
              <Card key={initiative.id} className="overflow-hidden charity-item">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={initiative.image || "/ocean.jpg"}
                    alt={initiative.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{initiative.title}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>
                          Rs.{initiative.raised.toLocaleString()} of Rs.{initiative.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${(initiative.raised / initiative.goal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {initiative.products} products supporting this cause
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/charity/initiative/${initiative.id}`}>
                      Support This Cause <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {charityProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group">
                <Card className="h-full overflow-hidden border-0 bg-background transition-all hover:shadow-md charity-item">
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        Charity
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">Rs.{product.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-2 text-xs text-green-600">Supports: {product.charity}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
