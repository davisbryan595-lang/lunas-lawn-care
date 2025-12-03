"use client"

import { useEffect } from "react"

export default function GrassParticles() {
  useEffect(() => {
    // Create falling grass particles
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "grass-particle"

      const size = Math.random() * 8 + 4
      const left = Math.random() * 100
      const duration = Math.random() * 8 + 10
      const delay = Math.random() * 2

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}vw;
        top: -10px;
        background: #84CC16;
        border-radius: 50%;
        opacity: 0.3;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `

      document.body.appendChild(particle)

      setTimeout(() => particle.remove(), (duration + delay) * 1000)
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 300)

    return () => clearInterval(interval)
  }, [])

  return null
}
