"use client"

import type React from "react"

import { useState } from "react"
import { Edit, Loader2, MapPin, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample addresses data
const addresses = [
  {
    id: 1,
    name: "Home",
    default: true,
    fullName: "Kanisha Saxena",
    street: "Arera Colony",
    city: "Bhopal",
    state: "Mp",
    zip: "462022",
    country: "India",
    phone: "+(91) 1234567890",
  },
  
]

export function AccountAddresses() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate saving delay
    setTimeout(() => {
      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Shipping Addresses</CardTitle>
            <CardDescription>Manage your shipping addresses.</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Address
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Address</DialogTitle>
                <DialogDescription>Add a new shipping address to your account.</DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="space-y-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="address-name">Address Name</Label>
                  <Input id="address-name" placeholder="Home, Work, etc." disabled={isLoading} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Kanisha Saxena" disabled={isLoading} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input id="street" placeholder="Arera Colony" disabled={isLoading} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Bhopal" disabled={isLoading} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="MP" disabled={isLoading} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="462022" disabled={isLoading} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="India" disabled={isLoading}>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 xxxxxxxxx" disabled={isLoading} />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <input type="checkbox" id="default-address" className="rounded border-gray-300" />
                  <Label htmlFor="default-address">Set as default address</Label>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isLoading}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Address
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {addresses.length > 0 ? (
            <div className="space-y-4">
              <RadioGroup defaultValue={addresses.find((a) => a.default)?.id.toString()}>
                {addresses.map((address) => (
                  <div key={address.id} className="flex items-start space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`address-${address.id}`} className="font-medium cursor-pointer">
                          {address.name}
                        </Label>
                        {address.default && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="mt-2 text-sm">
                        <p>{address.fullName}</p>
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.state} {address.zip}
                        </p>
                        <p>{address.country}</p>
                        <p className="mt-1">{address.phone}</p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="mr-2 h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No addresses yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Add a shipping address to your account.</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Address
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
