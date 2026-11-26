import React, { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your subscription plan at any time from your dashboard settings."
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription anytime with no hidden fees. Your access will remain active until the end of the current billing period."
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add your company name, tax ID/GST details, and billing address directly in your billing settings."
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are billed monthly or annually in advance depending on your selected billing cycle."
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can update your registered email address from your account profile settings and verify the new email."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-white pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        {/* SECTION HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#202020]">
          Frequently Asked{" "}
          <span className="text-[#ff2e3d]">Questions</span>
        </h2>

        {/* ACCORDION LIST */}
        <div className="mt-10 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl bg-white transition-all duration-200 ${
                  isOpen
                    ? "border border-red-100 shadow-[0_10px_30px_rgba(255,46,61,0.12)]"
                    : "border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span
                    className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isOpen ? "text-[#ff2e3d]" : "text-[#222222]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* CIRCLE + / - ICON */}
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${
                      isOpen
                        ? "border-[#4b5563] text-[#4b5563]"
                        : "border-[#222222] text-[#222222]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pr-12 text-xs text-[#666666] leading-5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;