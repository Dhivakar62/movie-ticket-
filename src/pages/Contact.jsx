import React, { useState } from 'react';
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
    <div className="w-full min-h-[calc(100vh-74px)] bg-[#FAF8FE] relative py-8 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-3.5 py-1 rounded-full border border-[#E8E1EF]">
            Get In Touch
          </span>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-[#241532] mt-3">
            Contact DreamCine
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-2">
            Have a question about screening schedules, private event customizations, or corporate reservations? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5F0FC] text-[#6722A0] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Multiplex Location</h3>
                  <p className="text-xs text-[#746A7D] mt-1 leading-relaxed">
                    DreamCine Grand Multiplex & Suites<br />
                    Outer Ring Road, Bellandur, Bengaluru,<br />
                    Karnataka — 560103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FDF1F7] text-[#EC4899] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Telephone & Concierge</h3>
                  <p className="text-xs text-[#746A7D] mt-1">
                    Bookings: +91 (080) 4567 8900<br />
                    Private Events: +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Email Enquiries</h3>
                  <p className="text-xs text-[#746A7D] mt-1">
                    support@dreamcine.com<br />
                    events@dreamcine.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E6ECFF] text-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#241532]">Operating Hours</h3>
                  <p className="text-xs text-[#746A7D] mt-1">
                    Multiplex Box Office: 09:30 AM – 11:30 PM<br />
                    Customer Support: 24/7 Online
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm relative">
              
              <h2 className="font-display font-bold text-lg text-[#241532] mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#746A7D] mb-6">
                Fill in your details below and our team will get back to you within 2 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Thank you, {formData.name || 'Friend'}! Your message has been received. Our concierge team will reach out shortly.</span>
                </div>
              )}

              {errorMsg && (
                <div className="mb-6 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#746A7D] block mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-semibold text-[#241532] outline-none focus:border-[#6722A0]"
                  >
                    <option value="General Inquiry">General Movie Screening Inquiry</option>
                    <option value="Private Proposal Booking">Private Proposal Booking</option>
                    <option value="Birthday / Anniversary Celebration">Birthday / Anniversary Celebration</option>
                    <option value="Corporate / Bulk Hall Booking">Corporate / Bulk Hall Booking</option>
                    <option value="Feedback / Support">Feedback / Support</option>
                  </select>
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
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E1EF] bg-white text-xs font-medium text-[#241532] outline-none focus:border-[#6722A0]"
                    placeholder="Tell us how we can assist you..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#6722A0] hover:bg-[#521782] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
