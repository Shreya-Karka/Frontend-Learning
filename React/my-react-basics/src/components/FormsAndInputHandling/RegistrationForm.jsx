import { useState } from "react";
import "./Form.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    acceptTerms: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      age: "",
      country: "",
      acceptTerms: false,
    });
  }

  function handleChange(e) {
    const { name, type, checked, value } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>📝 Registration Form</h2>

      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Username"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email ID"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="Age"
        onChange={handleChange}
        min="13"
        max="120"
      />

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      >
        <option value="">Select a Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>

      <label className="checkbox-label">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
        I accept the terms and conditions
      </label>

      <button type="submit">Register</button>

      <div className="form-preview">
        <h3>Current Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}

export default RegistrationForm;
