import React from 'react';

export default function ServicesMatrix({ onOpenModal }) {
  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: '#E3E0DA',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Centered Header */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <span
            className="section-label"
            style={{
              textAlign: 'center',
              margin: '0 auto 0.75rem',
              display: 'block'
            }}
          >
            Offerings &amp; Services
          </span>
          <h2 style={{ textAlign: 'center', width: '100%', margin: '0 auto' }}>
            The Conscious McDonald's Scalable Delivery Model
          </h2>
          <p style={{ maxWidth: '820px', margin: '0.75rem auto 0', textAlign: 'center', width: '100%' }}>
            A standardized product matrix supporting the broader deployment of this regenerative Asset Class.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem'
          }}
          className="services-grid"
        >
          {/* Tier 1 */}
          <div
            style={{
              background: 'var(--pure-white)',
              border: '1px solid var(--border-subtle)',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '2px'
            }}
          >
            <div>
              <span className="section-label">Tier 1</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.25rem 0' }}>Retreat MVP</h3>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  margin: '1rem 0 1.25rem',
                  color: 'var(--dark-espresso)'
                }}
              >
                $150 &ndash; $199
              </div>
              <p>Weekend Camping &amp; Glamping immersion at Castile on the Ridge. Field access to demonstration agriculture, dining, and site master tours.</p>
            </div>
            <a href="#intake" className="btn btn-secondary" style={{ marginTop: '2.5rem' }}>
              Book Weekend
            </a>
          </div>

          {/* Tier 2 */}
          <div
            style={{
              background: 'var(--pure-white)',
              border: '1px solid var(--border-subtle)',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '2px'
            }}
          >
            <div>
              <span className="section-label">Tier 2</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.25rem 0' }}>Strategic Retainer</h3>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  margin: '1rem 0 1.25rem',
                  color: 'var(--dark-espresso)'
                }}
              >
                $3,000+ <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>/ mo</span>
              </div>
              <p>Full property assessments, spatial master planning, brand strategy, and multi-capital accounting setup for private acreage holders.</p>
            </div>
            <a href="#intake" className="btn btn-secondary" style={{ marginTop: '2.5rem' }}>
              Retain Advisory
            </a>
          </div>

          {/* Tier 3 */}
          <div
            style={{
              background: 'var(--pure-white)',
              border: '1px solid var(--border-subtle)',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '2px'
            }}
          >
            <div>
              <span className="section-label">Tier 3</span>
              <h3 style={{ fontSize: '1.5rem', margin: '0.25rem 0' }}>Master Partnership</h3>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  margin: '1rem 0 1.25rem',
                  color: 'var(--dark-espresso)'
                }}
              >
                $30,000 &ndash; $50,000+
              </div>
              <p>Full-scale village design-build partnerships. Replicating our County-Wide Pilot Program frameworks across new jurisdictions and regional land trusts.</p>
            </div>
            <button onClick={onOpenModal} className="btn btn-primary" style={{ marginTop: '2.5rem' }}>
              Initiate Partnership
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
