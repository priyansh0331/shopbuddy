import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample favorites data
const favorites = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: 45.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Outerwear",
    sustainability: "Saves 2,000 liters of water",
    slug: "vintage-denim-jacket",
  },
  {
    id: 2,
    name: "Minimalist Linen Shirt",
    price: 28.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Tops",
    sustainability: "Reduces 1.2kg CO2",
    slug: "minimalist-linen-shirt",
  },
  {
    id: 3,
    name: "Classic Leather Boots",
    price: 65.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Footwear",
    sustainability: "Diverts 3kg from landfill",
    slug: "classic-leather-boots",
  },
  {
    id: 5,
    name: "Vintage Silk Scarf",
    price: 18.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
    sustainability: "Reduces 0.8kg CO2",
    slug: "vintage-silk-scarf",
  },
]

export function AccountFavorites() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Saved Items</CardTitle>
          <CardDescription>Items you've saved for later.</CardDescription>
        </CardHeader>
        <CardContent>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-md bg-muted/30">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Rs.{item.price.toFixed(2)}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-green-600">{item.sustainability}</p>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Heart className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No saved items</h3>
              <p className="text-sm text-muted-foreground mb-4">Items you save will appear here.</p>
              <Button asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
