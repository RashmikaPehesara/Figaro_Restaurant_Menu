"use client";

import { clientData } from "@/data/clientData";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { ImageModal } from "@/components/ImageModal";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryItemsPage() {
  const params = useParams();
  const categoryId = params.category;
  const category = clientData.categories.find(c => c.id === categoryId);
  const items = clientData.items.filter(i => i.categoryId === categoryId);
  
  if (!category) {
    return notFound();
  }

  return <CategoryItemsView category={category} items={items} />
}

function CategoryItemsView({ category, items }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <main className="container mx-auto px-4 py-8 pb-24">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md py-4 mb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight capitalize bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-500">
            {category.name}
          </h1>
        </div>
      </div>

      {items.length === 0 ? (
         <div className="text-center py-20 text-muted-foreground font-medium">No items found in this category.</div>
      ) : (
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {items.map((item) => (
            <ItemCard  
              key={item.id} 
              item={item} 
              onImageClick={() => setSelectedImage({ src: item.image, alt: item.name })}
              addToCart={addToCart}
            />
          ))}
        </motion.div>
      )}

      <ImageModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage?.src} 
        alt={selectedImage?.alt} 
      />


      <div className="text-center text-[13px] text-white/40 mt-6 mb-0">


      
        <strong>© 2026 FIGARO. All rights reserved.</strong>
        <br />
        Developed by <a href="https://wa.me/94768638725" target="_blank" rel="noopener noreferrer" className="hover:text-white">Pixora Studio</a>
      </div>
    </main>
  );
}

function ItemCard({ item, onImageClick, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(item.pricing.type === "multi" ? item.pricing.options[0] : null);
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAdd = () => {
    setIsAdding(true);
    addToCart(item, selectedSize ? { name: selectedSize.label, price: selectedSize.price } : null, 1);
    setTimeout(() => setIsAdding(false), 300);
  };

  const currentPrice = item.pricing.type === "single" ? item.pricing.price : selectedSize.price;

  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} 
      className="flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-primary/50 transition-all group shrink-0 h-full"
    >
      {clientData.features.showItemImages && item.image && (
        <div 
          className="relative aspect-square w-full cursor-pointer overflow-hidden bg-muted"
          onClick={onImageClick}
        >
          <Image 
            src={item.image} 
            alt={item.name} 
            fill
            loading="lazy"
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      <div className="p-4 md:p-5 flex flex-col flex-1 justify-between">
        <h3 className="font-extrabold text-sm md:text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
        {clientData.features.showDescription && item.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {item.description}
          </p>
        )}
        
        {item.pricing.type === "multi" && (
          <div className="flex flex-wrap gap-2.5 mt-2 mb-4">
            {item.pricing.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedSize(opt)}
                className={`px-3 py-1.5 text-[13px] font-semibold rounded-full transition-all active:scale-95 ${selectedSize?.label === opt.label ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30" : "bg-white/10 text-muted-foreground hover:bg-border"}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-primary font-semibold text-lg md:text-xl tracking-wide font-sans tabular-nums">{clientData.currency} {Number(currentPrice).toLocaleString("en-LK", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          <motion.button 
            onClick={handleAdd}
            whileTap={{ scale: 0.8 }}
            animate={isAdding ? { scale: [1, 1.2, 1], backgroundColor: ["var(--color-muted)", "var(--color-primary)", "var(--color-muted)"], color: ["var(--color-foreground)", "var(--color-primary-foreground)", "var(--color-foreground)"] } : {}}
            transition={{ duration: 0.3 }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${isAdding ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-primary hover:text-primary-foreground text-foreground"}`}
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
