import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Card } from 'react-bootstrap';
import './App.css'; // Import external CSS for better styling
import { BsSend } from 'react-icons/bs';

function Register() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, msg };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data);
      alert(data.message); // Show success message
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  //

  return (
    <div className="register-page">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        {/* Card for Registration Form */}
        <Card className="login-card">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {/* Full Name */}
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name} // Controlled input
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Email ID */}
              <Form.Group className="mb-3">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email} // Controlled input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Message */}
              <Form.Group className="mb-3">
                <Form.Label>Type Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message"
                  value={msg} // Controlled input
                  onChange={(e) => setMsg(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <Button className="login-btn" type="submit">
                Send <BsSend />
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
