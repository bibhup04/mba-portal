import React, { useState } from 'react';
import './Contact.css'; // Assuming you save the CSS in Contact.css

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
  };

  return (
    <div className='home'>
      <div className='top-heading'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-body'>
        <div className='contact-info'>
          <h3>Contact Us</h3>
          <div className='contact-heading'>
            <h1>Get in Touch</h1>
          </div>
          <div className='contact-desc'>
            <p>Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.</p>
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
          />
          <h2>Phone:</h2>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <h2>Email:</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <h2>Message:</h2>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
