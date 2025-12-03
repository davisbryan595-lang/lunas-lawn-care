"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", address: "", service: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg">Phone</p>
                  <a href="tel:8632730555" className="text-foreground hover:text-primary transition text-lg">
                    863-273-0555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-foreground" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg">Email</p>
                  <a
                    href="mailto:info@lunaslawncare.com"
                    className="text-foreground hover:text-primary transition text-lg"
                  >
                    info@lunaslawncare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary-foreground" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg">Service Area</p>
                  <p className="text-foreground text-lg">Highlands County, FL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition bg-card text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition bg-card text-foreground"
                    placeholder="863-273-0555"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition bg-card text-foreground"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Property Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition bg-card text-foreground"
                  placeholder="Street address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition bg-card text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="mowing">Lawn Mowing & Trimming</option>
                  <option value="aeration">Lawn Aeration</option>
                  <option value="weed">Weed Control & Fertilization</option>
                  <option value="sod">Sod Installation</option>
                  <option value="cleanup">Clean Outs & Hauling</option>
                  <option value="tree">Tree & Debris Removal</option>
                  <option value="other">Other/Multiple Services</option>
                </select>
              </div>

              {submitted && (
                <div className="p-4 bg-accent text-foreground rounded-lg font-semibold text-center">
                  ✓ Thank you! We'll contact you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-lg hover:shadow-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
