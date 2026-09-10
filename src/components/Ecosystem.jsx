import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding container">
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
          Light Portal Ecosystem
        </span>
        <h2 style={{ textAlign: 'center', width: '100%', margin: '0 auto' }}>
          Integrated Family of Ventures
        </h2>
        <p style={{ maxWidth: '820px', margin: '0.75rem auto 0', textAlign: 'center', width: '100%' }}>
          The operational ecosystem powering our County-Wide Pilot Program and multi-capital settlement thesis.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem'
        }}
        className="ecosystem-grid"
      >
        <div
          style={{
            background: 'var(--soft-sand)',
            border: '1px solid var(--border-subtle)',
            padding: '2.75rem 2.5rem',
            borderRadius: '2px'
          }}
        >
          <h3 style={{ fontSize: '1.45rem' }}>Earth Force</h3>
          <p style={{ marginTop: '0.65rem', lineHeight: 1.65 }}>
            Food forest villages, ecological land regeneration, and the Living University Permaculture Rangers training the ground-level workforce for each pilot region.
          </p>
        </div>

        <div
          style={{
            background: 'var(--soft-sand)',
            border: '1px solid var(--border-subtle)',
            padding: '2.75rem 2.5rem',
            borderRadius: '2px'
          }}
        >
          <h3 style={{ fontSize: '1.45rem' }}>Light Tribe</h3>
          <p style={{ marginTop: '0.65rem', lineHeight: 1.65 }}>
            Decentralized gig-economy network linking regenerative land initiatives with creative, logistical, and technical talent.
          </p>
        </div>

        <div
          style={{
            background: 'var(--soft-sand)',
            border: '1px solid var(--border-subtle)',
            padding: '2.75rem 2.5rem',
            borderRadius: '2px'
          }}
        >
          <h3 style={{ fontSize: '1.45rem' }}>Lighthouse</h3>
          <p style={{ marginTop: '0.65rem', lineHeight: 1.65 }}>
            Transformative retreat sanctuaries, off-grid wellness centers, and membership-driven nature preserves focused on deep personal restoration.
          </p>
        </div>

        <div
          style={{
            background: 'var(--soft-sand)',
            border: '1px solid var(--border-subtle)',
            padding: '2.75rem 2.5rem',
            borderRadius: '2px'
          }}
        >
          <h3 style={{ fontSize: '1.45rem' }}>Natural Intelligence (NI)</h3>
          <p style={{ marginTop: '0.65rem', lineHeight: 1.65 }}>
            Open-source AI ecological mapping, soil bio-monitoring sensors, and watershed digital twins serving asset optimization across our regional holdings.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: '4rem',
          padding: '2.75rem 2.5rem',
          background: 'var(--soft-sand)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '2px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <span className="section-label" style={{ margin: 0 }}>Strategic Alliances</span>
        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>StratCamp (Civic &amp; Policy Campaigns)</p>
        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Future Is Now (Regenerative Media &amp; Tech)</p>
        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Raven Foundation (Grant &amp; Land Trusts)</p>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .ecosystem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
