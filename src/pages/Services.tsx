import { Container, Row, Col, Card,Tabs, Tab, ListGroup } from 'react-bootstrap'

export default function Services(){
  const programs = [
    {
      title: "BS Information Technology",
      description: "Focuses on the integration and management of computer-based systems to meet organizational needs.",
      specializations: ["Web Development", "Network Communication", "App Development"],
      color: "primary"
    },
    {
      title: "BS Computer Science",
      description: "Emphasizes the mathematical and theoretical foundations of computing and algorithmic development.",
      specializations: ["Artificial Intelligence", "Software Development", "Data Science"],
      color: "success"
    },
    {
      title: "BS Computer Engineering",
      description: "Combines electrical engineering and computer science to develop hardware and software systems.",
      specializations: ["Embedded Systems", "Robotics", "Digital Logic Design"],
      color: "info"
    }
  ];

  return (
    <Container className="my-5">
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 fw-bold">Programs & Services</h1>
          <p className="lead text-muted">Excellence in technological education at University of Udiao.</p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="programs" id="services-tabs" className="mb-4 nav-justified shadow-sm">

        <Tab eventKey="programs" title="Degree Programs">
          <Row className="g-4 mt-2">
            {programs.map((program, index) => (
              <Col lg={4} key={index}>
                <Card className="h-100 border-0 shadow">
                  <Card.Header className={`bg-${program.color} text-white fw-bold py-3`}>
                    {program.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-secondary mb-4">
                      {program.description}
                    </Card.Text>
                    <h6>Key Specializations:</h6>
                    <ListGroup variant="flush" className="mb-3">
                      {program.specializations.map((spec, idx) => (
                        <ListGroup.Item key={idx} className="ps-0 border-0 py-1">
                          • {spec}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="support" title="Student Support">
          <Row className="mt-4 align-items-center">
            <Col md={6}>
              <h3>IT Support Center</h3>
              <p>The SIT department provides specialized technical assistance to all students enrolled in our programs.</p>
              <ul className="text-secondary">
                <li>Free certification training (Cisco, Microsoft, AWS)</li>
                <li>Cloud resource allocation for Capstone projects</li>
                <li>Industry internship placement assistance</li>
                <li>24/7 Virtual Lab access for remote coding</li>
              </ul>
            </Col>
            <Col md={6}>
              <Card className="bg-light border-0 p-4">
                <h5 className="fw-bold">Laboratory Facilities</h5>
                <p className="small">Our campus features 10 specialized laboratories equipped with the latest hardware for testing and development.</p>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Network Lab</span>
                  <span className="text-success">Available</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                  <span>Robotics Lab</span>
                  <span className="text-warning">In Use</span>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <span>Software Dev Lab</span>
                  <span className="text-success">Available</span>
                </div>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  )
}
