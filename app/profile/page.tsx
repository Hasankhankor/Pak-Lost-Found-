"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, User, Settings, LogOut, Edit, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    name: "Ahmed Khan",
    email: "ahmed@example.com",
    phone: "+92 300 1234567",
    city: "Islamabad",
    joinDate: "January 2022",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  }

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: "Lost iPhone 13 Pro",
      description: "Lost in Centaurus Mall, Islamabad. Has a blue case with flower pattern.",
      category: "Electronics",
      location: "Islamabad",
      date: "2023-05-15",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
      status: "active",
      type: "lost",
    },
    {
      id: 2,
      title: "Found Car Keys",
      description: "Found Honda car keys at F-7 Markaz, Islamabad.",
      category: "Personal Items",
      location: "Islamabad",
      date: "2023-05-10",
      image: "https://images.unsplash.com/photo-1581017316471-1f6ef7ce6fd3?q=80&w=2070&auto=format&fit=crop",
      status: "resolved",
      type: "found",
    },
    {
      id: 3,
      title: "Lost Wallet",
      description: "Black leather wallet lost in Jinnah Super Market, Islamabad.",
      category: "Personal Items",
      location: "Islamabad",
      date: "2023-05-05",
      image: "https://images.unsplash.com/photo-1627843240167-b1f9a9f9c9f2?q=80&w=2070&auto=format&fit=crop",
      status: "active",
      type: "lost",
    },
  ]

  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Change avatar</span>
                    </Button>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      {user.verified && (
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">Member since {user.joinDate}</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "listings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("listings")}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    My Listings
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Select defaultValue={user.city}>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us a bit about yourself" />
                    <p className="text-xs text-muted-foreground">This will be displayed on your public profile</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}

            {activeTab === "listings" && (
              <Card>
                <CardHeader>
                  <CardTitle>My Listings</CardTitle>
                  <CardDescription>Manage your lost and found item listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="resolved">Resolved</TabsTrigger>
                      <TabsTrigger value="expired">Expired</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-6">
                      <div className="space-y-4">
                        {listings.map((listing) => (
                          <Card key={listing.id}>
                            <CardContent className="p-0">
                              <div className="flex flex-col sm:flex-row">
                                <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
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
                                <div className="p-4 flex-1 flex flex-col">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="font-semibold">{listing.title}</h3>
                                      <p className="text-sm text-muted-foreground mt-1">{listing.description}</p>
                                    </div>
                                    <Badge
                                      variant={
                                        listing.status === "active"
                                          ? "outline"
                                          : listing.status === "resolved"
                                            ? "success"
                                            : "secondary"
                                      }
                                    >
                                      {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center text-xs text-muted-foreground mt-2">
                                    <span>{listing.location}</span>
                                    <span className="mx-2">•</span>
                                    <span>{new Date(listing.date).toLocaleDateString()}</span>
                                  </div>
                                  <div className="mt-auto pt-4 flex justify-end gap-2">
                                    <Button variant="outline" size="sm" asChild>
                                      <Link href={`/post/${listing.id}`}>View</Link>
                                    </Button>
                                    <Button variant="outline" size="sm" asChild>
                                      <Link href={`/post/edit/${listing.id}`}>Edit</Link>
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-destructive">
                                      <Trash className="h-4 w-4 mr-1" />
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="active" className="mt-6">
                      <div className="space-y-4">
                        {listings
                          .filter((listing) => listing.status === "active")
                          .map((listing) => (
                            <Card key={listing.id}>
                              <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row">
                                  <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
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
                                  <div className="p-4 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="font-semibold">{listing.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{listing.description}</p>
                                      </div>
                                      <Badge variant="outline">Active</Badge>
                                    </div>
                                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                                      <span>{listing.location}</span>
                                      <span className="mx-2">•</span>
                                      <span>{new Date(listing.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="mt-auto pt-4 flex justify-end gap-2">
                                      <Button variant="outline" size="sm" asChild>
                                        <Link href={`/post/${listing.id}`}>View</Link>
                                      </Button>
                                      <Button variant="outline" size="sm" asChild>
                                        <Link href={`/post/edit/${listing.id}`}>Edit</Link>
                                      </Button>
                                      <Button variant="ghost" size="sm" className="text-destructive">
                                        <Trash className="h-4 w-4 mr-1" />
                                        Delete
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="resolved" className="mt-6">
                      <div className="space-y-4">
                        {listings
                          .filter((listing) => listing.status === "resolved")
                          .map((listing) => (
                            <Card key={listing.id}>
                              <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row">
                                  <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
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
                                  <div className="p-4 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="font-semibold">{listing.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{listing.description}</p>
                                      </div>
                                      <Badge variant="success">Resolved</Badge>
                                    </div>
                                    <div className="flex items-center text-xs text-muted-foreground mt-2">
                                      <span>{listing.location}</span>
                                      <span className="mx-2">•</span>
                                      <span>{new Date(listing.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="mt-auto pt-4 flex justify-end gap-2">
                                      <Button variant="outline" size="sm" asChild>
                                        <Link href={`/post/${listing.id}`}>View</Link>
                                      </Button>
                                      <Button variant="ghost" size="sm" className="text-destructive">
                                        <Trash className="h-4 w-4 mr-1" />
                                        Delete
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="expired" className="mt-6">
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-muted p-6 mb-4">
                          <Bell className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-medium">No expired listings</h3>
                        <p className="text-muted-foreground mt-2 max-w-md">
                          You don't have any expired listings. Listings expire after 30 days of inactivity.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about your listings
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive SMS notifications about your listings</p>
                        </div>
                        <Switch id="sms-notifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing-emails">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
                        </div>
                        <Switch id="marketing-emails" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Privacy</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="profile-visibility">Profile Visibility</Label>
                          <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                        </div>
                        <Switch id="profile-visibility" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="contact-info-visibility">Contact Information Visibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Show your contact information on your listings
                          </p>
                        </div>
                        <Switch id="contact-info-visibility" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>
                    <div className="space-y-4">
                      <Button variant="outline">Change Password</Button>
                      <Button variant="outline">Two-Factor Authentication</Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                    <div className="space-y-4">
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Settings</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

