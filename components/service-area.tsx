"use client"

import { MapPin } from "lucide-react"

export default function ServiceArea() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Map/Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary to-accent rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition">
            <img
              src={`/placeholder.svg?height=400&width=400&query=Highlands County Florida map region`}
              alt="Service Area Map"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-primary-foreground text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-2xl font-bold">Highlands County, FL</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Service Area</h2>
            <p className="text-xl text-foreground mb-6">
              Proudly serving all of <strong>Highlands County, Florida</strong>. Whether you're in Sebring, Avon Park,
              Lake Placid, or anywhere in between, we've got you covered.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <p className="text-foreground">Complete coverage of Highlands County</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <p className="text-foreground">Rapid response times for emergencies</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <p className="text-foreground">Local expertise and community focus</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <p className="text-foreground">Same-week scheduling available</p>
              </div>
            </div>

            <a
              href="tel:8632730555"
              className="mt-8 inline-block px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary/90 transition shadow-lg hover:shadow-2xl"
            >
              📞 Schedule Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
