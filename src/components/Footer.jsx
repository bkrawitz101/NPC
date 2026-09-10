import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--dark-espresso)',
        color: 'var(--soft-sand)',
        padding: '6.5rem 0 4rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '3.5rem',
            paddingBottom: '4.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
          }}
          className="footer-wrap"
        >
          <div style={{ maxWidth: '340px' }}>
            <h5
              style={{
                color: 'var(--pure-white)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              NEW PARADIGM CAPITAL
            </h5>
            <p style={{ color: '#C0B7AE', fontSize: '0.95rem', lineHeight: 1.65 }}>
              Deploying a land- and labor-backed Asset Class through dedicated Capital Pools and scalable County-Wide Pilot Programs.
            </p>
          </div>

          <div>
            <h5
              style={{
                color: 'var(--pure-white)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              Principal Contact
            </h5>
            <p style={{ color: '#C0B7AE', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Kirill Ravensong</p>
            <a
              href="mailto:KirilRavensong@protonmail.com"
              style={{ color: '#C0B7AE', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem' }}
            >
              KirilRavensong@protonmail.com
            </a>
            <a
              href="tel:5308593888"
              style={{ color: '#C0B7AE', textDecoration: 'none', display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem' }}
            >
              530-859-3888
            </a>
          </div>

          <div>
            <h5
              style={{
                color: 'var(--pure-white)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              Ecosystem Core
            </h5>
            <p style={{ color: '#C0B7AE', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Earth Force</p>
            <p style={{ color: '#C0B7AE', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Light Tribe</p>
            <p style={{ color: '#C0B7AE', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Lighthouse Sanctuaries</p>
            <p style={{ color: '#C0B7AE', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Natural Intelligence (NI)</p>
          </div>
        </div>

        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--warm-taupe)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ color: 'var(--warm-taupe)' }}>&copy; 2026 New Paradigm Capital. All rights reserved.</p>
          <p style={{ color: 'var(--warm-taupe)' }}>Normative Multi-Capital Accounting Standard</p>
        </div>
      </div>
    </footer>
  );
}
