import React from 'react';

const ProductDetail = ({ data, onClose }) => {
  if (!data) return null; // 👈 Evita renderizar si no hay producto seleccionado

  return (
    <aside className="w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg shadow-lg p-4">
      <button onClick={onClose} className="self-end text-lg font-bold">✖</button> {/* Botón para cerrar */}
      <img src={data.images?.[0]} alt={data.title} className="object-cover w-full h-40 rounded-lg" />
      <h2 className="mt-2 text-lg font-bold">{data.title}</h2>
      <p className="text-gray-600">{data.description}</p>
      <span className="mt-2 text-xl font-semibold">${data.price}</span>
    </aside>
  );
};

export default ProductDetail;