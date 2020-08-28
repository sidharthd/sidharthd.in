import React, { useState } from 'react';
import Space from './space';
import Message from './message';

const ERROR_MESSAGE = 'Uh oh. Message sending failed.';
const SUCCESS_MESSAGE = 'Thank you for contacting me. We will talk soon.';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    fetch('https://formspree.io/xvowjaon', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    })
      .then(() => {
        setSuccess(true);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGE);
        setSuccess(false);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <Space>
          <label className="input-label">
            Name
            <input
              name="name"
              required
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </label>
          <label className="input-label">
            Email
            <input
              name="email"
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="input-label">
            Message
            <textarea
              name="message"
              required
              onChange={e => setMessage(e.target.value)}
              value={message}
              rows={6}
            />
          </label>
          {!isSubmitting && error && <Message error>{error}</Message>}
          {!isSubmitting && success && (
            <Message success>{SUCCESS_MESSAGE}</Message>
          )}
          <button
            type="submit"
            className={isSubmitting ? 'disabled' : undefined}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </Space>
      </form>
    </>
  );
};

export default Form;
