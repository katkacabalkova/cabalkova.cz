import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Kateřina <span className="gradient-text">Cabalková</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Akreditovaná psychoterapeutka</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Pomáhám jednotlivcům, párům i rodinám najít cestu k vnitřní spokojenosti a kvalitnímu životu. Odborně
            vzdělávám a podporuji týmy ve firmách i veřejnost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/terapie"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2 group"
            >
              Zjistit více o terapii
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/kontakt"
              className="bg-white hover:bg-gray-50 text-primary font-medium py-3 px-6 rounded-lg border border-primary/20 transition-colors text-center"
            >
              Kontaktovat mě
            </Link>
          </div>
        </div>
        <div className="relative animate-fade-in-delay-1">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/katerina-portrait.jpg"
              alt="Kateřina Cabalková - psychoterapeutka"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
