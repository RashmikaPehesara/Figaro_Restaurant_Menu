import { Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { CartSheet } from "@/components/CartSheet";
import { Toast } from "@/components/Toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium QR Menu",
  description: "Fast, modern restaurant QR menu.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased selection:bg-primary/30`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-0 font-sans">
        <CartProvider>
          {children}
          <FloatingCartButton />
          <CartSheet />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
