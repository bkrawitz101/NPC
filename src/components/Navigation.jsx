import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navigation({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '8 Capitals', href: '#capital' },
    { label: 'County-Wide Pilot', href: '#pilot' },
    { label: 'Services', href: '#services' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Capital Pool Intake', href: '#intake' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: 'rgba(236, 234, 230, 0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 1000,
          borderBottom: '1px solid var(--border-subtle)',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(1.25rem, 3vw, 3rem)',
            width: '100%',
            position: 'relative'
          }}
        >
          {/* Brand Logo - Centered alignment */}
          <a
            href="#"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
              letterSpacing: '-0.01em',
              color: 'var(--dark-espresso)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              lineHeight: 1.15,
              flexShrink: 0
            }}
          >
            NEW PARADIGM CAPITAL
            <span
              style={{
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--warm-taupe)',
                fontWeight: 600
              }}
            >
              Light Portal Group
            </span>
          </a>

          {/* Desktop Navigation Links - Centered */}
          <ul
            style={{
              display: 'none',
              gap: 'clamp(0.85rem, 1.8vw, 2rem)',
              alignItems: 'center',
              justifyContent: 'center',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              flexWrap: 'nowrap'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.label} style={{ flexShrink: 0 }}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--warm-charcoal)',
                    fontSize: 'clamp(0.72rem, 0.85vw, 0.8rem)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'var(--transition-smooth)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--dark-espresso)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-charcoal)')}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ flexShrink: 0 }}>
              <button
                onClick={onOpenModal}
                className="btn btn-secondary"
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.74rem',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap'
                }}
              >
                Investment Brief
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger Button - Positioned on right for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--dark-espresso)',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 80px)',
            background: 'var(--soft-sand)',
            zIndex: 999,
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-subtle)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  color: 'var(--dark-espresso)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Request Investment Brief
            </button>
            <a
              href="#intake"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Capital Pool Intake
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
