import React from 'react';

export default async function PaginaProducto(
    { 
        params 
    }: { 
        params:Promise<{idproducto:string}>
    }
){
    //Codigo para cargar idproducto de la base de datos
    const producto = await params;
    return(
        <div id='paginaproducto'>
        <h1>Esta es la página productos</h1>
            <h3>Descripción</h3>
           
        </div>
    )
}