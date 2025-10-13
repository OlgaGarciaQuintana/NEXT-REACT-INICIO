import React from 'react'
import Image, { StaticImageData } from 'next/image'
import componentsImg from "@/public/components.png";

export default function CoreConcepts({title, image, description}
    :{
        title: string;
        image: StaticImageData;
        description: string;
    }) {
  return (
    <li className="flex flex-col items-center justify-center">
          <img src={componentsImg.src} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">Componentes</h2>
          <p className="p-3 mt-2 text-slate-200">
            {description}
          </p>
    </li>
  )
}
