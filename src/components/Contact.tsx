
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-6">
              Whether you need a web application, mobile app, or have an innovative idea to explore, 
              I'm here to help bring your vision to reality.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:youvegottabefreakingkiddingme@gmail.com"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
              
              <p className="text-sm text-gray-400 text-center">
                Let's discuss your project and explore the possibilities together
              </p>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">What I Can Help With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-purple-400 mb-2">Web Development</h4>
              <p className="text-sm text-gray-400">React, Next.js, TypeScript</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-blue-400 mb-2">Mobile Apps</h4>
              <p className="text-sm text-gray-400">React Native, Flutter</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-green-400 mb-2">AI & ML</h4>
              <p className="text-sm text-gray-400">Python, TensorFlow</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <h4 className="font-semibold text-pink-400 mb-2">UI/UX Design</h4>
              <p className="text-sm text-gray-400">Figma, Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
