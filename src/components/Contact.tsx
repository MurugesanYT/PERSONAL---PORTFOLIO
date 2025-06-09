
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:youvegottabefreakingkiddingme@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Clear form after sending
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a 
                  href="mailto:youvegottabefreakingkiddingme@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  youvegottabefreakingkiddingme@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400">Available Worldwide</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                <p className="text-gray-400">Within 24 hours</p>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">What I Can Help With</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <h4 className="font-semibold text-purple-400 mb-1">Web Development</h4>
                  <p className="text-xs text-gray-400">React, Next.js, TypeScript</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-400 mb-1">Mobile Apps</h4>
                  <p className="text-xs text-gray-400">React Native, Flutter</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-green-400 mb-1">AI & ML</h4>
                  <p className="text-xs text-gray-400">Python, TensorFlow</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-pink-400 mb-1">UI/UX Design</h4>
                  <p className="text-xs text-gray-400">Figma, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!formData.name || !formData.email || !formData.message}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
