import React from 'react';

const LifelineSection = () => {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      minHeight: '400px',
      overflow: 'hidden'
    }}>
      {/* Background images for the top-left and bottom-right corners */}
      <img
        src="/assets/images/LifelineSection1.png" // Replace with the actual path to your image
        alt="Decorative element"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '200px',
          height: 'auto',
          zIndex: 1,
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}
      />
      <img
        src="/assets/images/LifelineSection2.png" // Replace with the actual path to your image
        alt="Decorative element"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '200px',
          height: 'auto',
          zIndex: 1,
          '@media (max-width: 768px)': {
            display: 'none'
          }
        }}
      />
      
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#002568',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          You Can Be Someone's<br />Lifeline Today
        </h2>
        <p style={{
          fontSize: '1.25rem',
          color: '#555',
          marginBottom: '2rem'
        }}>
          One donation can change everything.
        </p>

        {/* Buttons container */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{
            backgroundColor: '#e91e63',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}>
            Donate Now
          </button>
          <button style={{
            backgroundColor: '#1b3a6d',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}>
            Sponsor a Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifelineSection;