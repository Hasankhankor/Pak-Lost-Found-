"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Search, MapPin, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function ListingsPage() {
  const [date, setDate] = useState<Date>()
  const [activeFilters, setActiveFilters] = useState<string[]>([])

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
      image: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_j88mbhmIJ19az8lCYX82TO4UamgXwuIbVoPozYJl.jpg",
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
      image: "https://assets.petpal.asia/wp-content/uploads/2023/01/11150212/sergey-semin-ZjzXfBYxM_M-unsplash-1280x853.jpg",
      user: {
        name: "Usman",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      comments: 12,
      views: 320,
      type: "found",
    },
    {
      id: 5,
      title: "Lost Wallet",
      description: "Black leather wallet lost in Dolmen Mall, Karachi. Contains important cards.",
      category: "Personal Items",
      location: "Karachi",
      date: "2023-05-11",
      image: "https://images.unsplash.com/photo-1627843240167-b1f9a9f9c9f2?q=80&w=2070&auto=format&fit=crop",
      user: {
        name: "Zain",
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      },
      comments: 3,
      views: 89,
      type: "lost",
    },
    {
      id: 6,
      title: "Found Laptop Bag",
      description: "Found a black Dell laptop bag at Jinnah International Airport, Karachi.",
      category: "Electronics",
      location: "Karachi",
      date: "2023-05-10",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
      user: {
        name: "Ayesha",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      },
      comments: 4,
      views: 102,
      type: "found",
    },
    {
      id: 7,
      title: "Lost Prescription Glasses",
      description: "Lost my prescription glasses in F-7 Markaz, Islamabad. Black frame with gold details.",
      category: "Personal Items",
      location: "Islamabad",
      date: "2023-05-09",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop",
      user: {
        name: "Bilal",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      comments: 1,
      views: 67,
      type: "lost",
    },
    {
      id: 8,
      title: "Found Car Keys",
      description: "Found Honda car keys at Liberty Market, Lahore.",
      category: "Personal Items",
      location: "Lahore",
      date: "2023-05-08",
      image: "https://images.unsplash.com/photo-1581017316471-1f6ef7ce6fd3?q=80&w=2070&auto=format&fit=crop",
      user: {
        name: "Nadia",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      comments: 6,
      views: 143,
      type: "found",
    },
  ]

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Browse Listings</h1>
          <p className="text-muted-foreground">Search and filter through lost and found items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <Card className="md:col-span-1 h-fit">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Filters</h3>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filter) => (
                    <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                      {filter}
                      <Button variant="ghost" size="icon" className="h-4 w-4 p-0" onClick={() => removeFilter(filter)}>
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove filter</span>
                      </Button>
                    </Badge>
                  ))}
                  {activeFilters.length > 0 && (
                    <Button variant="ghost" size="sm" className="text-xs" onClick={() => setActiveFilters([])}>
                      Clear all
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select onValueChange={(value) => addFilter(`Type: ${value}`)}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lost">Lost Items</SelectItem>
                    <SelectItem value="found">Found Items</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => addFilter(`Category: ${value}`)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="pets">Pets</SelectItem>
                    <SelectItem value="people">People</SelectItem>
                    <SelectItem value="personal-items">Personal Items</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select onValueChange={(value) => addFilter(`City: ${value}`)}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="peshawar">Peshawar</SelectItem>
                    <SelectItem value="quetta">Quetta</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date Range</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      onClick={() => date && addFilter(`Date: ${format(date, "PPP")}`)}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Distance (km)</Label>
                  <span className="text-xs text-muted-foreground">25 km</span>
                </div>
                <Slider defaultValue={[25]} max={100} step={5} />
              </div>

              <Button className="w-full" onClick={() => addFilter("Applied all filters")}>
                Apply Filters
              </Button>
            </CardContent>
          </Card>

          {/* Listings */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search listings..." className="pl-10" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="most-viewed">Most Viewed</SelectItem>
                  <SelectItem value="most-commented">Most Commented</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="lost">Lost Items</TabsTrigger>
                <TabsTrigger value="found">Found Items</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {listings.map((listing) => (
                    <Link href={`/post/${listing.id}`} key={listing.id}>
                      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48 w-full">
                          <Image
                            src={listing.image || "/placeholder.svg"}
                            alt={listing.title}
                            fill
                            className="object-cover"
                          />
                          <Badge
                            className="absolute top-2 right-2"
                            variant={listing.type === "lost" ? "destructive" : "success"}
                          >
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
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              <span>{new Date(listing.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="lost" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {listings
                    .filter((listing) => listing.type === "lost")
                    .map((listing) => (
                      <Link href={`/post/${listing.id}`} key={listing.id}>
                        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative h-48 w-full">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              fill
                              className="object-cover"
                            />
                            <Badge className="absolute top-2 right-2" variant="destructive">
                              Lost
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
                                <CalendarIcon className="h-3 w-3 mr-1" />
                                <span>{new Date(listing.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="found" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {listings
                    .filter((listing) => listing.type === "found")
                    .map((listing) => (
                      <Link href={`/post/${listing.id}`} key={listing.id}>
                        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative h-48 w-full">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              fill
                              className="object-cover"
                            />
                            <Badge className="absolute top-2 right-2" variant="success">
                              Found
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
                                <CalendarIcon className="h-3 w-3 mr-1" />
                                <span>{new Date(listing.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">
                Previous
              </Button>
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="default" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

