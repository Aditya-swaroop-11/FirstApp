import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import dhoni from "../Component/Msdhoni.jpg";
import swami from "../Component/swami.jpg";


function Home() {
  const styles = {
    header: {
      fontFamily: "'Montserrat', sans-serif",
      textAlign: 'center',
      padding: '40px 0',
      color: '#2c3e50',
      backgroundColor: '#ecf0f1',
      marginBottom: '30px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d'
    },
    card: {
      marginBottom: '30px',
      border: 'none',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    cardHover: {
      transform: 'translateY(-5px)'
    },
    image: {
      height: '300px',
      objectFit: 'cover',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px'
    },
    cardTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '15px'
    },
    cardText: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6'
    },
    quote: {
      fontStyle: 'italic',
      color: '#34495e',
      borderLeft: '4px solid #3498db',
      paddingLeft: '15px',
      margin: '20px 0'
    },
    achievement: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '5px',
      marginTop: '15px'
    }
  };

  return (
    <div>
      {/* Add Google Fonts in your index.html */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
      </style>

      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>My Role Models</h1>
        <p style={styles.subtitle}>Inspiring figures who shaped my journey</p>
      </header>

      <Container>
        <Row>
          {}
          <Col lg={6} className="mb-4">
            <Card style={styles.card} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <Card.Img 
                variant="top" 
                src={dhoni}
                style={styles.image}
                alt="MS Dhoni"
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>MS Dhoni</Card.Title>
                <h6>7 July 1981-Present</h6>
                <Card.Text style={styles.cardText}>
                  Former Indian Cricket Team Captain and one of the most successful leaders in cricket history.
                </Card.Text>
                <div>
                    <h3>Favourite Line</h3>
                  <p style={{ color: 'blue' }} >"I don't regret anything in my life. What doesn't kill you makes you stronger."</p>
                </div>
                <p>...................................................................................................................................</p>
                <div >
                  <h5>Key Achievements:</h5>
                  <ul>
                    <li>Led India to victory in the 2011 World Cup</li>
                    <li>Only captain to win all ICC trophies</li>
                    <li>Known for his calm demeanor under pressure</li>
                    <li>Recipient of Padma Bhushan award</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Swami Vivekananda Section */}
          <Col lg={6} className="mb-4">
            <Card style={styles.card}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <Card.Img 
                variant="top" 
                src={swami}
                style={styles.image}
                alt="Swami Vivekananda"
              />
              <Card.Body>
                <Card.Title style={styles.cardTitle}>Swami Vivekananda</Card.Title>
                <h6>12th January, 1863 – 4th July 1902</h6>
                <Card.Text style={styles.cardText}>
                  A spiritual leader and reformer who introduced Indian philosophies of Vedanta and Yoga to the Western world.
                </Card.Text>
                <div >
                <h3>Favourite Line</h3>
                <p style={{ color: 'blue' }} >""Arise, awake, and stop not until the goal is reached."</p>

                  <p>...................................................................................................................................</p>
                </div>
                <div>
                  <h5>Key Contributions:</h5>
                  <ul>
                    <li>Founded the Ramakrishna Mission</li>
                    <li>Represented India at the Parliament of World's Religions (1893)</li>
                    <li>Promoted youth empowerment and education</li>
                    <li>Spread message of universal brotherhood</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;