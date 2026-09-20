import React from 'react';

// Row 1 image assets (Food + 3D Chef character)
const ROW_1_IMAGES = [
  { id: 'r1-1', src: '/butter_chicken.jpg', alt: 'Rich Butter Chicken Skillet', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r1-2', src: '/chef_girl_cooking.jpg', alt: '3D Chef cooking in kitchen', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r1-3', src: '/french_fries.jpg', alt: 'Crispy Peri-Peri Fries Cone', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r1-4', src: '/malai_paneer_tikka.jpg', alt: 'Malai Paneer Tikka', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r1-5', src: '/berry_cheesecake.jpg', alt: 'Berry Cheesecake', width: 'w-28 sm:w-36', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r1-6', src: '/thai_basil_tofu.jpg', alt: 'Thai Basil Cashew Stir-Fry', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' }
];

// Row 2 image assets (Food + 3D Chefs Duo)
const ROW_2_IMAGES = [
  { id: 'r2-1', src: '/tuscan_chicken.jpg', alt: 'Creamy Garlic Tuscan Chicken', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r2-2', src: '/chefs_duo_cooking.jpg', alt: '3D Friendly Chefs Cooking Together', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r2-3', src: '/samosa.jpg', alt: 'Crispy Street Samosas', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r2-4', src: '/creme_brulee.jpg', alt: 'French Crème Brûlée', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r2-5', src: '/chicken_biryani.jpg', alt: 'Hyderabadi Dum Biryani', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r2-6', src: '/loaded_nachos.jpg', alt: 'Gourmet Loaded Nachos', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' }
];

// Row 3 image assets (Diverse appetizers, mains and desserts)
const ROW_3_IMAGES = [
  { id: 'r3-1', src: '/dal_makhani.jpg', alt: 'Smoky Dal Makhani with Butter', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r3-2', src: '/lava_cake.png', alt: 'Molten Chocolate Lava Cake with Cream', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r3-3', src: '/spring_rolls.jpg', alt: 'Golden Spring Rolls', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r3-4', src: '/hara_bhara_kebab.png', alt: 'Hara Bhara Kebab', width: 'w-36 sm:w-44', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r3-5', src: '/dahi_puri.jpg', alt: 'Crispy Dahi Puri Chaat', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' },
  { id: 'r3-6', src: '/mango_lassi.png', alt: 'Creamy Mango Lassi', width: 'w-32 sm:w-40', height: 'h-[84px] sm:h-[100px]' }
];

function GalleryRow({ items, animationClass }) {
  // Duplicate array once for a 100% seamless, infinite translateX(-50%) loop
  const duplicatedItems = [
    ...items.map(item => ({ ...item, uniqueKey: `orig-${item.id}` })),
    ...items.map(item => ({ ...item, uniqueKey: `dup-${item.id}` }))
  ];

  return (
    <div className="overflow-hidden w-full py-0.5">
      <div className={animationClass}>
        {duplicatedItems.map((item) => (
          <div
            key={item.uniqueKey}
            className={`flex-shrink-0 mx-1.5 sm:mx-2 ${item.width} select-none`}
          >
            <div
              className={`relative ${item.height} w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-md shadow-black/50 border border-neutral-800/80 select-none`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnimatedGallery() {
  return (
    <div className="relative w-full overflow-hidden bg-[#121212] py-2 sm:py-3">
      {/* Tilted / Rotated Collage Container for dynamic diagonal flow */}
      <div className="w-[125%] -ml-[12.5%] transform -rotate-[5deg] sm:-rotate-[4.5deg] scale-[1.05] space-y-2 sm:space-y-2.5 origin-center">
        <GalleryRow items={ROW_1_IMAGES} animationClass="animate-marquee-row-1" />
        <GalleryRow items={ROW_2_IMAGES} animationClass="animate-marquee-row-2" />
        <GalleryRow items={ROW_3_IMAGES} animationClass="animate-marquee-row-3" />
      </div>
    </div>
  );
}
