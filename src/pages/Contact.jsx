import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageBackground from '../components/common/PageBackground';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill out all required fields.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-16">
      {/* Dedicated Info Background */}
      <PageBackground variant="info" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-white/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-xs">
            Get In Touch
          </span>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-[#241532] mt-3 tracking-tight">
            Contact DreamCine
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-2">
            Have a question about screening schedules, private event customizations, or corporate reservations? We are here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-reflective rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Multiplex Venue</h3>
                  <p className="text-xs text-[#746A7D] mt-0.5 leading-relaxed">
                    DreamCine Luxe Plaza, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Direct Concierge</h3>
                  <p className="text-xs text-[#746A7D] mt-0.5">
                    +91 80 4912 8800 (Multiplex)<br />
                    +91 98450 12345 (Event Desk)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Email Enquiries</h3>
                  <p className="text-xs text-[#746A7D] mt-0.5">
                    support@dreamcine.in<br />
                    events@dreamcine.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E6ECFF] text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-xs border border-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Box Office Hours</h3>
                  <p className="text-xs text-[#746A7D] mt-0.5">
                    Monday – Sunday: 09:30 AM – 11:30 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-reflective rounded-3xl p-6 sm:p-10">
              <h2 className="font-display font-bold text-lg text-[#241532] mb-1">
                Send a Message
              </h2>
              <p className="text-xs text-[#746A7D] mb-6">
                Our hospitality coordinator will get back to you within 2 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 animate-fadeIn">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Private Proposal Celebration">Private Proposal Celebration</option>
                      <option value="Birthday / Anniversary Party">Birthday / Anniversary Party</option>
                      <option value="Corporate / Private Hall Screening">Corporate / Private Hall Screening</option>
                      <option value="Ticket Booking Support">Ticket Booking Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white/90 text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                    placeholder="Tell us how we can assist you..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-[0_4px_14px_rgba(103,34,160,0.25)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
