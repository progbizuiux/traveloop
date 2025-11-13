"use client"
import React, { useState } from 'react';
import "@/styles/components/faq.scss";


const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqData = [
    {
      question: "What kind of support can I expect if I encounter an issue during my trip?",
      answer: "You can travel with complete peace of mind. We provide 24/7 emergency support via a dedicated phone number and email. Whether you face a flight cancellation, a booking issue, or any unexpected situation, our global support team is always on standby to assist you, day or night."
    },
    {
      question: "What kind of support can I expect if I encounter an issue during my trip?",
      answer: "You can travel with complete peace of mind. We provide 24/7 emergency support via a dedicated phone number and email. Whether you face a flight cancellation, a booking issue, or any unexpected situation, our global support team is always on standby to assist you, day or night."
    },
    {
      question: "Are there any specific travel insurance options recommended for my destination?",
      answer: "Yes, we recommend comprehensive travel insurance that covers medical emergencies, trip cancellations, lost baggage, and travel delays. Our team can help you find the best insurance options tailored to your specific destination and travel needs."
    },
    {
      question: "What resources are available for troubleshooting common travel problems?",
      answer: "We provide a comprehensive help center with guides, FAQs, and video tutorials covering common travel issues. You can also access our mobile app for instant support, real-time flight updates, and emergency contacts for your destination."
    },
    {
      question: "How can I reach customer service while I am on the go?",
      answer: "You can reach our customer service team through multiple channels: our 24/7 hotline, live chat on our mobile app, email support, or WhatsApp. We ensure you're never alone, no matter where your journey takes you."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-gap-top-bottom ">
      <div className="container">
        {/* Header */}
        <div className="text-center ">
          <h2 className="faq-title">Questions? We've Got Answers.</h2>
        </div>

        {/* Accordion */}
        <div className="faq-accordion section-body-gap">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`accordion-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h6 className="accordion-question">{faq.question}</h6>
                <span className="accordion-icon">
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;