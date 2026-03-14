'use client';

import { useState } from 'react';

const faq = [
  {
    q: 'How do I create a new item?',
    a: 'Tap the "+" button on the master list page to create a new grocery item. Give it a name and a category and click Create.',
  },
  {
    q: 'How do I share with my household?',
    a: [
      'Open the Settings page by tapping the gear icon in the top-left corner, then select Manage Household and tap Generate Invite Code.',
      'The person you want to invite can open Settings in the application on their device and tap Enter Code, then enter the invite code you generated. They can also join by scanning the QR code.',
      'Once connected, everyone in the household will be able to view and edit the shared data in real time, including the Master List, Shopping List, and Recipes.',
    ],
  },
  {
    q: 'How does Siri integration work?',
    a: [
      'Siri voice commands are enabled for managing your shopping list.',
      'Example phrases',
      '• "Add to haplos shopping list" → Siri will ask: "What item would you like to add?"',
      '• "Remove from haplos shopping list" → Siri will ask: "What item would you like to remove?"',
      '• "Check off in haplos" → Siri will ask: "What item would you like to check off?"',
    ],
  },
  {
    q: 'Can I add items from a recipe?',
    a: 'Yes! Open the Recipes page to select an existing recipe or create a new one. From there, you can add ingredients to your Shopping List individually or add them all at once. Haplos will automatically add the selected ingredients to your list.',
  },
  {
    q: 'Is Haplos free?',
    a: 'Yes, Haplos is free to download and use from the App Store.',
  },
];

export default function SupportClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send message. Please try again.');
        return;
      }

      setSuccess(true);
      setFormData({ name: '', email: '', topic: 'general', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <h1>Support</h1>
      <p className="updated">We&apos;re here to help.</p>

      <div className="support-card">
        <h2>Contact Us</h2>
        <p>
          Have a question, found a bug, or want to request a feature? Send us
          a message and we&apos;ll get back to you as soon as possible.
        </p>

        {success && (
          <div className="form-message success">
            ✓ Message sent successfully! We&apos;ll be in touch soon.
          </div>
        )}

        {error && (
          <div className="form-message error">✕ {error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="general">General Question</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        {faq.map((item) => (
          <div key={item.q} className="faq-item">
            <h3>{item.q}</h3>
            {Array.isArray(item.a) ? (
              <>
                {item.a.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </>
            ) : (
              <p>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
