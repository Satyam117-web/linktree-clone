"use client";

export default function PricingPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-green-800 to-teal-600 min-h-[100vh] flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-5xl font-bold mb-10 mt-[20vh] text-black">Choose Your Plan</h2>
        <div className="grid grid-cols-3 gap-10">
          {[
            { title: "Basic", price: "$9/mo", desc: "Great for individuals starting out.", features: ["1 Custom Link", "Basic Analytics", "Limited Customization"] },
            { title: "Pro", price: "$19/mo", desc: "Perfect for growing creators.", features: ["5 Custom Links", "Advanced Analytics", "Full Customization"] },
            { title: "Business", price: "$49/mo", desc: "Best for businesses and teams.", features: ["Unlimited Links", "Premium Analytics", "Team Collaboration"] },
          ].map((plan, index) => (
            <div key={index} className="bg-white text-black p-10 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 border-4 border-transparent bg-gradient-to-br from-green-900 to-gray-900">
              <h3 className="text-3xl font-bold mb-4 text-center text-white">{plan.title}</h3>
              <p className="text-2xl font-semibold text-center text-gray-100">{plan.price}</p>
              <p className="text-center mb-6 text-gray-200">{plan.desc}</p>
              <ul className="text-gray-100 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-lg">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className= "bg-slate-800 hover:bg-green-950 text-white font-bold py-3 px-8 rounded-full w-full transition duration-300 text-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
