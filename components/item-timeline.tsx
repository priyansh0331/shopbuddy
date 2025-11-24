import { CheckCircle2, Factory, Recycle, ShoppingBag, Truck } from "lucide-react"

export function ItemTimeline() {
  const timelineEvents = [
    {
      date: "1998",
      title: "Manufacturing",
      description: "Originally manufactured in the India using traditional denim production methods.",
      icon: <Factory className="h-5 w-5" />,
    },
    {
      date: "1998-2023",
      title: "First Owner",
      description: "Purchased new and worn regularly over two decades.",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      date: "2024-2025",
      title: "Second Owner",
      description: "Purchased from a local thrift store and worn occasionally.",
      icon: <Recycle className="h-5 w-5" />,
    },
    {
      date: "2025",
      title: "Quality Check",
      description: "Professionally cleaned and inspected for quality assurance.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      date: "2025",
      title: "Available Now",
      description: "Ready for its next chapter with a new owner.",
      icon: <Truck className="h-5 w-5" />,
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted md:left-1/2" />
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative">
            <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 md:w-1/2 md:pr-8 md:pl-0 pl-12 pb-10 md:pb-0">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 top-0 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center -ml-4 md:ml-0 md:-translate-x-1/2">
                  {event.icon}
                </div>
              </div>
              <div className="flex-1 md:w-1/2 md:pl-8 md:pr-0 pl-12">
                <span className="text-sm font-medium text-muted-foreground">{event.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
