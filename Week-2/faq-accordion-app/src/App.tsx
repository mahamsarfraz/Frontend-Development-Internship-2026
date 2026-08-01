import  { useState } from 'react';

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's a great way to get hands-on experience and build your portfolio."
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium challenges, with a large community to support you along the way."
    },
    {
      question: "Can I use projects built on Frontend Mentor in my portfolio?",
      answer: "Definitely! You can use any projects you build to showcase your skills to potential employers."
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "You can get help by joining the Frontend Mentor community on Slack or Discord to ask questions and get feedback."
    },
    {
      question: "What tools do I need to complete challenges?",
      answer: "You can use any tools or technologies you like to complete the challenges, such as React and Tailwind CSS."
    },
    {
      question: "Are the design assets included in the challenges?",
      answer: "Yes, every challenge includes a complete set of design assets and a style guide to help you match the design closely."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f1f8] flex flex-col items-center justify-center p-4 relative font-sans">
      {/* Top Purple Background Banner */}
      <div className="absolute top-0 left-0 w-full h-72 bg-[#301534] -z-0"></div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 z-10 mt-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">⭐</span>
          <h1 className="text-4xl font-bold text-[#301534] tracking-wide">FAQs</h1>
        </div>

        <div className="space-y-6 divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6 first:pt-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left font-semibold text-[#301534] hover:text-[#ad28eb] transition-colors text-lg"
              >
                <span className="pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f8eeff] text-[#ad28eb] flex items-center justify-center font-bold text-xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <p className="mt-4 text-[#8b6990] text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}