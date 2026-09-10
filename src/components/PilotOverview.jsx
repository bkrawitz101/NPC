import React from 'react';

export default function PilotOverview() {
  return (
    <section id="pilot" className="section-padding container">
      {/* Centered Header */}
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto 4rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
          County-Wide Pilot Program — $500,000 Capital Pool
        </span>
        <h2
          style={{
            textAlign: 'center',
            width: '100%',
            margin: '0 auto'
          }}
        >
          Two Assets. Two Instruments. One County.
        </h2>
        <p
          style={{
            maxWidth: '820px',
            margin: '0.75rem auto 0',
            textAlign: 'center',
            width: '100%'
          }}
        >
          Our <strong>County-Wide Pilot Program</strong> anchors a dual-engine architecture: ring-fencing commercial cash flow from sovereign village equity within an integrated jurisdictional testing ground.
        </p>
      </div>

      {/* Pilot Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }}
        className="pilot-grid"
      >
        {/* Commercial Asset */}
        <div
          style={{
            background: 'var(--pure-white)',
            border: '1px solid var(--border-subtle)',
            padding: '3.25rem 2.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '2px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--warm-taupe)',
                marginBottom: '0.5rem'
              }}
            >
              Commercial Yield Engine
            </div>
            <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0 1.25rem' }}>
              Castile on the Ridge
            </h3>
            <p style={{ marginBottom: '0.5rem' }}><strong>Footprint:</strong> 9 Acres</p>
            <p>
              <strong>Program Role:</strong> Operating hospitality and demonstration site. Generates near-term cashflow to pay living wages and systematically amortize the foundational <strong>Capital Pool</strong>.
            </p>
          </div>
          <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <small style={{ color: 'var(--warm-charcoal)' }}>Backstop: Senior Commercial Lien</small>
          </div>
        </div>

        {/* Village Asset */}
        <div
          style={{
            background: 'var(--pure-white)',
            border: '1px solid var(--border-subtle)',
            padding: '3.25rem 2.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '2px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--warm-taupe)',
                marginBottom: '0.5rem'
              }}
            >
              Sovereign Land Engine
            </div>
            <h3 style={{ fontSize: '1.75rem', margin: '0.5rem 0 1.25rem' }}>
              Sebastopol Land Parcel
            </h3>
            <p style={{ marginBottom: '0.5rem' }}><strong>Footprint:</strong> 160 Acres</p>
            <p>
              <strong>Program Role:</strong> Raw acreage with verified water rights. Serves as the real-property anchor of our <strong>Asset Class</strong>, settling sweat equity at 1,560 hours per 5 sovereign acres.
            </p>
          </div>
          <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <small style={{ color: 'var(--warm-charcoal)' }}>Backstop: Worker Equity Title Trust</small>
          </div>
        </div>
      </div>

      {/* Ring Fencing Feature */}
      <div
        style={{
          marginTop: '4rem',
          background: 'var(--dark-espresso)',
          color: 'var(--pure-white)',
          padding: '3.25rem 3rem',
          borderRadius: '2px'
        }}
      >
        <h4 style={{ color: 'var(--soft-sand)', fontSize: '1.25rem', marginBottom: '0.85rem' }}>
          Structural Risk Mitigation: Ring-Fenced Architecture
        </h4>
        <p style={{ color: '#D3CDC6', maxWidth: '900px', lineHeight: 1.7 }}>
          Capital Pool allocations settle strictly against the cashflow-generating commercial site; worker labor equity vests solely against village acreage. The downside liabilities of one asset cannot pierce or encumber the collateral of the other.
        </p>
      </div>

      {/* Capital Positions Breakdown */}
      <div
        style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}
        className="capital-positions"
      >
        <div
          style={{
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem 2.25rem',
            background: 'var(--pure-white)',
            borderRadius: '2px'
          }}
        >
          <span className="section-label">Capital Pool Tranche A</span>
          <div
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--dark-espresso)',
              margin: '0.5rem 0'
            }}
          >
            $250,000
          </div>
          <p><strong>Village Land Acquisition:</strong> Directly purchases and establishes environmental trust covenants across the 160-acre Sebastopol site.</p>
        </div>

        <div
          style={{
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem 2.25rem',
            background: 'var(--pure-white)',
            borderRadius: '2px'
          }}
        >
          <span className="section-label">Capital Pool Tranche B</span>
          <div
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--dark-espresso)',
              margin: '0.5rem 0'
            }}
          >
            $250,000
          </div>
          <p><strong>Commercial Site Buyout:</strong> Secures Castile on the Ridge hospitality facility to unlock operational revenue and immediate cashflow.</p>
        </div>

        <div
          style={{
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem 2.25rem',
            background: 'var(--pure-white)',
            borderRadius: '2px'
          }}
        >
          <span className="section-label">Position Zero</span>
          <div
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--dark-espresso)',
              margin: '0.5rem 0'
            }}
          >
            Low 5-Figure
          </div>
          <p><strong>Option Proof-of-Concept:</strong> Underwrites statutory closing, title escrow, and municipal permitting for the County-Wide Pilot Program.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .pilot-grid, .capital-positions {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
