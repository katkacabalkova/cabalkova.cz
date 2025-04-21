import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Brain, Sparkles, CheckCircle2 } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import SectionHeader from "@/components/SectionHeader"
import CtaSection from "@/components/CtaSection"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Jak vám mohu pomoci"
            subtitle="Nabízím odbornou psychoterapeutickou podporu jednotlivcům, párům, rodinám i firmám."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Individuální, párová a rodinná terapie"
              description="Věnuji se klientům, kteří si uvědomili, že z jakéhokoli důvodu potřebují podporu ve svých životních krocích či si chtějí dopřát čas pro svůj seberozvoj. Společně hledáme cestu k jejich vnitřní spokojenosti a schopnosti prožívat život kvalitněji."
              icon={<Brain className="w-7 h-7" />}
            />
            <ServiceCard
              title="Firmy a vzdělávání"
              description="Pracuji s týmy ve firmách i institucích, kterým pomáhám budovat a rozvíjet týmovou kulturu a zlepšovat mezilidské vztahy na pracovišti. Specializuji se na přednášky a workshopy zaměřené na zvládání stresu, work-life balance, efektivní komunikaci a mindfulness."
              icon={<Users className="w-7 h-7" />}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/talk-with-katerina.jpg"
                alt="Kateřina Cabalková, psychoterapeutka, přednáší o komunikaci ve vztazích"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O Kateřině</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jsem řádnou členkou České asociace pro psychoterapii, České společnosti KBT a akreditovanou rodinnou
              terapeutkou Společnosti rodinných a systemických terapeutů. Vystudovala jsem obor Sociální politika a
              sociální práce na Univerzitě Karlově a úspěšně jsem ukončila psychoterapeutický výcvik Transformační
              systemické terapie.
            </p>
            <Link
              href="/o-katerine"
              className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center group"
            >
              Více o mně
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Na čem si zakládám"
            subtitle="Moje práce stojí na těchto základních hodnotách a principech"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Autenticita", icon: <Sparkles className="w-6 h-6" /> },
              { title: "Respekt a partnerství", icon: <Users className="w-6 h-6" /> },
              { title: "Nehodnotící přístup", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Zážitková terapie", icon: <Brain className="w-6 h-6" /> },
              { title: "Důvěrnost", icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((value, index) => (
              <Link href="/o-katerine" key={index} className="block">
                <div
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center card-hover h-full"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaSection
        title="Připraveni začít svou cestu?"
        description="Kontaktujte mě pro více informací nebo pro objednání na terapii. Jsem tu, abych vám pomohla na vaší cestě k vnitřní spokojenosti."
        primaryButtonText="Kontaktujte mě"
        primaryButtonLink="/kontakt"
      />
    </>
  )
}
