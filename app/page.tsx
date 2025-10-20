import React from "react";
import Header from "@/app/header";
import CoreConceptsList from "@/app/components/cor-concepts-list";
import TabExampleSection from "@/app/components/Tab/tab-example-section";
import Dropdown from "@/app/components/dropdown";

export default function Home() {
  return (
    <>
       <Header />
       <nav className="flex flex-col md:flex-row bg-violet-900 justify-center md:justify-between">
          <Dropdown menuText="Hola"/>
       </nav>
      <CoreConceptsList/>
      <TabExampleSection/>
    </>
  );
}
