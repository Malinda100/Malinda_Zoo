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
     

  <div className="text-center mb-4">
    <h1>Upcoming Zoo Events</h1>
    <p className="lead">
      Join us for exciting events and activities at the zoo! From animal feeding to wildlife conservation talks, there's something for everyone.
    </p>
  </div>

  {/* Events Section */}
  <div className="my-5">
    <h2>Featured Events</h2>
    <p>
      Our zoo offers a variety of exciting events throughout the year. Here's a sneak peek at some of the upcoming events you won't want to miss!
    </p>
    <div className="row">
      {/* Event 1 */}
      <div className="col-md-4 mb-4">
        <div className="card featuredImages2">
          <img
            src={process.env.PUBLIC_URL + "/images/animalFeed.jpg"}
            className="card-img-top"
            alt="Animal Feeding"
          />
          <div className="card-body">
            <h5 className="card-title">Animal Feeding Time</h5>
            <p className="card-text">
              Join us for an exciting animal feeding session! Watch our lions, tigers, and other majestic animals get fed by our zookeepers.
            </p>
            <a href="/events/feeding" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Event 2 */}
      <div className="col-md-4 mb-4">
        <div className="card featuredImages2">
          <img
            src={process.env.PUBLIC_URL + "/images/wildLifeTalk.jpg"}
            className="card-img-top"
            alt="Wildlife Talk"
          />
          <div className="card-body">
            <h5 className="card-title">Wildlife Conservation Talk</h5>
            <p className="card-text">
              Attend a fascinating talk on wildlife conservation and learn how you can contribute to preserving endangered species.
            </p>
            <a href="/events/conservation" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Event 3 */}
      <div className="col-md-4 mb-4">
        <div className="card featuredImages2">
          <img
            src={process.env.PUBLIC_URL + "/images/nightSafari.jpg"}
            className="card-img-top"
            alt="Night Safari"
          />
          <div className="card-body">
            <h5 className="card-title">Night Safari Adventure</h5>
            <p className="card-text">
              Experience the thrill of a night safari and witness nocturnal creatures in their natural habitat ensuring the safety.
            </p>
            <a href="/events/night-safari" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
     
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
