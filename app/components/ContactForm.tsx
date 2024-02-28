'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (submitted) {
    return <div>Thank you for your message!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
