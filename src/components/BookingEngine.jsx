import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle, Users, Sparkles, Clock, MapPin } from 'lucide-react';

export default function BookingEngine() {
  const [selectedDate, setSelectedDate] = useState('Oct 18-19');
  const [tierType, setTierType] = useState('glamping'); // 'camping' ($150) or 'glamping' ($199)
  const [guestCount, setGuestCount] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const weekendOptions = [
    { label: 'Oct 18 - 19', date: 'Oct 18-19', status: 'Available' },
    { label: 'Oct 25 - 26', date: 'Oct 25-26', status: 'Few Slots Left' },
    { label: 'Nov 01 - 02', date: 'Nov 01-02', status: 'Available' },
    { label: 'Nov 08 - 09', date: 'Nov 08-09', status: 'Available' }
  ];

  const pricePerPerson = tierType === 'glamping' ? 199 : 150;
  const totalPrice = pricePerPerson * guestCount;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestEmail) {
      alert('Please provide your name and email to reserve your slot.');
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="solid-card" style={{ padding: '2.5rem 2rem', background: 'var(--pure-white)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span className="badge badge-gold">
            <CalendarIcon size={12} />
            Tier 1 Immersion MVP
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--warm-taupe)' }}>
            Castile on the Ridge (9ac)
          </span>
        </div>

        <h3 style={{ fontSize: '1.65rem', marginBottom: '0.5rem', color: 'var(--dark-espresso)' }}>
          Reserve Pilot Retreat MVP
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--warm-charcoal)', marginBottom: '1.75rem' }}>
          Experience a weekend field demonstration at Castile on the Ridge with site master tours, permaculture symposiums, and organic dining.
        </p>

        {isBooked ? (
          <div
            style={{
              background: 'var(--sage-bg)',
              border: '1px solid rgba(60, 83, 61, 0.3)',
              borderRadius: '6px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <CheckCircle size={42} color="var(--sage-moss)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.25rem', color: 'var(--dark-espresso)', marginBottom: '0.4rem' }}>
              Reservation Request Confirmed!
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--warm-charcoal)', marginBottom: '1rem' }}>
              Thank you, <strong>{guestName}</strong>. We've reserved <strong>{guestCount} pass(es)</strong> for the <strong>{selectedDate}</strong> weekend ({tierType.toUpperCase()} - ${totalPrice}).
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--warm-taupe)', background: 'var(--pure-white)', padding: '0.75rem', borderRadius: '4px' }}>
              Check your inbox at <strong>{guestEmail}</strong> for orientation materials and arrival logistics.
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                setGuestName('');
                setGuestEmail('');
              }}
              className="btn btn-secondary"
              style={{ marginTop: '1.25rem', fontSize: '0.75rem', padding: '0.6rem 1.2rem' }}
            >
              Book Another Weekend
            </button>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit}>
            {/* Weekend Selector */}
            <div className="form-group">
              <label>Select Weekend Demonstration Date</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {weekendOptions.map((opt) => {
                  const isSelected = selectedDate === opt.date;
                  return (
                    <div
                      key={opt.date}
                      onClick={() => setSelectedDate(opt.date)}
                      style={{
                        padding: '0.75rem 0.6rem',
                        border: isSelected ? '2px solid var(--gold-ochre)' : '1px solid var(--border-subtle)',
                        background: isSelected ? 'rgba(197, 155, 56, 0.08)' : 'var(--soft-sand)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--dark-espresso)' }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: isSelected ? 'var(--gold-ochre)' : 'var(--warm-taupe)', fontWeight: 600 }}>
                        {opt.status}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Accommodation Tier */}
            <div className="form-group">
              <label>Accommodation Style</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <div
                  onClick={() => setTierType('glamping')}
                  style={{
                    padding: '0.75rem',
                    border: tierType === 'glamping' ? '2px solid var(--gold-ochre)' : '1px solid var(--border-subtle)',
                    background: tierType === 'glamping' ? 'rgba(197, 155, 56, 0.08)' : 'var(--soft-sand)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Glamping Bell Tent</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold-ochre)', fontWeight: 700 }}>$199 / guest</div>
                </div>

                <div
                  onClick={() => setTierType('camping')}
                  style={{
                    padding: '0.75rem',
                    border: tierType === 'camping' ? '2px solid var(--gold-ochre)' : '1px solid var(--border-subtle)',
                    background: tierType === 'camping' ? 'rgba(197, 155, 56, 0.08)' : 'var(--soft-sand)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Field Camping</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold-ochre)', fontWeight: 700 }}>$150 / guest</div>
                </div>
              </div>
            </div>

            {/* Guests and Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Guest Count</label>
                <select value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))}>
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={4}>4 Guests (Group)</option>
                  <option value={6}>6 Guests (Symposium)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Total Estimate</label>
                <div style={{ padding: '0.85rem 1rem', background: 'var(--sand-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontWeight: 800, fontSize: '1.05rem', color: 'var(--dark-espresso)' }}>
                  ${totalPrice} USD
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Your Full Name</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Reserve Weekend Experience (${totalPrice})
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
