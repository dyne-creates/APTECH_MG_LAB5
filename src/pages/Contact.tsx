import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! Your message has been sent to the SIT Department.`);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold text-primary">Contact Us</h1>
          <p className="lead text-muted">Have questions? The School of Information Technology is here to help.</p>
          <hr />
        </Col>
      </Row>

      <Row className="g-5">
        <Col lg={7}>
          <Card className="shadow-sm border-0 p-4">
            <h4 className="mb-4">Send us a Message</h4>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="e.g. Juan Beginning"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="juan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Select name="subject" value={formData.subject} onChange={handleChange}>
                  <option>General Inquiry</option>
                  <option>Enrollment Support</option>
                  <option>Technical Assistance</option>
                  <option>Laboratory Reservation</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="px-5 py-2">
                Submit Message
              </Button>
            </Form>
          </Card>
        </Col>

        <Col lg={5}>
          <h4 className="mb-4">Department Info</h4>
          <Card className="border-0 shadow-sm mb-4">
            <ListGroup variant="flush">
              <ListGroup.Item className="py-3">
                <strong className="d-block text-primary">📍 Location</strong>
                SIT Building, 1st Floor, University of Udiao Main Campus
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <strong className="d-block text-primary">📧 Email</strong>
                sit-support@udiao.edu.ph
              </ListGroup.Item>
              <ListGroup.Item className="py-3">
                <strong className="d-block text-primary">📞 Phone</strong>
                +63 6969696999
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="bg-light border-0 p-3 text-center">
            <h5 className="text-secondary">Office Hours</h5>
            <p className="mb-1 text-black">Monday - Friday</p>
            <p className="fw-bold text-black">8:00 AM - 5:00 PM</p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
