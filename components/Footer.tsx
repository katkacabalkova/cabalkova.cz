import Link from "next/link"
import { Mail, Phone, MapPin, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mgr. Kateřina Cabalková</h3>
            <p className="text-gray-600 mb-2">Akreditovaná psychoterapeutka</p>
            <p className="text-gray-600 mb-6">Individuální, párová a rodinná terapie</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/terapeutcabalkova"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kate%C5%99ina-cabalkov%C3%A1-b2b57a32b/"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="https://www.google.com/maps?q=Ostrovn%C3%AD+30,+Praha+1" className="text-gray-600 hover:text-primary transition-colors">
                  Ostrovní 30, Praha 1
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="tel:+420734474117" className="text-gray-600 hover:text-primary transition-colors">
                  +420 734 474 117
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a
                  href="mailto:terapeutcabalkova@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  terapeutcabalkova@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Navigace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terapie" className="text-gray-600 hover:text-primary transition-colors inline-block py-1">
                  Terapie
                </Link>
              </li>
              <li>
                <Link
                  href="/pro-firmy"
                  className="text-gray-600 hover:text-primary transition-colors inline-block py-1"
                >
                  Firmy a vzdělávání
                </Link>
              </li>
              <li>
                <Link
                  href="/o-katerine"
                  className="text-gray-600 hover:text-primary transition-colors inline-block py-1"
                >
                  O Kateřině
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="text-gray-600 hover:text-primary transition-colors inline-block py-1">
                  Ceník
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-primary transition-colors inline-block py-1">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm flex items-center justify-center">
            &copy; {currentYear} Mgr. Kateřina Cabalková. Všechna práva vyhrazena. IČO: 07781440
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Vytvořeno s <Heart className="w-4 h-4 text-red-500 mx-1" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
