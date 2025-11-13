"use client"
import { useState, useEffect, useCallback } from "react"
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

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const handleCTAClick = useCallback((source) => {
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
  }, [isMobileMenuOpen, closeMobileMenu])

  // Check if link is active
  const isActiveLink = useCallback((href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }, [pathname])

  return (
    <header className={`nav-bar ${isScrolled ? "nav-bar--scrolled" : ""} ${!isHomePage ? "nav-bar--dark-links" : ""}`}>
      <div className="container">
        <div className="nav-bar__inner">
          
          <div className="logo">
            <Link href="/">
              <Image
                src={!isHomePage || isScrolled ? "/logo/main-logo.png" : "/logo/logo-white.png"}
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
          <div className="cta">
            <Button 
              text="Contact" 
              onClick={() => handleCTAClick('navbar_cta')}
            />
          </div>

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
            <div className="mobile-menu__cta">
              <Button 
                text="Contact" 
                onClick={() => handleCTAClick('mobile_navbar_cta')}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}