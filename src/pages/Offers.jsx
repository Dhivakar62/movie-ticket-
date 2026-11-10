import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OFFERS_DATA } from '../data/offersData';
import PageBackground from '../components/common/PageBackground';
import { Tag, Copy, Check, Sparkles, ArrowRight, X, Info } from 'lucide-react';

const Offers = () => {
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTerms, setActiveTerms] = useState(null);

  const handleCopy = (code) => {
    try {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 3000);
    } catch {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-74px)] relative py-8 sm:py-12">
      {/* Dedicated Offers & Promotions Shimmering Background */}
      <PageBackground variant="offers" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md text-[#6722A0] text-xs font-semibold border border-white/80 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Exclusive Promotions</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-[#241532] tracking-tight">
            Exciting Movie & Event Offers
          </h1>
          <p className="text-xs sm:text-sm text-[#746A7D] mt-1">
            Apply these coupon codes at checkout to unlock instant discounts and complimentary benefits.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {OFFERS_DATA.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              className="glass-reflective rounded-3xl p-6 transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6722A0] bg-[#F5F0FC] px-2.5 py-0.5 rounded-full">
                    {offer.category}
                  </span>
                  <span className="text-[11px] text-[#746A7D] font-medium">
                    Valid till: {offer.validTill}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#241532]">
                  {offer.title}
                </h3>
                <p className="text-xs text-[#746A7D] mt-1.5 leading-relaxed">
                  {offer.description}
                </p>

                {/* Promo Coupon Pill Box */}
                <div className="my-5 p-3 rounded-2xl bg-white/80 border border-dashed border-[#6722A0]/40 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#6722A0]" />
                    <span className="font-mono font-bold text-sm tracking-widest text-[#6722A0]">
                      {offer.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#6722A0] text-white hover:bg-[#521782] text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer hover:scale-105"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E1EF] flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveTerms(offer)}
                  className="text-[#746A7D] hover:text-[#6722A0] flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Terms & Conditions</span>
                </button>

                <button
                  onClick={() => navigate('/movies')}
                  className="font-bold text-[#6722A0] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Terms Modal */}
      {activeTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-white/80 shadow-2xl relative">
            <button
              onClick={() => setActiveTerms(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-bold text-base text-[#241532] mb-2">
              Offer Terms & Conditions
            </h3>
            <span className="font-mono text-xs font-bold text-[#6722A0] bg-[#F5F0FC] px-2 py-0.5 rounded-md inline-block mb-3">
              Code: {activeTerms.code}
            </span>
            <p className="text-xs text-[#746A7D] leading-relaxed">
              {activeTerms.terms}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setActiveTerms(null)}
                className="px-5 py-2 rounded-full bg-[#6722A0] text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Offers;
