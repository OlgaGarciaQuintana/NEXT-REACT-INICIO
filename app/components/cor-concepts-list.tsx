import React from 'react'
import componentsImg from "@/public/images/components.png";
import CoreConcepts from "@/app/components/core-concept";
import configImg from "@/public/images/config.png";
import jsxImg from "@/public/images/jsx-ui.png";
import reactCoreImg from "@/public/images/react-core-concepts.png";
import stateImg from "@/public/images/state-mgmt.png";
import { CORE_CONCEPTS } from '@/public/data';

export default function CoreConceptsList() {
  return (
    <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
      {CORE_CONCEPTS.map((cc) => <CoreConcepts key={cc.title} {...cc} />)}
      </ul>
    </section>
  )
}
