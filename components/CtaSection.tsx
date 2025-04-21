import Link from "next/link"

interface CtaSectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CtaSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CtaSectionProps) {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary-dark to-cyan-900 rounded-2xl py-16 px-8 md:px-16 text-white text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonLink}
              className="bg-white text-primary-dark hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-medium py-3 px-8 rounded-lg transition-colors inline-block shadow-md"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="bg-transparent hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors inline-block"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
