import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg animate-pulse">
        Loading product details...
      </div>
    );

  if (!product)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-xl font-medium">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 flex flex-col items-center">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 mb-8 hover:underline hover:text-indigo-800 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Products
      </button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-96 h-96 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {product.name}
          </h1>

          <div className="flex items-center space-x-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2">(Customer Rating)</span>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-indigo-600 mt-6">
            ₹{product.price}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Product Recommendations */}
      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          You may also like
        </h2>
        <p className="text-gray-600">
          Explore more products that complement your choice and enhance your experience.
        </p>
      </div>
    </div>
  );
}