import Link from "next/link"
import Image from "next/image"
import { Users, Zap, Briefcase, Lightbulb, Clock, CheckCircle } from "lucide-react"
import PageHero from "@/components/PageHero"
import ServiceCard from "@/components/ServiceCard"
import TestimonialCard from "@/components/TestimonialCard"
import SectionHeader from "@/components/SectionHeader"

export default function ForCompaniesPage() {
  const services = [
    {
      id: 1,
      title: "Workshopy a semináře",
      description:
        "Interaktivní workshopy a semináře na témata jako zvládání stresu, prevence vyhoření, efektivní komunikace, řešení konfliktů a budování zdravých vztahů na pracovišti.",
      icon: <Briefcase className="w-7 h-7" />,
    },
    {
      id: 2,
      title: "Individuální konzultace",
      description:
        "Individuální konzultace pro zaměstnance zaměřené na řešení osobních či pracovních problémů, zvládání stresu, prevenci vyhoření a podporu duševního zdraví.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      id: 3,
      title: "Teambuilding",
      description:
        "Zážitkové aktivity zaměřené na posílení týmové spolupráce, zlepšení komunikace a budování důvěry mezi členy týmu.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      id: 4,
      title: "Krizová intervence",
      description:
        "Podpora zaměstnanců a týmů v náročných situacích, jako jsou organizační změny, konflikty na pracovišti nebo jiné krizové události.",
      icon: <Zap className="w-7 h-7" />,
    },
    {
      id: 5,
      title: "Konzultace pro management",
      description:
        "Poradenství pro vedoucí pracovníky v oblasti podpory duševního zdraví zaměstnanců, efektivního vedení týmů a vytváření zdravé firemní kultury.",
      icon: <Lightbulb className="w-7 h-7" />,
    },
    {
      id: 6,
      title: "Dlouhodobá spolupráce",
      description:
        "Vytvoření komplexního programu péče o duševní zdraví zaměstnanců na míru potřebám vaší společnosti, včetně pravidelných aktivit a sledování výsledků.",
      icon: <Clock className="w-7 h-7" />,
    },
  ]

  const benefits = [
    {
      title: "Zvýšení produktivity",
      description:
        "Zaměstnanci s dobrou duševní pohodou jsou produktivnější, kreativnější a efektivnější ve své práci.",
    },
    {
      title: "Snížení absence",
      description: "Prevence duševních problémů vede ke snížení pracovní neschopnosti a absence zaměstnanců.",
    },
    {
      title: "Lepší pracovní atmosféra",
      description:
        "Podpora duševního zdraví přispívá k vytvoření pozitivní pracovní atmosféry a lepším vztahům na pracovišti.",
    },
    {
      title: "Snížení fluktuace",
      description: "Zaměstnanci, kteří se cítí podporováni, mají vyšší loajalitu k firmě a nižší tendenci odcházet.",
    },
    {
      title: "Konkurenční výhoda",
      description:
        "Péče o duševní zdraví zaměstnanců je stále více ceněna a může být významnou konkurenční výhodou při náboru nových talentů.",
    },
  ]

  const testimonials = [
    {
      text: "Kateřina pro naši firmu připravila sérii workshopů o zvládání stresu a prevenci vyhoření. Zpětná vazba od zaměstnanců byla velmi pozitivní a mnozí uvedli, že získané techniky aktivně využívají v každodenním životě. Oceňuji její profesionální, a přitom lidský přístup.",
      author: "Jana Nováková",
      role: "HR manažerka, IT společnost",
    },
    {
      text: "Spolupráce s Kateřinou nám pomohla vytvořit zdravější firemní kulturu. Její individuální konzultace pro management i zaměstnance přispěly ke zlepšení komunikace a snížení konfliktů v týmech. Výsledkem je nejen příjemnější pracovní prostředí, ale i vyšší produktivita a nižší fluktuace.",
      author: "Petr Svoboda",
      role: "CEO, marketingová agentura",
    },
  ]

  return (
    <>
      <PageHero
        title="Pro firmy a vzdělávání"
        image={
          <Image
            src="/images/corporate-workshop.png"
            alt="Firemní workshop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        }
      >
        <p className="text-xl text-gray-700 max-w-3xl mb-8">
          Podpora duševního zdraví a well-being zaměstnanců je klíčem k úspěchu každé organizace.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl">
          Nabízím komplexní služby v oblasti péče o duševní zdraví zaměstnanců, které pomohou vaší firmě vytvořit zdravé
          a produktivní pracovní prostředí. Mé služby jsou vždy přizpůsobeny specifickým potřebám vaší organizace.
        </p>
      </PageHero>

      {/* Services */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Služby pro firmy" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Proč investovat do duševního zdraví zaměstnanců" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Co o mně říkají klienti" centered />

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary-dark to-cyan-900 rounded-2xl py-16 px-8 md:px-16 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pojďme společně vytvořit zdravé pracovní prostředí</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Kontaktujte mě pro nezávaznou konzultaci o možnostech spolupráce. Společně navrhneme program péče o
              duševní zdraví zaměstnanců na míru potřebám vaší organizace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-block shadow-md"
              >
                Kontaktujte mě
              </Link>
              <Link
                href="/cenik"
                className="bg-transparent hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors inline-block"
              >
                Ceník služeb
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
