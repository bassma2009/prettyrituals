import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Marketplace() {
  const sections = [
    {
      title: "Middle Eastern Rituals",
      backgroundColor: "#CDAA6B",
      accentColors: {
        primary: "#05936A",
        secondary: "#93052D"
      },
      products: [
        {
          name: "JOON HAIRCARE Saffron Hair Elixir",
          description: "This amazing product was created by siblings Shiva and Kayvon Tavakoli, inspired by their Persian roots and the rich traditions of their heritage. Joon Hair Care brings a unique touch with its infusion of saffron, a treasured Persian ingredient. It's a multitasker that adds shine, detangles, defrizzer, moisturizes, and even acts as a heat protectant which is perfect for dry hair (Aziz, 2024).",
          price: 559.67,
          image: 'https://assets.teenvogue.com/photos/6671e9e746aa1c6f7e661f75/3:4/w_640,c_limit/joon%20haircare.jpg',
          link: "https://www.amazon.com/Joon-Saffron-Hair-Elixir-Pistachio/dp/B07BLKKPXP"
        },
        {
          name: "Zamzam and Madina Rose Face Toner",
          description: "This incredible toner by L'araboutique is designed to cleanse pores, calm inflammation, and control oil production, all while being gentle on your skin. Made with mineral-rich Zamzam water and fragrant Madina rose petals, it's the perfect blend of tradition and skincare science. It balances your skin's pH levels, leaving you with a healthy, radiant glow. Suitable for all skin types, it's a must-have for your daily routine (L'Araboutique, 2025).",
          price: 340,
          image: 'https://l-araboutique.com/cdn/shop/files/rosetoner_1_-Photoroom.jpg?v=1732561681&width=1646',
          link: "https://l-araboutique.com/products/zamzam-and-madina-rose-face-toner"
        }
      ]
    },
    {
      title: "African Beauty Secrets",
      backgroundColor: "#F38218",
      accentColors: {
        primary: "#561217",
        secondary: "#000000"
      },
      products: [
        {
          name: "African Black Soap",
          description: "African black soap, a centuries-old tradition from West Africa, is crafted from locally harvested ingredients like cocoa pods. It's a natural cleanser that deeply cleans without stripping your skin's natural oils. Known for its antifungal, anti-inflammatory, and antibacterial properties, it's a powerhouse of benefits. Perfect for all skin types, this soap helps reduce blemishes, leaving your skin refreshed and radiant (Africana, 2024).",
          price: 402.90,
          image: "https://africanaskincare.com/wp-content/uploads/2023/12/jabon-negro-africano-1.png",
          link: "https://africanaskincare.com/shop/african-black-soap/"
        },
        {
          name: "Africana Pocket Sized Shea Butter",
          description: "This pocket-sized shea butter is your ultimate on-the-go moisturizer! Perfect for tackling dry skin, cracked heels and elbows, or even sunburns, it's a versatile must-have for face, body, and hair. Rich in hydration, it protects against environmental damage, softens skin, and restores elasticity. It helps prevent and heal stretch marks while offering anti-inflammatory benefits. Compact, powerful, and perfect for your busy lifestyle (Africana, 2024).",
          price: 172.82,
          image: "https://cdn-ikpjnen.nitrocdn.com/woIDYgZtlcdHTcXzsDPXyBpuwtyXNbBw/assets/images/optimized/rev-12404de/africanaskincare.com/wp-content/uploads/2023/11/shea-butter-pocket-version-no-background.png",
          link: "https://africanaskincare.com/shop/shea-butter-pocket/"
        }
      ]
    },
    {
      title: "South Asian Rituals",
      backgroundColor: "#fc8332",
      accentColors: {
        primary: "#911C8A",
        secondary: "#911C8A"
      },
      products: [
        {
          name: "FABLE & MANE HoliRoots™ Pre-Wash Strengthening Treatment Hair Oil",
          description: "The HoliRoots™ Pre-Wash Strengthening Treatment Hair Oil is a lightweight blend infused with ashwagandha, Dashmool, and castor oil to nourish the scalp, strengthen roots, and repair damaged hair. Suitable for all hair types, it features a luxurious spicy floral scent inspired by Madurai, India, offering a revitalizing and indulgent hair care ritual.(Fable & Mane, 2024).",
          price: 391.56,
          image: "https://cdn1.feelunique.com/img/products/167090/fable_mane_holiroots_pre_wash_strengthening_treatment_hair_oil_55ml-1730189771.jpg",
          link: "https://www.sephora.co.uk/p/Fable-and-Mane-HoliRoots-Hair-Oil-55ml"
        },
        {
          name: "Inde Wild's 15% Vitamin C",
          description: "This powerful serum combines 12 high-performing ingredients in one bottle, including 15% gold-stabilized Vitamin C, Hyaluronic Acid, Niacinamide, and Ayurvedic treasures like Turmeric and Ashwagandha. Designed to brighten and even skin tone, it targets discoloration, post-acne marks, scars, and dark spots, delivering visible results in just 14 days (Inde Wild, 2024).",
          price: 312,
          image: "https://global.indewild.com/cdn/shop/files/web_product_AM_01_6ef1244c-9128-4231-9f2b-37f07c073ce3.jpg?v=1731323413&width=3000",
          link: "https://global.indewild.com/products/15-vitamin-c-face-serum"
        }
      ]
    },
    {
      title: "East Asian Rituals",
      backgroundColor: "#92B3A5",
      accentColors: {
        primary: "#D2357D",
        secondary: "#7C1823"
      },
      products: [
        {
          name: "Beauty of Joseon Ginseng Essence",
          description: "The Beauty of Joseon Ginseng Essence Water is an all-in-one skincare must-have, working as a toner, moisturizer, and essence. With 80% ginseng water, it deeply hydrates and nourishes the skin, keeping it moisturized and glowing for hours. Niacinamide (2%) helps even skin tone, tighten pores, and strengthen the skin barrier, while BHA (0.5%) gently exfoliates for a smooth, radiant finish. This product is the perfect mix of traditional Korean skincare and modern beauty, ideal for anyone looking to elevate their routine (Beauty of Joseon, 2024).",
          price: 195.29,
          image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693333690-51sy56bO7lL.jpg?crop=0.667xw:1xh;center,top&resize=980:*",
          link: "https://www.amazon.com/dp/B08RLZ28QK"
        },
        {
          name: "ARI ANWA Gua Sha Jade",
          description: "ARI ANWA Gua Sha Tools are crafted from natural gemstones, specifically Aventurine, known for its healing properties. This traditional Chinese massage technique helps tighten skin, relax facial muscles, and improve blood circulation. The tools reduce fine lines, swelling, and redness, while promoting a healthier complexion and lymphatic drainage. Aventurine's calming and decongesting effects are perfect for soothing skin irritations and blemishes, leaving you with a balanced, serene glow.",
          price: 172.06,
          image: "https://i0.wp.com/arianwa.com/wp-content/uploads/2018/12/ARI-ANWA-Gua-Sha-Test.jpg?resize=2048%2C2048&ssl=1",
          link: "https://arianwa.com/en/shop/gua-sha-jade-facial-lifting-tool/"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Curated Beauty Shop
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Explore the best of global beauty traditions. Click to shop directly from trusted sellers.
          </p>
        </div>
      </div>

      {/* Product Sections */}
      {sections.map((section) => (
        <div 
          key={section.title}
          style={{ backgroundColor: section.backgroundColor }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 
              className="text-3xl font-serif mb-12 text-center"
              style={{ color: section.accentColors.primary }}
            >
              {section.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.products.map((product) => (
                <div 
                  key={product.name}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div 
                    className="h-80 bg-contain bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${product.image})`,
                      backgroundColor: '#f8f8f8'
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2" style={{ color: section.accentColors.secondary }}>
                      {product.name}
                    </h3>
                    <p className="text-[#4A4A4A] mb-4 text-sm">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-[#4A4A4A]">
                        {product.price.toFixed(2)} SEK
                      </span>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full text-white transition-colors duration-200"
                        style={{ backgroundColor: section.accentColors.primary }}
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}