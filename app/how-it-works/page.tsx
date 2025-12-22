import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Leaf, Package, Recycle, Search, ShoppingBag, Upload, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HowItWorksPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">How ShopBuddy Works</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
          Discover how our platform makes sustainable fashion accessible, simple, and impactful.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/shop">
              Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16">
        <Tabs defaultValue="buying" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="buying">Buying</TabsTrigger>
            <TabsTrigger value="selling">Selling</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Buying Process */}
          <TabsContent value="buying" className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Buying Process</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Find unique second-hand treasures in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Browse & Discover</h3>
                <p className="text-muted-foreground">
                  Explore our curated collection of high-quality second-hand items. Filter by category, size, brand, or
                  condition to find exactly what you're looking for.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Add to Cart & Checkout</h3>
                <p className="text-muted-foreground">
                  Add items to your cart, review your selections, and proceed to our secure checkout. Multiple payment
                  options available for your convenience.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Receive & Enjoy</h3>
                <p className="text-muted-foreground">
                  Your items are carefully packaged in eco-friendly materials and shipped to your door. Track your order
                  every step of the way.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 mt-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Item History Timeline</h3>
                  <p className="text-muted-foreground mb-4">
                    Every item on ShopBuddy comes with a unique history. Our Item History Timeline shows you where your
                    items have been and the lives they've touched before reaching you.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>See the original manufacturing date and location</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Learn about previous owners and how they styled the item</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Understand the care and maintenance history</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/features/timeline">Learn More About Item History</Link>
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Item History Timeline"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Selling Process */}
          <TabsContent value="selling" className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Selling Process</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Give your pre-loved items a new life and earn money while contributing to sustainable fashion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. List Your Items</h3>
                <p className="text-muted-foreground">
                  Take clear photos, provide accurate descriptions, and set your price. Our AI tool helps you optimize
                  listings.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Item Verification</h3>
                <p className="text-muted-foreground">
                  Ship your items to our verification center where we authenticate, clean, and prepare them for sale.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. We Sell It</h3>
                <p className="text-muted-foreground">
                  Your items are featured on our platform. We handle all aspects of marketing, sales, and customer
                  service.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">4. Get Paid</h3>
                <p className="text-muted-foreground">
                  Receive payment when your items sell. Track your earnings and environmental impact in your dashboard.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 mt-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Seller Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Seller Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive seller dashboard gives you full visibility into your selling journey. Track your
                    items, monitor sales, and see your sustainability impact in real-time.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Real-time sales tracking and analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Transparent fee structure with no hidden costs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Personalized selling tips to maximize your earnings</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/sell">Start Selling</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Sustainability Process */}
          <TabsContent value="sustainability" className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Sustainability Impact</h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto">
                Every purchase and sale on ShopBuddy contributes to a more sustainable fashion ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-blue-50 p-4 rounded-full w-fit mb-4">
                    <Recycle className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle>Extending Product Lifecycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By giving items a second (or third) life, we extend their useful lifecycle and reduce the demand for
                    new production. Each item resold prevents approximately 2.2 kg of CO2 emissions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-green-50 p-4 rounded-full w-fit mb-4">
                    <Leaf className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Reducing Resource Consumption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The fashion industry is one of the largest consumers of water. Each second-hand item purchased saves
                    approximately 1,800 liters of water that would be used in new production.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-amber-50 p-4 rounded-full w-fit mb-4">
                    <Users className="h-8 w-8 text-amber-500" />
                  </div>
                  <CardTitle>Supporting Ethical Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our platform promotes ethical consumption and reduces the demand for fast fashion. We partner with
                    organizations that ensure fair labor practices and sustainable production.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 mt-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Sustainability Impact Calculator</h3>
                  <p className="text-muted-foreground mb-4">
                    Our unique Sustainability Impact Calculator shows you the exact environmental benefit of your
                    purchase or sale. See the water saved, carbon emissions reduced, and waste diverted from landfills.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Personalized impact dashboard for each user</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Shareable impact certificates for social media</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Monthly impact reports sent to your email</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/features/impact">View Impact Calculator</Link>
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Sustainability Impact Calculator"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Community Process */}
          <TabsContent value="community" className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Community</h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto">
                ShopBuddy is more than a marketplace—it's a community of like-minded individuals passionate about
                sustainable fashion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Events & Meetups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=200&width=300" alt="Events" fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    Join clothing swap events, sustainable fashion workshops, and community meetups in your area.
                    Connect with other thrifters and share your passion for sustainable style.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community?tab=events">View Events</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Marketplace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Buy, sell, or trade directly with other community members. Our secure platform facilitates
                    person-to-person transactions with buyer and seller protection.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community?tab=marketplace">Visit Marketplace</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Forum & Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                    <Image src="/placeholder.svg?height=200&width=300" alt="Forum" fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    Share tips, ask questions, and learn from other community members. Our forum is a treasure trove of
                    knowledge on sustainable fashion, clothing care, and styling.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/community?tab=forum">Join Discussion</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Have questions about how ShopBuddy works? Find answers to our most commonly asked questions below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">How do you ensure item quality?</h3>
            <p className="text-muted-foreground">
              Every item goes through our rigorous quality verification process. We check for authenticity, condition,
              and cleanliness before listing items on our platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">What if I'm not satisfied with my purchase?</h3>
            <p className="text-muted-foreground">
              We offer a 14-day return policy for most items. If you're not completely satisfied, you can return the
              item for a full refund or store credit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">How much can I earn by selling my clothes?</h3>
            <p className="text-muted-foreground">
              Sellers typically earn 60-80% of the final selling price, depending on the item category and condition.
              Our pricing algorithm helps you set the optimal price for quick sales.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">How is shipping handled?</h3>
            <p className="text-muted-foreground">
              We offer carbon-neutral shipping options. For sellers, we provide prepaid shipping labels. For buyers, we
              offer free shipping on orders over Rs.500 and flat-rate shipping for smaller orders.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">How do you calculate environmental impact?</h3>
            <p className="text-muted-foreground">
              We use industry-standard metrics based on material type, weight, and production methods. Our calculations
              are verified by third-party sustainability experts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Can I sell non-clothing items?</h3>
            <p className="text-muted-foreground">
              Yes! While we specialize in clothing, we also accept accessories, shoes, home textiles, and select home
              goods that align with our sustainability mission.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30 rounded-lg mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Join the Movement?</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
            Start your sustainable fashion journey today. Join thousands of conscious consumers making a difference, one
            garment at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/shop">
                Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/sell">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
