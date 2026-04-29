export const clientData = {
  currency: "Rs.",
  restaurantInfo: {
    name: "FIGARO",
    tagline: "Delicious Food, Fast Service",
    logo: "/logo.png", // Leave empty to use text fallback
    phone: "0768638725",
    whatsapp: "+94768638725", // Number for orders
    address: "123 Culinary Ave, Food District",
    openingHours: "Mon-Sun: 10:00 AM - 11:00 PM",
    serviceCharge: 5, // 10% service charge
    mapEmbedUrl: "https://www.google.com/maps?q=-37.8172,144.9537&z=15&output=embed",
  },
  
  features: {
    showGallery: true,
    showOffers: false,
    enableWhatsappOrder: true,
    showItemImages: true,
    showSocialMedia: true,
    showMap: true,
  },

  socialMedia: {
  facebook: {
    enabled: true,
    url: "https://facebook.com/yourpage"
  },
  instagram: {
    enabled: true,
    url: "https://instagram.com/yourpage"
  },
  tiktok: {
    enabled: true, // ❌ hidden
    url: "https://tiktok.com/yourpage"
  }
},

  offers: [
    {
      id: "o1",
      title: "Weekend Special",
      description: "2 Burgers + 2 Drinks for $25",
      image: "https://images.unsplash.com/photo-1594212691515-db148564619a?w=800&q=80",
    },
    {
      id: "o2",
      title: "Happy Hour",
      description: "50% off on all Drinks from 4 PM - 6 PM",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
  ],

  categories: [
    {
      id: "burgers",
      name: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    },
    {
      id: "rice",
      name: "Rice & Mains",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    },
    {
      id: "drinks",
      name: "Drinks",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
    },
    {
      id: "desserts",
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    }
  ],

  items: [
    // Burgers
    {
      id: "b1",
      categoryId: "burgers",
      name: "Classic Cheeseburger",
      description: "Angus beef, cheddar, lettuce, tomato, house sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      featured: true,
      pricing: {
        type: "single", // "single" or "sizes"
        price: 12.00
      }
    },
    {
      id: "b2",
      categoryId: "burgers",
      name: "Spicy Chicken Burger",
      description: "Crispy fried chicken, spicy mayo, pickles.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&q=80",
      pricing: {
        type: "sizes",
        sizes: [
          { name: "Small", price: 10.00 },
          { name: "Medium", price: 15.00 },
          { name: "Large", price: 20.00 }
        ]
      }
    },
    {
      id: "b2",
      categoryId: "burgers",
      name: "Spicy Chicken Burger",
      description: "Crispy fried chicken, spicy mayo, pickles.",
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&q=80",
      pricing: {
        type: "sizes",
        sizes: [
          { name: "Small", price: 10.00 },
          { name: "Medium", price: 15.00 },
          { name: "Large", price: 20.00 }
        ]
      }
    },
    
    // Rice & Mains
    {
      id: "r1",
      categoryId: "rice",
      name: "Seafood Fried Rice",
      description: "Wok-tossed rice with fresh prawns, calamari, and egg.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
      featured: true,
      pricing: {
        type: "sizes",
        sizes: [
          { name: "Regular", price: 15.00 },
          { name: "Large", price: 20.00 }
        ]
      }
    },
    {
      id: "r2",
      categoryId: "rice",
      name: "Vegetable Curry Bowl",
      description: "Seasonal veggies in a rich coconut curry over jasmine rice.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      pricing: {
        type: "single",
        price: 13.50
      }
    },

    // Drinks
    {
      id: "d1",
      categoryId: "drinks",
      name: "Mojito Mocktail",
      description: "Refreshing mint and lime mocktail.",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
      pricing: {
        type: "single",
        price: 6.00
      }
    },
    {
      id: "d2",
      categoryId: "drinks",
      name: "Iced Caramel Latte",
      description: "Espresso, milk, and sweet caramel syrup over ice.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
      pricing: {
        type: "single",
        price: 5.50
      }
    },

    // Desserts
    {
      id: "ds1",
      categoryId: "desserts",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center.",
      image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      pricing: {
        type: "single",
        price: 8.00
      }
    }
  ]
};
