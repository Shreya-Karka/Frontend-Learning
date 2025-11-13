import { useState } from "react";
import "./Form.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  function validateForm() {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();

    // If errors exist, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    // No errors - submit!
    console.log("Form submitted:", formData);
    setErrors({});
    setSubmitted(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>✉️ Contact Us</h2>
      {submitted && (
        <div className="success-message">✅ Message sent successfully!</div>
      )}

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}{" "}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="your@email.com"
          onChange={handleChange}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      {/* Message Field */}
      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your message (min 10 characters)"
          onChange={handleChange}
          rows="5"
          className={errors.message ? "error-input" : ""}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
