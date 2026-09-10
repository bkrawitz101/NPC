import React from 'react';
import { CAPITAL_POSITIONS } from '../data/services';
import { Shield, TrendingUp, CheckCircle, ArrowRight, DollarSign } from 'lucide-react';

export default function CapitalPositions({ onSelectPosition, onOpenModal }) {
  return (
    <section className="section-padding container">
      <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
        <span className="section-label">Targeted Capital Pool Architecture</span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
          $500,000 Capital Pool Tranches
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--warm-charcoal)' }}>
          Structured allocation tranches designed to immediately acquire and activate real-property collateral while ring-fencing downside exposure.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem'
        }}
      >
        {CAPITAL_POSITIONS.map((pos) => (
          <div
            key={pos.id}
            className="solid-card"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.68rem' }}>
                  {pos.status}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--warm-taupe)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {pos.id.toUpperCase()}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  color: 'var(--dark-espresso)',
                  lineHeight: 1.1,
                  margin: '0.5rem 0'
                }}
              >
                {pos.amount}
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--dark-espresso)' }}>
                {pos.title}
              </h3>

              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-ochre)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Target: {pos.allocation}
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--warm-charcoal)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {pos.description}
              </p>
            </div>

            <div>
              {/* Allocation Progress Bar */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--warm-taupe)' }}>
                  <span>Syndication Progress</span>
                  <span>{pos.progressPercent}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--sand-card)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${pos.progressPercent}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--gold-ochre) 0%, var(--dark-espresso) 100%)',
                      borderRadius: '3px'
                    }}
                  />
                </div>
              </div>

              {/* Security Instrument */}
              <div style={{ background: 'var(--soft-sand)', padding: '0.85rem 1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--warm-taupe)', fontWeight: 700, marginBottom: '0.2rem' }}>
                  Underlying Security
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--dark-espresso)' }}>
                  {pos.security}
                </div>
              </div>

              <a
                href="#intake"
                onClick={() => onSelectPosition && onSelectPosition(pos.id)}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                Inquire Allocation
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
