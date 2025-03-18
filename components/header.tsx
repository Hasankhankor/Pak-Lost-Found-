"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Bell, User, LogIn } from "lucide-react"
import { useState } from "react"
import LanguageToggle from "@/components/language-toggle"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Mock auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/" && "bg-muted",
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/listings"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/listings" && "bg-muted",
                  )}
                >
                  Browse Listings
                </Link>
                <Link
                  href="/login?redirect=/post/create"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/post/create" && "bg-muted",
                  )}
                >
                  Report Item
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/about" && "bg-muted",
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-lg font-medium rounded-md hover:bg-muted",
                    pathname === "/contact" && "bg-muted",
                  )}
                >
                  Contact
                </Link>
                <div className="border-t my-4"></div>
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/profile"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-lg font-medium rounded-md hover:bg-muted"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/my-listings"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-lg font-medium rounded-md hover:bg-muted"
                    >
                      My Listings
                    </Link>
                    <Button
                      variant="ghost"
                      className="justify-start px-4 py-2 text-lg font-medium rounded-md hover:bg-muted"
                      onClick={() => {
                        setIsLoggedIn(false)
                        setIsOpen(false)
                      }}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-lg font-medium rounded-md hover:bg-muted"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-lg font-medium rounded-md hover:bg-muted"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">PakLost</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/listings" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Browse Listings</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Report Item</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/login?redirect=/post/create?type=lost"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Report Lost Item</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Post about an item you've lost
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/login?redirect=/post/create?type=found"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Report Found Item</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Post about an item you've found
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <LanguageToggle />
          <ModeToggle />
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
              <Button size="sm" asChild className="hidden md:inline-flex">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

