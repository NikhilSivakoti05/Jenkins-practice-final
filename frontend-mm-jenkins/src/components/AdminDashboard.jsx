// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import Navbar from "@/components/Navbar";

// // // ✅ Navbar at top
// // <Navbar />

// // // --- Icon Components ---
// // const TrashIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M3 6h18" />
// //     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
// //     <line x1="10" y1="11" x2="10" y2="17" />
// //     <line x1="14" y1="11" x2="14" y2="17" />
// //   </svg>
// // );

// // const PlusCircleIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <circle cx="12" cy="12" r="10" />
// //     <line x1="12" y1="8" x2="12" y2="16" />
// //     <line x1="8" y1="12" x2="16" y2="12" />
// //   </svg>
// // );

// // const EditIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
// //     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
// //   </svg>
// // );

// // const BoxIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
// //     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
// //     <line x1="12" y1="22.08" x2="12" y2="12"></line>
// //   </svg>
// // );

// // const WrenchIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
// //   </svg>
// // );

// // const QuoteIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4zM14 21c3 0 7-1 7-8V5c0-1.25-.75-2.017-2-2h-4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4z"></path>
// //   </svg>
// // );

// // // --- Products Management ---
// // const ProductsView = () => {
// //   const [products, setProducts] = useState([]);
// //   const [form, setForm] = useState({ name: "", description: "", price: "" });
// //   const [editingProduct, setEditingProduct] = useState(null);
// //   const [imageFile, setImageFile] = useState(null);
// //   const [imagePreview, setImagePreview] = useState("");

// //   const fetchProducts = () => {
// //     axios
// //       .get(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products`)
// //       .then((res) => setProducts(res.data))
// //       .catch((err) => console.error("Error fetching products:", err));
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImageFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       let imageUrl = form.imageUrl;

// //       // Upload image if new file selected
// //       if (imageFile) {
// //         const formData = new FormData();
// //         formData.append("file", imageFile);
// //         const uploadRes = await axios.post(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/upload`, formData, {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         });
// //         imageUrl = uploadRes.data.fileUrl || uploadRes.data;
// //       }

// //       const payload = {
// //         name: form.name,
// //         description: form.description,
// //         price: form.price,
// //         imageUrl: imageUrl,
// //       };

// //       if (editingProduct) {
// //         await axios.put(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/${editingProduct.id}`, payload);
// //       } else {
// //         await axios.post(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products`, payload);
// //       }

// //       fetchProducts();
// //       setForm({ name: "", description: "", price: "" });
// //       setImageFile(null);
// //       setImagePreview("");
// //       setEditingProduct(null);
// //     } catch (err) {
// //       console.error("Error saving product:", err);
// //       alert("Failed to save product");
// //     }
// //   };

// //   const handleEditClick = (product) => {
// //     setEditingProduct(product);
// //     setForm(product);
// //     setImagePreview(product.imageUrl || "");
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const handleDeleteProduct = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this product?")) {
// //       await axios.delete(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`);
// //       fetchProducts();
// //     }
// //   };

// //   const handleCancelEdit = () => {
// //     setEditingProduct(null);
// //     setForm({ name: "", description: "", price: "" });
// //     setImageFile(null);
// //     setImagePreview("");
// //   };

// //   return (
// //     <div>
// //       <header className="mb-8">
// //         <h1 className="text-4xl font-bold text-slate-800">Product Management</h1>
// //         <p className="text-slate-500 mt-1">Add, view, and update your products.</p>
// //       </header>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Add / Edit Form */}
// //         <div className="bg-white rounded-xl shadow-lg p-6">
// //           <h2 className="text-2xl font-semibold mb-4">
// //             {editingProduct ? "Edit Product" : "Add New Product"}
// //           </h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Product name"
// //               value={form.name}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <textarea
// //               name="description"
// //               placeholder="Description"
// //               value={form.description}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //             />
// //             <input
// //               type="number"
// //               name="price"
// //               placeholder="Price (₹)"
// //               value={form.price}
// //               onChange={handleInputChange}
// //               className="w-full p-2 border rounded"
// //               required
// //             />
// //             <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
// //             {imagePreview && (
// //               <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />
// //             )}
// //             <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
// //               {editingProduct ? "Update Product" : "Add Product"}
// //             </button>
// //             {editingProduct && (
// //               <button
// //                 type="button"
// //                 onClick={handleCancelEdit}
// //                 className="w-full bg-gray-300 text-gray-800 py-2 rounded"
// //               >
// //                 Cancel
// //               </button>
// //             )}
// //           </form>
// //         </div>

// //         {/* Product List */}
// //         <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
// //           <h2 className="text-2xl font-semibold mb-4">
// //             Product List ({products.length})
// //           </h2>
// //           <div className="space-y-4 max-h-[70vh] overflow-y-auto">
// //             {products.length > 0 ? (
// //               products.map((p) => (
// //                 <div
// //                   key={p.id}
// //                   className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition"
// //                 >
// //                   <div className="flex items-center gap-4">
// //                     <img
// //                       src={p.imageUrl}
// //                       alt={p.name}
// //                       className="w-20 h-20 object-cover rounded"
// //                       onError={(e) => (e.target.src = "/placeholder.png")}
// //                     />
// //                     <div>
// //                       <h3 className="font-semibold text-lg">{p.name}</h3>
// //                       <p className="text-gray-600 text-sm">{p.description}</p>
// //                       <p className="font-bold text-indigo-600 mt-1">₹{p.price}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <button
// //                       onClick={() => handleEditClick(p)}
// //                       className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
// //                     >
// //                       <EditIcon /> Edit
// //                     </button>
// //                     <button
// //                       onClick={() => handleDeleteProduct(p.id)}
// //                       className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
// //                     >
// //                       <TrashIcon /> Delete
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="text-gray-500 text-center py-6">
// //                 No products available. Add one above!
// //               </p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Services View ---
// // const ServicesView = () => (
// //   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
// //     <p className="text-gray-500">Service management will be added soon.</p>
// //   </div>
// // );

// // // --- Testimonials View ---
// // const TestimonialsView = () => (
// //   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
// //     <p className="text-gray-500">Testimonial management will be added soon.</p>
// //   </div>
// // );

// // // --- Main Admin Dashboard ---
// // export default function AdminDashboard() {
// //   const [activeView, setActiveView] = useState("products");
// //   const renderView = () => {
// //     switch (activeView) {
// //       case "products":
// //         return <ProductsView />;
// //       case "services":
// //         return <ServicesView />;
// //       case "testimonials":
// //         return <TestimonialsView />;
// //       default:
// //         return <ProductsView />;
// //     }
// //   };

// //   return (
// //     <div className="bg-slate-100 min-h-screen flex">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-slate-800 text-white p-4 flex flex-col">
// //         <div className="text-center mb-10 mt-4">
// //           <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
// //           <p className="text-sm text-slate-400">Your Control Center</p>
// //         </div>
// //         <nav className="flex flex-col space-y-3">
// //           <button
// //             onClick={() => setActiveView("products")}
// //             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
// //               activeView === "products"
// //                 ? "bg-indigo-600 text-white"
// //                 : "hover:bg-slate-700"
// //             }`}
// //           >
// //             <BoxIcon /> Products
// //           </button>
// //           <button
// //             onClick={() => setActiveView("services")}
// //             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
// //               activeView === "services"
// //                 ? "bg-indigo-600 text-white"
// //                 : "hover:bg-slate-700"
// //             }`}
// //           >
// //             <WrenchIcon /> Services
// //           </button>
// //           <button
// //             onClick={() => setActiveView("testimonials")}
// //             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
// //               activeView === "testimonials"
// //                 ? "bg-indigo-600 text-white"
// //                 : "hover:bg-slate-700"
// //             }`}
// //           >
// //             <QuoteIcon /> Testimonials
// //           </button>
// //         </nav>
// //       </aside>

// //       {/* Main Section */}
// //       <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>
// //     </div>
// //   );
// // }
// //above worked correct before .env
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import Navbar from "@/components/Navbar";

// // // ✅ Navbar at top
// // <Navbar />;

// // // --- Icon Components ---
// // const TrashIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M3 6h18" />
// //     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
// //     <line x1="10" y1="11" x2="10" y2="17" />
// //     <line x1="14" y1="11" x2="14" y2="17" />
// //   </svg>
// // );

// // const PlusCircleIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <circle cx="12" cy="12" r="10" />
// //     <line x1="12" y1="8" x2="12" y2="16" />
// //     <line x1="8" y1="12" x2="16" y2="12" />
// //   </svg>
// // );

// // const EditIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
// //     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
// //   </svg>
// // );

// // const BoxIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
// //     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
// //     <line x1="12" y1="22.08" x2="12" y2="12"></line>
// //   </svg>
// // );

// // const WrenchIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
// //   </svg>
// // );

// // const QuoteIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4zM14 21c3 0 7-1 7-8V5c0-1.25-.75-2.017-2-2h-4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4z"></path>
// //   </svg>
// // );

// // // --- Products Management ---
// // const ProductsView = () => {
// //   const [products, setProducts] = useState([]);
// //   const [form, setForm] = useState({ name: "", description: "", price: "" });
// //   const [editingProduct, setEditingProduct] = useState(null);
// //   const [imageFile, setImageFile] = useState(null);
// //   const [imagePreview, setImagePreview] = useState("");

// //   const fetchProducts = () => {
// //     axios
// //       .get("${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products")
// //       .then((res) => setProducts(res.data))
// //       .catch((err) => console.error("Error fetching products:", err));
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImageFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //     }
// //   };

// //   // ✅ Fixed Update Functionality
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       let imageUrl = form.imageUrl;

// //       // Upload new image if file selected
// //       if (imageFile) {
// //         const formData = new FormData();
// //         formData.append("file", imageFile);
// //         const uploadRes = await axios.post("${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/upload", formData, {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         });
// //         imageUrl = uploadRes.data.fileUrl || uploadRes.data;
// //       }

// //       const payload = {
// //         name: form.name,
// //         description: form.description,
// //         price: form.price,
// //         imageUrl: imageUrl,
// //       };

// //       // ✅ Fix: Support both MongoDB `_id` and normal `id`
// //       const productId = editingProduct?.id || editingProduct?._id;

// //       if (editingProduct) {
// //         await axios.put(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/${productId}`, payload);
// //         alert("Product updated successfully!");
// //       } else {
// //         await axios.post("${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products", payload);
// //         alert("Product added successfully!");
// //       }

// //       fetchProducts();
// //       setForm({ name: "", description: "", price: "" });
// //       setImageFile(null);
// //       setImagePreview("");
// //       setEditingProduct(null);
// //     } catch (err) {
// //       console.error("Error saving product:", err);
// //       alert("Failed to save product");
// //     }
// //   };

// //   const handleEditClick = (product) => {
// //     setEditingProduct(product);
// //     setForm(product);
// //     setImagePreview(product.imageUrl || "");
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const handleDeleteProduct = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this product?")) {
// //       await axios.delete(`${import.meta.env.VITE_REACT_APP_VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`);
// //       fetchProducts();
// //     }
// //   };

// //   const handleCancelEdit = () => {
// //     setEditingProduct(null);
// //     setForm({ name: "", description: "", price: "" });
// //     setImageFile(null);
// //     setImagePreview("");
// //   };

// //   return (
// //     <div>
// //       <header className="mb-8">
// //         <h1 className="text-4xl font-bold text-slate-800">Product Management</h1>
// //         <p className="text-slate-500 mt-1">Add, view, and update your products.</p>
// //       </header>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* Add / Edit Form */}
// //         <div className="bg-white rounded-xl shadow-lg p-6">
// //           <h2 className="text-2xl font-semibold mb-4">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <input type="text" name="name" placeholder="Product name" value={form.name} onChange={handleInputChange} className="w-full p-2 border rounded" required />
// //             <textarea name="description" placeholder="Description" value={form.description} onChange={handleInputChange} className="w-full p-2 border rounded" />
// //             <input type="number" name="price" placeholder="Price (₹)" value={form.price} onChange={handleInputChange} className="w-full p-2 border rounded" required />
// //             <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
// //             {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />}
// //             <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
// //               {editingProduct ? "Update Product" : "Add Product"}
// //             </button>
// //             {editingProduct && (
// //               <button type="button" onClick={handleCancelEdit} className="w-full bg-gray-300 text-gray-800 py-2 rounded">
// //                 Cancel
// //               </button>
// //             )}
// //           </form>
// //         </div>

// //         {/* Product List */}
// //         <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
// //           <h2 className="text-2xl font-semibold mb-4">Product List ({products.length})</h2>
// //           <div className="space-y-4 max-h-[70vh] overflow-y-auto">
// //             {products.length > 0 ? (
// //               products.map((p) => (
// //                 <div key={p.id || p._id} className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition">
// //                   <div className="flex items-center gap-4">
// //                     <img src={p.imageUrl} alt={p.name} className="w-20 h-20 object-cover rounded" onError={(e) => (e.target.src = "/placeholder.png")} />
// //                     <div>
// //                       <h3 className="font-semibold text-lg">{p.name}</h3>
// //                       <p className="text-gray-600 text-sm">{p.description}</p>
// //                       <p className="font-bold text-indigo-600 mt-1">₹{p.price}</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <button onClick={() => handleEditClick(p)} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
// //                       <EditIcon /> Edit
// //                     </button>
// //                     <button onClick={() => handleDeleteProduct(p.id || p._id)} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">
// //                       <TrashIcon /> Delete
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="text-gray-500 text-center py-6">No products available. Add one above!</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Services & Testimonials ---
// // const ServicesView = () => (
// //   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
// //     <p className="text-gray-500">Service management will be added soon.</p>
// //   </div>
// // );

// // const TestimonialsView = () => (
// //   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
// //     <p className="text-gray-500">Testimonial management will be added soon.</p>
// //   </div>
// // );

// // // --- Main Admin Dashboard ---
// // export default function AdminDashboard() {
// //   const [activeView, setActiveView] = useState("products");
// //   const renderView = () => {
// //     switch (activeView) {
// //       case "products":
// //         return <ProductsView />;
// //       case "services":
// //         return <ServicesView />;
// //       case "testimonials":
// //         return <TestimonialsView />;
// //       default:
// //         return <ProductsView />;
// //     }
// //   };

// //   return (
// //     <div className="bg-slate-100 min-h-screen flex">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-slate-800 text-white p-4 flex flex-col">
// //         <div className="text-center mb-10 mt-4">
// //           <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
// //           <p className="text-sm text-slate-400">Your Control Center</p>
// //         </div>
// //         <nav className="flex flex-col space-y-3">
// //           <button onClick={() => setActiveView("products")} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${activeView === "products" ? "bg-indigo-600 text-white" : "hover:bg-slate-700"}`}>
// //             <BoxIcon /> Products
// //           </button>
// //           <button onClick={() => setActiveView("services")} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${activeView === "services" ? "bg-indigo-600 text-white" : "hover:bg-slate-700"}`}>
// //             <WrenchIcon /> Services
// //           </button>
// //           <button onClick={() => setActiveView("testimonials")} className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${activeView === "testimonials" ? "bg-indigo-600 text-white" : "hover:bg-slate-700"}`}>
// //             <QuoteIcon /> Testimonials
// //           </button>
// //         </nav>
// //       </aside>

// //       {/* Main Section */}
// //       <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>
// //     </div>
// //   );
// // }

// // after .env and top home button
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "@/components/Navbar";

// // ✅ Navbar at top
// <Navbar />;

// // --- Icon Components ---
// const TrashIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 6h18" />
//     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//     <line x1="10" y1="11" x2="10" y2="17" />
//     <line x1="14" y1="11" x2="14" y2="17" />
//   </svg>
// );

// const PlusCircleIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="12" y1="8" x2="12" y2="16" />
//     <line x1="8" y1="12" x2="16" y2="12" />
//   </svg>
// );

// const EditIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
//   </svg>
// );

// const BoxIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
//     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
//     <line x1="12" y1="22.08" x2="12" y2="12"></line>
//   </svg>
// );

// const WrenchIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
//   </svg>
// );

// const QuoteIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4zM14 21c3 0 7-1 7-8V5c0-1.25-.75-2.017-2-2h-4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4z"></path>
//   </svg>
// );

// // --- Products Management ---
// const ProductsView = () => {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: "", description: "", price: "" });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState("");

//   // ✅ Safe fetch function
//   const fetchProducts = () => {
//     const baseUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
//     console.log("Backend base URL:", baseUrl);

//     axios
//       .get(`${baseUrl}/api/products`)
//       .then((res) => {
//         console.log("Fetched data:", res.data);
//         if (Array.isArray(res.data)) {
//           setProducts(res.data);
//         } else {
//           console.error("Unexpected response type:", res.data);
//           setProducts([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let imageUrl = form.imageUrl;

//       // Upload image if new file selected
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append("file", imageFile);
//         const uploadRes = await axios.post(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/upload`,
//           formData,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//         imageUrl = uploadRes.data.fileUrl || uploadRes.data;
//       }

//       const payload = {
//         name: form.name,
//         description: form.description,
//         price: form.price,
//         imageUrl: imageUrl,
//       };

//       if (editingProduct) {
//         await axios.put(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${editingProduct.id}`,
//           payload
//         );
//       } else {
//         await axios.post(
//           `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`,
//           payload
//         );
//       }

//       fetchProducts();
//       setForm({ name: "", description: "", price: "" });
//       setImageFile(null);
//       setImagePreview("");
//       setEditingProduct(null);
//     } catch (err) {
//       console.error("Error saving product:", err);
//       alert("Failed to save product");
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm(product);
//     setImagePreview(product.imageUrl || "");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDeleteProduct = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       await axios.delete(
//         `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`
//       );
//       fetchProducts();
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingProduct(null);
//     setForm({ name: "", description: "", price: "" });
//     setImageFile(null);
//     setImagePreview("");
//   };

//   return (
    
//     <div>
      
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">Product Management</h1>
//         <p className="text-slate-500 mt-1">Add, view, and update your products.</p>
//       </header>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Add / Edit Form */}
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             {editingProduct ? "Edit Product" : "Add New Product"}
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Product name"
//               value={form.name}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <textarea
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//             />
//             <input
//               type="number"
//               name="price"
//               placeholder="Price (₹)"
//               value={form.price}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
//             {imagePreview && (
//               <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />
//             )}
//             <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
//               {editingProduct ? "Update Product" : "Add Product"}
//             </button>
//             {editingProduct && (
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 className="w-full bg-gray-300 text-gray-800 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             )}
//           </form>
//         </div>

//         {/* Product List */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             Product List ({products?.length || 0})
//           </h2>
//           <div className="space-y-4 max-h-[70vh] overflow-y-auto">
//             {Array.isArray(products) && products.length > 0 ? (
//               products.map((p) => (
//                 <div
//                   key={p.id}
//                   className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition"
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={p.imageUrl}
//                       alt={p.name}
//                       className="w-20 h-20 object-cover rounded"
//                       onError={(e) => (e.target.src = "/placeholder.png")}
//                     />
//                     <div>
//                       <h3 className="font-semibold text-lg">{p.name}</h3>
//                       <p className="text-gray-600 text-sm">{p.description}</p>
//                       <p className="font-bold text-indigo-600 mt-1">₹{p.price}</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEditClick(p)}
//                       className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
//                     >
//                       <EditIcon /> Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteProduct(p.id)}
//                       className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
//                     >
//                       <TrashIcon /> Delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 text-center py-6">
//                 No products available. Add one above!
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Services View ---
// const ServicesView = () => (
//   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
//     <p className="text-gray-500">Service management will be added soon.</p>
//   </div>
// );

// // --- Testimonials View ---
// const TestimonialsView = () => (
//   <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//     <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
//     <p className="text-gray-500">Testimonial management will be added soon.</p>
//   </div>
// );

// // --- Main Admin Dashboard ---
// export default function AdminDashboard() {
//   const [activeView, setActiveView] = useState("products");

//   const renderView = () => {
//     switch (activeView) {
//       case "products":
//         return <ProductsView />;
//       case "services":
//         return <ServicesView />;
//       case "testimonials":
//         return <TestimonialsView />;
//       default:
//         return <ProductsView />;
//     }
//   };

//   return (
//     <div className="bg-slate-100 min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-slate-800 text-white p-4 flex flex-col">
//         <div className="text-center mb-10 mt-4">
//           <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
//           <p className="text-sm text-slate-400">Your Control Center</p>
//         </div>
//         <nav className="flex flex-col space-y-3">
//           <button
//             onClick={() => setActiveView("products")}
//             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
//               activeView === "products"
//                 ? "bg-indigo-600 text-white"
//                 : "hover:bg-slate-700"
//             }`}
//           >
//             <BoxIcon /> Products
//           </button>
//           <button
//             onClick={() => setActiveView("services")}
//             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
//               activeView === "services"
//                 ? "bg-indigo-600 text-white"
//                 : "hover:bg-slate-700"
//             }`}
//           >
//             <WrenchIcon /> Services
//           </button>
//           <button
//             onClick={() => setActiveView("testimonials")}
//             className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
//               activeView === "testimonials"
//                 ? "bg-indigo-600 text-white"
//                 : "hover:bg-slate-700"
//             }`}
//           >
//             <QuoteIcon /> Testimonials
//           </button>
//         </nav>
//       </aside>

//       {/* Main Section */}
//       <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";

// --- Icon Components ---
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4zM14 21c3 0 7-1 7-8V5c0-1.25-.75-2.017-2-2h-4c-1.25 0-2 .75-2 2v6h3v2c0 3.5-2.5 4-4 4z"></path>
  </svg>
);

// --- Products Management ---
const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [editingProduct, setEditingProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // ✅ Safe fetch function
  const fetchProducts = () => {
    const baseUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
    console.log("Backend base URL:", baseUrl);

    axios
      .get(`${baseUrl}/api/products`)
      .then((res) => {
        console.log("Fetched data:", res.data);
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Unexpected response type:", res.data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = form.imageUrl;

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        const uploadRes = await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/upload`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        imageUrl = uploadRes.data.fileUrl || uploadRes.data;
      }

      const payload = {
        name: form.name,
        description: form.description,
        price: form.price,
        imageUrl: imageUrl,
      };

      if (editingProduct) {
        await axios.put(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${editingProduct.id}`,
          payload
        );
      } else {
        await axios.post(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`,
          payload
        );
      }

      fetchProducts();
      setForm({ name: "", description: "", price: "" });
      setImageFile(null);
      setImagePreview("");
      setEditingProduct(null);
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Failed to save product");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setForm(product);
    setImagePreview(product.imageUrl || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/${id}`
      );
      fetchProducts();
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setForm({ name: "", description: "", price: "" });
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* 🌟 Go to Home Button */}
      <div className="flex justify-end items-center bg-white shadow-md p-4 sticky top-0 z-50">
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75M4.5 10.5v9A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5v-9M9 21V12h6v9"
            />
          </svg>
          Go to Home
        </a>
      </div>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Product Management</h1>
        <p className="text-slate-500 mt-1">Add, view, and update your products.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add / Edit Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {editingProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Price (₹)"
              value={form.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded" />
            )}
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
              {editingProduct ? "Update Product" : "Add Product"}
            </button>
            {editingProduct && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="w-full bg-gray-300 text-gray-800 py-2 rounded"
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        {/* Product List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Product List ({products?.length || 0})
          </h2>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-20 h-20 object-cover rounded"
                      onError={(e) => (e.target.src = "/placeholder.png")}
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      <p className="text-gray-600 text-sm">{p.description}</p>
                      <p className="font-bold text-indigo-600 mt-1">₹{p.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(p)}
                      className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                    >
                      <EditIcon /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                    >
                      <TrashIcon /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-6">
                No products available. Add one above!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Services View ---
const ServicesView = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
    <p className="text-gray-500">Service management will be added soon.</p>
  </div>
);

// --- Testimonials View ---
const TestimonialsView = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
    <p className="text-gray-500">Testimonial management will be added soon.</p>
  </div>
);

// --- Main Admin Dashboard ---
export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("products");

  const renderView = () => {
    switch (activeView) {
      case "products":
        return <ProductsView />;
      case "services":
        return <ServicesView />;
      case "testimonials":
        return <TestimonialsView />;
      default:
        return <ProductsView />;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      {/* ✅ Navbar at top */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 text-white p-4 flex flex-col">
          <div className="text-center mb-10 mt-4">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-sm text-slate-400">Your Control Center</p>
          </div>
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => setActiveView("products")}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                activeView === "products"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-slate-700"
              }`}
            >
              <BoxIcon /> Products
            </button>
            <button
              onClick={() => setActiveView("services")}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                activeView === "services"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-slate-700"
              }`}
            >
              <WrenchIcon /> Services
            </button>
            <button
              onClick={() => setActiveView("testimonials")}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                activeView === "testimonials"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-slate-700"
              }`}
            >
              <QuoteIcon /> Testimonials
            </button>
          </nav>
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-6 overflow-y-auto">{renderView()}</main>
      </div>
    </div>
  );
}
