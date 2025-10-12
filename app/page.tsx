import React from "react";
import Header from "@/app/components/header";
import componentsImg from "@/public/components.png";
import configImg from "@/public/config.png";
import jsxUiImg from "@/public/jsx-ui.png";
import reactCoreImg from "@/public/react-core-concepts.png";
import stateImg from "@/public/state-mgmt.png";

export default function Home() {
  return (
    <>
      <Header />
      <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
      <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">Conceptos básicos de React</h1>
      <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
        <li className="flex flex-col items-center justify-center">
          <img src={componentsImg.src} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">JSX</h2>
          <p className="p-3 mt-2 text-slate-200">
            El nucleo de la interfaz de usuario de react: Composición de la interfaz soportada por multiples componentes.
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={jsxUiImg.src} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">JSX</h2>
          <p className="p-3 mt-2 text-slate-200">
            Crea código del estilo HTML potencialmente dinámico para definir el renderizado final de la página.
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={configImg.src} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">JSX</h2>
          <p className="p-3 mt-2 text-slate-200">
            Haz tus componentes configurables (y reusables) mediante el paso de datos de entrada.
          </p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={stateImg.src} alt="React js" className="w-32" />
          <h2 className="text-xl font-bold text-slate-100">JSX</h2>
          <p className="p-3 mt-2 text-slate-200">
            Datos gestionados por React  que con los cambios de valor provocan el renderizado del componente para actualizar la UI al cambio.
          </p>
        </li>
      </ul>
      </section>
    </>
  );
}
