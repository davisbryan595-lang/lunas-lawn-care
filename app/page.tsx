"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import WhyChoose from "@/components/why-choose"
import ServiceArea from "@/components/service-area"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import FloatingCallButton from "@/components/floating-call-button"
import Preloader from "@/components/preloader"
import GrassParticles from "@/components/grass-particles"
import HolidayDiscountPopup from "@/components/holiday-discount-popup"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <main className="relative">
      <GrassParticles />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChoose />
      <ServiceArea />
      <ContactForm />
      <Footer />
      <FloatingCallButton />
      <HolidayDiscountPopup />
    </main>
  )
}
