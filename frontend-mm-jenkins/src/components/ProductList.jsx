import { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// CSS to hide scrollbars
const customStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Fetch products from the backend API
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`)
      .then((res) => {
        // Check if the response is an array and set it accordingly
        const data = Array.isArray(res.data) ? res.data : [];
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]); // Fallback in case of an error
      });
  }, []);

  // Scroll functionality for left and right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{customStyles}</style>

      <div className="p-10 bg-gray-100 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="section-title py-8 text-2xl sm:text-5xl lg:text-4xl font-display font-bold leading-tight text-gray-900">
            Featured Products
          </h2>

          <button
            onClick={() => navigate("/all-products")}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            View All Products
          </button>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Product list */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide py-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {Array.isArray(products) && products.length > 0 ? (
            products.map((p) => (
              <div
                key={p.id}
                className="min-w-[250px] flex-shrink-0 scroll-snap-align-start"
                style={{ flex: "0 0 calc(25% - 1rem)" }}
              >
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </>
  );
}
