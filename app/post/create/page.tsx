import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Image } from "next/image"
import { X } from "lucide-react"

export default function CreatePostPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type || "lost"
  const today = new Date()

  return (
    <div className="container max-w-3xl py-10 px-4 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {type === "lost" ? "Report a Lost Item" : "Report a Found Item"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {type === "lost"
              ? "Provide details about your lost item to help others identify it."
              : "Provide details about the item you found to help find its owner."}
          </p>
        </div>

        <form className="space-y-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select defaultValue={type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lost">Lost Item</SelectItem>
                    <SelectItem value="found">Found Item</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="pets">Pets</SelectItem>
                    <SelectItem value="people">People</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder={`${type === "lost" ? "Lost" : "Found"} item title`} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed description including color, brand, identifying marks, etc."
                rows={5}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="Where was it lost/found?" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(today, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={today} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Images</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <Card className="aspect-square flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Button variant="ghost" className="h-full w-full flex flex-col gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Add Image</span>
                    </Button>
                  </CardContent>
                </Card>
                {/* Example of an uploaded image */}
                <div className="relative aspect-square rounded-md overflow-hidden border">
                  <Image
                    src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop"
                    alt="Uploaded image preview"
                    fill
                    className="object-cover"
                  />
                  <Button variant="destructive" size="icon" className="absolute top-1 right-1 h-6 w-6">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Upload up to 5 images. Clear photos help with identification.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Contact Information</Label>
              <Input id="contact" placeholder="Phone number or email (will be visible to others)" required />
              <p className="text-xs text-muted-foreground">
                This information will be visible to other users so they can contact you.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

