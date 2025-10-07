import React from "react";
import Header from "@/app/components/header";
import componentsImg from "@/public/components.png";

export default function Home() {
  return (
    <>
      <Header />
      <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
        <li className="flex flex-col items-center justify-center">
          
        </li>

      </ul>
      </section>
    </>
  );
}
