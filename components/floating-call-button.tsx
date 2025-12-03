"use client"

import { Phone } from "lucide-react"
import Link from "next/link"

export default function FloatingCallButton() {
  return (
    <Link href="tel:8632730555" className="fixed bottom-6 right-6 z-40 group">
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full pulse-ring opacity-75" />
        <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition hover:scale-110 cursor-pointer">
          <Phone className="text-primary-foreground animate-bounce" size={28} />
        </div>
      </div>
      <span className="absolute bottom-20 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Call 863-273-0555
      </span>
    </Link>
  )
}
