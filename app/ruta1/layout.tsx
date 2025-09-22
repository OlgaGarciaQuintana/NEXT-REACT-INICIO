import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  );
}

//ruta1
//RootLayout -> Ruta1Layout -> page.tsx --> otro.tsx