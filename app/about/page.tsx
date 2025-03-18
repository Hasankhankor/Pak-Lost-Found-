import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, Heart, MapPin, Clock, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About PakLost & Found
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A community-driven platform helping Pakistani people recover lost items and reunite with missing loved
                ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Badge className="px-3 py-1 text-sm">Our Mission</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Reuniting People with What Matters Most
              </h2>
              <p className="text-muted-foreground md:text-lg">
                PakLost & Found was created with a simple but powerful mission: to help Pakistani people find their lost
                belongings and loved ones through the power of community.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Every day, thousands of items are lost across Pakistan - from important documents to cherished personal
                belongings. Our platform connects those who have lost something with those who have found something,
                creating a network of support across the country.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://i.tribune.com.pk/media/images/20173-pakistanafpx-1395490139/20173-pakistanafpx-1395490139.jpg"
                alt="Community helping each other"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm">Our Values</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What We Stand For</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Our platform is built on core values that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community First</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of community to help each other in times of need.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Trust & Safety</h3>
                  <p className="text-muted-foreground">
                    We prioritize creating a safe environment for all users to connect.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    Our platform is designed to be accessible to all Pakistanis regardless of background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm">How It Works</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple Process, Powerful Results</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Our platform makes it easy to report and find lost items
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="pt-8 pb-6 px-4 border-t-4 border-primary w-full">
                  <h3 className="text-xl font-bold mb-2">Post Your Listing</h3>
                  <p className="text-muted-foreground">
                    Create a detailed listing with photos and information about the lost or found item.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="pt-8 pb-6 px-4 border-t-4 border-primary w-full">
                  <h3 className="text-xl font-bold mb-2">Connect with Others</h3>
                  <p className="text-muted-foreground">
                    Receive notifications and comments from community members who can help.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="pt-8 pb-6 px-4 border-t-4 border-primary w-full">
                  <h3 className="text-xl font-bold mb-2">Recover Your Item</h3>
                  <p className="text-muted-foreground">
                    Arrange a safe meeting to recover your lost item or return a found one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm">Our Team</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet the People Behind PakLost</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                A dedicated team working to make Pakistan a more connected community
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {[
                {
                  name: "Ahmed Tariq",
                  role: "Community Manager",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.23.48%20AM.jpeg?updatedAt=1742329504402",
                  bio: "Former tech executive with a passion for community building.",
                },

                {
                  name: "Hassan Tariq",
                  role: "Founder & CEO",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp_Image_2024-03-28_at_9.51.58_PM-removebg-preview%20(2).png?updatedAt=1721845473127",
                  bio: "Full-stack developer with a focus on creating intuitive user experiences.",
                },
                {
                  name: "ALI Tariq",
                  role: "Community Manager",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.40.03%20AM.jpeg?updatedAt=1742330421078",
                  bio: "Passionate about building and nurturing online communities.",
                },
                {
                  name: "Jamal",
                  role: "Community Manager",
                  image: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.24.07%20AM.jpeg?updatedAt=1742329503993",
                  bio: "Passionate about building and nurturing online communities.",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "10+",
                label: "Items Recovered",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
              },
              {
                number: "50+",
                label: "Active Users",
                icon: <Users className="h-8 w-8 text-primary" />,
              },
              {
                number: "100+",
                label: "Cities Covered",
                icon: <MapPin className="h-8 w-8 text-primary" />,
              },
              {
                number: "24/7",
                label: "Support",
                icon: <Clock className="h-8 w-8 text-primary" />,
              },
            ].map((stat, index) => (
              <Card key={index} className="bg-card text-card-foreground">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  {stat.icon}
                  <h3 className="text-3xl font-bold">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Real stories from people who have used PakLost & Found
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  quote:
                    "I lost my wallet with all my important documents while traveling. Thanks to PakLost, I was able to recover it within 24 hours!",
                  name: "Ahmed Khan",
                  location: "Karachi",
                  rating: 5,
                },
                {
                  quote:
                    "As someone who found a lost phone, this platform made it easy for me to return it to its rightful owner. The process was simple and secure.",
                  name: "Fatima Ali",
                  location: "Lahore",
                  rating: 5,
                },
                {
                  quote:
                    "My cat went missing for three days. I posted on PakLost and a neighbor recognized him from the photos. We were reunited the same day!",
                  name: "Usman Malik",
                  location: "Islamabad",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-card text-card-foreground">
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community Today</h2>
              <p className="mx-auto max-w-[700px]">
                Be part of a movement that's helping thousands of Pakistanis recover what matters most to them
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

