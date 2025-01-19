{/* Previous imports and component declaration remain the same */}
import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function Rituals() {
  const [expandedRitual, setExpandedRitual] = useState<string | null>(null);

  const regions = [
    {
      name: 'Middle East',
      description: 'In the ancient Arabo-Islamic empire, where beauty was a reflection of social status, wealth, and a theme celebrated in the rich tradition of Arabic poetry, women embraced intricate beauty rituals to enhance their appearance. These included adorning themselves with elaborate henna patterns (naqsh), accentuating their eyes with kohl, adorning their skin with fragrant perfumes, and wearing exquisite jewelry and traditional Arab attire. Such practices were often detailed in written texts, passed down through families, and prescribed to women as part of their daily lives, typically relying on natural and calming ingredients to craft these timeless expressions of beauty (Nehal, 2022).',
      backgroundColor: '#E6CBA8',
      accentColor: '#276955',
      headerColor: '#990000',
      bannerImage: 'https://images.pexels.com/photos/6965642/pexels-photo-6965642.jpeg',
      rituals: [
        {
          name: 'Henna',
          image: 'https://images.pexels.com/photos/12465309/pexels-photo-12465309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Henna has been used as a form of body decoration in the Middle East for over a thousand years, offering a temporary adornment for those who avoided permanent tattoos.',
          fullDescription: `Henna has been used as a form of body decoration in the Middle East for over a thousand years, offering a temporary adornment for those who avoided permanent tattoos. The henna paste, mixed to a semi-thick consistency, was applied using a cone or wand, left to dry for hours, and then peeled off to reveal a rich, darker color the following day. It became known as "The dye of Islam" and was used by Arab women on both their hair and bodies, they would use black henna for hair and red henna for hands (Nehal, 2022).

The ritual of applying henna held deep cultural significance, especially during religious holidays, festivals, and weddings. One particularly cherished tradition is the "Night of Henna," a celebration where the bride's female friends and relatives gather to adorn themselves with intricate henna designs. This joyful occasion includes dancing and celebrating together, marking a special moment in the lives of the women involved (Nehal, 2022).`
        },
        {
          name: 'Rose Water Skincare',
          image: 'https://images.pexels.com/photos/1517361/pexels-photo-1517361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Throughout history, roses have symbolized romance and beauty, but they have also played a pivotal role in natural skincare.',
          fullDescription: `Throughout history, roses have symbolized romance and beauty, but they have also played a pivotal role in natural skincare, one of the oldest beauty rituals. Renowned for their fragrance, elegance, and contribution to youthful, radiant skin, roses were a staple in the skincare routines of royalty, embodying luxury and sophistication (Chishti, 2024).

Female royals, like Cleopatra, the last active ruler of the Ptolemaic Kingdom of Egypt, were known for their captivating beauty and opulent skincare practices. Cleopatra, in particular, is said to have bathed in rose water or rose-infused oils to nourish and rejuvenate her skin, leaving a lasting impression of indulgence and allure (Chishti, 2024).

Roses are celebrated not only for their aesthetic and aromatic appeal but also for their remarkable skincare benefits. Packed with antioxidants, they protect the skin from environmental damage and oxidative stress. Their hydrating and anti-inflammatory properties soothe irritation, while their astringent qualities tighten pores, promoting a smooth, glowing complexion (Chishti, 2024).

Even today, rose-based skincare products continue to echo these ancient beauty rituals. From rosewater toners to rose-infused oils and body scrubs, these modern formulations harness the timeless benefits of roses, proving their enduring legacy in the world of skincare (Chishti, 2024).`
        }
      ]
    },
    {
      name: 'Africa',
      description: 'Many of today\'s beauty rituals trace their origins back millennia, embodying a rich history deeply rooted in Africa. African beauty\'s legacy stands out in the industry for its emphasis on versatile, natural ingredients sourced locally from the land. These ingredients often served dual purposes, benefiting both haircare and skincare while showcasing the resourcefulness of African traditions. With every element derived directly from nature, African beauty rituals reflect a profound connection between hair, skin, and makeup, highlighting the holistic approach that defines this cultural heritage (Adekola, 2024).',
      backgroundColor: '#561217',
      accentColor: '#F8B735',
      headerColor: '#2C6E63',
      bannerImage: 'https://images.pexels.com/photos/11535807/pexels-photo-11535807.jpeg',
      rituals: [
        {
          name: 'Shea Butter',
          image: 'https://images.pexels.com/photos/6187525/pexels-photo-6187525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Shea butter, a rich yellow paste derived from the nuts of the African karite tree, has been a treasured beauty staple for centuries.',
          fullDescription: `Shea butter, a rich yellow paste derived from the nuts of the African karite tree, has been a treasured beauty staple for centuries. Its use dates back to the reign of Queen Cleopatra and remains a cornerstone of modern skincare. Renowned for its ability to trap moisture and restore damaged skin, shea butter is packed with vitamins A, E, and F, offering nourishment and hydration. It also provides natural UV protection and helps slow signs of aging, making it a vital resource for African women throughout history. Non-comedogenic and long-lasting, this versatile ingredient continues to be celebrated for its remarkable skincare benefits (Adekola, 2024).

The extraction and processing of shea butter has traditionally been a women's craft, passed down through generations. The nuts are collected, cleaned, and crushed before being roasted and ground into a paste. This paste is then kneaded with water to separate the oils, which are collected and purified to create the final product. This process not only preserves cultural heritage but also provides economic opportunities for women in rural African communities (Adekola, 2024).`
        },
        {
          name: 'Rhassoul Clay',
          image: 'https://images.pexels.com/photos/6979015/pexels-photo-6979015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Rhassoul clay has long been a cornerstone of the Moroccan Hammam ritual.',
          fullDescription: `Rhassoul clay has long been a cornerstone of the Moroccan Hammam ritual, celebrated for leaving the skin soft and rejuvenated thanks to its high magnesium content. This sedimentary rock, sourced from deposits in Morocco, is deeply rooted in North African beauty traditions. The name "Rhassoul" translates to "washes," reflecting its remarkable ability to cleanse, soothe, and exfoliate the skin. Its name also derives from "Jebel Rhassoul," meaning "mountain of the washer" in Arabic, referencing the mountain where this prized clay is gathered (Adekola, 2024).

In North Africa, Rhassoul clay was traditionally used for body care by mixing it with rose water to form a paste, which was then applied to the skin. Being rich in magnesium, this natural ingredient is known for its anti-inflammatory and antimicrobial properties, offering effective benefits against acne and promoting healthy, radiant skin (Adekola, 2024).

The Hammam ritual itself is a social and cultural tradition that has been practiced for centuries. In these public bathhouses, women would gather to cleanse, socialize, and pamper themselves using traditional ingredients like Rhassoul clay. This ritual represents not just physical cleansing but also spiritual purification and community bonding (Adekola, 2024).`
        }
      ]
    },
    {
      name: 'South Asia',
      description: 'South Asian beauty rituals have long captivated the world with their exotic charm, but they are far more than fleeting trends. These traditions are deeply rooted in history, with ingredients and DIY recipes passed down through generations. Each natural, locally sourced concoction carries a legacy, reflecting the wisdom and practices of those who came before. The true significance of these rituals lies not only in their effective ingredients but also in the rich cultural history they embody, preserving a connection to the past with every application (Velasco, 2021).',
      backgroundColor: '#FEC60D',
      accentColor: '#911C8A',
      headerColor: '#c65102',
      bannerImage: 'https://images.pexels.com/photos/27155552/pexels-photo-27155552.jpeg',
      rituals: [
        {
          name: 'Turmeric Masks',
          image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Facial masks have deep roots in South Asian traditions, often crafted from natural ingredients passed down through generations.',
          fullDescription: `Facial masks have deep roots in South Asian traditions, often crafted from natural ingredients passed down through generations. One of the most renowned masks is the Haldi face mask, which uses turmeric, a staple in South Asian beauty rituals. Known for its cleansing and nourishing properties, turmeric (translated as Haldi in Hindi) brightens the complexion and imparts a natural glow. Beyond its beauty uses, turmeric also plays a key role in cooking. This vibrant yellow powder is praised for its acne-fighting abilities and overall skin health benefits, thanks to its anti-inflammatory and antioxidant properties. The active compound, curcumin, has even been shown to treat various dermatological conditions (Team and Hanley, 2023).

In South Asian culture, turmeric holds ceremonial significance, particularly in Indian weddings. During the "Haldi Ceremony," turmeric paste is applied to the bride and groom's faces as a ritual symbolizing their transition into married life and their elevated status as husband and wife (Team and Hanley, 2023).

The benefits of turmeric are widely celebrated in South Asian cultures, including its ability to calm inflammation and protect the skin from environmental damage. Since inflammation is a major contributor to skin issues like acne, rashes, and redness, reducing it can significantly improve skin health. Turmeric's curcumin content is especially effective for treating acne, often used as a spot treatment when mixed with water and lemon, and it can also help lighten dark spots (Malzahn, 2022).`
        },
        {
          name: 'Tamarind',
          image: 'https://images.pexels.com/photos/18495829/pexels-photo-18495829/free-photo-of-close-up-of-tamarind-fruit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Thai women have long been admired for their distinctive and captivating beauty.',
          fullDescription: `Thai women have long been admired for their distinctive and captivating beauty, which is deeply rooted in natural beauty rituals and the use of simple, organic ingredients. Among these traditions is the use of tamarind, a sweet, sour, tangy, and tart fruit known not only as a cooking ingredient but also for its numerous beauty and health benefits. Packed with Vitamin C, antioxidants, and minerals like potassium and magnesium, tamarind helps rejuvenate and nourish the skin (Bree, 2021).

One cherished beauty tradition, often passed down by Thai brides, involves using tamarind pulp as a natural exfoliant. In the days leading up to their wedding, brides typically scrub their skin with tamarind pulp to achieve smooth, dewy, and radiant skin, ensuring they look their best for their special day (Bree, 2021).

The fruit's natural alpha-hydroxy acids (AHAs) gently exfoliate dead skin cells while its antioxidants protect against environmental damage. When combined with honey or yogurt, tamarind creates a powerful mask that brightens the complexion and reduces hyperpigmentation. This ancient beauty secret has been preserved through generations, testament to its effectiveness in achieving naturally glowing skin (Bree, 2021).`
        }
      ]
    },
    {
      name: 'East Asia',
      description: 'Generally, the essence of asian beauty rituals lies in prevention, patience, and perseverance. Asian beauty believes in preventing before curing, focusing on nourishing your skin with healthy, natural ingredients. Each step comes with precision, treating your skin from a comprehensive approach using natural ingredients, are fundamental to Asian beauty rituals (BiE, 2023).',
      backgroundColor: '#92B3A5',
      accentColor: '#D2357D',
      headerColor: '#7C1823',
      bannerImage: 'https://images.pexels.com/photos/18054176/pexels-photo-18054176.jpeg',
      rituals: [
        {
          name: 'Ginseng',
          image: 'https://images.pexels.com/photos/16122465/pexels-photo-16122465/free-photo-of-full-plate-of-ginger-roots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Ginseng has been a key element in ancient Korean beauty rituals.',
          fullDescription: `Ginseng has been a key element in ancient Korean beauty rituals, known for its powerful health and skincare benefits. The word "ginseng" refers to the root of the panax plant, with "panax" originating from the Greek word "panacea," meaning "universal remedy" (Ivy, 2024).

Asian ginseng, in particular, was widely used for both beauty and health purposes. Traditionally, it was consumed as an anti-aging and energy-boosting tonic, often prepared as ginseng tea. It was also used topically by boiling ginseng slices and applying them to the skin, acting as an early form of toner to refresh and enhance the complexion (Ivy, 2024).

Modern research has validated many of these traditional uses, showing that ginseng contains compounds called ginsenosides that have powerful anti-aging properties. These compounds help boost collagen production, improve skin elasticity, and protect against UV damage. Additionally, ginseng's antioxidant properties help fight free radicals and reduce inflammation, contributing to a more youthful, radiant complexion (Ivy, 2024).`
        },
        {
          name: 'Pearl Powder',
          image: 'https://images.pexels.com/photos/5357486/pexels-photo-5357486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'Pearls have long been a cornerstone of Chinese beauty rituals and traditional medicine.',
          fullDescription: `Pearls have long been a cornerstone of Chinese beauty rituals and traditional medicine. Historically, they were crushed into a fine powder and mixed into tea or water, believed to keep the skin radiant and youthful. Royal families even infused pearl powder into their makeup and moisturizers for a luminous glow. Beyond its beauty benefits, pearl is also thought to relax the mind and help reduce stress and anxiety (Tatcha, 2021).

Pearl powder is a powerful antioxidant, combating free radical damage and reducing signs of premature aging. It's packed with skin-supporting elements like magnesium, amino acids, minerals, proteins, and polysaccharides. These components not only nourish the skin's surface but also act as a gentle exfoliator, removing dead skin cells to reveal a brighter complexion. When taken orally, pearl powder can stimulate collagen production, improve skin tone, and strengthen hair, skin, and nails (Tatcha, 2021).

In traditional Chinese medicine, pearl powder was also believed to promote emotional well-being and balance. The cooling and calming properties of pearl were thought to help soothe irritated skin while promoting a sense of inner peace. This holistic approach to beauty, combining physical and emotional wellness, remains a fundamental aspect of East Asian beauty philosophy (Tatcha, 2021).`
        }
      ]
    },
    {
      name: 'Europe',
      description: 'In Europe, the Greeks were known for their admiration of physical beauty and their understanding of the body\'s natural aging process. They were always exploring ways to enhance their appearance. Interestingly, the word "cosmetics" originates from the Greek word "kosmetikos," dating back to the 17th century. In ancient Greece, Aphrodite, the Olympian goddess of love, embodied the beauty ideal. She symbolizes femininity and grace, inspiring many of the beauty rituals practiced during that time (Jean, 2019).',
      backgroundColor: '#003399',
      accentColor: '#FFCC00',
      headerColor: '#5D7EA7',
      textColor: '#FFCC00',
      bannerImage: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg',
      rituals: [
        {
          name: 'Olive Oil Skincare',
          image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          description: 'The olive tree has long been a blessing to the lands of the Mediterranean.',
          fullDescription: `The olive tree has long been a blessing to the lands of the Mediterranean, particularly Greece. Greek olives and their oil not only offer a rich, mesmerizing flavor but also come with remarkable health and beauty benefits. When consumed, olive oil is packed with monounsaturated fatty acids, which help lower bad cholesterol (LDL) while raising good cholesterol (HDL), keeping your cardiovascular system healthy and reducing the risk of coronary heart disease. Its antioxidants, like vitamin E and polyphenols, protect the body against harmful free radicals (Popmenu, 2023).

Now, moving to olive oil in beauty rituals. Thanks to its moisturizing and antioxidant properties, it has been a staple in skincare, nail care, and hair care for centuries. When applied to the skin, olive oil deeply hydrates, soothes, and shields against environmental damage. Its nutrients also support hair health, protecting against hair loss. Some studies even suggest that massaging olive oil or olive leaf extract into the scalp can promote hair growth and reduce dandruff (Popmenu, 2023).

In ancient Greece, athletes would massage olive oil into their skin before competition, believing it would enhance their performance and protect their skin. This practice evolved into the use of olive oil in various beauty treatments, from hair masks to body scrubs. The Greeks also recognized olive oil's healing properties, using it to treat wounds and skin conditions. This ancient wisdom has been validated by modern science, which has confirmed olive oil's anti-inflammatory and antimicrobial properties (Popmenu, 2023).`
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="bg-[#FFF9F4] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-[#B76E79] mr-3" />
            <h1 className="text-4xl font-serif text-[#4A4A4A]">Explore Global Beauty Rituals</h1>
          </div>
          <p className="text-center text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Explore the beauty rituals that have been passed down through generations, from skincare to body art, all around the world.
          </p>
        </div>
      </div>

      {/* Regional Sections */}
      <div className="py-16">
        {regions.map((region) => (
          <div 
            key={region.name}
            className="mb-20"
            style={{ backgroundColor: region.backgroundColor }}
          >
            <div className="max-w-7xl mx-auto px-6 py-16">
              {/* Region Header */}
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-serif mb-4"
                  style={{ color: region.headerColor }}
                >
                  {region.name} Beauty Rituals
                </h2>
                <p className="max-w-3xl mx-auto" style={{ 
                  color: region.name === 'Europe' ? region.textColor : '#4A4A4A' 
                }}>
                  {region.description}
                </p>
              </div>

              {/* Ritual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {region.rituals.map((ritual) => (
                  <div 
                    key={ritual.name}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div 
                      className="h-64 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${ritual.image})`,
                        backgroundColor: '#f8f8f8'
                      }}
                    />
                    <div className="p-6">
                      <h3 
                        className="text-xl font-serif mb-4"
                        style={{ color: region.accentColor }}
                      >
                        {ritual.name}
                      </h3>
                      <p className="text-[#4A4A4A] mb-6 whitespace-pre-line">
                        {expandedRitual === ritual.name ? ritual.fullDescription : ritual.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <button 
                          onClick={() => setExpandedRitual(
                            expandedRitual === ritual.name ? null : ritual.name
                          )}
                          className="px-6 py-2 rounded-full text-white transition-colors duration-200 flex items-center gap-2"
                          style={{ backgroundColor: region.accentColor }}
                        >
                          {expandedRitual === ritual.name ? (
                            <>
                              Show Less
                              <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Learn More
                              <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                        {expandedRitual === ritual.name && (
                          <button
                            onClick={() => window.location.href = '/diy-guides'} 
                            className="px-6 py-2 rounded-full text-white transition-colors duration-200"
                            style={{ backgroundColor: region.headerColor }}
                          >
                            View DIY Guide
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="bg-[#E3FDFD] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#4A4A4A] mb-6">Create Your Own Rituals</h2>
          <button 
            onClick={() => window.location.href = '/diy-guides'}
            className="bg-[#B76E79] text-white px-8 py-3 rounded-full hover:bg-[#a25964] transition-colors duration-200"
          >
            Start Creating Your Own Rituals
          </button>
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#4A4A4A] mb-6">Shop Traditional Beauty Products</h2>
          <button 
            onClick={() => window.location.href = '/marketplace'}
            className="bg-[#B76E79] text-white px-8 py-3 rounded-full hover:bg-[#a25964] transition-colors duration-200"
          >
            Shop Beauty Products
          </button>
        </div>
      </div>
    </div>
  );
}