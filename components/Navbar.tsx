"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto pr-6 md:pr-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors">
            Kateřina Cabalková
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Úvod</NavLink>
            <NavLink href="/terapie">Terapie</NavLink>
            <NavLink href="/pro-firmy">Firmy a vzdělávání</NavLink>
            <NavLink href="/o-katerine">O Kateřině</NavLink>
            <NavLink href="/cenik">Ceník</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 py-6 px-6">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Úvod
            </MobileNavLink>
            <MobileNavLink href="/terapie" onClick={() => setIsMenuOpen(false)}>
              Terapie
            </MobileNavLink>
            <MobileNavLink href="/pro-firmy" onClick={() => setIsMenuOpen(false)}>
              Firmy a vzdělávání
            </MobileNavLink>
            <MobileNavLink href="/o-katerine" onClick={() => setIsMenuOpen(false)}>
              O Kateřině
            </MobileNavLink>
            <MobileNavLink href="/cenik" onClick={() => setIsMenuOpen(false)}>
              Ceník
            </MobileNavLink>
            <MobileNavLink href="/kontakt" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-gray-700 hover:text-primary font-medium transition-colors relative group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

const MobileNavLink = ({
  href,
  onClick,
  children,
}: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-gray-800 hover:text-primary font-medium text-lg transition-colors py-2 border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Navbar
