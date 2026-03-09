import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'

export default function About(){
  // Theme Colors
  const purplePrimary = '#6f42c1'
  const purpleLight = '#f8f5ff'

  return (
    <Container className="my-5">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 fw-bold" style={{ color: purplePrimary }}>About University of Udiao</h1>
          <p className="lead text-muted">
            Empowering the next generation of IT professionals since 2026.
          </p>
          <hr className="w-25 mx-auto" style={{ color: purplePrimary, opacity: '0.5' }} />
        </Col>
      </Row>

      <Row className="mb-5 g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: purpleLight }}>
            <Card.Body className="p-4">
              <Card.Title className="fw-bold mb-3" style={{ color: purplePrimary }}>Our Mission</Card.Title>
              <Card.Text className="text-secondary">
                To provide world-class information technology education that fosters 
                innovation, critical thinking, and technical excellence, preparing 
                our students to lead in a global digital economy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 text-white" style={{ backgroundColor: purplePrimary }}>
            <Card.Body className="p-4">
              <Card.Title className="fw-bold mb-3">Our Vision</Card.Title>
              <Card.Text className="opacity-90">
                To be a premier center of excellence in technological research and 
                instruction, recognized globally for producing highly skilled and 
                ethical IT leaders.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3 className="mb-4 border-start border-4 ps-3 fw-bold" style={{ color: purplePrimary, borderColor: purplePrimary }}>
            Why Choose Udiao?
          </h3>
          <Accordion defaultActiveKey="0" className="shadow-sm">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Innovation-Driven Curriculum</Accordion.Header>
              <Accordion.Body className="text-secondary">
                Our programs are constantly updated to reflect the latest trends in 
                AI, Web Development, and Cybersecurity, ensuring students are 
                job-ready upon graduation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>State-of-the-Art Facilities</Accordion.Header>
              <Accordion.Body className="text-secondary">
                Students have access to modern computer laboratories, high-speed 
                networking hubs, and dedicated research spaces for collaborative projects.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Industry Partnerships</Accordion.Header>
              <Accordion.Body className="text-secondary">
                We collaborate with leading tech companies to provide internship 
                opportunities and real-world project exposure to our students.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="text-center py-5 rounded-5 shadow-sm border" style={{ backgroundColor: '#2d1555', color: 'white' }}>
        <Col>
          <h4 className="fw-bold mb-2">Excellence. Innovation. Integrity.</h4>
          <p className="mb-0 opacity-75 small text-uppercase tracking-widest">Official Portal of the University of Udiao</p>
        </Col>
      </Row>
    </Container>
  )
}
