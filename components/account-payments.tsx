"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Loader2, Plus, Trash2 } from "lucide-react"

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

// Sample payment methods data
const paymentMethods = [
  {
    id: 1,
    name: "Visa ending in 4242",
    default: true,
    cardType: "visa",
    lastFour: "4242",
    expiryMonth: "12",
    expiryYear: "2025",
  },
  {
    id: 2,
    name: "Mastercard ending in 5555",
    default: false,
    cardType: "mastercard",
    lastFour: "5555",
    expiryMonth: "06",
    expiryYear: "2024",
  },
]

export function AccountPayments() {
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
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your payment methods.</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add Payment Method</DialogTitle>
                <DialogDescription>Add a new credit or debit card to your account.</DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="space-y-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" disabled={isLoading} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiration Date</Label>
                    <div className="flex gap-2">
                      <Select defaultValue="01" disabled={isLoading}>
                        <SelectTrigger id="expiry-month" className="w-full">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = (i + 1).toString().padStart(2, "0")
                            return (
                              <SelectItem key={month} value={month}>
                                {month}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <Select defaultValue="2023" disabled={isLoading}>
                        <SelectTrigger id="expiry-year" className="w-full">
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = (new Date().getFullYear() + i).toString()
                            return (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" disabled={isLoading} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name-on-card">Name on Card</Label>
                  <Input id="name-on-card" placeholder="Jane Doe" disabled={isLoading} />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <input type="checkbox" id="default-payment" className="rounded border-gray-300" />
                  <Label htmlFor="default-payment">Set as default payment method</Label>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isLoading}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Payment Method
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {paymentMethods.length > 0 ? (
            <div className="space-y-4">
              <RadioGroup defaultValue={paymentMethods.find((p) => p.default)?.id.toString()}>
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-start space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value={method.id.toString()} id={`payment-${method.id}`} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`payment-${method.id}`} className="font-medium cursor-pointer">
                          {method.name}
                        </Label>
                        {method.default && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="mt-2 text-sm">
                        <p>
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm">
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
              <CreditCard className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No payment methods yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Add a payment method to your account.</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
