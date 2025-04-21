import { Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ke Kateřině chodím již několik let a znamenalo to pro mě obrovský posun. Můžu otevřeně řešit i věci, k jejichž řešení jsem nečekal, že se odhodlám. Ze sezení si vždycky odnáším pocit, že věci dávají o něco víc smysl, a jsou pro mě pokaždé velkým přínosem.",
      author: "Jáchym H.",
    },
    {
      id: 2,
      text: "Po dlouhém hledání vhodného psychoterapeuta jsem zakotvila u Kateřiny a jsem moc spokojená! Naslouchá, nesoudí a pomáhá mi hledat způsoby, jak se zdravě vyrovnávat s emocemi. Doporučuji a děkuji :).",
      author: "Lucie W.",
    },
    {
      id: 3,
      text: "Na terapie ke Kateřině chodím již více než dva roky a velmi mi pomohly při hledání řešení k mým problémům. Kateřina má velice laskavé a chápavé srdce, které je navíc vyztuženo trpělivostí a humorem. Její služby mohu doporučit všem, jež mají pocit, že si neví rady se svými trabli a hledají pomoc či podporu, kterou u Kateřiny určitě naleznou.",
      author: "Jan Š.",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Reference klientů</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Přečtěte si, co o mé práci říkají klienti, kteří se mnou spolupracovali.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover animate-fade-in-delay-${index + 1}`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.text}</p>
              <p className="text-gray-800 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
