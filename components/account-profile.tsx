"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function AccountProfile() {
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate saving delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your personal information and public profile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
              <AvatarFallback>Kanisha</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <Button type="button" variant="outline" size="sm" className="w-fit">
                <Upload className="mr-2 h-4 w-4" />
                Change Avatar
              </Button>
              <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" defaultValue="Kanisha" disabled={isLoading} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" defaultValue="Saxena" disabled={isLoading} />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="maokanisha@gmail.com" disabled={isLoading} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" defaultValue="+91 1234567890" disabled={isLoading} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself"
              defaultValue="Sustainable fashion enthusiast and vintage collector."
              disabled={isLoading}
              className="min-h-[100px]"
            />
            <p className="text-xs text-muted-foreground">This will be displayed on your public profile.</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="kenny" disabled={isLoading} />
            <p className="text-xs text-muted-foreground">
              This will be used for your public profile URL: shopbuddy.com/user/kenny
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading} onClick={(e) => onSubmit(e as React.FormEvent)}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  )
}
