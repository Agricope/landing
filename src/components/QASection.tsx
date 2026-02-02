import { useState } from "react";
import { imgFrame30, imgVuesaxLinearAdd, imgVuesaxLinearMinus, imgLine17 } from "../assets/images";

interface FAQItemProps {
  question: string;
  answer?: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <button
      onClick={onToggle}
      className="flex gap-2 items-start w-full cursor-pointer text-left"
    >
      <div className="flex flex-1 flex-col gap-3 items-start">
        <div className="font-['Inter',sans-serif] font-semibold text-base text-[#010f1c] w-full">
          <p>{question}</p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {answer && (
            <div className="flex flex-col gap-2 font-['Roboto',sans-serif] font-normal text-base text-[#63726d] w-full pt-1">
              {answer.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <img
        alt=""
        className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        src={isOpen ? imgVuesaxLinearMinus : imgVuesaxLinearAdd}
      />
    </button>
  );
}

export function QASection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What is Agricope?",
      answer: [
        "At Agricope, we're reimagining the food supply chain by fully digitalizing every step: from warehousing and logistics to e-commerce.",
        "We're not just a tech-enabled operator; we run our entire in-house operation on a proprietary, custom-built platform that gives us complete end-to-end control. This means we can deliver a service that's not only more reliable, but also more efficient.",
        "Our mission is simple: to support the people who keep the food supply chain moving.",
        "We take care of the operational complexity so food businesses can focus on what matters most: their customers and their growth. With Agricope, they don't have to worry about the backend. We've got it covered.",
      ],
    },
    {
      question: "Why can't I access the product page?",
      answer: [
        "We're currently in our pilot phase, offering our solutions exclusively to a select group of food businesses.",
        "If you're interested in being part of this journey and shaping the future of food logistics with us, we'd love to hear from you.",
        "Reach out at support@agricope.com",
      ],
    },
    {
      question: "Is this just an ordering platform?",
      answer: [
        "Not at all — Agricope is much more than just an ordering platform.",
        "We're building a fully integrated, tech-powered food supply chain. That means we don't just help businesses place orders-- we also manage warehousing, logistics, and e-commerce operations using our own custom-built system.",
        "Our goal is to simplify the entire backend for food businesses, so they can focus on serving their customers and growing their business.",
        "While we take care of the rest.",
      ],
    },
    {
      question: "What is the main benefit?",
      answer: [
        "The main benefit of Agricope is that we simplify and streamline the entire food supply chain for businesses.",
        "Instead of juggling multiple systems for ordering, warehousing, logistics, and e-commerce, food businesses can rely on Agricope's all-in-one platform. We handle the operational side — so you can focus on serving your customers and growing your business without the usual stress and complexity.",
      ],
    },
  ];

  return (
    <section className="bg-white flex flex-col items-start justify-center overflow-hidden px-4 lg:px-28 py-16 w-full">
      <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
        {/* Left Content */}
        <div className="flex flex-1 flex-col gap-10 items-start">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl lg:text-[28px] text-[#010f1c] w-full">
            Q & A
          </h2>

          <div className="flex flex-col gap-5 items-start w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
                {index < faqs.length - 1 && (
                  <div className="w-full h-0 relative mt-5">
                    <img alt="" className="w-full h-[2px]" src={imgLine17} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative rounded-2xl h-[300px] lg:h-auto lg:self-stretch w-full lg:w-[380px] shrink-0 overflow-hidden">
          <img
            alt="Fresh vegetables"
            className="absolute h-full w-full object-cover rounded-2xl"
            src={imgFrame30}
          />
        </div>
      </div>
    </section>
  );
}
