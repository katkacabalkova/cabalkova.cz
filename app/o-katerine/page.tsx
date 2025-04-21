import Link from "next/link"
import Image from "next/image"
import { Sparkles, Users, CheckCircle2, Brain } from "lucide-react"

export default function AboutPage() {
  const memberships = [
    "Česká asociace pro psychoterapii",
    "Česká společnost KBT",
    "Společnost rodinných a systemických terapeutů",
    "Společnost transformační systemické terapie Virginie Satirové ČR",
  ]

  const values = [
    {
      title: "Autenticita",
      description:
        "Věřím v upřímný a autentický přístup ke klientům. Vytvářím bezpečný prostor, kde můžete být sami sebou bez obav z hodnocení.",
      icon: <Sparkles className="w-6 h-6 text-primary" />,
    },
    {
      title: "Respekt a partnerství",
      description:
        "Terapii vnímám jako partnerský vztah založený na vzájemném respektu. Společně hledáme cestu k vašim cílům.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: "Nehodnotící přístup",
      description:
        "Přistupuji ke každému klientovi bez předsudků a hodnocení. Vytvářím prostředí, kde se můžete cítit přijímáni takoví, jací jste.",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Zážitková terapie",
      description: "Využívám metody zážitkové terapie, které pomáhají hlubšímu porozumění a efektivnější změně.",
      icon: <Brain className="w-6 h-6 text-primary" />,
    },
    {
      title: "Důvěrnost",
      description: "Respektuji vaše soukromí a zachovávám naprostou důvěrnost všech informací sdílených během terapie.",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 gradient-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O Kateřině</h1>
            <p className="text-lg text-gray-700">
              Jsem akreditovaná psychoterapeutka se zaměřením na individuální, párovou a rodinnou terapii. Mým cílem je
              pomáhat lidem najít cestu k vnitřní spokojenosti a kvalitnímu životu.
            </p>
          </div>
          <div className="relative animate-fade-in-delay-1">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-katerina.jpg"
                alt="Kateřina Cabalková - psychoterapeutka"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Vzdělání a zkušenosti</h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vzdělání</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vystudovala jsem obor <strong>Sociální politika a sociální práce</strong> na Univerzitě Karlově, nyní pokračuji
                doktorským studiem.<br />
                Úspěšně jsem ukončila následujících psychoterapeutických výcviků a kurzů:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1 pl-4">
                <li><strong>Transformační systemická terapie</strong> vedený Společností transformační systemické terapie Virginie Satirové ČR</li>
                <li>Výcvik v <strong>Dialekticko behaviorální terapii</strong> - British Isles DBT Training</li>
                <li>Základní <strong>krizovou intervenci</strong> vedenou REMEDIEM Praha</li>
                <li>Výcvik v <strong>motivačních rozhovorech</strong> vedený PhDr. Janem Soukupem, Ph.D.</li>
                <li>Mnoho dalších menších vzdělávacích a zážitkových kurzů, dobrovolných stáží, seminářů a odborných sympozií.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ráda hledám rozmanitost, která se hezky zrcadlí i do mých terapeutických zkušeností. Kontinuálně se
                vzdělávám a ve své praxi kombinuji celou řadu terapeutických metod. Mám výcvik v <strong>systemické rodinné
                terapii</strong> a vedle toho v <strong>DBT terapii</strong>, jež vychází z principů <strong>kognitivně behaviorální terapie</strong>. Ta metody
                KBT dále rozšiřuje a specializuje je pro lidi s <strong>vysokou emoční citlivostí</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Profesní zkušenosti</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Od roku 2019 se věnuji klientům v <strong>soukromé praxi</strong>, ale mám zkušenost i s prací ve službách <strong>sociálního a
                školského resortu</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Během studia mne zájem o <strong>sebepoznání</strong> a péče o duševní pohodu studentů přivedl k založení <strong>Poradenského
                centra Hybernská</strong> pod Filozofickou fakultou Univerzity Karlovy. Pracuji s lidmi potýkající se s <strong>Hraniční
                poruchou osobnosti</strong> v <strong>DBT centru</strong> organizace Kaleidoskop. Pracovala jsem jako terapeut projektu <strong>Stop
                násilí</strong> SOS centra organizace Diakonie. Vzdělávala jsem a terapeuticky pracovala se studenty Univerzity
                Karlovy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aktuálně spolupracuji s <strong>poradenským centrem Vysoké školy ekonomie a managementu</strong> a týmem <strong>Instytutu
                moderní láska</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Členství v odborných společnostech</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {memberships.map((membership, index) => (
                  <li key={index}>{membership}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Na čem si zakládám</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary-dark to-cyan-900 rounded-2xl py-16 px-8 md:px-16 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pojďme společně najít cestu k vašemu cíli</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Pokud hledáte podporu na své cestě, neváhejte mě kontaktovat. Ráda vám pomůžu najít řešení vašich obtíží a
              cestu k vnitřní spokojenosti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/terapie"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-block shadow-md"
              >
                Zjistit více o terapii
              </Link>
              <Link
                href="/kontakt"
                className="bg-transparent hover:bg-primary/80 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors inline-block"
              >
                Kontaktovat mě
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
