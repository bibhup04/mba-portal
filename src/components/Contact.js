import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/contacts/request', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Contact Request Sent Successfully!');
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data}`);
      } else {
        alert('Error Sending Contact Request!');
      }
      console.error('Error Sending Contact Request:', error);
    }
  };

  return (
    <div className='contact-home'>
      <div className='top-heading'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-body'>
        <div className='contact-info'>
          <div style={{ color: 'red' }}>
            <h3>Contact Us</h3>
          </div>

          <div className='contact-heading'>
            <h1>Get in Touch</h1>
          </div>
          <div className='contact-desc'>
            <p>Wish to enquire about admissions, syllabus, events, or anything else? You can walk in during office hours, give us a call or simply submit the form here.</p>
          </div>
          <div className='contact-content'>
            <h2><i className="fas fa-map-marker-alt"></i> Office Address</h2>
            <h4>abc park street</h4>
          </div>
          <div className='contact-content'>
            <h2><i className="fas fa-phone"></i> Contact No.</h2>
            <h4>123-456-7890</h4>
          </div>
          <div className='contact-content'>
            <h2><i className="fas fa-envelope"></i> Email</h2>
            <h4>example@example.com</h4>
          </div>
        </div>
        <div className='contact-info'>
          <form onSubmit={handleSubmit}>
            <h2>Name:</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <h2>Phone:</h2>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <h2>Email:</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <h2>Message:</h2>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              cols="50"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
