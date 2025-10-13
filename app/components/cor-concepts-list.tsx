import React from 'react'
import componentsImg from "@/public/components.png";
import CoreConcepts from "@/app/components/core-concept";
import configImg from "@/public/config.png";
import jsxUiImg from "@/public/jsx-ui.png";
import reactCoreImg from "@/public/react-core-concepts.png";
import stateImg from "@/public/state-mgmt.png";

export default function CoreConceptsList() {
  return (
    <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
        <CoreConcepts title="titulo" image={componentsImg} description="El nucleo de la interfaz de usuario de react: Composición de la interfaz soportada por multiples componentes." />
        <CoreConcepts title="titulo" image={jsxUiImg} description="Crea código del estilo HTML potencialmente dinámico para definir el renderizado final de la página." />
        <CoreConcepts title="titulo" image={configImg} description="Haz tus componentes configurables (y reusables) mediante el paso de datos de entrada." />
        <CoreConcepts title="titulo" image={stateImg} description="Datos gestionados por React  que con los cambios de valor provocan el renderizado del componente para actualizar la UI al cambio." />
      </ul>
    </section>
  )
}
