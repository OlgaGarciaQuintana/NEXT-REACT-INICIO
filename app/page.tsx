import React from "react";
import Header from "@/app/header";
import CoreConceptsList from "@/app/components/cor-concepts-list";
import TabExampleSection from "@/app/components/Tab/tab-example-section";

export default function Home() {
  return (
    <>
       <Header />
      <CoreConceptsList/>
      <TabExampleSection/>
    </>
  );
}
