import React, { useState } from 'react';
import { Scroll } from 'lucide-react';

interface DiyGuide {
  title: string;
  description: string;
  image: string;
  instructions: string[];
}

export default function DiyGuides() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const guides: DiyGuide[] = [
    {
      title: "Olive Oil Exfoliating Scrub",
      description: "Create your own natural olive oil scrub at home and protect your skin against dullness, dryness, and acne, all by exfoliating and removing dead skin cells (Yerkes, 2009).",
      image: "https://images.pexels.com/photos/8190302/pexels-photo-8190302.jpeg",
      instructions: [
        "In a jar with a lid, mix 3 tablespoons of olive oil and two tablespoons of organic honey. Blend until fully mixed.",
        "Add sugar into the concoction. Stir in half a cup of sugar, then mix well until a thick grainy texture.",
        "Now your scrub is done, you can massage it well onto the skin. Rub it in circular motions for around 60 minutes to gently exfoliate and moisturize.",
        "Finally, rinse off with warm water and pat your skin dry with a towel.",
        "Store the scrub in the fridge to prevent bacteria growth."
      ]
    },
    {
      title: "DIY Rose Water Toner",
      description: "Create your own natural soothing rose water toner at home using fresh rose petals. This simple, and natural recipe hydrates, calms, and nourishes your skin while uplifting your mood with the delicate essence of roses (Kelly, 2024).",
      image: "https://images.pexels.com/photos/7419612/pexels-photo-7419612.jpeg",
      instructions: [
        "Rinse your dried rose petals of choice with clean water. Do not soak them, just rinse gently with water.",
        "Place the clean rose petals in a pot on a stove and add distilled water. The cooking process will begin.",
        "Bring the water to a boil then start reducing to the lowest heat.",
        "Allow the roses simmer without being covered by a lid, and you should be able to notice the water soaking the colors of the roses.",
        "Allow the rose water to cool before straining into a cup.",
        "Use a small funnel to pour your rose water into a spray bottle.",
        "Now you can add rose essential oil, and Vitamin E for added benefits into your rose water.",
        "Store in the fridge to prevent bacteria growth."
      ]
    },
    {
      title: "DIY Turmeric Face Mask",
      description: "Create a natural turmeric face mask to brighten your skin, combat acne, brighten acne scars and reduce inflammation using simple natural ingredients (Axe, 2021).",
      image: "https://images.pexels.com/photos/20590339/pexels-photo-20590339.jpeg",
      instructions: [
        "Mix turmeric powder with apple cider vinegar, honey, milk or yoghurt and add lemon oil in a small bowl.",
        "Try to get a thick consistency that will stick onto your face.",
        "Apply the mask avoiding your eye area.",
        "Allow the mask to sit onto your face for 15-20 minutes, then rinse with warm water.",
        "You might have to use a mild soap to get rid of the stain that may occur afterwards.",
        "Use every 2 weeks for best results, and store it in the fridge."
      ]
    },
    {
      title: "DIY Tamarind Face Mask",
      description: "Create a natural tamarind face mask to combat dull skin, remove deep-seated dirt, unclog pores, and reduce blemishes and hyperpigmentation for a beautiful, glowing complexion (Bhardwaj, 2022).",
      image: "https://images.pexels.com/photos/2348740/pexels-photo-2348740.jpeg",
      instructions: [
        "Soak a few sticks of tamarind overnight then take its pulp, then strain the tamarind pulp.",
        "Add honey, turmeric and a few drops of yoghurt then mix well.",
        "Apply it on cleansed skin then keep it for 20-30 minutes, and rinse with lukewarm water.",
        "Use this once a week for best results.",
        "Store it in the fridge."
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="bg-[#F7EDE2] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Scroll className="w-8 h-8 text-[#B76E79] mr-3" />
            <h1 className="text-4xl font-serif text-[#4A4A4A]">Create Your Own Beauty Rituals</h1>
          </div>
          <p className="text-center text-lg text-[#4A4A4A] max-w-3xl mx-auto">
            Uncover the ancient beauty secrets from around the world and create your own indulgent skincare and body rituals at home.
          </p>
        </div>
      </div>

      {/* DIY Guides Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div 
              key={guide.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <div 
                className="h-48 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${guide.image})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-serif text-[#4A4A4A] mb-4">{guide.title}</h2>
                <p className="text-[#4A4A4A] mb-6 hover:font-medium transition-all duration-200">
                  {guide.description}
                </p>
                <button
                  onClick={() => setExpandedGuide(expandedGuide === guide.title ? null : guide.title)}
                  className="bg-[#B76E79] text-white px-6 py-2 rounded-full hover:bg-[#9F5E56] transition-colors duration-200"
                >
                  {expandedGuide === guide.title ? 'Hide Instructions' : 'Start Creating'}
                </button>

                {expandedGuide === guide.title && (
                  <div className="mt-6 p-4 bg-[#F7EDE2] rounded-lg">
                    <h3 className="font-serif text-lg text-[#4A4A4A] mb-4">Instructions:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-[#4A4A4A]">
                      {guide.instructions.map((instruction, index) => (
                        <li key={index} className="ml-4">{instruction}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#E3FDFD] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#B76E79] text-white px-8 py-3 rounded-full hover:bg-[#9F5E56] transition-colors duration-200"
          >
            Start Creating Your Own Rituals
          </button>
        </div>
      </div>
    </div>
  );
}