import React from 'react';
import logoHeader from "@/public/react-core-concepts.png";
import Image from 'next/image';

export default function header() {
  return (
    <header>
        <Image src={logoHeader} alt="React Concepts" width={150}></Image>
        <div>Header</div>
    </header>
  )
}
