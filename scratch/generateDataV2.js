const fs = require('fs');

const generateData = () => {
  const categories = [
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

  const multiCats = ["rice", "kottu", "pizza", "pasta", "noodles", "burger"];

  const nameGenerators = {
    burger: (i) => ["Chicken Burger", "Beef Burger", "Zinger Burger", "Double Cheese Burger", "Crispy Chicken Burger", "Mushroom Swiss Burger", "BBQ Bacon Burger", "Spicy Fish Burger", "Veggie Patty Burger", "Tower Burger"][i % 10] + ` ${i > 9 ? 'Deluxe' : 'Classic'}`,
    rice: (i) => ["Chicken Fried Rice", "Egg Fried Rice", "Seafood Rice", "Vegetable Fried Rice", "Mixed Fried Rice", "Nasi Goreng", "Garlic Butter Rice", "Schezwan Rice", "Mutton Biryani", "Chicken Biryani"][i % 10] + ` ${i > 9 ? 'Special' : ''}`,
    kottu: (i) => ["Chicken Kottu", "Cheese Kottu", "Mix Kottu", "Seafood Kottu", "Egg Kottu", "Beef Kottu", "Mutton Kottu", "Vegetable Kottu", "Roast Chicken Kottu", "Dolphin Kottu"][i % 10] + ` ${i > 9 ? 'Spicy' : ''}`,
    drinks: (i) => ["Coca Cola", "Pepsi", "Sprite", "Fanta", "Mango Juice", "Apple Juice", "Iced Tea", "Iced Coffee", "Milkshake", "Lemonade"][i % 10] + ` ${i > 9 ? 'Large' : ''}`,
    desserts: (i) => ["Chocolate Cake", "Vanilla Ice Cream", "Brownie", "Cheesecake", "Fruit Salad", "Watalappan", "Caramel Pudding", "Tiramisu", "Panna Cotta", "Sundae"][i % 10] + ` ${i > 9 ? 'Extra' : ''}`,
    soup: (i) => ["Chicken Soup", "Tomato Soup", "Mushroom Soup", "Sweet Corn Soup", "Hot and Sour Soup", "Seafood Soup", "Vegetable Soup", "Mutton Soup", "Noodle Soup", "Pumpkin Soup"][i % 10] + ` ${i > 9 ? 'Thick' : ''}`,
    noodles: (i) => ["Chicken Noodles", "Egg Noodles", "Seafood Noodles", "Veggie Noodles", "Mixed Noodles", "Hakka Noodles", "Singapore Noodles", "Schezwan Noodles", "Chow Mein", "Pad Thai"][i % 10] + ` ${i > 9 ? 'Special' : ''}`,
    salads: (i) => ["Greek Salad", "Caesar Salad", "Chicken Salad", "Fruit Salad", "Green Salad", "Russian Salad", "Tuna Salad", "Pasta Salad", "Macaroni Salad", "Potato Salad"][i % 10] + ` ${i > 9 ? 'Fresh' : ''}`,
    pizza: (i) => ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza", "Veggie Pizza", "Hawaiian Pizza", "Seafood Pizza", "Meat Lovers Pizza", "Cheese Pizza", "Spicy Chicken Pizza", "Mushroom Pizza"][i % 10] + ` ${i > 9 ? 'Supreme' : ''}`,
    pasta: (i) => ["Chicken Pasta", "Cheese Pasta", "Seafood Pasta", "Veggie Pasta", "Spicy Pasta", "Carbonara", "Bolognese", "Mac and Cheese", "Penne Arrabbiata", "Fettuccine Alfredo"][i % 10] + ` ${i > 9 ? 'Delight' : ''}`
  };

  const imageIds = [
    "1550547660-d9450f859349", "1568901346375-23c9450c58cd", "1625813506062-0aeb1d7a094b", "1603133872878-684f208fb84b", "1546069901-ba9599a7e63c",
    "1512058564366-18510be2db19", "1513558161293-cdaf765ed2fd", "1551538827-9c037cb4f32a", "1497935586351-b67a49e012bf", "1551024601-bec78aea704b",
    "1511911063855-2bf39afa5b2e", "1547592180-85f173990554", "1569718212165-3a8278d5f624", "1512621776951-a57141f2eefd", "1513104890138-7c749659a591",
    "1473093295043-cdd812d0e601", "1594212691515-db148564619a", "1550966871-3ed3cdb5ed0c", "1552566626-52f8b828add9", "1517248135467-4c7edcad34c4",
    "1559339352-11d035aa65de", "1600891964092-4b11561ce198", "1565299524-69c2ce81cac4", "1540189549336-e6e99c3679fe", "1565958011703-44f9829ba187"
  ];

  let imgIndex = 0;

  const items = [];
  categories.forEach(cat => {
    for (let i = 1; i <= 20; i++) {
      let pricing = {};
      const basePrice = Math.floor(Math.random() * 15 + 5) * 100; // 500 to 2000

      if (multiCats.includes(cat.id)) {
        pricing = {
          type: "multi",
          options: [
            { label: "Small", price: basePrice },
            { label: "Medium", price: basePrice + 400 },
            { label: "Large", price: basePrice + 800 }
          ]
        };
      } else {
        pricing = {
          type: "single",
          price: basePrice
        };
      }

      const currentImgId = imageIds[imgIndex % imageIds.length];
      imgIndex++;

      items.push({
        id: `${cat.id}${i}`,
        categoryId: cat.id,
        name: nameGenerators[cat.id](i - 1).trim(),
        description: `Deliciously prepared ${cat.name.toLowerCase()} with fresh ingredients.`,
        image: `https://images.unsplash.com/photo-${currentImgId}?w=400&q=60`,
        featured: i === 1,
        pricing
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
    showPopularPicks: true,
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

  categories: ${JSON.stringify(categories, null, 4)},

  items: ${JSON.stringify(items, null, 4)}
};
`;

  fs.writeFileSync('src/data/clientData.js', content, 'utf8');
};

generateData();
