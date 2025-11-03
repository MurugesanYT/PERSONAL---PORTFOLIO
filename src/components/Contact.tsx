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
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, hsl(var(--elegant-blue)) 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[hsl(var(--elegant-slate))] to-[hsl(var(--elegant-purple))] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-elegant leading-relaxed px-4">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 animate-fade-in">
            <div className="glass-elevated p-8 rounded-2xl group elegant-hover">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--elegant-purple))]/10 to-[hsl(var(--elegant-purple))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-[hsl(var(--elegant-purple))]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:youvegottabefreakingkiddingme@gmail.com"
                    className="text-muted-foreground hover:text-[hsl(var(--elegant-purple))] transition-colors font-elegant"
                  >
                    youvegottabefreakingkiddingme@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-elevated p-8 rounded-2xl group elegant-hover">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--elegant-blue))]/10 to-[hsl(var(--elegant-blue))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-[hsl(var(--elegant-blue))]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground font-elegant">Available Worldwide</p>
                </div>
              </div>
            </div>

            <div className="glass-elevated p-8 rounded-2xl group elegant-hover">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--elegant-charcoal))]/10 to-[hsl(var(--elegant-charcoal))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-[hsl(var(--elegant-charcoal))]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground font-elegant">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="glass-luxury p-8 rounded-2xl border border-[hsl(var(--elegant-purple))]/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">What I Can Help With</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-[hsl(var(--elegant-purple))] mb-2">Web Development</h4>
                  <p className="text-sm text-muted-foreground font-elegant">React, Next.js, TypeScript</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[hsl(var(--elegant-blue))] mb-2">Mobile Apps</h4>
                  <p className="text-sm text-muted-foreground font-elegant">React Native, Flutter</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[hsl(var(--elegant-charcoal))] mb-2">AI & ML</h4>
                  <p className="text-sm text-muted-foreground font-elegant">Python, TensorFlow</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[hsl(var(--elegant-slate))] mb-2">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground font-elegant">Figma, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 sm:mb-8">Send me a message</h3>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 glass rounded-xl text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--elegant-purple))] focus:border-transparent transition-all duration-200 border border-border"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 glass rounded-xl text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--elegant-purple))] focus:border-transparent transition-all duration-200 border border-border"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-4 glass rounded-xl text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--elegant-purple))] focus:border-transparent transition-all duration-200 border border-border"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 sm:py-4 glass rounded-xl text-sm sm:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--elegant-purple))] focus:border-transparent transition-all duration-200 resize-vertical border border-border"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!formData.name || !formData.email || !formData.message}
                className="w-full btn-primary text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 disabled:transform-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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