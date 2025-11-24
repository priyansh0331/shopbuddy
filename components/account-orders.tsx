import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Package, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Sample order data
const orders = [
  {
    id: "ORD-12345",
    date: "April 23, 2025",
    status: "Delivered",
    total: 2373.5,
    items: [
      {
        id: 1,
        name: "Vintage Denim Jacket",
        price: 1645.0,
        image: "/jacket.jpg?height=80&width=80",
      },
      {
        id: 2,
        name: "Minimalist Linen Shirt",
        price: 728.5,
        image: "/linen.jpg?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-12344",
    date: "March 15, 2025",
    status: "Delivered",
    total: 1765.0,
    items: [
      {
        id: 3,
        name: "Classic Leather Boots",
        price: 1765.0,
        image: "/boots.webp?height=80&width=80",
      },
    ],
  },
  {
    id: "ORD-12343",
    date: "February 2, 2025",
    status: "Delivered",
    total: 550.0,
    items: [
      {
        id: 4,
        name: "Wool Blend Sweater",
        price: 232.0,
        image: "/swe.webp?height=80&width=80",
      },
      {
        id: 5,
        name: "Vintage Silk Scarf",
        price: 218.0,
        image: "/scarf.jpg?height=80&width=80",
      },
    ],
  },
]

export function AccountOrders() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription>View and manage your orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search orders..." className="pl-8" />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="rounded-lg border overflow-hidden">
                  <div className="bg-muted/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{order.id}</h3>
                        <Badge variant={order.status === "Delivered" ? "outline" : "default"}>{order.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">Rs.{order.total.toFixed(2)}</p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/account/orders/${order.id}`}>
                          View Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={item.id}>
                          {index > 0 && <Separator className="my-4" />}
                          <div className="flex items-center gap-4">
                            <div className="h-20 w-20 rounded-md overflow-hidden bg-muted/30 flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">Rs.{item.price.toFixed(2)}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Buy Again
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Package className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No orders yet</h3>
              <p className="text-sm text-muted-foreground mb-4">When you place orders, they will appear here.</p>
              <Button asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
