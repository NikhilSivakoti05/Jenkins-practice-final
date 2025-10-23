// // import { Toaster } from "@/components/ui/toaster";
// // import { Toaster as Sonner } from "@/components/ui/sonner";
// // import { TooltipProvider } from "@/components/ui/tooltip";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Index from "./pages/Index";
// // import NotFound from "./pages/NotFound";
// // import ProductList from "./components/ProductList";
// // import ProductDetails from "./pages/ProductDetails";
// // import AllProductsPage from "./pages/AllProductsPage";
// // import AdminDashboard from "./components/AdminDashboard";

// // const queryClient = new QueryClient();

// // const App = () => (
// //   <QueryClientProvider client={queryClient}>
// //     <TooltipProvider>
// //       <Toaster />
// //       <Sonner />
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Index />} />
// //            <Route path="/product/:id" element={<ProductDetails />} />
// //         <Route path="/all-products" element={<AllProductsPage />} />
// //         <Route path="/admindashboard" element={<AdminDashboard />} />
          
// //           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
// //           <Route path="*" element={<NotFound />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </TooltipProvider>
// //   </QueryClientProvider>
// // );

// // export default App;


// Navbar added here
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Navbar from "@/components/Navbar";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ProductDetails from "./pages/ProductDetails";
// import AllProductsPage from "./pages/AllProductsPage";
// import AdminDashboard from "./components/AdminDashboard";

// const queryClient = new QueryClient();

// // ✅ Layout Wrapper to conditionally show Navbar
// function Layout() {
//   const location = useLocation();

//   // Define routes where Navbar should NOT appear
//   const hideNavbarRoutes = ["/admindashboard"];

//   return (
//     <>
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/all-products" element={<AllProductsPage />} />
//         <Route path="/admindashboard" element={<AdminDashboard />} />
//         {/* Catch-all 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   </QueryClientProvider>
// );

// export default App;
// react-router issues sloved here
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import AllProductsPage from "./pages/AllProductsPage";
import AdminDashboard from "./components/AdminDashboard";

const queryClient = new QueryClient();

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/admindashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* ✅ Enable future flags here */}
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Layout />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

