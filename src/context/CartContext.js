"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing cart from localStorage", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const addToCart = (item, size, quantity) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (x) => x.id === item.id && x.size?.name === size?.name
      );
      if (existing) {
        return prev.map((x) =>
          x.id === item.id && x.size?.name === size?.name
            ? { ...x, quantity: x.quantity + quantity }
            : x
        );
      }
      return [...prev, { ...item, size, quantity }];
    });
    
    // Show Toast Notification
    setToast("Added to Cart");
    setTimeout(() => setToast(null), 2000);
  };

  const removeFromCart = (id, sizeName) => {
    setCartItems((prev) =>
      prev.filter((x) => !(x.id === id && x.size?.name === sizeName))
    );
  };
  
  const updateQuantity = (id, sizeName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, sizeName);
      return;
    }
    setCartItems((prev) =>
      prev.map((x) =>
        x.id === id && x.size?.name === sizeName
          ? { ...x, quantity }
          : x
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.size?.price || item.pricing.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        toast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
