import React from 'react';

export default function CapitalMatrix() {
  const capitals = [
    {
      num: "01 / CAPITAL",
      title: "Financial",
      description: "Liquid currency, syndication vehicles, and monetary exchange mechanisms."
    },
    {
      num: "02 / CAPITAL",
      title: "Social",
      description: "Trust networks, communal governance structures, and social cohesion."
    },
    {
      num: "03 / CAPITAL",
      title: "Intellectual",
      description: "Patents, permaculture design frameworks, software, and settlement blueprints."
    },
    {
      num: "04 / CAPITAL",
      title: "Natural",
      description: "Perpetual water rights, timber stock, living topsoil, biodiversity, and ecosystem stability."
    },
    {
      num: "05 / CAPITAL",
      title: "Cultural",
      description: "Regional heritage, community folklore, civic arts, and multi-generational wisdom preservation."
    },
    {
      num: "06 / CAPITAL",
      title: "Spiritual",
      description: "Purpose-driven alignment, sacred ecology sanctuaries, and holistic wellness."
    },
    {
      num: "07 / CAPITAL",
      title: "Experiential",
      description: "Embodied physical trade skills, wilderness navigation, agronomy, and craftsmanship."
    },
    {
      num: "08 / CAPITAL",
      title: "Material",
      description: "Infrastructure, physical built environments, off-grid utilities, and processing machinery."
    }
  ];

  return (
    <section
      id="capital"
      className="section-padding"
      style={{
        backgroundColor: '#E3E0DA',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        <div
          style={{
            marginBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '820px',
            margin: '0 auto 4rem',
            textAlign: 'center',
            alignItems: 'center'
          }}
        >
          <span className="section-label">Normative Multi-Capital Accounting</span>
          <h2>Holistic Value Creation Across a Tangible Asset Class</h2>
          <p>
            Transitioning beyond conventional financial abstraction by deploying dedicated capital pools directly into eight foundational forms of real, regenerative wealth.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {capitals.map((item) => (
            <div
              key={item.num}
              className="capital-card"
              style={{
                background: 'var(--soft-sand)',
                padding: '2.25rem 2rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(48, 33, 15, 0.06)';
                e.currentTarget.style.backgroundColor = 'var(--pure-white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'var(--soft-sand)';
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--warm-taupe)',
                    marginBottom: '1rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  {item.num}
                </div>
                <h4
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--dark-espresso)',
                    marginBottom: '0.65rem'
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '1.02rem', color: 'var(--warm-charcoal)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
