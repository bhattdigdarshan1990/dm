import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-[#070b14] min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-sky-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto font-medium">
            Get in touch to schedule an appointment or ask a question.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <div>
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="bg-white dark:bg-[#0d1525] rounded-3xl p-10 shadow-2xl border border-sky-100 dark:border-sky-900/30">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Clinic Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-sky-50 dark:bg-sky-900/40 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-6 shrink-0 border border-sky-100 dark:border-sky-800">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      Opposite SBI Bank, Madhuban,<br />
                      Udaipur, Rajasthan, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/RUgGqAZXVKrNsQJy7" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sky-600 dark:text-sky-400 font-black text-xs uppercase tracking-widest mt-4 inline-flex items-center hover:text-sky-800 dark:hover:text-sky-300 transition-all group"
                    >
                      Get Directions <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-50 dark:bg-sky-900/40 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-6 shrink-0 border border-sky-100 dark:border-sky-800">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest">Phone</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-bold text-lg">+91 94141 58480</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-50 dark:bg-sky-900/40 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-6 shrink-0 border border-sky-100 dark:border-sky-800">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-bold">info@drmayankameta.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-50 dark:bg-sky-900/40 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-6 shrink-0 border border-sky-100 dark:border-sky-800">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-widest">Working Hours</h4>
                    <div className="text-slate-600 dark:text-slate-400 space-y-2 font-medium">
                      <p className="flex justify-between w-64 border-b border-sky-50 dark:border-sky-900/30 pb-1"><span>Mon - Sat:</span> <span>10:00 AM - 2:00 PM</span></p>
                      <p className="flex justify-between w-64 border-b border-sky-50 dark:border-sky-900/30 pb-1"><span>Evening:</span> <span>5:00 PM - 8:00 PM</span></p>
                      <p className="flex justify-between w-64 text-rose-500 font-black pt-1"><span>Sunday:</span> <span className="dark:text-rose-400 uppercase tracking-widest text-xs">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white dark:bg-[#0d1525] rounded-3xl p-3 shadow-2xl border border-sky-100 dark:border-sky-900/30 h-[400px] overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Dr.+Mayank+Ameta,+Opposite+SBI+Bank,+Madhuban,+Udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="dark:invert dark:hue-rotate-180 dark:grayscale dark:opacity-80 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
