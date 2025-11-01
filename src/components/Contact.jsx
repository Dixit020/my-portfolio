import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g6rm34s', // ⚡ apna Service ID
      'template_enipezn', // ⚡ apna Template ID
      e.target,
      'thrjFDAYGJCP7sjIJ' // ⚡ apna Public Key
    ).then(
      (result) => {
        alert('Message Sent Successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '10vh',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#fffbfbd3',
        padding: '1rem'
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Contact Me</h2>

      <form onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <input type="text" name="from_name" placeholder="Name" required style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          outline: 'none'
        }} />
        <input type="email" name="from_email" placeholder="Email" required style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          outline: 'none'
        }} />
        <textarea name="message" placeholder="Message" required style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          outline: 'none',
          minHeight: '120px'
        }}></textarea>
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Send Message
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>Email: prajapatidixit976@gmail.com</p>
      <p>Phone: 9601676909</p>
    </motion.section>
  );
}
