import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="w-56 bg-white rounded-lg cursor-pointer h-60">
      <figure className="relative w-full mb-2 h-4/5">
        <div className="absolute top-0 left-0 z-10 w-full h-full rounded-lg bg-black/30"></div>
        <span className="absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5 z-20">
          {data.category?.name || "Sin categoría"}
        </span>
        <img
          className="object-cover w-full h-full rounded-lg"
          src={data.images?.[0] || "ruta-de-imagen-placeholder.jpg"}
          alt={data.title || "Imagen"}
        />
        <button
          onClick={() => context?.setCount?.(context.count + 1)}
          className="absolute top-0 right-0 z-20 flex items-center justify-center w-6 h-6 p-1 m-2 bg-white rounded-full"
        >
          <FaPlus />
        </button>
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{data.title || "Sin título"}</span>
        <span className="text-lg font-bold">${data.price || "0.00"}</span>
      </p>
    </div>
  );
};

export default Card;