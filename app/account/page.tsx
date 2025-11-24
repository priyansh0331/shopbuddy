import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AccountNav } from "@/components/account-nav"
import { AccountProfile } from "@/components/account-profile"
import { AccountOrders } from "@/components/account-orders"
import { AccountFavorites } from "@/components/account-favorites"
import { AccountSettings } from "@/components/account-settings"
import { AccountAddresses } from "@/components/account-addresses"
import { AccountPayments } from "@/components/account-payments"

export const metadata: Metadata = {
  title: "Account | ReVibe",
  description: "Manage your ReVibe account",
}

export default function AccountPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-1/4">
          <AccountNav />
        </aside>
        <main className="flex-1">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6">
              <AccountProfile />
            </TabsContent>
            <TabsContent value="orders" className="mt-6">
              <AccountOrders />
            </TabsContent>
            <TabsContent value="favorites" className="mt-6">
              <AccountFavorites />
            </TabsContent>
            <TabsContent value="addresses" className="mt-6">
              <AccountAddresses />
            </TabsContent>
            <TabsContent value="payments" className="mt-6">
              <AccountPayments />
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <AccountSettings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
