import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProducts from "@/components/featured-products"
import { HeroSection } from "@/components/hero-section"
import { SustainabilityCounter } from "@/components/sustainability-counter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight m-4">
            ShopBuddy
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/shop" className="text-sm font-medium hover:underline underline-offset-4">
              Shop
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4 ">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/community" className="text-sm font-medium hover:underline underline-offset-4">
              Community
            </Link>
            <Link href="/charity" className="text-sm font-medium hover:underline underline-offset-4">
              Charity
            </Link>
          </nav>
          <div className="flex items-center gap-4 m-4">
            <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
              Search
            </Link>
            <Link href="/cart" className="text-sm font-medium hover:underline underline-offset-4">
              Cart (0)
            </Link>
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 md:block hidden">
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <SustainabilityCounter />
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Items</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Discover unique second-hand treasures curated just for you.
              </p>
            </div>
            <FeaturedProducts />
            <div className="flex justify-center mt-10">
              <Button asChild>
                <Link href="/shop">
                  Browse all items <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Unique Features</h2>
              <p className="text-muted-foreground max-w-[600px]">What makes our thrifting platform different.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Recycle className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Item History Timeline</CardTitle>
                  <CardDescription>Discover the journey of each item before it reaches you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every piece has a story. Our timeline feature shows you where your items have been and the lives
                    they've touched.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/features/timeline">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Leaf className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Sustainability Impact</CardTitle>
                  <CardDescription>See the environmental difference your purchase makes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our calculator shows the water saved, carbon emissions reduced, and waste diverted by choosing
                    second-hand.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/features/impact">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Community Exchange</CardTitle>
                  <CardDescription>Connect with other thrifters in your area.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Trade, swap, or sell directly with our community members through our secure platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/community">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
          <p className="text-sm text-muted-foreground"> {new Date().getFullYear()} ShopBuddy. All rights reserved.</p>
          <nav className="flex gap-4 md:gap-6">
            <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
