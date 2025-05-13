import React from 'react';

export default function HistorialViajes() {
  const viajes = [
    { cliente: "AppUser001", recogida: "Madrid", destino: "Barcelona", tiempo: "6h 30min", precio: "45€" },
    { cliente: "AppUser001", recogida: "Valencia", destino: "Sevilla", tiempo: "7h 10min", precio: "50€" },
    { cliente: "AppUser001", recogida: "Bilbao", destino: "Zaragoza", tiempo: "3h 45min", precio: "35€" },
    { cliente: "AppUser001", recogida: "Málaga", destino: "Granada", tiempo: "1h 50min", precio: "20€" },
    { cliente: "AppUser001", recogida: "Toledo", destino: "Madrid", tiempo: "1h 15min", precio: "18€" },
    { cliente: "AppUser001", recogida: "Córdoba", destino: "Jaén", tiempo: "2h 00min", precio: "22€" },
    { cliente: "AppUser001", recogida: "Alicante", destino: "Murcia", tiempo: "1h 10min", precio: "19€" },
    { cliente: "AppUser001", recogida: "Pamplona", destino: "Logroño", tiempo: "2h 40min", precio: "28€" },
    { cliente: "AppUser001", recogida: "Santander", destino: "Oviedo", tiempo: "3h 00min", precio: "32€" },
    { cliente: "AppUser001", recogida: "Gijón", destino: "León", tiempo: "2h 25min", precio: "26€" },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100 font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Historial de Viajes
      </h1>

      {/* Diseño de tarjetas en móviles y tabla en pantallas grandes */}
      <div className="space-y-4 sm:hidden">
        {viajes.map((viaje, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <p><span className="font-semibold">Cliente:</span> {viaje.cliente}</p>
            <p><span className="font-semibold">Recogida:</span> {viaje.recogida}</p>
            <p><span className="font-semibold">Destino:</span> {viaje.destino}</p>
            <p><span className="font-semibold">Tiempo:</span> {viaje.tiempo}</p>
            <p><span className="font-semibold">Precio:</span> {viaje.precio}</p>
          </div>
        ))}
      </div>

      {/* Tabla visible solo en pantallas grandes */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4">Cliente</th>
              <th className="py-3 px-4">Recogida</th>
              <th className="py-3 px-4">Destino</th>
              <th className="py-3 px-4">Tiempo</th>
              <th className="py-3 px-4">Precio</th>
            </tr>
          </thead>
          <tbody>
            {viajes.map((viaje, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-4">{viaje.cliente}</td>
                <td className="py-2 px-4">{viaje.recogida}</td>
                <td className="py-2 px-4">{viaje.destino}</td>
                <td className="py-2 px-4">{viaje.tiempo}</td>
                <td className="py-2 px-4">{viaje.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
