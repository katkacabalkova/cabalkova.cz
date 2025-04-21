interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className={`text-gray-600 ${centered ? "max-w-2xl mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  )
}
