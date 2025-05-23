import Image from "next/image"
import { Users, Sparkles, Heart, Frown, Smile } from "lucide-react"
import PageHero from "@/components/PageHero"
import ServiceCard from "@/components/ServiceCard"
import SectionHeader from "@/components/SectionHeader"
import CtaSection from "@/components/CtaSection"
import Link from "next/link"

export default function TherapyPage() {
  const therapyAreas = [
    {
      id: 1,
      title: "Sebepoznání a vztah sám k sobě",
      description:
        "Pomáhám klientům lépe porozumět sobě samým, svým potřebám, emocím a vzorcům chování. Společně pracujeme na budování zdravého vztahu k sobě a posílení sebevědomí.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Rodinné vztahy",
      description:
        "Zaměřuji se na zlepšení komunikace a vztahů v rodině, řešení konfliktů a vytváření harmonického rodinného prostředí. Pomáhám rodinám najít cestu k vzájemnému porozumění a respektu.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Mezilidské vztahy a komunikace",
      description:
        "Pracuji s klienty na rozvoji komunikačních dovedností, budování zdravých vztahů a řešení interpersonálních konfliktů. Pomáhám jim lépe porozumět dynamice vztahů a najít způsoby, jak je zlepšit.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Vysoká citlivost",
      description:
        "Poskytuji podporu vysoce citlivým osobám, které mohou intenzivněji vnímat podněty a emoce. Pomáhám jim lépe porozumět své citlivosti a využít ji jako svou přednost.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Úzkosti a deprese",
      description:
        "Nabízím terapeutickou podporu při zvládání úzkostí, depresí a dalších psychických obtíží. Společně hledáme způsoby, jak zmírnit symptomy a zlepšit kvalitu života.",
      icon: <Frown className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Emoce a zvládání náročných situací",
      description:
        "Pomáhám klientům lépe porozumět svým emocím a efektivně je regulovat. Zaměřuji se na rozvoj dovedností pro zvládání stresu, náročných životních situací a krizí.",
      icon: <Smile className="w-6 h-6" />,
    },
  ]

  const faqs = [
    {
      question: "Jak probíhá první sezení?",
      answer:
        "První sezení je zaměřeno na vzájemné seznámení, zmapování vašich potřeb a očekávání od terapie. Společně stanovíme cíle naší spolupráce a dohodneme se na dalším postupu.",
    },
    {
      question: "Jak často probíhají terapeutická sezení?",
      answer:
        "Frekvence sezení závisí na vašich individuálních potřebách. Obvykle se setkáváme jednou týdně nebo jednou za dva týdny, ale můžeme se dohodnout i na jiné frekvenci.",
    },
    {
      question: "Jak dlouho trvá terapie?",
      answer:
        "Délka terapie je individuální a závisí na vašich cílech a potřebách. Některé terapie mohou trvat několik týdnů, jiné několik měsíců nebo déle. Pravidelně vyhodnocujeme pokrok a společně rozhodujeme o dalším pokračování.",
    },
    {
      question: "Mohu využít příspěvek od zdravotní pojišťovny?",
      answer:
        "V současné době není psychoterapie hrazena zdravotními pojišťovnami. Některé pojišťovny však nabízejí příspěvky na psychoterapii v rámci svých bonusových programů. Doporučuji ověřit možnosti u vaší konkrétní pojišťovny.",
    },
    {
      question: "Jak se mohu objednat?",
      answer: (
        <>
          Objednat se můžete telefonicky na čísle{" "}
          <a href="tel:+420734474117" className="text-primary hover:underline">
            +420 734 474 117
          </a>{" "}
          nebo e-mailem na{" "}
          <a href="mailto:terapeutcabalkova@gmail.com" className="text-primary hover:underline">
            terapeutcabalkova@gmail.com
          </a>
          . Můžete také využít{" "}
          <Link href="/kontakt" className="text-primary hover:underline">
            kontaktní formulář
          </Link>{" "}
          na mých webových stránkách.
        </>
      ),
    },
  ]

  return (
    <>
      <PageHero
        title="Terapie"
        image={
          <Image
            src="/images/therapy-session.png"
            alt="Terapeutické sezení"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        }
      >
        <p className="text-xl text-gray-700 max-w-3xl mb-8 italic">"Změna je vždy možná". Virginia Satir</p>
        <p className="text-lg text-gray-700 max-w-3xl">
          Věnuji se klientům, kteří si uvědomili, že z jakéhokoli důvodu potřebují podporu ve svých životních krocích či
          si chtějí dopřát čas pro svůj seberozvoj. Společně hledáme cestu k jejich vnitřní spokojenosti a schopnosti
          prožívat život kvalitněji.
        </p>
      </PageHero>

      {/* Therapy Areas */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="V individuální, párové a rodinné terapii se zaměřuji na tato témata" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyAreas.map((area) => (
              <ServiceCard key={area.id} title={area.title} description={area.description} icon={area.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Process */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Jak probíhá terapie" centered />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">První setkání</h3>
              <p className="text-gray-700">
                Během prvního setkání se vzájemně poznáme, probereme vaše očekávání od terapie a společně stanovíme cíle
                naší spolupráce. Je to prostor pro vaše otázky a pro vytvoření bezpečného prostředí.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pravidelná sezení</h3>
              <p className="text-gray-700">
                Terapeutická sezení probíhají obvykle jednou týdně nebo dle individuální dohody. Během sezení pracujeme
                na vašich tématech, prozkoumáváme vaše myšlenky, emoce a chování, a hledáme nové perspektivy a řešení.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ukončení terapie</h3>
              <p className="text-gray-700">
                Terapie končí, když dosáhneme stanovených cílů nebo když cítíte, že jste připraveni pokračovat
                samostatně. Ukončení je důležitou součástí terapeutického procesu a věnujeme mu dostatečný prostor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl w-fit mx-auto">
            <div className="relative">
              <Image
                src="/images/office-interior.jpg"
                alt="Terapeutovna"
                width={800}
                height={600}
                className="object-contain max-h-[600px] w-full rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent flex items-end rounded-lg">
                <div className="bg-black/70 rounded-xl p-8 md:p-12 text-white w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Bezpečný prostor pro vaši cestu</h3>
                  <p className="text-lg max-w-2xl">
                    Terapie probíhá v klidném a příjemném prostředí <Link href="/kontakt#kde-me-najdete" className="underline">terapeutovny na Praze 1</Link>, kde se můžete cítit bezpečně a uvolněně.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Často kladené otázky</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Připraveni udělat první krok?"
        description="Kontaktujte mě pro více informací nebo pro objednání na terapii. Jsem tu, abych vám pomohla na vaší cestě k vnitřní spokojenosti."
        primaryButtonText="Ceník služeb"
        primaryButtonLink="/cenik"
        secondaryButtonText="Kontaktovat mě"
        secondaryButtonLink="/kontakt"
      />
    </>
  )
}
