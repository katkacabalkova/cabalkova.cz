import Link from "next/link"
import Image from "next/image"

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
    },
    {
      title: "Respekt a partnerství",
      description:
        "Terapii vnímám jako partnerský vztah založený na vzájemném respektu. Společně hledáme cestu k vašim cílům.",
    },
    {
      title: "Nehodnotící přístup",
      description:
        "Přistupuji ke každému klientovi bez předsudků a hodnocení. Vytvářím prostředí, kde se můžete cítit přijímáni takoví, jací jste.",
    },
    {
      title: "Zážitková terapie",
      description: "Využívám metody zážitkové terapie, které pomáhají hlubšímu porozumění a efektivnější změně.",
    },
    {
      title: "Důvěrnost",
      description: "Respektuji vaše soukromí a zachovávám naprostou důvěrnost všech informací sdílených během terapie.",
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
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-square">
              <Image
                src="/images/katerina-portrait.jpeg"
                alt="Kateřina Cabalková - psychoterapeutka"
                fill
                className="object-cover"
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
              <p className="text-gray-700 mb-4">
                Vystudovala jsem obor Sociální politika a sociální práce na Univerzitě Karlově, nyní pokračuji
                doktorským studiem. Úspěšně jsem ukončila psychoterapeutický výcvik Transformační systemické terapie
                vedený Společností transformační systemické terapie V. Satirové ČR, výcvik v Dialekticko behaviorální
                terapii - British Isles DBT Training, Základní krizovou intervenci vedenou REMEDIEM Praha, Výcvik v
                motivačních rozhovorech vedený PhDr. Janem Soukupem, Ph.D. a mnoho dalších menších vzdělávacích a
                zážitkových kurzů, dobrovolných stáží, seminářů a odborných sympozií.
              </p>
              <p className="text-gray-700">
                Ráda hledám rozmanitost, která se hezky zrcadlí i do mých terapeutických zkušeností. Kontinuálně se
                vzdělávám a ve své praxi kombinuji celou řadu terapeutických metod. Mám výcvik v systemické rodinné
                terapii a vedle toho v DBT terapii, jež vychází z principů kognitivně behaviorální terapie. Ta metody
                KBT dále rozšiřuje a specializuje je pro lidi s vysokou emoční citlivostí.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Profesní zkušenosti</h3>
              <p className="text-gray-700 mb-4">
                Od roku 2019 se věnuji klientům v soukromé praxi, ale mám zkušenost i s prací ve službách sociálního a
                školského resortu.
              </p>
              <p className="text-gray-700 mb-4">
                Během studia mne zájem o sebepoznání a péče o duševní pohodu studentů přivedl k založení Poradenského
                centra Hybernská pod Filozofickou fakultou Univerzity Karlovy. Pracuji s lidmi potýkající se s Hraniční
                poruchou osobnosti v DBT centru organizace Kaleidoskop. Pracovala jsem jako terapeut projektu Stop
                násilí SOS centra organizace Diakonie. Vzdělávala jsem a terapeuticky pracovala se studenty Univerzity
                Karlovy.
              </p>
              <p className="text-gray-700">
                Aktuálně spolupracuji s poradenským centrem Vysoké školy ekonomie a managementu a týmem Instututu
                moderní láska.
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
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
