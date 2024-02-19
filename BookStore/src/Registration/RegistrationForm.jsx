// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RegistrationForm.css';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    if (formData.name.length < 3 || formData.name.length > 30) {
      errors.name = 'Name should be between 3 and 30 characters';
      valid = false;
    }

    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.password.length < 10 || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password)) {
      errors.password = 'Password should be at least 10 characters long and contain at least one special character';
      valid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    if (valid) {
      alert('Form submitted:', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="registration-form">
      <h2>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.name}</div>
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.email}</div>
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.password}</div>
        </div>
        <div>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder='Repeat your password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.confirmPassword}</div>
        </div>
        <div className='text-center m-3'>
          <p>I agree all statements in <a className=' underline underline-offset-2' href="/services">Terms of services</a> </p>
        </div>
        <div className='text-center m-3'>
          <button type="submit">Sign up</button>
        </div>
        <div className='text-center m-3'>
          <p>Have already an account ? <a className=' underline underline-offset-2' href="/Login"> Login here</a> </p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;