import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FoodFAQ = () => {
  const faqs = [
    {
      question: "How Long Does it Take to Develop a Food Delivery App?",
      answer: "The complete on-demand food delivery app development process will approximately take 180 hours. The time can vary based on your specific business requirements and goals for the grocery app.",
    },
    {
      question: "How Much Does it Cost to Build a Food Delivery App?",
      answer: " Building an on demand food delivery app depends on different factors. On average, food delivery app development can cost between $15,000-$60,000. However, the cost can fluctuate based on the features, technology, app complexity, and time required for app development.",
    },
    {
      question: "How Can I Create a Food Delivery App?",
      answer: "You need a team of experienced and skilled professionals to create a food delivery app. ValueAppz is a food delivery app development company that has the right resources to help you build a top-notch app.",
    },
    {
      question: "What Makes a Successful On Demand Food Delivery App?",
      answer: "To ensure the success of your on demand food delivery app, it must have an excellent user interface (UI design for a seamless user experience. Further, it must include all the necessary features, and the app should be easy to navigate.",
    },
    {
      question: "Can You Build a Custom Solution Specific to Our Business Requirements?",
      answer: "Absolutely! Dsolution specializes in delivering custom solutions that meet your specific business requirements.",
    },
    {
      question: "Do You Provide Third-party Integrations?",
      answer: "Yes, Dsolution offers seamless third-party integrations such as payment gateways, CRM systems, and more.",
    },
    {
      question: "Can you Integrate Third-party Services with My Food Delivery App?",
      answer: "Yes, we provide third-party integrations to bring more functionalities to the app. We can do the integration as per your business needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white mx-auto py-12 px-4">
      <h2 className="text-center  text-4xl font-bold mb-10 text-black">
        Frequently <span className="text-blue-500">Asked Questions</span>
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 border-gray-300 rounded-lg overflow-hidden transition-all duration-500 shadow-md ${
              openIndex === index ? "bg-gradient-to-r from-blue-100 to-blue-100" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <AiOutlineUp className="text-xl text-gray-600 transition-transform transform rotate-180" />
              ) : (
                <AiOutlineDown className="text-xl text-gray-600 transition-transform" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 p-5 bg-white" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                <strong>Answer:</strong> {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodFAQ;
