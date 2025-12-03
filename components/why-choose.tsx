"use client"

import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Family Owned & Operated",
    description: "Established in 2024, we treat every lawn like it's our own",
  },
  {
    title: "Licensed & Insured",
    description: "Professional credentials and full insurance coverage for peace of mind",
  },
  {
    title: "Same-Week Service",
    description: "Quick turnaround times to keep your lawn looking pristine",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee on all our services",
  },
]

export default function WhyChoose() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Luna's?</h2>
          <p className="text-lg text-muted-foreground">Your trusted partner for exceptional lawn care</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border-3 border-primary rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
