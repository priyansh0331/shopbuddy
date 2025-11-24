"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, Heart, LogOut, MapPin, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AccountNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Profile",
      href: "/account?tab=profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Orders",
      href: "/account?tab=orders",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      title: "Favorites",
      href: "/account?tab=favorites",
      icon: <Heart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Addresses",
      href: "/account?tab=addresses",
      icon: <MapPin className="mr-2 h-4 w-4" />,
    },
    {
      title: "Payment Methods",
      href: "/account?tab=payments",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/account?tab=settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-lg border p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>KS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Kanisha Saxena</p>
          <p className="text-xs text-muted-foreground">maokanisha@gmail.com</p>
        </div>
      </div>
      <div className="space-y-1">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" className="w-full justify-start" asChild>
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
