"use client";
import { useState } from "react";

export default function TemplatePage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-green-300 to-teal-700 min-h-[100vh] flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-5xl font-bold mb-10 text-black">Our Unique Features</h2>
        <div className="grid grid-cols-3 gap-10">
          {[
            { title: "Fast Performance", desc: "Experience lightning-fast load times." },
            { title: "Seamless Integration", desc: "Easily connect with your favorite tools." },
            { title: "Advanced Security", desc: "Your data is safe with top-notch security measures." },
            { title: "User-Friendly UI", desc: "Enjoy an intuitive and easy-to-use interface." },
            { title: "24/7 Support", desc: "Get assistance anytime you need it." },
            { title: "Scalability", desc: "Grow your business without limitations." },
          ].map((feature, index) => (
            <div key={index} className="bg-gradient-to-tr from-green-800 to-slate-900 text-yellow-600 p-6 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}