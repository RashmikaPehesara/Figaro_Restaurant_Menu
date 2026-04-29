"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { CheckCircle2 } from "lucide-react";

export function Toast() {
  const { toast } = useCart();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] pointer-events-none w-full max-w-sm px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="bg-card border border-border shadow-2xl rounded-2xl p-4 flex items-center justify-center gap-3"
          >
            <CheckCircle2 className="text-green-500 w-6 h-6" />
            <span className="font-bold text-lg">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
