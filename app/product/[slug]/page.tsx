import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Heart, ShoppingBag } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ItemTimeline } from "@/components/item-timeline"

// This would normally come from a database
const product = {
  id: 1,
  name: "Vintage Denim Jacket",
  price: 2599,
  description:
    "A classic vintage denim jacket from the 90s. This piece has been carefully selected and cleaned to ensure quality and longevity. Perfect for layering in any season.",
  details:
    "Medium wash denim with brass buttons. Two chest pockets and two side pockets. Size M, slightly oversized fit.",
  sustainability:
    "By purchasing this item instead of new, you save approximately 2,000 liters of water and reduce carbon emissions by 4kg CO2.",
  care: "Machine wash cold with similar colors. Hang to dry. Iron on low heat if needed.",
  images: [
    "/jacket.jpg?height=600&width=500",
    "/jacket2.webp?height=600&width=500",
    "/jacket4.webp?height=600&width=500",
  ],
  category: "Outerwear",
  condition: "Excellent",
  brand: "Levi's",
  size: "Medium",
  material: "100% Cotton",
  color: "Blue",
  seller: {
    name: "Vintage Finds",
    rating: 4.8,
    sales: 156,
  },
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  return (
    <div className="container py-10">
      <Link href="/shop" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-md">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="outline" className="bg-green-50">
                  <Clock className="mr-1 h-3 w-3" />
                  New Arrival
                </Badge>
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold">Rs.{product.price.toFixed(2)}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Condition</span>
                <span>{product.condition}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Brand</span>
                <span>{product.brand}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Size</span>
                <span>{product.size}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Material</span>
                <span>{product.material}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex gap-2">
                <Button className="flex-1">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-green-600">{product.sustainability}</p>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-sm">{product.description}</p>
              </TabsContent>
              <TabsContent value="details" className="pt-4">
                <p className="text-sm">{product.details}</p>
              </TabsContent>
              <TabsContent value="care" className="pt-4">
                <p className="text-sm">{product.care}</p>
              </TabsContent>
            </Tabs>

            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <p className="text-sm font-medium">{product.seller.name}</p>
                    <p className="text-xs text-muted-foreground">
                      ★ {product.seller.rating} · {product.seller.sales} sales
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Item History Timeline</h2>
        <ItemTimeline />
      </section>
    </div>
  )
}
