"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import "@/styles/components/navbar.scss"
import Button from "../ui/Button/Button"
import Link from "next/link"

// Navigation items configuration
const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'packages', label: 'Packages', href: '/packages' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if we're on homepage
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleCTAClick = (source) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_cta', {
        'event_category': 'engagement',
        'event_label': source,
        'value': 1
      })
    }
    
    closeMobileMenu()
    
    setTimeout(() => {
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, isMobileMenuOpen ? 300 : 0)
  }

  // Check if link is active
  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className={`nav-bar ${isScrolled ? "nav-bar--scrolled" : ""} ${!isHomePage ? "nav-bar--dark-links" : ""}`}>
      <div className="container">
        <div className="nav-bar__inner">
          
          <div className="logo">
            <Link href="/">
              <Image
                src={!isHomePage || isScrolled ? "/updated-logo/black-logo.png" : "/updated-logo/white-logo.png"}
                alt="Traveloop - Your Travel Partner"
                width={120}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="menu" aria-label="Main navigation">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href}
                    className={isActiveLink(item.href) ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
             <div className="cta">
              <Button 
                text="Contact" 
                onClick={() => handleCTAClick('navbar_cta')}
              />
            </div>
          </Link>
         

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu--open" : ""}`}>
        {/* Backdrop - click to close */}
        <div 
          className="mobile-menu__backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        
        {/* Menu Content */}
        <div className="mobile-menu__content">
          <nav>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={isActiveLink(item.href) ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/contact">
            <div className="mobile-menu__cta">
              <Button 
                text="Contact" 
                onClick={() => handleCTAClick('mobile_navbar_cta')}
              />
            </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}