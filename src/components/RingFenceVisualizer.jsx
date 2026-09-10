import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight, RefreshCw, AlertCircle, CheckCircle, Split } from 'lucide-react';

export default function RingFenceVisualizer() {
  const [activeScenario, setActiveScenario] = useState('overview');

  return (
    <section id="architecture" className="section-padding" style={{ backgroundColor: 'var(--espresso-rich)', color: 'var(--soft-sand)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ color: 'var(--gold-ochre-light)' }}>
            Structural Risk Mitigation Architecture
          </span>
          <h2 style={{ color: 'var(--pure-white)', fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem' }}>
            The Ring-Fenced Dual-Engine Model
          </h2>
          <p style={{ color: '#D3CDC6', fontSize: '1.1rem' }}>
            Capital Pool allocations settle strictly against the cashflow-generating commercial site; worker labor equity vests solely against village acreage. The downside liabilities of one asset cannot pierce or encumber the collateral of the other.
          </p>
        </div>

        {/* Interactive Scenario Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveScenario('overview')}
            style={{
              background: activeScenario === 'overview' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.1)',
              color: activeScenario === 'overview' ? 'var(--dark-espresso)' : 'var(--pure-white)',
              border: '1px solid',
              borderColor: activeScenario === 'overview' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.2)',
              padding: '0.6rem 1.25rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition-fast)'
            }}
          >
            <ShieldCheck size={16} />
            Dual-Engine Overview
          </button>

          <button
            onClick={() => setActiveScenario('downside')}
            style={{
              background: activeScenario === 'downside' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.1)',
              color: activeScenario === 'downside' ? 'var(--dark-espresso)' : 'var(--pure-white)',
              border: '1px solid',
              borderColor: activeScenario === 'downside' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.2)',
              padding: '0.6rem 1.25rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition-fast)'
            }}
          >
            <Lock size={16} />
            Downside Liability Insulation
          </button>

          <button
            onClick={() => setActiveScenario('labor')}
            style={{
              background: activeScenario === 'labor' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.1)',
              color: activeScenario === 'labor' ? 'var(--dark-espresso)' : 'var(--pure-white)',
              border: '1px solid',
              borderColor: activeScenario === 'labor' ? 'var(--gold-ochre)' : 'rgba(255, 255, 255, 0.2)',
              padding: '0.6rem 1.25rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition-fast)'
            }}
          >
            <Split size={16} />
            Sweat Equity Flow (1,560 Hrs)
          </button>
        </div>

        {/* Visual Dual-Engine Diagram */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '1.5rem',
            alignItems: 'center',
            marginBottom: '2.5rem'
          }}
          className="ring-fence-diagram-grid"
        >
          {/* Left Box: Commercial Yield Engine */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(197, 155, 56, 0.4)',
              borderRadius: '6px',
              padding: '2rem',
              borderTop: '4px solid var(--gold-ochre)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-ochre-light)' }}>
                Commercial Yield Engine
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(197, 155, 56, 0.2)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--gold-ochre-light)' }}>
                Castile (9ac)
              </span>
            </div>
            <h4 style={{ color: 'var(--pure-white)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              Cash Flow &amp; Debt Service
            </h4>
            <p style={{ color: '#D3CDC6', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Generates retreat, dining, and event cash flows to pay Living Wages and systematically service Capital Pool Tranche B.
            </p>
            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.82rem', color: '#E5E0DA' }}>
              🛡️ <strong>Lien Status:</strong> Senior Commercial Revenue Lien
            </div>
          </div>

          {/* Center: The Ring Fence Wall */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(180deg, rgba(197, 155, 56, 0.3) 0%, rgba(60, 83, 61, 0.3) 100%)',
              border: '2px dashed var(--gold-ochre)',
              borderRadius: '8px',
              padding: '2rem 1.25rem',
              textAlign: 'center',
              minWidth: '180px'
            }}
          >
            <Lock size={32} color="var(--gold-ochre-light)" style={{ marginBottom: '0.75rem' }} />
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--pure-white)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Ring-Fence
            </div>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--taupe-light)', marginTop: '0.25rem' }}>
              Zero Collateral Contagion
            </div>
          </div>

          {/* Right Box: Sovereign Village Engine */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(78, 107, 79, 0.4)',
              borderRadius: '6px',
              padding: '2rem',
              borderTop: '4px solid #4E6B4F'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#86EFAC' }}>
                Sovereign Land Engine
              </span>
              <span style={{ fontSize: '0.75rem', background: 'rgba(78, 107, 79, 0.25)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#86EFAC' }}>
                Sebastopol (160ac)
              </span>
            </div>
            <h4 style={{ color: 'var(--pure-white)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              Labor Equity &amp; Title Trust
            </h4>
            <p style={{ color: '#D3CDC6', fontSize: '0.92rem', marginBottom: '1rem' }}>
              Ground-level permaculture stewards vest sweat equity (1,560 hrs / 5 acres) insulated from commercial debt obligations.
            </p>
            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '0.85rem 1rem', borderRadius: '4px', fontSize: '0.82rem', color: '#E5E0DA' }}>
              🌿 <strong>Trust Status:</strong> Worker Equity Title Trust Covenants
            </div>
          </div>
        </div>

        {/* Dynamic Scenario Insight Box */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '6px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <CheckCircle size={28} color="var(--gold-ochre-light)" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ color: 'var(--pure-white)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
              {activeScenario === 'overview' && "Sovereign Separation: Dual-Engine Stability"}
              {activeScenario === 'downside' && "Downside Protection: Commercial Risks Never Encumber Land"}
              {activeScenario === 'labor' && "Vesting Security: Guaranteed Worker Title Settlement"}
            </h4>
            <p style={{ color: '#C0B7AE', fontSize: '0.92rem', margin: 0 }}>
              {activeScenario === 'overview' && "Capital Pool investors receive senior security over operating cash flows, while the 160-acre community parcel remains unencumbered for regenerative generational settlement."}
              {activeScenario === 'downside' && "In any commercial downside scenario, Castile on the Ridge revenue rights remain isolated. Creditors cannot claim or foreclose upon the Sebastopol village acreage or its verified water rights."}
              {activeScenario === 'labor' && "Every 1,560 hours of certified regenerative labor vests directly into irrevocable community title trusts, creating real land-backed generational wealth for builders."}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ring-fence-diagram-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
