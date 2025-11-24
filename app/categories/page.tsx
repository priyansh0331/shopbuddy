import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Define clothing categories with images and counts
const categories = [
  {
    name: "Tops",
    image: "/top.webp?height=400&width=300",
    count: 124,
    subcategories: ["T-Shirts", "Blouses", "Sweaters", "Tank Tops", "Shirts", "Hoodies"],
    slug: "tops",
    color: "pastel-blue",
  },
  {
    name: "Bottoms",
    image: "/jean.webp?height=400&width=300",
    count: 98,
    subcategories: ["Jeans", "Trousers", "Shorts", "Skirts", "Leggings"],
    slug: "bottoms",
    color: "pastel-green",
  },
  {
    name: "Dresses",
    image: "/dress.webp?height=400&width=300",
    count: 76,
    subcategories: ["Casual Dresses", "Formal Dresses", "Maxi Dresses", "Mini Dresses", "Sundresses"],
    slug: "dresses",
    color: "pastel-pink",
  },
  {
    name: "Outerwear",
    image: "/jacky.jpg?height=400&width=300",
    count: 65,
    subcategories: ["Jackets", "Coats", "Blazers", "Cardigans", "Vests"],
    slug: "outerwear",
    color: "pastel-yellow",
  },
  {
    name: "Activewear",
    image: "/gym.avif?height=400&width=300",
    count: 52,
    subcategories: ["Sports wear", "Leggings", "Shorts", "Athletic Tops", "Sweatpants"],
    slug: "activewear",
    color: "pastel-purple",
  },
  {
    name: "Accessories",
    image: "/acc.jpg?height=400&width=300",
    count: 118,
    subcategories: ["Bags", "Jewelry", "Scarves", "Hats", "Belts", "Sunglasses"],
    slug: "accessories",
    color: "pastel-orange",
  },
  {
    name: "Footwear",
    image: "/boots.webp?height=400&width=300",
    count: 87,
    subcategories: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Loafers"],
    slug: "footwear",
    color: "pastel-blue",
  },
  {
    name: "Vintage",
    image: "/vintage.jpg?height=400&width=300",
    count: 43,
    subcategories: ["60s", "70s", "80s", "90s", "Y2K"],
    slug: "vintage",
    color: "pastel-pink",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 m-4">
        <h1 className="text-3xl font-bold mb-2">Categories</h1>
        <p className="text-muted-foreground">Browse our collection by category</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={`/shop?category=${category.slug}`} className="group">
            <Card
              className={`h-full overflow-hidden border-${category.color}/20 bg-${category.color}/5 transition-all hover:shadow-md`}
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-xl">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} items</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.map((subcategory) => (
                    <span
                      key={subcategory}
                      className={`text-xs px-2 py-1 rounded-full bg-${category.color}/20 text-${category.color}-700`}
                    >
                      {subcategory}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full border-${category.color}/20 hover:bg-${category.color}/10`}
                >
                  Browse {category.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-lg bg-pastel-blue/10 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for Something Specific?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our inventory is constantly changing with new unique items. If you don't see what you're looking for, check
          back soon or let us know what you're searching for.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-pastel-green hover:bg-pastel-green/90">View All Items</Button>
          <Button variant="outline" className="border-pastel-green/20 hover:bg-pastel-green/10">
            Request Item
          </Button>
        </div>
      </div>
    </div>
  )
}
