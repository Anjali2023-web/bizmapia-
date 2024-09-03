import React from 'react';

const ComingSoonPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>COMING SOON</h1>
      <p style={styles.message}>Book Your Taxi From Anywhere</p>
    </div>
  );
};

// Coming Soon page styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7b731', // Taxi yellow background
    color: '#333',
    textAlign: 'center',
    overflow: 'hidden', // Ensure animations don't cause scrollbars
  },
  heading: {
    fontSize: '6rem',
    marginBottom: '20px',
    color: '#000', // Black for the heading
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    animation: 'zoomIn 2s ease-in-out',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    color: '#fff', // White for the message text
  },
};

// Keyframe animations for the heading
const keyframes = `
@keyframes zoomIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`;

// Adding the keyframes dynamically to the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default ComingSoonPage;
