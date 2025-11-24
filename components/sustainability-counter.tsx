"use client"

import { useEffect, useState } from "react"
import { Droplet, Leaf, Recycle } from "lucide-react"

export function SustainabilityCounter() {
  const [count, setCount] = useState({
    water: 0,
    carbon: 0,
    waste: 0,
  })

  useEffect(() => {
    // Simulate increasing counters
    const interval = setInterval(() => {
      setCount((prev) => ({
        water: prev.water < 250000 ? prev.water + 10000 : prev.water,
        carbon: prev.carbon < 1500 ? prev.carbon + 50 : prev.carbon,
        waste: prev.waste < 500 ? prev.waste + 20 : prev.waste,
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Together, we can make a difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <Droplet className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{(count.water / 1000).toLocaleString()}K</h3>
          <p className="text-lg font-medium mb-1">Liters of Water</p>
          <p className="text-sm text-muted-foreground">Saved by choosing second-hand</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-50 p-4 rounded-full mb-4">
            <Leaf className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{count.carbon.toLocaleString()}</h3>
          <p className="text-lg font-medium mb-1">kg CO₂</p>
          <p className="text-sm text-muted-foreground">Emissions prevented</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-amber-50 p-4 rounded-full mb-4">
            <Recycle className="h-8 w-8 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">{count.waste.toLocaleString()}</h3>
          <p className="text-lg font-medium mb-1">kg Waste</p>
          <p className="text-sm text-muted-foreground">Diverted from landfills</p>
        </div>
      </div>
    </div>
  )
}
