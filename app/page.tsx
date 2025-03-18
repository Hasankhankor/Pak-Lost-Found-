import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Tag, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import RecentListings from "@/components/recent-listings"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find What You've Lost, Return What You've Found
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A community-driven platform helping Pakistani people recover lost items and reunite with missing loved
                ones.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-w-full sm:min-w-[600px] max-w-lg">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/login?redirect=/post/create?type=lost">Report Lost Item</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/login?redirect=/post/create?type=found">Report Found Item</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-y">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10 pr-4 py-6 text-base"
                placeholder="Search for lost or found items..."
                type="search"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Location</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Date</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>Category</span>
              </Button>
              <Button variant="default" size="sm">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Categories</h2>
              <p className="text-muted-foreground">Browse lost and found items by category</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {[
                { name: "Documents", icon: "https://img.icons8.com/fluency/96/document.png" },
                { name: "Electronics", icon: "https://img.icons8.com/fluency/96/smartphone-tablet.png" },
                { name: "Jewelry", icon: "https://img.icons8.com/fluency/96/diamond-ring.png" },
                { name: "Pets", icon: "https://img.icons8.com/fluency/96/pets.png" },
                { name: "People", icon: "https://img.icons8.com/fluency/96/group.png" },
                { name: "Other", icon: "https://img.icons8.com/fluency/96/box.png" },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={`/category/${category.name.toLowerCase()}`}
                  className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                >
                  <img src={category.icon || "/placeholder.svg"} alt={category.name} className="h-12 w-12 mb-2" />
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Listings Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Recent Listings</h2>
              <Link href="/listings" className="flex items-center text-primary hover:underline">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Tabs defaultValue="lost" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="lost">Lost Items</TabsTrigger>
                <TabsTrigger value="found">Found Items</TabsTrigger>
              </TabsList>
              <TabsContent value="lost">
                <RecentListings type="lost" />
              </TabsContent>
              <TabsContent value="found">
                <RecentListings type="found" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                PakLost & Found connects people who have lost items with those who have found them
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
              {[
                {
                  title: "Post",
                  description: "Report a lost or found item with details and photos",
                  icon: "📝",
                },
                {
                  title: "Connect",
                  description: "Get notified when someone responds to your post",
                  icon: "🔔",
                },
                {
                  title: "Recover",
                  description: "Arrange to recover your item safely",
                  icon: "🤝",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Success Stories</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Real stories from people who have successfully recovered their lost items
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
              {[
                {
                  name: "Ahmed",
                  city: "Islamabad",
                  item: "Wallet",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.23.48%20AM.jpeg?updatedAt=1742329504402",
                  story:
                    "I lost my wallet containing important documents. Within 24 hours, someone found it and contacted me through PakLost & Found!",
                },
                {
                  name: "Fatima",
                  city: "Lahore",
                  item: "Phone",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  story:
                    "My phone fell out of my bag in a rickshaw. Thanks to this platform, the driver found this site and returned it to me.",
                },
                {
                  name: "Jamal",
                  city: "Islamabad",
                  item: "Pet Cat",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.24.07%20AM.jpeg?updatedAt=1742329503993",
                  story:
                    "My cat went missing for 3 days. A neighbor saw my post and helped reunite us. Forever grateful!",
                },
              ].map((story, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div className="space-y-2 text-center">
                        <h3 className="font-bold">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {story.city} • Recovered: {story.item}
                        </p>
                        <p className="text-sm">{story.story}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
              <p className="mx-auto max-w-[700px]">
                Help build a stronger, more connected Pakistan where lost items find their way home
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

