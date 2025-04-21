import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
