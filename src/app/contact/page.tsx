'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission - connect to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 container-section">
        <h1 className="text-5xl md:text-6xl uppercase mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Have questions or interested in sponsoring? We'd love to hear from you. Get in touch using the form below or reach out directly.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="container-section py-24 bg-surface/30">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '/logo/Gmail_logo.png', title: 'Email', value: 'initial.formula@gmail.com', desc: 'General inquiries' },
            { icon: '/logo/Facebook_Logo.webp', title: 'Facebook', value: 'Initial Formula Kmitl', desc: 'Follow us on Facebook', href: 'https://www.facebook.com/initialteam/' },
            { icon: '/logo/ig logo.avif', title: 'Instagram', value: 'initialformula.kmitl', desc: 'Follow us on Instagram', href: 'https://www.instagram.com/initialformula.kmitl/' },
          ].map((contact, idx) => (
            <div key={idx} className="card-dark p-8 text-center">
              <img src={contact.icon} alt={contact.title} className="w-10 h-10 object-contain mx-auto mb-4" />
              <h3 className="font-bold uppercase text-lg mb-2">{contact.title}</h3>
              {'href' in contact
                ? <a href={(contact as any).href} target="_blank" rel="noopener noreferrer" className="text-highlight font-semibold mb-2 hover:underline block">{contact.value}</a>
                : <p className="text-highlight font-semibold mb-2">{contact.value}</p>
              }
              <p className="text-sm text-gray-400">{contact.desc}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="card-dark overflow-hidden">
          <div className="p-8 pb-4">
            <h3 className="font-bold uppercase text-2xl mb-1">Location</h3>
            <p className="text-gray-300 font-semibold">King Mongkut's Institute of Technology Ladkrabang</p>
            <p className="text-gray-400 text-sm">1 Soi Chalongkrung 1, Ladkrabang District, Bangkok 10520, Thailand</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4!2d100.7735125!3d13.7272935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6770e584eef1%3A0x37156c47f588fbe0!2sINITIAL%20Club!5e0!3m2!1sen!2sth!4v1"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="container-section py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold uppercase mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold uppercase mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors"
                    placeholder="+66..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold uppercase mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="recruitment">Recruitment</option>
                    <option value="media">Media Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-dark-border rounded-sm focus:outline-none focus:border-highlight transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-primary disabled:opacity-50"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
                <button
                  type="reset"
                  className="btn-secondary"
                  onClick={() => setFormData({ name: '', email: '', phone: '', subject: '', message: '' })}
                >
                  Clear
                </button>
              </div>

              {submitted && (
                <div className="p-4 bg-primary-500/20 border border-primary-500/50 rounded text-primary-500 text-sm">
                  ✓ Thank you! We've received your message and will get back to you shortly.
                </div>
              )}
            </form>
          </div>

          {/* Sidebar - Social & Info */}
          <div>
            <h2 className="text-2xl font-bold uppercase mb-8">Connect With Us</h2>

            <div className="card-dark p-6 mb-8">
              <h3 className="font-bold uppercase text-sm mb-4 text-highlight">Follow Our Social</h3>
              <div className="space-y-3">
                {[
                  { name: 'Initial Formula Kmitl', icon: '/logo/Facebook_Logo.webp', href: 'https://www.facebook.com/initialteam/' },
                  { name: 'initialformula.kmitl', icon: '/logo/ig logo.avif', href: 'https://www.instagram.com/initialformula.kmitl' },
                  { name: 'initial.formula@gmail.com', icon: '/logo/Gmail_logo.png', href: 'mailto:initial.formula@gmail.com' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-highlight transition-colors"
                  >
                    <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="card-dark p-6">
              <h3 className="font-bold uppercase text-sm mb-4 text-highlight">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Sponsorship', href: '/sponsors' },
                  { label: 'Join Team', href: '/join' },
                  { label: 'News', href: '/news' },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="block text-gray-300 hover:text-highlight transition-colors"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="container-section py-24 bg-surface/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-8 text-center">Response Time</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: 'Sponsorship Inquiry', time: '24-48 hours' },
              { label: 'General Inquiry', time: '2-3 business days' },
              { label: 'Urgent Matters', time: 'initial.formula@gmail.com' },
              { label: 'Media Requests', time: 'initial.formula@gmail.com' },
            ].map((item, idx) => (
              <div key={idx} className="card-dark p-6 text-center">
                <p className="text-gray-400 text-sm mb-2 uppercase">{item.label}</p>
                <p className="font-bold text-lg text-highlight">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
