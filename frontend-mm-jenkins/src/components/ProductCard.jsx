import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-64 cursor-pointer hover:shadow-xl transition"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
        onError={(e) => (e.target.src = "/placeholder.png")}
      />
      <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
      <p className="text-orange-600 font-bold mt-1">₹{product.price}</p>
    </div>
  );
}
