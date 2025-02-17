import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-card dark:bg-dark-card py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif text-center mb-12 text-foreground dark:text-dark-foreground"
        >
          Contattaci
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif mb-6 text-foreground dark:text-dark-foreground">Inviaci un messaggio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-accent dark:text-dark-accent mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent dark:text-dark-accent mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-accent dark:text-dark-accent mb-1">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-border dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                Invia Messaggio
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif mb-6 text-foreground dark:text-dark-foreground">Informazioni di Contatto</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-accent dark:text-dark-accent">
                  <FaPhone className="mr-3 text-primary dark:text-dark-primary" />
                  <span>+39 123 456 7890</span>
                </li>
                <li className="flex items-center text-accent dark:text-dark-accent">
                  <FaEnvelope className="mr-3 text-primary dark:text-dark-primary" />
                  <span>info@fermento2.0.com</span>
                </li>
                <li className="flex items-center text-accent dark:text-dark-accent">
                  <FaMapMarkerAlt className="mr-3 text-primary dark:text-dark-primary" />
                  <span>Via Roma 123, 00100 Roma, Italia</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-6 text-foreground dark:text-dark-foreground">Orari di Apertura</h2>
              <ul className="space-y-2 text-accent dark:text-dark-accent">
                <li>Lunedì - Venerdì: 12:00 - 23:00</li>
                <li>Sabato - Domenica: 12:00 - 00:00</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-6 text-foreground dark:text-dark-foreground">La Nostra Posizione</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.4829321!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1623164983291!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
