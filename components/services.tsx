"use client"

import { Leaf, Sprout, Zap, Droplets, Trash2, TreePine } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Lawn Mowing & Trimming",
    description: "Professional precision mowing and edging for a manicured look every week",
  },
  {
    icon: Sprout,
    title: "Lawn Aeration",
    description: "Improve soil health and grass growth with professional aeration services",
  },
  {
    icon: Leaf,
    title: "Weed Control & Fertilization",
    description: "Keep weeds away while feeding your lawn with premium treatments",
  },
  {
    icon: Droplets,
    title: "Sod Installation",
    description: "Transform your yard instantly with quality sod installation",
  },
  {
    icon: Trash2,
    title: "Clean Outs & Hauling",
    description: "Remove debris, tree limbs, and unwanted materials professionally",
  },
  {
    icon: TreePine,
    title: "Tree & Debris Removal",
    description: "Safe and efficient removal of trees and brush from your property",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground">
            Complete lawn care and landscaping solutions for Highlands County
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="p-8 bg-card border-2 border-accent rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 hover:-translate-y-2 duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
