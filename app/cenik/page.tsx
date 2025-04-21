import Link from "next/link"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const services = [
    {
      id: 1,
      title: "Individuální terapie",
      duration: "50 minut",
      price: "1 500 Kč",
      description: "Individuální terapeutické sezení zaměřené na vaše osobní potřeby a cíle.",
    },
    {
      id: 2,
      title: "Párová terapie",
      duration: "75 minut",
      price: "2 300 Kč",
      description: "Terapeutické sezení pro páry zaměřené na zlepšení komunikace, řešení konfliktů a posílení vztahu.",
    },
    {
      id: 3,
      title: "Rodinná terapie",
      duration: "75 minut",
      price: "2 300 Kč",
      description: "Terapeutické sezení pro rodiny zaměřené na zlepšení rodinných vztahů a komunikace.",
    },
    {
      id: 4,
      title: "Pro firmy",
      duration: "Dle dohody",
      price: "Dohodou",
      description: "Workshopy, přednášky a konzultace pro firmy zaměřené na duševní zdraví a well-being zaměstnanců.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">Ceník</h1>
          <p className="text-lg text-gray-700 max-w-3xl animate-fade-in-delay-1">
            Níže najdete přehled cen za jednotlivé terapeutické služby. V případě jakýchkoliv dotazů mě neváhejte
            kontaktovat.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 md:px-12 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col card-hover animate-fade-in-delay-${(index % 3) + 1}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.duration}</p>
                <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <Link
                  href="/kontakt"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2 group"
                >
                  Objednat se
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Platební podmínky</h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  Způsob platby
                </h3>
                <p className="text-gray-700 mb-4 ml-13">
                  Platbu za terapeutické sezení můžete provést následujícími způsoby:
                </p>
                <ul className="space-y-2 text-gray-700 ml-13">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Hotově na místě</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Převodem na účet (údaje obdržíte po objednání)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  Storno podmínky
                </h3>
                <p className="text-gray-700 mb-4 ml-13">
                  Pokud se nemůžete dostavit na sjednané sezení, prosím, informujte mě nejpozději 24 hodin předem. V
                  případě pozdějšího zrušení nebo nedostavení se bez omluvy může být účtován storno poplatek ve výši 50%
                  ceny sezení.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary-dark to-cyan-900 rounded-2xl py-16 px-8 md:px-16 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Máte další otázky?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Neváhejte mě kontaktovat s jakýmikoliv dotazy ohledně terapie nebo cen. Ráda vám poskytnu všechny potřebné
              informace.
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-block shadow-md"
            >
              Kontaktujte mě
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
