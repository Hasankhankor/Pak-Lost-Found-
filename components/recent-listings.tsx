import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, MessageSquare, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface RecentListingsProps {
  type: "lost" | "found"
}

export default function RecentListings({ type }: RecentListingsProps) {
  // Mock data - in a real app, this would come from an API or database
  const listings = [
    {
      id: 1,
      title: "Lost iPhone 13 Pro",
      description: "Lost in Centaurus Mall, Islamabad. Has a blue case with flower pattern.",
      category: "Electronics",
      location: "Islamabad",
      date: "2023-05-15",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
      user: {
        name: "Ahmed",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      comments: 5,
      views: 120,
      type: "lost",
    },
    {
      id: 2,
      title: "Found CNIC Card",
      description: "Found at Packages Mall, Lahore. Name: Muhammad Imran.",
      category: "Documents",
      location: "Lahore",
      date: "2023-05-14",
      image: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1974&auto=format&fit=crop",
      user: {
        name: "Sara",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      comments: 2,
      views: 45,
      type: "found",
    },
    {
      id: 3,
      title: "Lost Gold Bracelet",
      description: "Lost at a wedding in Pearl Continental Hotel, Karachi.",
      category: "Jewelry",
      location: "Karachi",
      date: "2023-05-13",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1974&auto=format&fit=crop",
      user: {
        name: "Fatima",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      comments: 8,
      views: 210,
      type: "lost",
    },
    {
      id: 4,
      title: "Found Persian Cat",
      description: "Found in DHA Phase 5, Lahore. White with blue eyes.",
      category: "Pets",
      location: "Lahore",
      date: "2023-05-12",
      image: "https://images.unsplash.com/photo-1610013703311-4c89a8b2f0f6?q=80&w=1974&auto=format&fit=crop",
      user: {
        name: "Usman",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      comments: 12,
      views: 320,
      type: "found",
    },
  ].filter((listing) => listing.type === type)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {listings.map((listing) => (
        <Link href={`/post/${listing.id}`} key={listing.id}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
              <Badge className="absolute top-2 right-2" variant={listing.type === "lost" ? "destructive" : "success"}>
                {listing.type === "lost" ? "Lost" : "Found"}
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Badge variant="outline">{listing.category}</Badge>
                <h3 className="font-semibold line-clamp-1">{listing.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{listing.description}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{listing.location}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{new Date(listing.date).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={listing.user.avatar} alt={listing.user.name} />
                  <AvatarFallback>{listing.user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{listing.user.name}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{listing.comments}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{listing.views}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

