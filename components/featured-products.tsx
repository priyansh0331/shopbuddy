import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Sample product data
const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: 2599.0,
    image: "/jacket.jpg?height=400&width=300",
    category: "Outerwear",
    sustainability: "Saves 2,000 liters of water",
    slug: "vintage-denim-jacket",
  },
  {
    id: 2,
    name: "Minimalist Linen Shirt",
    price: 789,
    image: "/linen.jpg?height=400&width=300",
    category: "Tops",
    sustainability: "Reduces 1.2kg CO2",
    slug: "minimalist-linen-shirt",
  },
  {
    id: 3,
    name: "Classic Leather Boots",
    price: 1600,
    image: "/boots.webp?height=400&width=300",
    category: "Footwear",
    sustainability: "Diverts 3kg from landfill",
    slug: "classic-leather-boots",
  },
  {
    id: 4,
    name: "Wool Blend Sweater",
    price: 899,
    image: "/wool.jpg?height=400&width=300",
    category: "Knitwear",
    sustainability: "Saves 1,500 liters of water",
    slug: "wool-blend-sweater",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.slug}`} className="group">
          <Card className="h-full overflow-hidden border-0 bg-background transition-all hover:shadow-md">
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={400}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">Rs.{product.price.toFixed(2)}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-green-600">{product.sustainability}</p>
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
  )
}
