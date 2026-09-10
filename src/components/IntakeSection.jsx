import React, { useState } from 'react';

export default function IntakeSection() {
  const [selectedWeekend, setSelectedWeekend] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Position A',
    notes: ''
  });

  const selectDate = (slot) => {
    setSelectedWeekend(slot);
  };

  const confirmBooking = () => {
    if (!selectedWeekend) {
      alert('Please choose an available weekend date from the calendar.');
      return;
    }
    alert(`Booking initiated for: ${selectedWeekend}. Redirecting to guest confirmation.`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your allocation inquiry for ${formData.type} has been forwarded to Kirill Ravensong.`);
    setFormData({ name: '', email: '', type: 'Position A', notes: '' });
  };

  return (
    <section
      id="intake"
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
            Capital Pool Allocation &amp; Intake
          </span>
          <h2 style={{ textAlign: 'center', width: '100%', margin: '0 auto' }}>
            Participate in the Pilot
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '3rem'
          }}
          className="booking-grid"
        >
          {/* Booking Prototype */}
          <div
            style={{
              background: 'var(--pure-white)',
              padding: '2.75rem 2.5rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>Reserve Pilot Retreat MVP</h3>
            <p style={{ fontSize: '0.95rem', marginTop: '0.25rem', color: 'var(--warm-charcoal)' }}>
              Select an upcoming field demonstration weekend at Castile on the Ridge ($150 - $199).
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '0.5rem',
                margin: '1.75rem 0',
                textAlign: 'center'
              }}
            >
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--warm-taupe)',
                    textTransform: 'uppercase'
                  }}
                >
                  {day}
                </div>
              ))}

              <div style={calDayStyle}>14</div>
              <div style={calDayStyle}>15</div>
              <div style={calDayStyle}>16</div>
              <div style={calDayStyle}>17</div>
              <div
                style={getSelectableStyle(selectedWeekend === 'Oct 18-19')}
                onClick={() => selectDate('Oct 18-19')}
              >
                18
              </div>
              <div
                style={getSelectableStyle(selectedWeekend === 'Oct 19-20')}
                onClick={() => selectDate('Oct 19-20')}
              >
                19
              </div>
              <div style={calDayStyle}>20</div>

              <div style={calDayStyle}>21</div>
              <div style={calDayStyle}>22</div>
              <div style={calDayStyle}>23</div>
              <div style={calDayStyle}>24</div>
              <div
                style={getSelectableStyle(selectedWeekend === 'Oct 25-26')}
                onClick={() => selectDate('Oct 25-26')}
              >
                25
              </div>
              <div
                style={getSelectableStyle(selectedWeekend === 'Oct 26-27')}
                onClick={() => selectDate('Oct 26-27')}
              >
                26
              </div>
              <div style={calDayStyle}>27</div>
            </div>

            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '1.75rem',
                color: 'var(--dark-espresso)'
              }}
            >
              {selectedWeekend
                ? `Selected Slot: Weekend of ${selectedWeekend}`
                : 'Selected Slot: None (Click a weekend date above)'}
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={confirmBooking}
            >
              Reserve Weekend
            </button>
          </div>

          {/* Investor Form */}
          <form
            onSubmit={handleFormSubmit}
            style={{
              background: 'var(--pure-white)',
              padding: '2.75rem 2.5rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Capital Pool Allocation Inquiry</h3>
            <div className="form-group" style={{ marginTop: '1.25rem' }}>
              <label htmlFor="name">Legal Name / Institution</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Institutional Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Position in Capital Pool</label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="Position A">Capital Pool Tranche A ($250k - Village Land)</option>
                <option value="Position B">Capital Pool Tranche B ($250k - Commercial Site)</option>
                <option value="Position Zero">Position Zero (Option / Feasibility)</option>
                <option value="Services Tier 2/3">County-Wide Pilot Expansion Partner</option>
                <option value="Land Donor">Land Trust Contributor</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Strategic Alignment / Asset Criteria</label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Outline allocation capacity or target land parameters..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              Submit Allocation Request
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const calDayStyle = {
  padding: '0.85rem 0.35rem',
  fontSize: '0.85rem',
  fontWeight: 600,
  background: 'var(--soft-sand)',
  border: '1px solid transparent',
  borderRadius: '2px',
  color: 'var(--warm-charcoal)'
};

const getSelectableStyle = (isSelected) => ({
  ...calDayStyle,
  background: isSelected ? 'var(--dark-espresso)' : 'var(--soft-sand)',
  color: isSelected ? 'var(--pure-white)' : 'var(--dark-espresso)',
  borderColor: isSelected ? 'var(--dark-espresso)' : 'transparent',
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
});
