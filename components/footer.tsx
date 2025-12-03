"use client"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/lunas.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-bold">LUNA'S</p>
                <p className="text-sm text-accent">Lawn Care</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional lawn care and landscaping for Highlands County, FL since 2024
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Lawn Mowing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Aeration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Sod Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition">
                  Tree Removal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:8632730555" className="hover:text-accent transition">
                  📞 863-273-0555
                </a>
              </li>
              <li>
                <a href="mailto:info@lunaslawncare.com" className="hover:text-accent transition">
                  ✉ info@lunaslawncare.com
                </a>
              </li>
              <li className="text-primary-foreground/80">📍 Highlands County, FL</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            &copy; 2025 Luna's Lawn Care & Landscaping. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
