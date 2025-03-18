import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="flex flex-col space-y-8">
        <div className="space-y-2 text-center">
          <Badge className="px-3 py-1 text-sm">Contact Us</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Have questions, feedback, or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">Reach out to us through any of these channels</p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground mt-1">
                      For general inquiries:{" "}
                      <a href="mailto:info@paklostfound.pk" className="text-primary hover:underline">
                        info@paklostfound.pk
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      For support:{" "}
                      <a href="mailto:support@paklostfound.pk" className="text-primary hover:underline">
                        support@paklostfound.pk
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground mt-1">
                      Customer Support:{" "}
                      <a href="tel:+923001234567" className="text-primary hover:underline">
                        +92 300 1234567
                      </a>
                    </p>
                    <p className="text-muted-foreground">Available Monday to Friday, 9am to 5pm PKT</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-muted-foreground mt-1">
                      Office 301, 3rd Floor, Tech Hub Building,
                      <br />
                      Blue Area, Islamabad, Pakistan
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <div className="text-muted-foreground mt-1 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-muted-foreground">
                      Your information will be processed in accordance with our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I report a lost item?",
                answer:
                  "To report a lost item, sign in to your account, click on 'Report Item' in the navigation menu, select 'Lost Item', and fill out the form with as much detail as possible.",
              },
              {
                question: "Is this service free to use?",
                answer:
                  "Yes, PakLost & Found is completely free for all users. We believe in providing this essential service to the community without any charges.",
              },
              {
                question: "How can I ensure my safety when meeting someone?",
                answer:
                  "Always meet in public places, bring a friend if possible, verify the identity of the person you're meeting, and trust your instincts. If something feels wrong, don't proceed with the meeting.",
              },
              {
                question: "What should I do if I find someone's lost item?",
                answer:
                  "Report it on our platform by clicking 'Report Item' and selecting 'Found Item'. Include clear photos and details about where and when you found it to help the owner identify it.",
              },
              {
                question: "How long do listings stay active?",
                answer:
                  "Listings remain active for 30 days by default. You can extend or deactivate your listing at any time from your profile dashboard.",
              },
              {
                question: "Can I report a missing person on this platform?",
                answer:
                  "Yes, we have a 'People' category specifically for reporting missing persons. However, we always recommend also filing a police report for missing persons cases.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground mt-2">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

