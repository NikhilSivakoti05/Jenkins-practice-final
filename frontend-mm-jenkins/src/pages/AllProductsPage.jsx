import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Search, Filter, RefreshCcw } from "lucide-react";

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`)
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        const uniqueCategories = ["All", ...new Set(res.data.map((p) => p.category || "Uncategorized"))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // Filter Logic
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setFilteredProducts(products);
  };

  return (
    // ✅ Added top padding to push content below fixed Navbar
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20 pt-28">
      <div className="w-full max-w-7xl">
        <h1
  className="section-title py-8 text-2xl sm:text-5xl lg:text-4xl font-display font-bold leading-tight text-gray-900"
>
  ALL PRODUCTS
</h1>

        {/* Search + Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white shadow-sm rounded-xl p-4 border border-gray-200">
          <div className="flex items-center w-full md:w-1/2 relative">
            <Search className="absolute left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="flex items-center bg-white border px-3 py-2 rounded-lg shadow-sm">
              <Filter className="text-gray-500 mr-2" size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="outline-none text-gray-700 bg-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              <RefreshCcw size={16} /> Reset
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
