import React, { useState } from 'react';

export default function ProspectusModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('The County-Wide Pilot Program Prospectus has been dispatched to your email.');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(48, 33, 15, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '1.5rem'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--soft-sand)',
          maxWidth: '580px',
          width: '100%',
          padding: '2.75rem',
          position: 'relative',
          borderRadius: '2px'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--dark-espresso)'
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        <span className="section-label">Confidential Brief</span>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>
          County-Wide Pilot Program Prospectus
        </h3>
        <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Enter your institutional or private investor credentials below to receive the complete Capital Pool prospectus, balance sheets, and Asset Class legal structuring.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-email">Accredited Email Address</label>
            <input
              type="email"
              id="modal-email"
              required
              placeholder="investor@fund.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="modal-phone">Phone Number</label>
            <input
              type="tel"
              id="modal-phone"
              placeholder="Optional"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Transmit Documentation
          </button>
        </form>
      </div>
    </div>
  );
}
