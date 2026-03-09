
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import universityBg from '../assets/university.jpg'

export default function Home(){
  const purplePrimary = '#6f42c1'
  const purpleLight = '#f8f5fffe'

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(45, 21, 85, 0.46), rgba(45, 21, 85, 0.36)), url(${universityBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  };

  return (
    <div id="home-page">
      <header style={heroStyle}>
        <Container>
          <Row>
            <Col lg={7}>
              <h1 className="display-3 fw-bold mb-3">Shape the Future of Technology</h1>
              <p className="fs-4 mb-0">
                Welcome to the University of Udiao's elite School of Information Technology. 
                Where passion meets purpose.
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="py-5 text-white" style={{ backgroundColor: purplePrimary }}>
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <h2 className="fw-bold display-5">95%</h2>
              <p className="mb-0 opacity-75">Graduate Employment Rate</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold display-5">50+</h2>
              <p className="mb-0 opacity-75">Industry Partners</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold display-5">24/7</h2>
              <p className="mb-0 opacity-75">Laboratory Access</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: purpleLight }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold" style={{ color: purplePrimary }}>Campus Updates</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Badge style={{ backgroundColor: '#d1d8ff', color: '#fefefe' }} className="mb-2">Event</Badge>
                  <Card.Title className="fw-bold">Tech Summit 2026</Card.Title>
                  <Card.Text className="text-muted">
                    Join us this Friday for our annual innovation summit featuring guest speakers from top tech firms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Badge style={{ backgroundColor: '#fff3cd', color: '#ffffff' }} className="mb-2">Academic</Badge>
                  <Card.Title className="fw-bold">New AI Specialization</Card.Title>
                  <Card.Text className="text-muted">
                    Starting next semester, SIT will offer an elective track focused on Generative AI and Machine Learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Badge style={{ backgroundColor: '#d4edda', color: '#ffffff' }} className="mb-2">Achievement</Badge>
                  <Card.Title className="fw-bold">Cybersecurity Hackathon</Card.Title>
                  <Card.Text className="text-muted">
                    Udiao students secured the first runner-up position in the National Inter-University Hackathon.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <div className="p-5 rounded-5 shadow-lg border" style={{ backgroundColor: '#2d1555', color: 'white' }}>
            <h2 className="fw-bold mb-3">Building the Digital Tomorrow</h2>
            <p className="mb-0 text-white-50">University of Udiao — School of Information Technology</p>
          </div>
        </Container>
      </section>
    </div>
  )
}
