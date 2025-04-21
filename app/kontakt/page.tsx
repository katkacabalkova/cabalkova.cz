"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import PageHero from "@/components/PageHero"
import SectionHeader from "@/components/SectionHeader"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "individual",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // This is a placeholder for actual form submission
    // In a real implementation, you would send the data to your backend or email service
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "individual",
      })

      setSubmitSuccess(true)
    } catch (error) {
      setSubmitError("Došlo k chybě při odesílání formuláře. Prosím zkuste to znovu nebo mě kontaktujte přímo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHero title="Kontakt">
        <p className="text-lg text-gray-700 max-w-3xl">
          Máte zájem o terapii nebo další informace? Neváhejte mě kontaktovat. Ráda vám odpovím na všechny vaše otázky.
        </p>
      </PageHero>

      {/* Contact Info and Form */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kontaktní údaje</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Adresa</h3>
                  <p className="text-gray-700">Ostrovní 30, Praha 1</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefon</h3>
                  <p className="text-gray-700">
                    <a href="tel:+420734474117" className="hover:text-primary transition-colors">
                      +420 734 474 117
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">E-mail</h3>
                  <p className="text-gray-700">
                    <a href="mailto:terapeutcabalkova@gmail.com" className="hover:text-primary transition-colors">
                      terapeutcabalkova@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Fakturační údaje</h3>
              <p className="text-gray-700 mb-1">Mgr. Kateřina Cabalková</p>
              <p className="text-gray-700 mb-1">IČO: 07781440</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kontaktní formulář</h2>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Děkuji za vaši zprávu!</h3>
                <p className="mb-4">Váš formulář byl úspěšně odeslán. Ozvu se vám co nejdříve.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="text-green-700 font-medium hover:text-green-800 transition-colors"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Typ služby
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="individual">Individuální terapie</option>
                    <option value="couple">Párová terapie</option>
                    <option value="family">Rodinná terapie</option>
                    <option value="business">Firemní služby</option>
                    <option value="other">Jiné</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                {submitError && <div className="text-red-600 text-sm">{submitError}</div>}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
                  </button>
                </div>

                <p className="text-sm text-gray-600">* Povinné pole</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Kde mě najdete" centered />

          <div className="bg-white h-96 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1026576682!2d14.412693776532936!3d50.08141977152692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f3a2e7b253%3A0x7d9a9e4b1e1c7d1d!2sOstrovn%C3%AD%2030%2C%20110%2000%20Nov%C3%A9%20M%C4%9Bsto%2C%20Praha!5e0!3m2!1scs!2scz!4v1682345678901!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa s umístěním ordinace"
            ></iframe>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=Ostrovní+30,+Praha+1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center"
            >
              Zobrazit na Google Maps
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
