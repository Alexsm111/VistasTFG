import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
    

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Izquierda */}
        <div className=" mt-8 w-full lg:w-1/2 p-8 flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Viaja a cualquier lugar con la app TAKEMEAWAY.</h1>
          <input type="text" placeholder="Ubicación de recogida" className="p-3 border rounded-md" />
          <input type="text" placeholder="Ubicación de destino" className="p-3 border rounded-md" />
          <div className="flex gap-2">
            <select className="p-2 border rounded-md w-1/2">
              <option>Hoy</option>
            </select>
            <select className="p-2 border rounded-md w-1/2">
              <option>Ahora</option>
            </select>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md w-fit">Ver precios</button>
         
        </div>

        {/* Derecha */}
        <div className="w-full lg:w-1/2 bg-black min-h-[300px] m-4 lg:m-8 rounded-lg shadow-md"></div>



      </div>
    </div>
  );
}
