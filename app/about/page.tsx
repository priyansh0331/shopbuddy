import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Users, Heart, Globe, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About ReVibe</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
          We're on a mission to make sustainable fashion accessible, affordable, and impactful.
        </p>
        <div className="relative mx-auto max-w-4xl aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/our9.jpeg?height=720&width=1280"
            alt="ReVibe team and community"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 m-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 m-4">
              ReVibe began with a simple idea: to create a platform that extends the lifecycle of clothing while making
              a positive impact on our planet. Founded in 2025 by a group of fashion enthusiasts concerned about the
              environmental impact of fast fashion, we set out to revolutionize how people think about second-hand
              clothing.
            </p>
            <p className="text-muted-foreground mb-4 m-4">
            What started as an idea to promote sustainable fashion has now taken the form of a website designed to showcase the vision of conscious consumerism. Although we have not yet launched or built a community, this website serves as a platform to share the values of reusing pre-loved items and reducing the environmental impact of fashion. It represents the potential to connect like-minded individuals in the future and inspire more responsible choices in fashion.

This version clearly states that the project is currently a concept presented through the website, focusing on the vision and potential rather than existing operations or community
            </p>
            <p className="text-muted-foreground m-4">
              Our platform isn't just about buying and selling clothes—it's about creating a movement that values
              quality over quantity, stories over status, and sustainability over trends.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/our1.jpg?height=400&width=400"
                alt="ReVibe founders"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/our2.jpeg?height=400&width=400"
                alt="ReVibe community event"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/our3.jpg?height=400&width=400"
                alt="ReVibe warehouse"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/our6.jpeg?height=400&width=400"
                alt="ReVibe team working"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-pastel-blue/10 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How Thrifting Helps Society</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Second-hand shopping is more than just finding unique items—it's a powerful way to create positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-pastel-green/20 bg-pastel-green/5">
            <CardHeader>
              <Globe className="h-10 w-10 mb-2 text-pastel-green" />
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>Reducing waste and conserving resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-pastel-green shrink-0" />
                  <span>
                    The fashion industry produces 10% of global carbon emissions—more than international flights and
                    maritime shipping combined.
                  </span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-pastel-green shrink-0" />
                  <span>
                    It takes 2,700 liters of water to produce one cotton shirt—enough drinking water for one person for
                    2.5 years.
                  </span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-pastel-green shrink-0" />
                  <span>
                    By extending a garment's life by just 9 months, you can reduce its carbon, water, and waste
                    footprints by 20-30%.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-pastel-purple/20 bg-pastel-purple/5">
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-pastel-purple" />
              <CardTitle>Social Benefits</CardTitle>
              <CardDescription>Building community and supporting ethical practices</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-pastel-purple shrink-0" />
                  <span>
                    Thrifting creates local jobs and supports small businesses rather than large fast-fashion
                    corporations.
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-pastel-purple shrink-0" />
                  <span>
                    Many thrift stores and platforms (like ours) partner with charities to fund community programs and
                    initiatives.
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-pastel-purple shrink-0" />
                  <span>
                    Second-hand shopping reduces demand for new production, which often involves poor working conditions
                    and unfair wages.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-pastel-pink/20 bg-pastel-pink/5">
            <CardHeader>
              <DollarSign className="h-10 w-10 mb-2 text-pastel-pink" />
              <CardTitle>Economic Advantages</CardTitle>
              <CardDescription>Saving money while creating value</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Recycle className="h-5 w-5 mr-2 text-pastel-pink shrink-0" />
                  <span>
                    Thrifting allows consumers to find high-quality items at a fraction of their original price.
                  </span>
                </li>
                <li className="flex items-start">
                  <Recycle className="h-5 w-5 mr-2 text-pastel-pink shrink-0" />
                  <span>
                    Selling unused items creates additional income streams and gives value to things that might
                    otherwise be discarded.
                  </span>
                </li>
                <li className="flex items-start">
                  <Recycle className="h-5 w-5 mr-2 text-pastel-pink shrink-0" />
                  <span>
                    The second-hand market is projected to reach $64 billion by 2028, creating new economic
                    opportunities.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Vision for Impact</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
          Through our future community, we aim to make significant progress toward a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-pastel-green/10">
            <div className="text-4xl font-bold mb-2 text-pastel-green">2.5M</div>
            <p className="text-muted-foreground">Items we aim to give a second life</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-pastel-blue/10">
            <div className="text-4xl font-bold mb-2 text-pastel-blue">1.2M kg</div>
            <p className="text-muted-foreground">CO₂ emissions we plan to prevent</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-pastel-purple/10">
            <div className="text-4xl font-bold mb-2 text-pastel-purple">2M</div>
            <p className="text-muted-foreground">Liters of water we hope to save</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-pastel-pink/10">
            <div className="text-4xl font-bold mb-2 text-pastel-pink">100K</div>
            <p className="text-muted-foreground">Target donations to charity partners</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            These core principles guide everything we do at ReVibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-pastel-green/20 flex items-center justify-center shrink-0">
              <Leaf className="h-6 w-6 text-pastel-green" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
              <p className="text-muted-foreground">
                We believe that fashion shouldn't come at the expense of our planet. Every decision we make is guided by
                our commitment to reducing environmental impact.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-pastel-blue/20 flex items-center justify-center shrink-0">
              <Users className="h-6 w-6 text-pastel-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community Centered</h3>
              <p className="text-muted-foreground">
                We're building more than a marketplace—we're nurturing a community of like-minded individuals who share
                our vision for a more sustainable future.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-pastel-purple/20 flex items-center justify-center shrink-0">
              <Recycle className="h-6 w-6 text-pastel-purple" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Circular Economy</h3>
              <p className="text-muted-foreground">
                We promote a circular approach to fashion where items are reused, recycled, and repurposed rather than
                discarded after minimal use.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full bg-pastel-pink/20 flex items-center justify-center shrink-0">
              <Heart className="h-6 w-6 text-pastel-pink" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
              <p className="text-muted-foreground">
                We're committed to ethical practices and giving back to communities through our charity initiatives and
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-pastel-green/10 rounded-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Movement</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
          Be part of the solution by shopping, selling, or simply spreading the word about sustainable fashion.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="bg-pastel-green hover:bg-pastel-green/90" asChild>
            <Link href="/shop">
              Start Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-pastel-green/20 hover:bg-pastel-green/10" asChild>
            <Link href="/sell">Sell With Us</Link>
          </Button>
          <Button variant="outline" className="border-pastel-green/20 hover:bg-pastel-green/10" asChild>
            <Link href="/charity">Support Our Causes</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
