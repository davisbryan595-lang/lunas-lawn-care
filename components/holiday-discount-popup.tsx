'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function HolidayDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('holidayPopupShown')

    if (!popupShown) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('holidayPopupShown', 'true')
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="max-w-md border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl"
        showCloseButton={false}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <DialogHeader className="gap-4 pt-4">
          <div className="text-center space-y-2">
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

          <div className="space-y-3">
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

          <div className="space-y-2 pt-2">
            <Button
              onClick={() => {
                // Open phone dialer or contact form
                window.location.href = 'tel:8632730555'
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg rounded-lg transition-colors"
            >
              📞 Call 863-273-0555
            </Button>
            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full border-green-300 text-gray-700 hover:bg-green-50"
            >
              Claim Your Discount
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
