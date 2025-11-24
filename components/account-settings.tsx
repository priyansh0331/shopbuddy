"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AccountSettings() {
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Email Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="order-updates" className="flex-1">
                  Order updates
                  <span className="block text-xs text-muted-foreground">Receive emails about your order status.</span>
                </Label>
                <Switch id="order-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="promotions" className="flex-1">
                  Promotions and sales
                  <span className="block text-xs text-muted-foreground">
                    Receive emails about promotions, sales, and new arrivals.
                  </span>
                </Label>
                <Switch id="promotions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="newsletter" className="flex-1">
                  Newsletter
                  <span className="block text-xs text-muted-foreground">
                    Receive our weekly newsletter with sustainable fashion tips.
                  </span>
                </Label>
                <Switch id="newsletter" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">App Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="app-order-updates" className="flex-1">
                  Order updates
                  <span className="block text-xs text-muted-foreground">
                    Receive push notifications about your order status.
                  </span>
                </Label>
                <Switch id="app-order-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="app-promotions" className="flex-1">
                  Promotions and sales
                  <span className="block text-xs text-muted-foreground">
                    Receive push notifications about promotions and sales.
                  </span>
                </Label>
                <Switch id="app-promotions" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="app-messages" className="flex-1">
                  Messages
                  <span className="block text-xs text-muted-foreground">
                    Receive push notifications when someone messages you.
                  </span>
                </Label>
                <Switch id="app-messages" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={isLoading} onClick={(e) => onSubmit(e as React.FormEvent)}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Preferences
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription>Manage your account settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                  <SelectItem value="cad">CAD ($)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex-1">
                Dark mode
                <span className="block text-xs text-muted-foreground">Use dark mode for the application.</span>
              </Label>
              <Switch id="dark-mode" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Privacy</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="profile-visibility" className="flex-1">
                  Profile visibility
                  <span className="block text-xs text-muted-foreground">Make your profile visible to other users.</span>
                </Label>
                <Switch id="profile-visibility" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="activity-sharing" className="flex-1">
                  Activity sharing
                  <span className="block text-xs text-muted-foreground">Share your activity with the community.</span>
                </Label>
                <Switch id="activity-sharing" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button disabled={isLoading} onClick={(e) => onSubmit(e as React.FormEvent)}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Preferences
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible and destructive actions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border border-destructive/50 p-4">
            <h3 className="font-medium text-destructive">Delete Account</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Permanently delete your account and all of your data. This action cannot be undone.
            </p>
            <Button variant="destructive" size="sm" className="mt-4">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
