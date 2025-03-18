import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Calendar, Eye, Share2, Flag, Phone, Mail, ThumbsUp, Send } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function PostDetailPage({ params }: { params: { id: string } }) {
  // Mock post data - in a real app, this would come from an API or database
  const post = {
    id: params.id,
    title: "Lost iPhone 13 Pro",
    description:
      "Lost my iPhone 13 Pro at Centaurus Mall, Islamabad on May 15th. It has a blue case with flower pattern. The phone has important photos of my family. Please contact me if found. Reward offered.",
    category: "Electronics",
    location: "Centaurus Mall, Islamabad",
    date: "2023-05-15",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=2036&auto=format&fit=crop",
    ],
    user: {
      name: "Ahmed",
      avatar: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.23.48%20AM.jpeg?updatedAt=1742329504402",
      verified: true,
      joinDate: "January 2022",
    },
    contact: {
      phone: "+92 300 1234567",
      email: "ahmed@example.com",
    },
    comments: 5,
    views: 120,
    type: "lost",
    status: "active",
  }

  // Mock comments data
  const comments = [
    {
      id: 1,
      user: {
        name: "Ahmed",
        avatar: "https://ik.imagekit.io/os33grffu/WhatsApp%20Image%202025-03-19%20at%201.23.48%20AM.jpeg?updatedAt=1742329504402",
      },
      text: "I think I saw something similar at Centaurus Mall yesterday. Was it near the food court?",
      date: "2 days ago",
      likes: 3,
    },
    {
      id: 2,
      user: {
        name: "Sara",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      },
      text: "I lost a similar item but mine had a blue case. Hope you find yours!",
      date: "1 day ago",
      likes: 1,
    },
  ]

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <Badge variant={post.type === "lost" ? "destructive" : "success"} className="text-sm py-1">
              {post.type === "lost" ? "Lost Item" : "Found Item"}
            </Badge>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Flag className="h-4 w-4 mr-2" />
                Report
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Badge variant="outline" className="mr-2">
                {post.category}
              </Badge>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{post.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{post.views} views</span>
            </div>
          </div>

          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {post.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Image ${index + 1} of ${post.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground whitespace-pre-line">{post.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Comments ({comments.length})</h2>
            <div className="flex gap-2">
              <Textarea placeholder="Add a comment or information that might help..." className="min-h-[80px]" />
              <Button size="sm" className="self-end">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 mt-6">
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                        <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{comment.user.name}</div>
                          <div className="text-xs text-muted-foreground">{comment.date}</div>
                        </div>
                        <p className="text-sm">{comment.text}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-xs">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {comment.likes > 0 ? `${comment.likes} likes` : "Like"}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Reply
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <h3 className="font-semibold text-lg">{post.user.name}</h3>
                    {post.user.verified && (
                      <Badge variant="outline" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Member since {post.user.joinDate}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="font-semibold">Contact Information</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    {post.contact.phone}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    {post.contact.email}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Similar Listings</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=64&width=64&text=${item}`}
                        alt={`Similar item ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-1">
                        {post.type === "lost" ? "Lost" : "Found"} iPhone {12 + item} in Islamabad
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">F-10 Markaz, Islamabad</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(Date.now() - item * 86400000).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Safety Tips</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Meet in public places for item exchanges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Verify the identity of the person you're meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Consider bringing a friend when meeting someone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Report suspicious behavior to our team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

