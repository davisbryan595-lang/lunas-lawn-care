"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="mb-8 animate-spin">
          <Image
            src="/images/lunas.jpg"
            alt="Loading"
            width={80}
            height={80}
            className="rounded-full border-4 border-accent mx-auto"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Growing Your</h2>
        <h2 className="text-2xl md:text-3xl font-bold text-accent">Perfect Lawn...</h2>
      </div>
    </div>
  )
}
