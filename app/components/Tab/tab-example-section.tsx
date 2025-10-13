'use client';
import React from 'react'
import TabButton from './tab-button';
import TabExample from './tab-example';
import { EXAMPLES } from '@/public/data';

export default function TabExampleSection() {
  function handleClick() {

  }
  return (
    <section id="tab-section" className= "my-12 md:mx-12 mx-4 flex flex-col">
      <div className="flex justify-start space-x-2">
        <TabButton isSelected={true} onClick={() => handleClick}>{EXAMPLES.components.title}</TabButton>
        <TabButton isSelected={false} onClick={() => handleClick}>{EXAMPLES.jsx.title}</TabButton>
        <TabButton isSelected={false} onClick={() => handleClick}>{EXAMPLES.props.title}</TabButton>
        <TabButton isSelected={false} onClick={() => handleClick}>{EXAMPLES.state.title}</TabButton>
      </div>
      
      <TabExample/>
    </section>
  )
}
