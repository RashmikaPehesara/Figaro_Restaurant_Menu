const fs = require('fs');

const generateData = () => {
  const catNames = [
    { id: "burger", name: "Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=60" },
    { id: "rice", name: "Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=60" },
    { id: "kottu", name: "Kottu", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=60" },
    { id: "drinks", name: "Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=60" },
    { id: "desserts", name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=60" },
    { id: "soup", name: "Soup", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=60" },
    { id: "noodles", name: "Noodles", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=60" },
    { id: "salads", name: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=60" },
    { id: "pizza", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=60" },
    { id: "pasta", name: "Pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=60" }
  ];

  const items = [];
  catNames.forEach(cat => {
    for (let i = 1; i <= 20; i++) {
      items.push({
        id: `${cat.id}${i}`,
        categoryId: cat.id,
        name: `${cat.name} Variation ${i}`,
        description: `Delicious and fresh ${cat.name.toLowerCase()} prepared daily.`,
        image: cat.image,
        pricing: {
          type: "single",
          price: Math.floor(Math.random() * 25 + 5) * 100 // 500 to 3000
        }
      });
    }
  });

  const content = `export const clientData = {
  currency: "Rs.",
  restaurantInfo: {
    name: "FIGARO",
    tagline: "Delicious Food, Fast Service",
    logo: "/logo.png",
    phone: "0768638725",
    whatsapp: "+94768638725",
    address: "123 Culinary Ave, Food District",
    openingHours: "Mon-Sun: 10:00 AM - 11:00 PM",
    serviceCharge: 5,
    mapEmbedUrl: "https://www.google.com/maps?q=-37.8172,144.9537&z=15&output=embed",
  },
  
  features: {
    showGallery: true,
    showOffers: false,
    enableWhatsappOrder: true,
    showItemImages: true,
    showSocialMedia: true,
    showMap: true,
    showDescription: true,
  },

  socialMedia: {
    facebook: { enabled: true, url: "https://facebook.com/yourpage" },
    instagram: { enabled: true, url: "https://instagram.com/yourpage" },
    tiktok: { enabled: true, url: "https://tiktok.com/yourpage" }
  },

  offers: [
    {
      id: "o1",
      title: "Weekend Special",
      description: "2 Burgers + 2 Drinks for $25",
      image: "https://images.unsplash.com/photo-1594212691515-db148564619a?w=400&q=60",
    },
    {
      id: "o2",
      title: "Happy Hour",
      description: "50% off on all Drinks from 4 PM - 6 PM",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=60",
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&q=60",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=60",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=60",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=60"
  ],

  categories: ${JSON.stringify(catNames, null, 4)},

  items: ${JSON.stringify(items, null, 4)}
};
`;

  fs.writeFileSync('src/data/clientData.js', content, 'utf8');
};

generateData();
