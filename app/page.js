"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <>
      <main>
        <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
          <div className="flex lg:items-center lg:justify-center flex-col lg:ml-[7vw] lg:gap-6  mt-[25vh] ">
            <p className="text-yellow-400 font-extrabold text-6xl">
              Everything you are. In one, simple link in bio.
            </p>
            <p className="text-yellow-400 text-md font-bold">
              Join 50M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate, and sell from your
              Instagram, TikTok, Twitter, YouTube, and other social media
              profiles.
            </p>
            <div className="down flex  lg:-ml-[14vw] gap-3">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className="lg:p-4 lg:rounded-xl   lg:px-19"
                placeholder="Enter your handle"
              />
              <button
                onClick={() => createTree()}
                className="bg-gray-300 rounded-full px-10 py-5 font-semibold"
              >
                Claim your Linktree
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col mr-[10vw]">
            <img className="mt-[30vh] ml-[14vw]" src="./img.png" alt="" />
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-yellow-500 min-h-[100vh] flex flex-col items-center justify-center text-white p-10">
          <h2 className="text-5xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-3 gap-10">
            {[
              { title: "Easy to Use", desc: "Set up your Linktree in minutes." },
              { title: "Customizable", desc: "Personalize your bio link your way." },
              { title: "Analytics", desc: "Track clicks and engagements effortlessly." },
            ].map((feature, index) => (
              <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

         
      </main>
    </>
  );
}
