"use client"

import { MapPin } from "lucide-react"

export default function ServiceArea() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Map/Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary to-accent rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition">
            <iframe
              title="Highlands County, Florida Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898828.3999031562!2d-81.5!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd4b8f6c1c0001%3A0xf00ef62049671090!2sHighlands%20County%2C%20Florida!5e0!3m2!1sen!2sus!4v1609906000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
