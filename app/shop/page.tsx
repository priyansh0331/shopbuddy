import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample product data
const products = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    price: 2599,
    image: "/jacket.jpg?height=400&width=300",
    category: "Outerwear",
    sustainability: "Saves 200 liters of water",
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
    sustainability: "Saves 150 liters of water",
    slug: "wool-blend-sweater",
  },
  {
    id: 5,
    name: "Vintage Silk Scarf",
    price: 300,
    image: "/scarf.jpg?height=400&width=300",
    category: "Accessories",
    sustainability: "Reduces 0.8kg CO2",
    slug: "vintage-silk-scarf",
  },
  {
    id: 6,
    name: "High-Waisted Jeans",
    price: 999,
    image: "/jeans.webp?height=400&width=300",
    category: "Bottoms",
    sustainability: "Saves 1,800 liters of water",
    slug: "high-waisted-jeans",
  },
  {
    id: 7,
    name: "Cotton Canvas Tote",
    price: 199,
    image: "/tote.webp?height=400&width=300",
    category: "Bags",
    sustainability: "Diverts 1.5kg from landfill",
    slug: "cotton-canvas-tote",
  },
  {
    id: 8,
    name: "Cashmere Beanie",
    price: 440,
    image: "/cap.jpg?height=400&width=300",
    category: "Accessories",
    sustainability: "Reduces 1.1kg CO2",
    slug: "cashmere-beanie",
  },
]

export default function ShopPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between m-4">
        <div>
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-muted-foreground">Browse our curated collection of second-hand items</p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Refine your search with the following filters.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="space-y-2">
                    {["Outerwear", "Tops", "Bottoms", "Footwear", "Accessories", "Bags", "Knitwear"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <Input type="number" placeholder="Min" className="h-8" />
                    <span>-</span>
                    <Input type="number" placeholder="Max" className="h-8" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Condition</h3>
                  <div className="space-y-2">
                    {["Like New", "Excellent", "Good", "Fair"].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox id={`condition-${condition}`} />
                        <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Size</h3>
                  <div className="space-y-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox id={`size-${size}`} />
                        <Label htmlFor={`size-${size}`}>{size}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <Input type="search" placeholder="Search..." className="h-8 w-[150px] md:w-[200px] lg:w-[300px]" />
            <Select defaultValue="newest">
              <SelectTrigger className="h-8 w-[130px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="hidden h-8 md:flex">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  )
}
