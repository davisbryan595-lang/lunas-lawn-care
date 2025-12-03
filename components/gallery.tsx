"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    title: "Service 1",
    image: "/lunastuff/IMG-20251204-WA0048.jpg",
  },
  {
    title: "Service 2",
    image: "/lunastuff/IMG-20251204-WA0049.jpg",
  },
  {
    title: "Service 3",
    image: "/lunastuff/IMG-20251204-WA0050.jpg",
  },
  {
    title: "Service 4",
    image: "/lunastuff/IMG-20251204-WA0051.jpg",
  },
  {
    title: "Service 5",
    image: "/lunastuff/IMG-20251204-WA0052.jpg",
  },
  {
    title: "Service 6",
    image: "/lunastuff/IMG-20251204-WA0053.jpg",
  },
  {
    title: "Service 7",
    image: "/lunastuff/IMG-20251204-WA0054.jpg",
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground">Real transformations from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => setSelected(idx)}>
              <div className="relative h-64 bg-muted rounded-xl overflow-hidden border-4 border-secondary shadow-lg hover:shadow-2xl transition">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <div className="text-primary-foreground font-bold text-center opacity-0 group-hover:opacity-100 transition">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 fade-in"
          onClick={() => setSelected(null)}
        >
          <div className="relative bg-card rounded-xl max-w-2xl w-full p-4 slide-up-fade-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition z-10"
            >
              <X size={24} />
            </button>
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <img
                src={galleryImages[selected].image || "/placeholder.svg"}
                alt={galleryImages[selected].title}
                className="w-full h-full object-cover fade-in"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mt-4">{galleryImages[selected].title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}
