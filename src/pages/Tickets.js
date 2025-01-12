import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Tickets = () => {
  const [form, setForm] = useState({ name: '', email: '', tickets: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) errors.email = "Email is required";
    if (!form.tickets || isNaN(form.tickets)) errors.tickets = "Valid ticket quantity is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Tickets purchased successfully!');
      setForm({ name: '', email: '', tickets: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container py-5">
        <Container fluid className="my-5">
      <h1 className="text-center mb-4">Upcoming Zoo Events</h1>
      <Row>
        {/* Event 1 */}
        <Col md={4} className="mb-4 featuredImages2">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/animalFeed.jpg"}
              alt="Animal Feeding"
            />
            <Card.Body>
              <Card.Title>Animal Feeding Time</Card.Title>
              <Card.Text>
                Join us for an exciting animal feeding session! Watch our lions,
                tigers, and other majestic animals get fed by our zookeepers.
              </Card.Text>
              <Button variant="primary" href="/events/feeding">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Event 2 */}
        <Col md={4} className="mb-4 featuredImages2">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/wildLifeTalk.jpg"}
              alt="Wildlife Talk"
            />
            <Card.Body>
              <Card.Title>Wildlife Conservation Talk</Card.Title>
              <Card.Text>
                Attend a fascinating talk on wildlife conservation and learn how
                you can contribute to preserving endangered species.
              </Card.Text>
              <Button variant="primary" href="/events/conservation">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Event 3 */}
        <Col md={4} className="mb-4 featuredImages2">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/nightSafari.jpg"}
              alt="Night Safari"
            />
            <Card.Body>
              <Card.Title>Night Safari Adventure</Card.Title>
              <Card.Text>
                Experience the thrill of a night safari and witness nocturnal
                creatures in their natural habitat ensuring the safety.
              </Card.Text>
              <Button variant="primary" href="/events/night-safari">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      <h1>Purchase Tickets</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Tickets</label>
          <input
            type="number"
            className={`form-control ${errors.tickets && 'is-invalid'}`}
            value={form.tickets}
            onChange={(e) => setForm({ ...form, tickets: e.target.value })}
          />
          {errors.tickets && <div className="invalid-feedback">{errors.tickets}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Tickets;
