'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function HolidayDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if popup has been shown before
    const hasShown = localStorage.getItem('holidayPopupShown_v1')

    if (!hasShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem('holidayPopupShown_v1', 'true')
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isMounted || !isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 slide-up-fade-in">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-2xl p-6 sm:p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              25% OFF
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Holiday Special
            </h2>
            <p className="text-gray-600 text-sm">
              This festive season, enjoy a quarter off all our services!
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-gray-700 text-sm font-medium">
                ✓ Lawn Mowing & Trimming
              </p>
              <p className="text-gray-700 text-sm font-medium">
                ✓ Sod Installation
              </p>
              <p className="text-gray-700 text-sm font-medium">
                ✓ Tree & Debris Removal
              </p>
              <p className="text-gray-700 text-sm font-medium">
                ✓ All Other Services
              </p>
            </div>

            <p className="text-xs text-gray-600 text-center bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              Valid for limited time. Call us or request a free quote to claim your discount!
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <button
              onClick={() => {
                window.location.href = 'tel:8632730555'
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg rounded-lg transition-colors"
            >
              📞 Call 863-273-0555
            </button>
            <button
              onClick={handleClose}
              className="w-full border-2 border-green-300 text-gray-700 hover:bg-green-50 font-semibold py-3 text-lg rounded-lg transition-colors"
            >
              Claim Your Discount
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
