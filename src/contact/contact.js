import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Add further actions here, like sending data to a server
      var templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };
      emailjs.send('service_9b5e3xn', 'template_bauyo3w', templateParams, {publicKey: 'EWo6T35VpPJ2NFE8b'}).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          console.log("Form submitted successfully:", formData);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
        
    }
  };

  return (
    <div className="contact-me-container">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
      
    </div>
  );
};

export default Contact;
