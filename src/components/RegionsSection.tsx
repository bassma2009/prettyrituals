import React from 'react';
import RegionCard from './RegionCard';

const regions = [
  {
    name: 'Middle East',
    description: 'Discover the luxurious beauty traditions of the Middle East, where natural ingredients meet ancient wisdom.',
    image: 'https://images.pexels.com/photos/4727987/pexels-photo-4727987.jpeg',
    backgroundColor: '#F4E8C1',
    accentColor: '#C8A165',
    headerColor: '#8C1E26',
    rituals: [
      {
        name: 'Henna Art',
        description: 'Traditional body art using natural henna leaves, creating intricate patterns.',
        image: 'https://images.pexels.com/photos/12465309/pexels-photo-12465309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        name: 'Rose Water Rituals',
        description: 'Ancient skincare secret using distilled rose petals for natural radiance.',
        image: 'https://images.pexels.com/photos/1517361/pexels-photo-1517361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    name: 'Africa',
    description: 'Experience the rich beauty heritage of Africa, featuring natural ingredients and time-honored practices.',
    image: 'https://images.pexels.com/photos/29883317/pexels-photo-29883317.jpeg',
    backgroundColor: '#D57A66',
    accentColor: '#BF7E37',
    headerColor: '#264653',
    rituals: [
      {
        name: 'Shea Butter Treatment',
        description: 'Traditional moisturizing treatment using pure African shea butter.',
        image: 'https://images.pexels.com/photos/6187525/pexels-photo-6187525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        name: 'Rhassoul Clay',
        description: 'Natural cleansing ritual using handcrafted African black soap.',
        image: 'https://images.pexels.com/photos/6979015/pexels-photo-6979015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    name: 'South Asia',
    description: 'Discover the ancient beauty secrets of South Asia, where natural remedies meet timeless traditions.',
    image: 'https://images.pexels.com/photos/27155552/pexels-photo-27155552.jpeg',
    backgroundColor: '#FEC60D',
    accentColor: '#911C8A',
    headerColor: '#c65102',
    rituals: [
      {
        name: 'Turmeric Masks',
        description: 'Traditional face mask using turmeric powder for glowing skin.',
        image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        name: 'Tamarind',
        description: 'Natural exfoliant using tamarind pulp for smooth skin.',
        image: 'https://images.pexels.com/photos/18495829/pexels-photo-18495829/free-photo-of-close-up-of-tamarind-fruit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    name: 'East Asia',
    description: 'Experience the refined beauty rituals of East Asia, where tradition meets innovation.',
    image: 'https://images.pexels.com/photos/18054176/pexels-photo-18054176.jpeg',
    backgroundColor: '#92B3A5',
    accentColor: '#D2357D',
    headerColor: '#7C1823',
    rituals: [
      {
        name: 'Ginseng',
        description: 'Ancient Korean beauty secret for youthful skin.',
        image: 'https://images.pexels.com/photos/16122465/pexels-photo-16122465/free-photo-of-full-plate-of-ginger-roots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        name: 'Pearl Powder',
        description: 'Traditional Chinese beauty treatment for radiant complexion.',
        image: 'https://images.pexels.com/photos/5357486/pexels-photo-5357486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  {
    name: 'Europe',
    description: 'Explore the timeless beauty traditions of Europe, rooted in natural ingredients.',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg',
    backgroundColor: '#003399',
    accentColor: '#FFCC00',
    headerColor: '#5D7EA7',
    rituals: [
      {
        name: 'Olive Oil Skincare',
        description: 'Mediterranean beauty secret for nourished skin and hair.',
        image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];

export default function RegionsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FFF9F4] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#4A4A4A] text-center mb-12">
          Beauty Rituals Around the World
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <RegionCard key={region.name} region={region} />
          ))}
        </div>
      </div>
    </section>
  );
}