import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, DollarSign, FileText } from 'lucide-react';

export default function InvestorIntake({ initialTranche = 'tranche-a', onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tranche: initialTranche === 'tranche-b' ? 'Tranche B' : initialTranche === 'pos-zero' ? 'Position Zero' : 'Tranche A',
    allocationAmount: '$100,000',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and institutional email.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="solid-card" style={{ padding: '2.5rem 2rem', background: 'var(--pure-white)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span className="badge badge-gold">
            <DollarSign size={12} />
            Institutional &amp; Private Syndication
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--warm-taupe)' }}>
            $500,000 Pool
          </span>
        </div>

        <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--dark-espresso)' }}>
          Capital Pool Allocation Inquiry
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--warm-charcoal)', marginBottom: '1.75rem' }}>
          Submit allocation criteria for Tranche A ($250k), Tranche B ($250k), or Position Zero feasibility. Direct confidential review by Kirill Ravensong.
        </p>

        {submitted ? (
          <div
            style={{
              background: 'rgba(197, 155, 56, 0.1)',
              border: '1px solid rgba(197, 155, 56, 0.35)',
              borderRadius: '6px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <CheckCircle2 size={42} color="var(--gold-ochre)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-espresso)', marginBottom: '0.4rem' }}>
              Allocation Inquiry Transmitted
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--warm-charcoal)', marginBottom: '1rem' }}>
              Thank you, <strong>{formData.name}</strong>. Your allocation expression for <strong>{formData.tranche}</strong> ({formData.allocationAmount}) has been submitted to New Paradigm Capital management.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--warm-charcoal)', background: 'var(--pure-white)', padding: '0.75rem', borderRadius: '4px', marginBottom: '1.25rem' }}>
              Our principal team will reach out to <strong>{formData.email}</strong> within 1 business day with the subscription agreement and secure closing room credentials.
            </div>
            <button
              onClick={onOpenModal}
              className="btn btn-gold"
              style={{ width: '100%', fontSize: '0.78rem' }}
            >
              <FileText size={15} />
              Download Full Pilot Prospectus
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Legal Name or Institution</label>
              <input
                type="text"
                required
                placeholder="Jane Doe / Redwood Capital Trust"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Institutional Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@fund.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Target Tranche in Pool</label>
                <select
                  value={formData.tranche}
                  onChange={(e) => setFormData({ ...formData, tranche: e.target.value })}
                >
                  <option value="Tranche A">Tranche A ($250k - Village Land)</option>
                  <option value="Tranche B">Tranche B ($250k - Commercial Site)</option>
                  <option value="Position Zero">Position Zero (Feasibility/Escrow)</option>
                  <option value="Tier 2/3 Expansion">County-Wide Expansion Partner</option>
                  <option value="Land Trust Donor">Land Trust Contributor</option>
                </select>
              </div>

              <div className="form-group">
                <label>Target Allocation</label>
                <select
                  value={formData.allocationAmount}
                  onChange={(e) => setFormData({ ...formData, allocationAmount: e.target.value })}
                >
                  <option value="$25,000">$25,000</option>
                  <option value="$50,000">$50,000</option>
                  <option value="$100,000">$100,000</option>
                  <option value="$250,000">$250,000 (Full Tranche)</option>
                  <option value="$500,000+">$500,000+ (Master Syndicate)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Strategic Criteria &amp; Alignment Notes</label>
              <textarea
                rows={3}
                placeholder="Specify syndication requirements, liquidity horizon, or target regional parcel criteria..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
              <Send size={15} />
              Submit Allocation Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
