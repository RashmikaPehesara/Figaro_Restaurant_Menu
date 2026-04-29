"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function GalleryModal({ images, initialIndex, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-pointer"
          />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-[80] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all active:scale-95"
          >
            <X size={24} />
          </button>

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-[75] pointer-events-none">
            <button 
              onClick={handlePrev}
              className="pointer-events-auto p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={handleNext}
              className="pointer-events-auto p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50 || velocity.x < -500) {
                handleNext();
              } else if (swipe > 50 || velocity.x > 500) {
                handlePrev();
              }
            }}
            className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl z-10 select-none touch-none"
          >
            <Image 
              src={images[currentIndex]} 
              alt={`Gallery Image ${currentIndex + 1}`} 
              fill 
              sizes="100vw"
              className="object-contain"
              draggable="false"
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[80]">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white scale-125" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
