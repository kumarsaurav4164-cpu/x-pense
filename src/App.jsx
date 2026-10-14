// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import ProductCatalog from './components/ProductCatalog';
// import RecipeSection from './components/RecipeSection';
// import RecipeModal from './components/RecipeModal';
// import CreamCalculator from './components/CreamCalculator';
// import QualityComparison from './components/QualityComparison';
// import ProductQuickViewModal from './components/ProductQuickViewModal';
// import CartDrawer from './components/CartDrawer';
// import WishlistDrawer from './components/WishlistDrawer';
// import CheckoutModal from './components/CheckoutModal';
// import PincodeCheckerModal from './components/PincodeCheckerModal';
// import ReviewsSection from './components/ReviewsSection';
// import Footer from './components/Footer';
// import { PRODUCTS } from './data/products';
// import { CheckCircle2 } from 'lucide-react';

// export default function App() {
//   // State initialization with localStorage fallback & error handling
//   const [cart, setCart] = useState(() => {
//     try {
//       const saved = localStorage.getItem('amul_cart');
//       if (saved) {
//         const parsed = JSON.parse(saved);
//         if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
//           return parsed;
//         }
//       }
//       return { 'amul-fresh-cream-250': 2, 'amul-rajbhog-icecream': 1 };
//     } catch {
//       return { 'amul-fresh-cream-250': 2 };
//     }
//   });

//   const [wishlist, setWishlist] = useState(() => {
//     try {
//       const saved = localStorage.getItem('amul_wishlist');
//       if (saved) {
//         const parsed = JSON.parse(saved);
//         if (Array.isArray(parsed)) {
//           return parsed;
//         }
//       }
//       return ['amul-fresh-cream-250'];
//     } catch {
//       return [];
//     }
//   });

//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
//   const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
//   const [pincodeModalOpen, setPincodeModalOpen] = useState(false);
//   const [quickViewProduct, setQuickViewProduct] = useState(null);
//   const [activeRecipe, setActiveRecipe] = useState(null);
//   const [checkoutData, setCheckoutData] = useState(null);
//   const [toast, setToast] = useState(null);

//   // Sync with localStorage
//   useEffect(() => {
//     try {
//       localStorage.setItem('amul_cart', JSON.stringify(cart));
//     } catch (e) {
//       console.error('Failed to save cart to localStorage', e);
//     }
//   }, [cart]);

//   useEffect(() => {
//     try {
//       localStorage.setItem('amul_wishlist', JSON.stringify(wishlist));
//     } catch (e) {
//       console.error('Failed to save wishlist to localStorage', e);
//     }
//   }, [wishlist]);

//   // Toast notification helper
//   const showToast = (message) => {
//     setToast(message);
//     setTimeout(() => {
//       setToast(null);
//     }, 3000);
//   };

//   // Cart operations
//   const handleAddToCart = (productId, count = 1) => {
//     const qty = Math.max(1, count);
//     setCart((prev) => ({
//       ...prev,
//       [productId]: (prev[productId] || 0) + qty
//     }));
//     const product = PRODUCTS.find((p) => p.id === productId);
//     const label = product ? product.name : 'Item';
//     showToast(qty > 1 ? `Added ${qty}x ${label} to your bag!` : `Added ${label} to your bag!`);
//   };

//   const handleUpdateQuantity = (productId, newQuantity) => {
//     setCart((prev) => {
//       const copy = { ...prev };
//       if (newQuantity <= 0) {
//         delete copy[productId];
//       } else {
//         copy[productId] = newQuantity;
//       }
//       return copy;
//     });
//   };

//   const handleRemoveFromCart = (productId) => {
//     setCart((prev) => {
//       const copy = { ...prev };
//       delete copy[productId];
//       return copy;
//     });
//     showToast('Item removed from bag');
//   };

//   const handleClearCart = () => {
//     setCart({});
//   };

//   // Wishlist operations
//   const handleToggleWishlist = (productId) => {
//     setWishlist((prev) => {
//       const exists = prev.includes(productId);
//       if (exists) {
//         showToast('Removed from saved wishlist');
//         return prev.filter((id) => id !== productId);
//       } else {
//         showToast('Saved to your wishlist ❤️');
//         return [...prev, productId];
//       }
//     });
//   };

//   const cartTotalItems = Object.values(cart).reduce((a, b) => {
//     const num = typeof b === 'number' ? b : parseInt(b, 10);
//     return a + (isNaN(num) ? 0 : num);
//   }, 0);

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAF7F2] font-sans antialiased text-slate-800 selection:bg-amber-200 selection:text-amber-900">

//       {/* Toast Alert Popup */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold border border-slate-700 animate-in slide-in-from-bottom-5 duration-300">
//           <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
//           <span>{toast}</span>
//         </div>
//       )}

//       {/* Main Navigation */}
//       <Navbar
//         cartCount={cartTotalItems}
//         wishlistCount={wishlist.length}
//         onOpenCart={() => setCartDrawerOpen(true)}
//         onOpenWishlist={() => setWishlistDrawerOpen(true)}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         onOpenPincodeModal={() => setPincodeModalOpen(true)}
//       />

//       {/* Main Content Sections */}
//       <main className="flex-1">
//         <Hero
//           onAddToCart={handleAddToCart}
//           onQuickView={(prod) => setQuickViewProduct(prod)}
//         />

//         <ProductCatalog
//           products={PRODUCTS}
//           wishlist={wishlist}
//           onToggleWishlist={handleToggleWishlist}
//           onAddToCart={handleAddToCart}
//           onQuickView={(prod) => setQuickViewProduct(prod)}
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//         />

//         <RecipeSection
//           onOpenRecipeModal={(recipe) => setActiveRecipe(recipe)}
//           onAddToCart={handleAddToCart}
//         />

//         <CreamCalculator
//           onAddToCart={handleAddToCart}
//         />

//         <QualityComparison />

//         <ReviewsSection />
//       </main>

//       {/* Modals & Drawers */}
//       <CartDrawer
//         isOpen={cartDrawerOpen}
//         onClose={() => setCartDrawerOpen(false)}
//         cart={cart}
//         products={PRODUCTS}
//         onUpdateQuantity={handleUpdateQuantity}
//         onRemoveItem={handleRemoveFromCart}
//         onProceedToCheckout={(orderInfo) => setCheckoutData(orderInfo)}
//       />

//       <WishlistDrawer
//         isOpen={wishlistDrawerOpen}
//         onClose={() => setWishlistDrawerOpen(false)}
//         wishlist={wishlist}
//         products={PRODUCTS}
//         onAddToCart={handleAddToCart}
//         onRemoveFromWishlist={handleToggleWishlist}
//       />

//       <ProductQuickViewModal
//         product={quickViewProduct}
//         onClose={() => setQuickViewProduct(null)}
//         isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
//         onToggleWishlist={handleToggleWishlist}
//         onAddToCart={handleAddToCart}
//       />

//       <RecipeModal
//         recipe={activeRecipe}
//         onClose={() => setActiveRecipe(null)}
//         onAddToCart={handleAddToCart}
//       />

//       <CheckoutModal
//         orderDetails={checkoutData}
//         onClose={() => setCheckoutData(null)}
//         onClearCart={handleClearCart}
//       />

//       <PincodeCheckerModal
//         isOpen={pincodeModalOpen}
//         onClose={() => setPincodeModalOpen(false)}
//       />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }



import React from 'react'
import Header from './components/Header'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact '

const App = () => {
  return (
    <div>
      <h1>hello world!</h1>

      <BrowserRouter>

        <Header />
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/contact" element={<Contact />}/>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

      <Footer />
    </BrowserRouter>
      
    </div >
  )
}

export default App;
