"use client"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with HD Lawn */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-lawn.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-4 text-balance drop-shadow-lg">
          LUNA'S LAWN CARE
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 text-balance drop-shadow-lg">& LANDSCAPING</h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 drop-shadow-md">
          Highlands County, FL – Est. 2024
        </p>
        <p className="text-lg text-accent font-semibold mb-12 drop-shadow-md">✨ Growing Your Perfect Lawn ✨</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-accent text-foreground font-bold text-lg rounded-lg hover:bg-accent/90 transition shadow-lg hover:shadow-2xl"
          >
            Free Quote
          </button>
          <a
            href="tel:8632730555"
            className="px-8 py-4 bg-primary-foreground text-primary font-bold text-lg rounded-lg hover:bg-accent/20 transition shadow-lg hover:shadow-2xl"
          >
            📞 Call 863-273-0555
          </a>
        </div>
      </div>

      {/* Animated Wave Bottom */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
