import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section
      className="container"
      style={{
        paddingTop: '13rem',
        paddingBottom: '8rem',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <span className="section-label">A Pioneer Real Asset Class</span>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
            margin: '1.25rem 0 1.5rem',
            color: 'var(--dark-espresso)'
          }}
        >
          Redefining Wealth, Reimagining Progress
        </h1>
        <p
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
            color: 'var(--warm-charcoal)',
            margin: '0 auto 2.75rem',
            maxWidth: '760px',
            lineHeight: 1.5
          }}
        >
          A land- and labor-backed <strong style={{ color: 'var(--dark-espresso)' }}>Asset Class</strong> structured via a targeted <strong style={{ color: 'var(--dark-espresso)' }}>Capital Pool</strong> to deploy our flagship <strong style={{ color: 'var(--dark-espresso)' }}>County-Wide Pilot Program</strong>—resolving society’s core resilience, settlement, and capital bottlenecks.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <a href="#pilot" className="btn btn-primary">
            Explore the County-Wide Pilot
          </a>
          <button className="btn btn-secondary" onClick={onOpenModal}>
            Request Investment Brief
          </button>
        </div>
      </div>
    </section>
  );
}
