import React from 'react';
import logoHeader from "@/public/images/react-core-concepts.png";
import Image from 'next/image';

export default function header() {
  return (
    <header id="cabecera" className="flex flex-col items-center justify-center font-sixtyfour bg-slate-800">
        <Image src={logoHeader} alt="React Concepts" width={150}></Image>
        <h1 className="w-5/6 text-center text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-300 bg-clip-text text-transparent">
        Conceptos básicos de React
        </h1>
        <h2 className="w-5/6 m-4 text-x1 text-slate-200 text-left md:text-center">Cuatro conceptos fundamentales para entender React</h2>
    </header>
  )
}
