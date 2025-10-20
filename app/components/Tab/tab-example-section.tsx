'use client';
import React, { use } from 'react'
import { useState } from 'react';
import TabButton from './tab-button';
import TabExample from './tab-example';
import { EXAMPLES } from '@/public/data';

export default function TabExampleSection() {
  const [selected, setSelected] = useState<keyof typeof EXAMPLES | null>(null);
  function handleClick(tab: keyof typeof EXAMPLES) {
    console.log("Han hecho click");
    setSelected(tab)
  }
  return (
    <section id="tab-section" className= "my-12 md:mx-12 mx-4 flex flex-col">
      <div className="flex justify-start space-x-2">
        <TabButton isSelected={selected === "components"} onClick={() => handleClick("components")}>{EXAMPLES.components.title}</TabButton>
        <TabButton isSelected={selected === "jsx"} onClick={() => handleClick("jsx")}>{EXAMPLES.jsx.title}</TabButton>
        <TabButton isSelected={selected === "props"} onClick={() => handleClick("props")}>{EXAMPLES.props.title}</TabButton>
        <TabButton isSelected={selected === "state"} onClick={() => handleClick("state")}>{EXAMPLES.state.title}</TabButton>
      </div>
      {
        !selected && <p className="text-slate-200 p-3">Selecciona un ejemplo para ver el código</p>
      }
      {
        !!selected &&
        <div className="bg-slate-600 text-slate-200 p-12 m-3">
          <h3 className="mb-10 text-lg">
            {EXAMPLES[selected].title}
          </h3>
          <p className="mb-10">
            {EXAMPLES[selected].description}
          </p>
          <hr/>
          <pre className="mt-3 overflow-hidden">
            <code>
              {EXAMPLES[selected].code}
            </code>
          </pre>
        </div>
      }

      <TabExample/>
    </section>
  )
}
