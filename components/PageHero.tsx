import type React from "react"
import type { ReactNode } from "react"

interface PageHeroProps {
  title: string
  children: ReactNode
  image?: React.ReactNode
}

export default function PageHero({ title, children, image }: PageHeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 gradient-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{title}</h1>
          <div className="text-lg text-gray-700">{children}</div>
        </div>
        {image && (
          <div className="relative animate-fade-in-delay-1">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">{image}</div>
          </div>
        )}
      </div>
    </section>
  )
}
