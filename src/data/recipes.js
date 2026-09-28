export const CATEGORIES = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'instant', label: 'Instant Dishes ⚡', icon: '⚡' },
  { id: 'starters', label: 'Starters 🥟', icon: '🍢' },
  { id: 'main-course', label: 'Main Course 🍛', icon: '🍲' },
  { id: 'desserts', label: 'Desserts 🍰', icon: '🍨' },
  { id: 'sweets', label: 'Indian Sweets 🍯', icon: '🥮' },
  { id: 'snacks', label: 'Street Snacks 🥪', icon: '🍟' },
  { id: 'drinks', label: 'Beverages 🥤', icon: '🧃' },
  { id: 'healthy', label: 'Healthy & Salads 🥗', icon: '🥑' },
];

export const INITIAL_RECIPES = [
  // ===================== STARTERS & APPETIZERS (8) =====================
  {
    id: 'starter-1',
    title: 'Tandoori Malai Paneer Tikka',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '380 kcal',
    rating: '4.9',
    reviews: 142,
    image: '/malai_paneer_tikka.jpg',
    description: 'Silken cubes of paneer marinated in hung curd, green cardamom, cashews, and roasted in high heat.',
    ingredients: [
      { name: 'Fresh Malai Paneer', amount: '300g', available: true },
      { name: 'Hung thick curd (Greek yogurt)', amount: '1/2 cup', available: true },
      { name: 'Cashew cream paste', amount: '2 tbsp', available: true },
      { name: 'Green bell peppers & onions', amount: '1 cup cubed', available: true },
      { name: 'Chaat masala & roasted kasuri methi', amount: '1 tbsp', available: true },
      { name: 'Edible green cardamom powder', amount: '1/2 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Whisk hung curd with cashew paste, cardamom powder, ginger-garlic paste, and lemon juice.',
      'Coat paneer cubes, bell peppers, and onion petals thoroughly. Marinate for 30 minutes.',
      'Thread onto skewers and bake/grill at 220°C (430°F) for 12-14 mins until slightly charred.',
      'Baste with melted butter, dust with chaat masala, and serve with mint chutney.'
    ],
    youtubeUrl: 'https://youtu.be/Oy3YX7OTVqI?si=tLKORk_Dh_S9SF1E',
    isSaved: true
  },
  {
    id: 'starter-2',
    title: 'Crispy Street-Style Masala Aloo Samosas',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Indian',
    prepTime: '25 mins',
    cookTime: '20 mins',
    calories: '320 kcal',
    rating: '4.8',
    reviews: 139,
    image: '/samosa.jpg',
    description: 'Golden triangular flaky pastry filled with spiced crushed potatoes, green peas, toasted coriander seeds, and amchur.',
    ingredients: [
      { name: 'Boiled potatoes (crushed)', amount: '3 large', available: true },
      { name: 'Green peas (matar)', amount: '1/2 cup', available: true },
      { name: 'All-purpose flour (maida) & ajwain', amount: '2 cups', available: true },
      { name: 'Ghee for moin dough', amount: '4 tbsp', available: true },
      { name: 'Amchur (dry mango powder) & chaat masala', amount: '1.5 tsp', available: true },
      { name: 'Tamarind jaggery sweet chutney', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Knead a firm dough using flour, carom seeds (ajwain), salt, and cold ghee. Rest 20 mins.',
      'Sauté crushed coriander seeds, cumin, green chilies, ginger, peas, and coarse boiled potatoes with amchur.',
      'Roll oval dough portions, cut in half, shape cones, and stuff with spicy potato mixture.',
      'Deep fry in medium-low oil slowly for 12-14 minutes until crisp, bubble-free, and golden.',
      'Serve hot with sweet saunth tamarind chutney and spicy mint chutney.'
    ],
    youtubeUrl: 'https://youtu.be/EKPAfUCn_Jo?si=HgmTP0afX_GdZhFJ',
    isSaved: false
  },
  {
    id: 'starter-3',
    title: 'Hara Bhara Kebab',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '240 kcal',
    rating: '4.7',
    reviews: 94,
    image: '/hara_bhara_kebab.png',
    description: 'Pan-seared nutrient-rich vegetable patties made of blanched spinach, green peas, mashed potatoes, and roasted gram flour.',
    ingredients: [
      { name: 'Blanched spinach puree', amount: '1 cup', available: true },
      { name: 'Boiled mashed potatoes', amount: '2 medium', available: true },
      { name: 'Green peas (boiled & mashed)', amount: '1/2 cup', available: true },
      { name: 'Roasted besan (gram flour)', amount: '3 tbsp', available: true },
      { name: 'Chaat masala & green chilies', amount: '1 tsp', available: true },
      { name: 'Cashew halves for topping', amount: '10-12 pieces', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Squeeze out excess water from blanched spinach. Finely mince or pulse in blender.',
      'Combine spinach, mashed potatoes, peas, spices, roasted besan, and salt into a workable dough.',
      'Shape into flat round patties and press a cashew half in the center of each.',
      'Pan-sear in shallow ghee or oil until exterior is deeply crisp and aromatic. Serve with coriander dip.'
    ],
    youtubeUrl: 'https://youtu.be/JTWDwvm9L3Q?si=5U4-mCyZ55Rb8XlL',
    isSaved: false
  },
  {
    id: 'starter-4',
    title: 'Crispy Garlic Butter Prawns',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Continental',
    prepTime: '10 mins',
    cookTime: '8 mins',
    calories: '310 kcal',
    rating: '4.9',
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
    description: 'Succulent jumbo prawns pan-fried in foaming salted butter, crushed garlic cloves, white wine reduction, and fresh parsley.',
    ingredients: [
      { name: 'Tiger prawns (peeled & deveined)', amount: '400g', available: true },
      { name: 'Minced garlic', amount: '6 cloves', available: true },
      { name: 'Salted butter & olive oil', amount: '3 tbsp', available: true },
      { name: 'Red pepper chili flakes', amount: '1 tsp', available: true },
      { name: 'Fresh flat-leaf parsley', amount: '2 tbsp chopped', available: true },
      { name: 'Organic Lemon juice & zest', amount: '1 whole', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pat jumbo prawns thoroughly dry with kitchen paper; season with sea salt and cracked pepper.',
      'Melt butter with a splash of olive oil in a wide heavy skillet over high heat.',
      'Sear prawns for 2 minutes per side until pink and curled.',
      'Toss in minced garlic and chili flakes in the last minute to avoid burning the garlic.',
      'Finish with fresh lemon juice and chopped parsley. Serve with crusty sourdough bread.'
    ],
    youtubeUrl: 'https://youtu.be/fEzDJ8Md0yc?si=G09yt2GtlXlfc0l3',
    isSaved: false
  },
  {
    id: 'starter-5',
    title: 'Chicken Seekh Kebab',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '330 kcal',
    rating: '4.8',
    reviews: 182,
    image: '/seekh_kebab.jpg',
    description: 'Finely minced spiced chicken skewers infused with mint, onions, garlic, and cooked over glowing charcoal.',
    ingredients: [
      { name: 'Minced chicken (Keema)', amount: '500g', available: true },
      { name: 'Finely grated squeezed onion', amount: '1 large', available: true },
      { name: 'Chopped mint & fresh cilantro', amount: '1/2 cup', available: true },
      { name: 'Ginger-garlic paste', amount: '1.5 tbsp', available: true },
      { name: 'Egg or cornstarch (binding)', amount: '1 tbsp', available: true },
      { name: 'Melted butter for basting', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Mix chicken mince with thoroughly squeezed grated onions, herbs, aromatic spices, and salt.',
      'Knead the mixture like dough for 5 minutes until proteins activate and bind tightly.',
      'Mold sausage shapes along flat steel skewers using wet hands.',
      'Grill or broil for 10-12 mins, turning frequently and brushing liberally with melted butter.',
      'Slide off skewers, slice into diagonal cylinders, and garnish with pickled onion rings and lemon.'
    ],
    youtubeUrl: 'https://youtu.be/y-1AVZdJWxw?si=lsdUBwMbIKhSNYDg',
    isSaved: false
  },
  {
    id: 'starter-6',
    title: 'Veg Spring Rolls with Sweet Chili Sauce',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Asian',
    prepTime: '20 mins',
    cookTime: '10 mins',
    calories: '280 kcal',
    rating: '4.6',
    reviews: 88,
    image: '/spring_rolls.jpg',
    description: 'Crispy delicate fried wonton wrappers stuffed with julienned cabbage, carrots, scallions, and soy-glazed glass noodles.',
    ingredients: [
      { name: 'Spring roll pastry sheets', amount: '10 sheets', available: true },
      { name: 'Shredded cabbage & carrots', amount: '2 cups', available: true },
      { name: 'Bell pepper & scallions', amount: '1 cup', available: true },
      { name: 'Soy sauce & sesame oil', amount: '2 tbsp', available: true },
      { name: 'Thai sweet chili dipping sauce', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Flash stir-fry julienned vegetables in a wok on high flame with sesame oil, soy sauce, and white pepper for 2 minutes.',
      'Allow vegetable filling to cool completely so pastry remains crisp.',
      'Place filling diagonally on wrapper, roll tightly, tuck in corners, and seal with cornstarch paste.',
      'Fry in hot oil until blistered, crisp, and golden amber. Slice diagonally and serve.'
    ],
    youtubeUrl: 'https://youtu.be/6-RnZjtl-x0?si=qASsYLZ9Qf5fb7Ke',
    isSaved: false
  },
  {
    id: 'starter-7',
    title: 'Tomato Basil Bruschetta',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Italian',
    prepTime: '12 mins',
    cookTime: '5 mins',
    calories: '190 kcal',
    rating: '4.8',
    reviews: 104,
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    description: 'Charred garlic-rubbed Italian sourdough toasts topped with diced vine-ripened tomatoes, torn basil, and balsamic reduction.',
    ingredients: [
      { name: 'Rustic baguette or ciabatta', amount: '1 loaf', available: true },
      { name: 'Ripe heirloom tomatoes (diced)', amount: '3 medium', available: true },
      { name: 'Fresh sweet basil leaves', amount: '1/3 cup torn', available: true },
      { name: 'Extra virgin cold-pressed olive oil', amount: '3 tbsp', available: true },
      { name: 'Garlic cloves (for rubbing toast)', amount: '2 whole', available: true },
      { name: 'Aged balsamic glaze drizzle', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Toss diced tomatoes with torn basil, minced shallots, extra virgin olive oil, sea salt, and black pepper. Marinate 10 mins.',
      'Slice bread thickly and toast over grill or skillet until golden and charred on edges.',
      'Rub cut side of raw garlic cloves briskly over hot toasted bread.',
      'Spoon generous heap of tomato mixture over each crostini, drizzle balsamic glaze, and serve immediately.'
    ],
    youtubeUrl: 'https://youtu.be/pZgWp-mtSvU?si=CYACT7So-ZGVPfNG',
    isSaved: false
  },
  {
    id: 'starter-8',
    title: 'Crispy Corn & Pepper Salt',
    course: 'Starters',
    category: 'Starters',
    cuisine: 'Indo-Chinese',
    prepTime: '10 mins',
    cookTime: '10 mins',
    calories: '260 kcal',
    rating: '4.7',
    reviews: 79,
    image: '/crispy_corn.png',
    description: 'Crisp fried sweet corn kernels tossed with diced bell peppers, spring onions, crushed black pepper, and toasted garlic.',
    ingredients: [
      { name: 'Sweet corn kernels (boiled)', amount: '2 cups', available: true },
      { name: 'Cornstarch & rice flour', amount: '4 tbsp', available: true },
      { name: 'Finely diced bell peppers & onions', amount: '1/2 cup', available: true },
      { name: 'Freshly crushed black peppercorns', amount: '1 tsp', available: true },
      { name: 'Fresh green scallion greens', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pat boiled corn dry. Toss with salt, pepper, and dusting of cornstarch/rice flour until uniformly coated.',
      'Deep fry in batches in hot oil until crunchy and popping.',
      'In a wok, flash sauté minced garlic, diced peppers, and scallions on high flame for 30 seconds.',
      'Add the crunchy fried corn, season with salt, pepper, and chaat masala. Serve immediately.'
    ],
    youtubeUrl: 'https://youtu.be/cRfPg6isBxw?si=922mgjapZfmUWBpL',
    isSaved: false
  },

  // ===================== MAIN COURSE (12) =====================
  {
    id: 'main-1',
    title: 'Rich & Creamy Butter Chicken (Murgh Makhani)',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '25 mins',
    calories: '560 kcal',
    rating: '5.0',
    reviews: 218,
    image: '/butter_chicken.jpg',
    description: 'Tender marinated chicken tikka cooked in a velvety tomato-butter gravy infused with fragrant kasuri methi and cream.',
    ingredients: [
      { name: 'Boneless chicken thighs (cubed)', amount: '500g', available: true },
      { name: 'Pureed ripe tomatoes', amount: '4 large', available: true },
      { name: 'Butter & heavy cream', amount: '3 tbsp + 1/4 cup', available: true },
      { name: 'Ginger-garlic paste', amount: '2 tbsp', available: true },
      { name: 'Garam masala & Kashmiri chili', amount: '1.5 tsp', available: true },
      { name: 'Kasuri Methi (Dried fenugreek)', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Marinate chicken cubes in yogurt, ginger-garlic paste, Kashmiri chili, and lemon juice.',
      'Sear chicken in a smoking hot pan with ghee until charred spots develop. Set aside.',
      'Simmer tomato puree with butter, cashews, and aromatic spices until oil separates.',
      'Blend sauce smooth, strain back into pan, and stir in fresh cream.',
      'Add chicken pieces, crush kasuri methi between palms over the curry, and simmer for 5 minutes.'
    ],
    youtubeUrl: 'https://youtu.be/dOfgQtwusho?si=q1Xrh4P4pOsS7ROR',
    isSaved: true
  },
  {
    id: 'main-2',
    title: 'Dhaba-Style Paneer Butter Masala',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    calories: '490 kcal',
    rating: '4.9',
    reviews: 185,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    description: 'Soft cottage cheese cubes immersed in a rich, buttery, spiced onion-tomato gravy with aromatic whole spices.',
    ingredients: [
      { name: 'Fresh soft Malai Paneer', amount: '250g', available: true },
      { name: 'Chopped onions & tomato puree', amount: '2 onions, 3 tomatoes', available: true },
      { name: 'Soaked cashew paste', amount: '10 cashews', available: true },
      { name: 'Ghee and butter', amount: '2 tbsp', available: true },
      { name: 'Whole spices (cloves, cardamom)', amount: '1 tsp', available: true },
      { name: 'Green Cardamom Powder', amount: '1/2 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Soak paneer cubes in warm lightly salted water for 10 minutes for extreme softness.',
      'Sauté whole spices in ghee, caramelize onions, add ginger-garlic and tomato puree.',
      'Cook until ghee releases. Stir in cashew paste and cream on low flame.',
      'Fold in paneer cubes gently. Simmer 4 minutes and finish with cardamom powder and butter.'
    ],
    youtubeUrl: 'https://youtu.be/bUounn_Bmy4?si=1pQJq9o3Om6Eja-C',
    isSaved: true
  },
  {
    id: 'main-3',
    title: 'Smoky Restaurant-Style Dal Makhani',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '40 mins',
    calories: '410 kcal',
    rating: '4.9',
    reviews: 164,
    image: '/dal_makhani.jpg',
    description: 'Slow-cooked whole black lentils and kidney beans simmered overnight with butter, cream, and subtle smoky undertones.',
    ingredients: [
      { name: 'Whole black urad dal & rajma', amount: '1 cup soaked', available: true },
      { name: 'Pureed plum tomatoes', amount: '1 cup', available: true },
      { name: 'White butter (Makhan) & cream', amount: '3 tbsp', available: true },
      { name: 'Degi Mirch & ginger juliennes', amount: '1 tbsp', available: true },
      { name: 'Natural charcoal lump (for Dhungar smoke)', amount: '1 piece', available: false },
      { name: 'Garam masala & roasted cumin', amount: '1 tsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Pressure cook soaked black lentils and rajma with ginger and salt until buttery soft.',
      'Mash lightly against pot edges to release thick velvety starch.',
      'Prepare tadka with butter, pureed tomatoes, and Degi Mirch.',
      'Combine and slow simmer for 30 minutes, adding butter and cream gradually.',
      'Perform Dhungar smoke infusion using red hot charcoal and ghee. Serve with naan.'
    ],
    youtubeUrl: 'https://youtu.be/o3k55z-tv9I?si=aLs6QpEciWShqTOh',
    isSaved: true
  },
  {
    id: 'main-4',
    title: 'Hyderabadi Dum Chicken Biryani',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '30 mins',
    cookTime: '35 mins',
    calories: '620 kcal',
    rating: '5.0',
    reviews: 320,
    image: '/chicken_biryani.jpg',
    description: 'Royal layered basmati rice and marinated chicken slow-cooked on dum with saffron milk, fried onions (birista), and mint.',
    ingredients: [
      { name: 'Aged long-grain Basmati rice', amount: '2 cups', available: true },
      { name: 'Bone-in chicken cuts', amount: '600g', available: true },
      { name: 'Crispy fried onions (Birista)', amount: '1 cup', available: true },
      { name: 'Fresh mint & coriander leaves', amount: '1 cup chopped', available: true },
      { name: 'Pure Kashmiri Saffron in warm milk', amount: '1 pinch', available: false },
      { name: 'Ghee & Biryani whole spices', amount: '3 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Marinate chicken in curd, spices, fried onions, mint, and lemon juice for 45 minutes.',
      'Par-cook basmati rice with whole spices until 70% done.',
      'Layer raw marinated chicken at bottom of handi, cover with fragrant rice, saffron milk, and ghee.',
      'Seal rim tightly with dough. Cook 5 mins high, 25 mins gentle dum over tawa.',
      'Rest 10 mins, then fluff and serve with chilled burani raita.'
    ],
    youtubeUrl: 'https://youtu.be/uXf3xXeu1x4?si=XaNMfPeiGxbNPTyn',
    isSaved: true
  },
  {
    id: 'main-5',
    title: 'Palak Paneer (Spinach Cottage Cheese)',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '360 kcal',
    rating: '4.8',
    reviews: 130,
    image: '/palak_paneer.jpg',
    description: 'Vibrant green silky blanched spinach gravy simmered with fresh garlic, cumin, paneer cubes, and a swirl of cream.',
    ingredients: [
      { name: 'Fresh spinach leaves (Palak)', amount: '500g', available: true },
      { name: 'Fresh Paneer cubes', amount: '200g', available: true },
      { name: 'Garlic cloves & green chilies', amount: '6 cloves', available: true },
      { name: 'Heavy cream or malai', amount: '2 tbsp', available: true },
      { name: 'Ghee & cumin seeds', amount: '2 tbsp', available: true },
      { name: 'Roasted Kasuri Methi', amount: '1 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Blanch spinach in boiling water for 2 mins, immediately plunge into ice water to preserve emerald green color.',
      'Puree spinach with green chilies and ginger without adding excess water.',
      'Sauté cumin and plenty of chopped garlic in ghee until golden.',
      'Pour in spinach puree, season with salt and garam masala, simmer 4 minutes.',
      'Add paneer cubes and heavy cream. Cook 2 more minutes and serve with makki ki roti or parathas.'
    ],
    youtubeUrl: 'https://youtu.be/wUiPqOmtkwc?si=9yxgEzN2OwMa1VVr',
    isSaved: false
  },
  {
    id: 'main-6',
    title: 'Amritsari Chole Kulche',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '30 mins',
    calories: '490 kcal',
    rating: '4.9',
    reviews: 155,
    image: '/chole_kulche.png',
    description: 'Dark, tangy, deeply spiced chickpeas brewed with tea leaves, anardana (pomegranate seeds), and ginger juliennes.',
    ingredients: [
      { name: 'Kabuli Chana (Chickpeas, soaked)', amount: '2 cups', available: true },
      { name: 'Black tea bag (for dark color)', amount: '1 bag', available: true },
      { name: 'Anardana (dry pomegranate powder)', amount: '1.5 tbsp', available: true },
      { name: 'Chopped onions & tomatoes', amount: '2 each', available: true },
      { name: 'Ginger juliennes & green chilies', amount: '2 tbsp', available: true },
      { name: 'Amritsari Chole Masala blend', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Boil chickpeas with tea bag, black cardamom, and salt until tender and melt-in-mouth.',
      'In a pan, cook onions, ginger, and tomato reduction with chole spices and anardana.',
      'Add cooked chole with cooking water. Mash a portion of chickpeas to thicken gravy naturally.',
      'Pour smoking hot ghee tadka of ginger juliennes and green chilies over the top.',
      'Serve alongside fluffy butter-toasted kulchas and pickled onions.'
    ],
    youtubeUrl: 'https://youtu.be/aKSbKQOgTKQ?si=kdzWiQ6XxrqAElHX',
    isSaved: false
  },
  {
    id: 'main-7',
    title: 'Kashmiri Rogan Josh',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '45 mins',
    calories: '580 kcal',
    rating: '4.9',
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    description: 'Slow-braised mutton curry in an aromatic crimson gravy infused with Kashmiri chilies, fennel powder, and dry ginger.',
    ingredients: [
      { name: 'Tender mutton / lamb cuts', amount: '500g', available: true },
      { name: 'Mustard oil', amount: '4 tbsp', available: true },
      { name: 'Whisked yogurt (dahi)', amount: '1/2 cup', available: true },
      { name: 'Kashmiri red chili powder', amount: '2 tbsp', available: true },
      { name: 'Fennel seed powder (Saunf)', amount: '1.5 tbsp', available: true },
      { name: 'Ratanjot (natural crimson herb extract)', amount: '1 pinch', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Heat mustard oil to smoking point, cool slightly, then sear mutton with whole black cardamom and cloves.',
      'Mix yogurt with Kashmiri chili powder, fennel powder, and dry ginger powder (Saunth).',
      'Pour spiced yogurt into pot, stirring continuously on low heat to prevent curdling.',
      'Add warm water, seal pot, and slow-cook on low heat for 40 minutes until mutton falls off the bone.',
      'Serve with steamed saffron basmati rice.'
    ],
    youtubeUrl: 'https://youtu.be/NDemUhU13M0?si=VYcWO2m_baZErKhh',
    isSaved: false
  },
  {
    id: 'main-8',
    title: 'Creamy Garlic Butter Tuscan Chicken',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Continental',
    prepTime: '15 mins',
    cookTime: '20 mins',
    calories: '480 kcal',
    rating: '4.9',
    reviews: 142,
    image: '/tuscan_chicken.jpg',
    description: 'Juicy seared chicken breast smothered in a velvety sun-dried tomato and spinach cream sauce.',
    ingredients: [
      { name: 'Boneless chicken breasts', amount: '2 large', available: true },
      { name: 'Fresh baby spinach', amount: '2 cups', available: true },
      { name: 'Garlic cloves (minced)', amount: '4 cloves', available: true },
      { name: 'Heavy cream', amount: '3/4 cup', available: true },
      { name: 'Sun-dried tomatoes in oil', amount: '1/3 cup', available: false },
      { name: 'Grated parmesan cheese', amount: '1/2 cup', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Season chicken breasts generously with salt, pepper, and Italian herbs.',
      'Sear in butter and olive oil for 6-8 mins per side until golden. Remove.',
      'Sauté minced garlic, pour cream and chicken broth, bring to gentle simmer.',
      'Fold in parmesan, sun-dried tomatoes, and baby spinach until wilted.',
      'Return chicken to sauce, simmer 2 mins, and serve with pasta.'
    ],
    youtubeUrl: 'https://youtu.be/8Er5fjgOhhc?si=Jv5CtMj_-a9gRx6W',
    isSaved: false
  },
  {
    id: 'main-9',
    title: 'Zesty Sesame Teriyaki Salmon Bowl',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Japanese',
    prepTime: '10 mins',
    cookTime: '15 mins',
    calories: '520 kcal',
    rating: '4.8',
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy skin-on salmon fillet drizzled with rich honey-soy glaze over cauliflower rice and avocado slices.',
    ingredients: [
      { name: 'Fresh Atlantic salmon fillet', amount: '2 fillets', available: true },
      { name: 'Steamed jasmine or cauliflower rice', amount: '2 cups', available: true },
      { name: 'Ripe avocado (sliced)', amount: '1 whole', available: true },
      { name: 'Soy sauce or Tamari', amount: '3 tbsp', available: true },
      { name: 'Toasted sesame seeds & scallions', amount: '2 tbsp', available: false },
      { name: 'Fresh ginger (grated)', amount: '1 tsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Whisk soy sauce, ginger, garlic, and honey into a glossy reduction.',
      'Sear salmon skin-side down in a hot cast-iron skillet for 4 mins.',
      'Flip and cook 3 mins while basting glaze continuously.',
      'Serve over rice with sliced avocado and sesame seeds.'
    ],
    youtubeUrl: 'https://youtu.be/nUanx98Gztg?si=jJ_x0ynSff2G4RCI',
    isSaved: false
  },
  {
    id: 'main-10',
    title: 'Classic Italian Fettuccine Alfredo',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Italian',
    prepTime: '10 mins',
    cookTime: '12 mins',
    calories: '540 kcal',
    rating: '4.8',
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    description: 'Silky golden fettuccine tossed in a rich emulsion of European butter, aged Parmigiano Reggiano, and freshly cracked black pepper.',
    isVeg: true,
    ingredients: [
      { name: 'Fettuccine pasta', amount: '300g', available: true },
      { name: 'Unsalted high-fat butter', amount: '1/2 cup', available: true },
      { name: 'Freshly grated Parmigiano Reggiano', amount: '1.5 cups', available: true },
      { name: 'Heavy whipping cream', amount: '1/4 cup', available: true },
      { name: 'Nutmeg & black pepper', amount: '1/2 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Boil pasta in well-salted water until al dente; reserve 1 cup starchy pasta water.',
      'Melt butter over low heat in a deep skillet with a ladle of pasta water.',
      'Toss warm pasta vigorously into the butter, raining in grated Parmesan to create a silky sauce.',
      'Finish with freshly grated nutmeg and crushed black peppercorns.'
    ],
    youtubeUrl: 'https://youtu.be/LPPcNPdq_j4?si=zFn_DMCOIdIi7jrV',
    isSaved: false
  },
  {
    id: 'main-11',
    title: 'Spicy Thai Basil & Cashew Tofu Stir-Fry',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Thai',
    prepTime: '12 mins',
    cookTime: '10 mins',
    calories: '390 kcal',
    rating: '4.7',
    reviews: 76,
    image: '/thai_basil_tofu.jpg',
    description: 'Crisp bell peppers, crispy pressed tofu, and fragrant holy basil tossed in a savory chili-garlic sauce.',
    ingredients: [
      { name: 'Extra firm tofu (cubed & pressed)', amount: '1 block (400g)', available: true },
      { name: 'Fresh holy basil leaves', amount: '1 large handful', available: true },
      { name: 'Red & yellow bell peppers', amount: '2 sliced', available: true },
      { name: 'Toasted whole cashews', amount: '1/3 cup', available: false },
      { name: 'Bird\'s eye chilies', amount: '2 chilies', available: true },
      { name: 'Dark mushroom soy sauce', amount: '2 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Pan-fry cubed tofu until crispy golden on all sides.',
      'Flash fry bell peppers, garlic, and chilies in hot wok.',
      'Add soy sauce, toasted cashews, and turn off heat.',
      'Fold in holy basil leaves until just wilted. Serve with jasmine rice.'
    ],
    youtubeUrl: 'https://youtu.be/x1aeTKGy64k?si=pxqmRtN4hpUVSC2F',
    isSaved: false
  },
  {
    id: 'main-12',
    title: 'South Indian Malabar Fish Curry',
    course: 'Main Course',
    category: 'Main Course',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    calories: '420 kcal',
    rating: '4.9',
    reviews: 95,
    image: '/malabar_fish_curry.png',
    description: 'Coastal kingfish steaks simmered in creamy coconut milk with mustard seeds, curry leaves, and sour Kudampuli (Malabar tamarind).',
    ingredients: [
      { name: 'Fresh Kingfish or Pomfret steaks', amount: '400g', available: true },
      { name: 'Fresh thick coconut milk', amount: '1 cup', available: true },
      { name: 'Shallots (small onions)', amount: '10 sliced', available: true },
      { name: 'Fresh curry leaves & green chilies', amount: '2 sprigs', available: true },
      { name: 'Coconut oil & mustard seeds', amount: '2 tbsp', available: true },
      { name: 'Kudampuli (Cocum / Malabar tamarind)', amount: '2 pieces soaked', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Soak Kudampuli in 1/2 cup warm water for 10 minutes.',
      'Heat coconut oil in an earthenware pot (Meen Chatti); splutter mustard seeds, fenugreek, and fresh curry leaves.',
      'Sauté sliced shallots, ginger, garlic, and turmeric until aromatic.',
      'Add fish steaks, Kudampuli water, and thin coconut milk; simmer gently for 8-10 minutes.',
      'Pour thick coconut milk, swirl pot gently without breaking fish, and turn off heat. Best eaten with appam or rice.'
    ],
    youtubeUrl: 'https://youtu.be/eCIT0GyP3D0?si=wHroS5FoAUn-f0X6',
    isSaved: false
  },

  // ===================== DESSERTS (6) =====================
  {
    id: 'dessert-1',
    title: 'Authentic Italian Tiramisu',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'Italian',
    prepTime: '25 mins',
    cookTime: '0 mins',
    calories: '420 kcal',
    rating: '5.0',
    reviews: 240,
    image: '/tiramisu.jpg',
    description: 'Airy ladyfingers soaked in dark espresso and Marsala, layered with whipped mascarpone cream and dusted with bitter cocoa.',
    ingredients: [
      { name: 'Savoiardi (Italian ladyfingers)', amount: '24 biscuits', available: true },
      { name: 'Creamy Italian Mascarpone', amount: '500g', available: true },
      { name: 'Fresh egg yolks & sugar', amount: '4 yolks, 1/2 cup', available: true },
      { name: 'Strong freshly brewed espresso', amount: '1.5 cups', available: true },
      { name: 'Pure Dutch-process cocoa powder', amount: '3 tbsp', available: true },
      { name: 'Marsala wine or dark rum', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Whisk egg yolks and sugar over a gentle double boiler until pale and ribbon-like. Fold in mascarpone until silky.',
      'In a separate bowl, whip egg whites or heavy cream to stiff peaks and gently fold into mascarpone cream.',
      'Quickly dip ladyfingers into espresso mixed with marsala (1 second per side).',
      'Layer ladyfingers and cream in a serving dish. Chill in refrigerator for at least 6 hours.',
      'Dust generously with unsweetened Dutch cocoa powder right before slicing.'
    ],
    youtubeUrl: 'https://youtu.be/7VTtenyKRg4?si=JU_yj6CMXMNddNYI',
    isSaved: true
  },
  {
    id: 'dessert-2',
    title: 'Molten Chocolate Lava Cake',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'French',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '480 kcal',
    rating: '4.9',
    reviews: 198,
    image: '/lava_cake.png',
    description: 'Decadent dark chocolate soufflé cakes with a molten, oozing chocolate center, served warm with vanilla ice cream.',
    ingredients: [
      { name: 'Bittersweet chocolate (70%)', amount: '150g', available: true },
      { name: 'Unsalted butter', amount: '1/2 cup', available: true },
      { name: 'Whole eggs and egg yolks', amount: '2 eggs + 2 yolks', available: true },
      { name: 'Confectioners sugar & flour', amount: '1/2 cup + 2 tbsp', available: true },
      { name: 'Madagascar vanilla bean ice cream', amount: '2 scoops', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Melt dark chocolate and butter together in a heatproof bowl set over simmering water.',
      'Whisk eggs, yolks, and powdered sugar until thick and pale yellow.',
      'Fold melted chocolate into eggs, then sift in flour gently.',
      'Pour into buttered and cocoa-dusted ramekins. Bake at 200°C (400°F) for exactly 12 minutes.',
      'Loosen edges, invert onto plates, and serve immediately with vanilla bean ice cream.'
    ],
    youtubeUrl: 'https://youtu.be/F3jJVS3NHf8?si=hOeVjS_QIBQ-NV27',
    isSaved: false
  },
  {
    id: 'dessert-3',
    title: 'New York Baked Berry Cheesecake',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'American',
    prepTime: '30 mins',
    cookTime: '55 mins',
    calories: '510 kcal',
    rating: '4.9',
    reviews: 175,
    image: '/berry_cheesecake.jpg',
    description: 'Dense, rich, velvety cream cheese cake on a graham cracker crust, topped with fresh blueberry and raspberry compote.',
    ingredients: [
      { name: 'Philadelphia cream cheese', amount: '600g', available: true },
      { name: 'Graham cracker crumbs & butter', amount: '1.5 cups', available: true },
      { name: 'Sour cream & pure vanilla', amount: '1/2 cup', available: true },
      { name: 'Granulated sugar & eggs', amount: '3/4 cup, 3 eggs', available: true },
      { name: 'Fresh wild berries (blueberries/raspberries)', amount: '1 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Press buttered graham crumbs firmly into base of springform pan; bake 10 mins at 175°C.',
      'Beat room-temperature cream cheese and sugar until smooth without incorporating excess air.',
      'Add sour cream, vanilla, and eggs one by one on low speed.',
      'Bake in a water bath for 55 mins until edges are set and center has a slight wobble.',
      'Cool in oven with door ajar for 1 hr, then refrigerate overnight. Top with berry compote.'
    ],
    youtubeUrl: 'https://youtu.be/MG-rYWPD08A?si=0Izm982eiwBcnu1-',
    isSaved: false
  },
  {
    id: 'dessert-4',
    title: 'French Crème Brûlée',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'French',
    prepTime: '15 mins',
    cookTime: '35 mins',
    calories: '390 kcal',
    rating: '4.8',
    reviews: 142,
    image: '/creme_brulee.jpg',
    description: 'Silky rich vanilla bean custard topped with a contrasting brittle layer of crackling caramelized amber sugar.',
    ingredients: [
      { name: 'Heavy whipping cream (36%)', amount: '2 cups', available: true },
      { name: 'Egg yolks', amount: '5 large', available: true },
      { name: 'Granulated sugar (custard + topping)', amount: '1/2 cup', available: true },
      { name: 'Fine sea salt', amount: '1 pinch', available: true },
      { name: 'Whole vanilla bean pod (scraped)', amount: '1 pod', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Scald cream with split vanilla bean pod and seeds in a saucepan.',
      'Whisk egg yolks and sugar until combined. Temper slowly with hot cream.',
      'Strain custard into shallow ramekins. Bake in water bath at 150°C (300°F) for 35 minutes.',
      'Chill ramekins for at least 4 hours until cold and set.',
      'Sprinkle thin layer of sugar on top and caramelize with blowtorch until golden and crisp.'
    ],
    youtubeUrl: 'https://youtu.be/SDawdqxkqnA?si=LSiCYySWvhmri_h-',
    isSaved: false
  },
  {
    id: 'dessert-5',
    title: 'Salted Caramel Chocolate Fudge Brownies',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'American',
    prepTime: '15 mins',
    cookTime: '25 mins',
    calories: '440 kcal',
    rating: '4.9',
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-fudgy crackle-top brownies loaded with melted dark chocolate chunks and swirled with gooey fleur de sel caramel.',
    ingredients: [
      { name: 'Dutch cocoa powder & dark chocolate', amount: '100g each', available: true },
      { name: 'Unsalted melted butter', amount: '3/4 cup', available: true },
      { name: 'Eggs and brown sugar', amount: '3 eggs, 1 cup', available: true },
      { name: 'All-purpose flour', amount: '1/2 cup', available: true },
      { name: 'Flaky Maldon sea salt & caramel', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Beat eggs and sugars with an electric mixer for 5 minutes until thick and glossy for paper-thin crackly crust.',
      'Fold in melted chocolate-butter mixture, followed by sifted cocoa and flour.',
      'Spread batter into lined square pan, dollop salted caramel across top, and swirl with toothpick.',
      'Bake at 175°C (350°F) for 24-26 minutes. Do not overbake! Cool completely before slicing.'
    ],
    youtubeUrl: 'https://youtu.be/qqatOsi5nvU?si=VfQSVf8H6tMihdZi',
    isSaved: false
  },
  {
    id: 'dessert-6',
    title: 'Traditional Apple Cinnamon Crisp',
    course: 'Desserts',
    category: 'Desserts',
    cuisine: 'American',
    prepTime: '15 mins',
    cookTime: '30 mins',
    calories: '340 kcal',
    rating: '4.7',
    reviews: 93,
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80',
    description: 'Tender spiced Honeycrisp apple slices baked under a crunchy golden streusel of rolled oats, brown sugar, and butter.',
    ingredients: [
      { name: 'Honeycrisp or Granny Smith apples', amount: '4 peeled & sliced', available: true },
      { name: 'Old-fashioned rolled oats', amount: '3/4 cup', available: true },
      { name: 'Brown sugar & ground cinnamon', amount: '1/2 cup + 1 tsp', available: true },
      { name: 'Cold cubed butter', amount: '1/3 cup', available: true },
      { name: 'Pure maple syrup drizzle', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Toss apple slices with lemon juice, cinnamon, nutmeg, and 2 tbsp sugar in baking dish.',
      'Rub cold butter into oats, flour, and brown sugar using fingertips until coarse clumps form.',
      'Scatter oat crumble evenly over apple base.',
      'Bake at 180°C (350°F) for 30 minutes until apples are bubbly and topping is deep golden brown.',
      'Serve warm topped with vanilla ice cream and maple drizzle.'
    ],
    youtubeUrl: 'https://youtu.be/O9iFx6iFWxI?si=M6ZqEQIWTfTS7cwH',
    isSaved: false
  },

  // ===================== INDIAN SWEETS (MITHAI) (6) =====================
  {
    id: 'sweet-1',
    title: 'Melt-in-Mouth Royal Gulab Jamun',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '20 mins',
    calories: '360 kcal',
    rating: '5.0',
    reviews: 310,
    image: '/gulab_jamun.jpg',
    description: 'Deep-fried golden khoya dumplings soaked in fragrant sugar syrup infused with rose water, cardamom, and saffron.',
    ingredients: [
      { name: 'Fresh soft Khoya (Mawa)', amount: '200g', available: true },
      { name: 'Fine all-purpose flour (Maida)', amount: '3 tbsp', available: true },
      { name: 'Sugar (for syrup)', amount: '2 cups', available: true },
      { name: 'Cardamom pods & rose water', amount: '1 tsp', available: true },
      { name: 'Ghee for deep frying', amount: '2 cups', available: true },
      { name: 'Saffron strands & slivered pistachios', amount: '1 pinch', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Grate khoya and knead with maida and a pinch of baking powder until smooth and crack-free.',
      'Prepare sugar syrup by simmering sugar and water with crushed cardamom and rose water to 1-string consistency.',
      'Roll dough into tiny seamless balls.',
      'Slowly fry in warm ghee over low flame until even dark golden amber throughout.',
      'Drain and submerge directly into warm sugar syrup for 2 hours before serving warm.'
    ],
    youtubeUrl: 'https://youtu.be/zEBC9Ozmwlg?si=GCntROEbcTCxNkNm',
    isSaved: true
  },
  {
    id: 'sweet-2',
    title: 'Kesar Pista Rasmalai',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '25 mins',
    cookTime: '30 mins',
    calories: '310 kcal',
    rating: '4.9',
    reviews: 265,
    image: '/rasmalai.png',
    description: 'Spongy flattened cottage cheese discs floating in chilled saffron and cardamom rabri milk, topped with pistachios.',
    ingredients: [
      { name: 'Fresh homemade Chenna (curdled milk)', amount: '1 liter cow milk', available: true },
      { name: 'Full cream milk (for Rabri)', amount: '1 liter', available: true },
      { name: 'Sugar for boiling syrup & milk', amount: '1.5 cups', available: true },
      { name: 'Green cardamom powder', amount: '1 tsp', available: true },
      { name: 'Pure Kashmiri Saffron & pistachios', amount: '1 pinch', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Knead fresh chenna with heel of hand for 10 mins until fat separates and dough is smooth. Shape into flat discs.',
      'Boil discs in light sugar water for 15 minutes until doubled in size and spongy. Squeeze gently.',
      'Reduce 1 liter of milk by half with saffron and cardamom to create fragrant golden rabri.',
      'Immerse chenna patties in warm rabri and refrigerate for 4 hours.',
      'Serve chilled garnished heavily with slivered green pistachios.'
    ],
    youtubeUrl: 'https://youtu.be/9mm8my_NLlY?si=AVqvIujynRMFI5Tl',
    isSaved: true
  },
  {
    id: 'sweet-3',
    title: 'Gajar Ka Halwa (Carrot Pudding)',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '35 mins',
    calories: '420 kcal',
    rating: '5.0',
    reviews: 280,
    image: '/gajar_ka_halwa.jpg',
    description: 'Winter-special dessert made of slow-simmered grated red Delhi carrots in full-fat milk, roasted khoya, pure ghee, and nuts.',
    ingredients: [
      { name: 'Fresh juicy red carrots (grated)', amount: '1 kg', available: true },
      { name: 'Full cream buffalo milk', amount: '1 liter', available: true },
      { name: 'Desi Ghee', amount: '4 tbsp', available: true },
      { name: 'Sugar', amount: '3/4 cup', available: true },
      { name: 'Cashews, almonds, and raisins', amount: '1/3 cup', available: true },
      { name: 'Fresh Khoya (Mawa)', amount: '100g crumbled', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Simmer grated red carrots in milk in a heavy kadai until milk completely evaporates (approx 25 mins).',
      'Add sugar and cook down released liquids.',
      'Pour pure desi ghee and roast (bhunao) the halwa on medium heat until glossy and fragrant.',
      'Stir in crumbled khoya, cardamom powder, and ghee-fried cashews and raisins.',
      'Serve hot and decadent.'
    ],
    youtubeUrl: 'https://youtu.be/CNJBC-TJJTA?si=zjaRBVij5EX73tu0',
    isSaved: false
  },
  {
    id: 'sweet-4',
    title: 'Crispy Saffron Jalebi with Rabdi',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '390 kcal',
    rating: '4.8',
    reviews: 190,
    image: '/jalebi.jpg',
    description: 'Spiral, crispy, fermented batter coils fried in desi ghee and plunged into saffron-rose sugar syrup, served with creamy rabdi.',
    ingredients: [
      { name: 'All-purpose flour & cornstarch', amount: '1 cup', available: true },
      { name: 'Thick curd (yogurt)', amount: '2 tbsp', available: true },
      { name: 'Sugar & saffron strands', amount: '1.5 cups', available: true },
      { name: 'Desi ghee for frying', amount: '2 cups', available: true },
      { name: 'Chilled thickened malai Rabdi', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Mix flour, cornstarch, yogurt, and water into a smooth batter; ferment overnight or use baking powder for instant.',
      'Prepare 1-string sugar syrup with saffron and lemon juice to prevent crystallization.',
      'Pour batter into squeeze bottle or cloth nozzle; pipe spirals into moderately hot ghee.',
      'Fry until crisp and golden, transfer immediately to warm saffron syrup for 2 minutes.',
      'Serve hot with a dollop of chilled malai rabdi.'
    ],
    youtubeUrl: 'https://youtu.be/VkoOZvLCG8U?si=aSXkGYWoLgmGY8Ba',
    isSaved: false
  },
  {
    id: 'sweet-5',
    title: 'Besan Ladoo with Roasted Nuts',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '10 mins',
    cookTime: '25 mins',
    calories: '280 kcal',
    rating: '4.9',
    reviews: 160,
    image: '/besan_ladoo.jpg',
    description: 'Aromatic spheres made from slow-roasted coarse gram flour (besan) in desi ghee, scented with cardamom and boora sugar.',
    ingredients: [
      { name: 'Coarse gram flour (Mota Besan)', amount: '2 cups', available: true },
      { name: 'Pure Desi Ghee', amount: '1/2 cup + 2 tbsp', available: true },
      { name: 'Boora / Tagar (coarse ground sugar)', amount: '1 cup', available: true },
      { name: 'Green cardamom powder', amount: '1 tsp', available: true },
      { name: 'Melon seeds (Magaz) & chopped pistachios', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Roast besan in melted ghee in a heavy kadai over low flame for 20 minutes until nutty and golden.',
      'Sprinkle a few drops of water in the hot besan to create signature grainy (danedar) texture.',
      'Let mixture cool to lukewarm before adding tagar sugar and cardamom (adding while hot melts sugar!).',
      'Mix thoroughly, shape into round balls by hand, and store in airtight jar for up to 3 weeks.'
    ],
    youtubeUrl: 'https://youtu.be/M6Ln1UgY5fQ?si=1DYzz3OR6ptjZ8-u',
    isSaved: false
  },
  {
    id: 'sweet-6',
    title: 'Rich Shahi Tukda (Mughlai Bread Pudding)',
    course: 'Sweets',
    category: 'Sweets',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    calories: '450 kcal',
    rating: '4.8',
    reviews: 135,
    image: '/shahi_tukda.jpg',
    description: 'Crispy ghee-fried bread triangles soaked in saffron sugar syrup and topped with condensed malai rabri and silver leaf (varq).',
    ingredients: [
      { name: 'White sandwich bread triangles', amount: '4 slices', available: true },
      { name: 'Desi ghee for frying', amount: '1/2 cup', available: true },
      { name: 'Sugar syrup flavored with cardamom', amount: '1 cup', available: true },
      { name: 'Thick creamy Rabri', amount: '1 cup', available: true },
      { name: 'Edible Silver Leaf (Chandi ka Varq)', amount: '1 sheet', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Cut crusts off bread and slice diagonally into neat triangles.',
      'Deep fry bread triangles in pure ghee until crispy and reddish gold.',
      'Dip fried bread into warm saffron sugar syrup for 30 seconds, then arrange on platter.',
      'Pour rich rabri over the toasts, garnish with slivered pistachios, saffron, and silver leaf.'
    ],
    youtubeUrl: 'https://youtu.be/4OgBldTs0us?si=BoXMW5joz4sDhBn5',
    isSaved: false
  },

  // ===================== SNACKS & STREET FOOD (6) =====================
  {
    id: 'snack-1',
    title: 'Mumbai Pav Bhaji with Butter Pav',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '20 mins',
    calories: '490 kcal',
    rating: '5.0',
    reviews: 290,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    description: 'Mashed medley of potatoes, tomatoes, peas, and peppers spiced with pav bhaji masala, served with buttery griddled ladi pav.',
    ingredients: [
      { name: 'Boiled potatoes, peas, cauliflower', amount: '3 cups mashed', available: true },
      { name: 'Finely chopped onions & tomatoes', amount: '2 each', available: true },
      { name: 'Butter', amount: '4 tbsp', available: true },
      { name: 'Special Pav Bhaji Masala', amount: '2 tbsp', available: true },
      { name: 'Fresh soft Ladi Pav buns', amount: '4 pairs', available: true },
      { name: 'Kashmiri red chili garlic paste', amount: '1.5 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Boil vegetables and mash vigorously with a potato masher until coarse puree.',
      'On a large flat tawa, melt butter, sauté onions, garlic-chili paste, capsicum, and tomatoes.',
      'Add pav bhaji masala, Kashmiri chili powder, mashed veggies, and water. Simmer on high heat.',
      'Slit pav in half and toast on the buttery tawa with a sprinkle of bhaji gravy and coriander.',
      'Serve bhaji topped with a big melting cube of butter, chopped raw onions, and fresh lemon wedges.'
    ],
    youtubeUrl: 'https://youtu.be/dz6eh3U5zEM?si=Ey4vks1gMU8XqAJ9',
    isSaved: true
  },
  {
    id: 'snack-2',
    title: 'Dahi Puri Chaat with Crispy Sev',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '0 mins',
    calories: '280 kcal',
    rating: '4.9',
    reviews: 178,
    image: '/dahi_puri.jpg',
    description: 'Crisp semolina puries filled with boiled potatoes and chickpeas, smothered in sweet chilled dahi, chutneys, and nylon sev.',
    ingredients: [
      { name: 'Crisp round Golgappa puries', amount: '12 pieces', available: true },
      { name: 'Boiled diced potatoes & sprouts', amount: '1 cup', available: true },
      { name: 'Sweetened thick chilled curd (Dahi)', amount: '1.5 cups', available: true },
      { name: 'Spicy mint-coriander green chutney', amount: '1/3 cup', available: true },
      { name: 'Sweet tamarind date chutney', amount: '1/3 cup', available: true },
      { name: 'Nylon Sev & fresh pomegranate arils', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Crack a hole in the center of each hollow puri and arrange on serving plate.',
      'Stuff each puri with spiced boiled potatoes, black chickpeas, and pinch of chaat masala.',
      'Drizzle spicy green chutney and sweet date-tamarind chutney into every shell.',
      'Bathe completely in sweetened whisked yogurt.',
      'Top generously with nylon sev, pomegranate seeds, and fresh coriander. Eat immediately in one bite!'
    ],
    youtubeUrl: 'https://youtu.be/rNA1ORWiWd8?si=avZ8T8vEZm09qCI7',
    isSaved: false
  },
  {
    id: 'snack-3',
    title: 'Delhi-Style Aloo Tikki Chaat',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '320 kcal',
    rating: '4.8',
    reviews: 140,
    image: '/delhi_aloo_tikki.jpg',
    description: 'Super crisp shallow-fried potato patties topped with spicy ragda chana, yogurt, sweet & sour chutneys, and ginger matchsticks.',
    ingredients: [
      { name: 'Boiled mashed potatoes & cornstarch', amount: '3 large', available: true },
      { name: 'Spiced chana dal stuffing', amount: '1/2 cup', available: true },
      { name: 'Green chutney & tamarind chutney', amount: '3 tbsp each', available: true },
      { name: 'Whisked spiced dahi', amount: '1/2 cup', available: true },
      { name: 'Chaat masala & roasted cumin powder', amount: '1 tsp', available: true },
      { name: 'Crispy fried boondi for crunch', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Form potato dough discs, stuff with spiced chana dal, and seal edges.',
      'Slow-fry on a tawa in ghee until deeply crunchy and brown on both sides.',
      'Lightly crush hot tikkis into bowl, spoon over spicy chana curry and chilled yogurt.',
      'Drizzle sweet tamarind chutney, green mint chutney, and finish with ginger juliennes and chaat masala.'
    ],
    youtubeUrl: 'https://youtu.be/AYrDtXQh2Wc?si=L9WhcJBfnZHR-kzX',
    isSaved: false
  },
  {
    id: 'snack-4',
    title: 'Gourmet Loaded Nachos with Queso',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Mexican',
    prepTime: '10 mins',
    cookTime: '8 mins',
    calories: '450 kcal',
    rating: '4.8',
    reviews: 120,
    image: '/loaded_nachos.jpg',
    description: 'Crisp stone-ground tortilla chips smothered in melted cheddar queso, black beans, jalapeño rings, pico de gallo, and sour cream.',
    ingredients: [
      { name: 'Corn tortilla chips', amount: '1 large bag', available: true },
      { name: 'Shredded sharp cheddar & Monterey Jack', amount: '2 cups', available: true },
      { name: 'Fresh pico de gallo (tomato, onion, cilantro)', amount: '1 cup', available: true },
      { name: 'Black beans & pickled jalapeños', amount: '1/2 cup', available: true },
      { name: 'Homemade creamy Guacamole', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Spread a single layer of tortilla chips on oven-safe tray.',
      'Top with black beans, jalapeños, and generous layer of shredded cheese.',
      'Broil for 5-7 minutes until cheese is melted and bubbling.',
      'Top immediately with fresh pico de gallo, dollops of sour cream, and fresh guacamole.'
    ],
    youtubeUrl: 'https://youtu.be/bY8Md7ng_y0?si=KsvUh6lp-9KULbH0',
    isSaved: false
  },
  {
    id: 'snack-5',
    title: 'Paneer Kathi Roll (Frankie)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '390 kcal',
    rating: '4.8',
    reviews: 145,
    image: '/paneer_kathi_roll.png',
    description: 'Flaky paratha layered with seasoned pan-tossed paneer tikka cubes, sliced onions, chaat masala, and spicy mint chutney.',
    ingredients: [
      { name: 'Layered wheat or maida parathas', amount: '2', available: true },
      { name: 'Marinated paneer strips & capsicum', amount: '200g', available: true },
      { name: 'Sliced red onions', amount: '1 medium', available: true },
      { name: 'Mint coriander chutney', amount: '3 tbsp', available: true },
      { name: 'Kolkata Frankie Masala spice mix', amount: '1 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pan-sear marinated paneer strips and bell peppers in butter on high heat for 3 mins.',
      'Crisp the paratha on a hot tawa with a light coating of butter.',
      'Spread spicy green chutney along center, align paneer filling, and top with onion rings.',
      'Dust with frankie masala, squeeze lemon juice, roll tightly into parchment paper, and serve.'
    ],
    youtubeUrl: 'https://youtu.be/bWrTQ1imKTg?si=Ye3BoOmmru50bOZ_',
    isSaved: false
  },
  {
    id: 'snack-6',
    title: 'Crispy Falafel Pita Pocket',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Middle Eastern',
    prepTime: '20 mins',
    cookTime: '10 mins',
    calories: '370 kcal',
    rating: '4.7',
    reviews: 99,
    image: '/falafel_pita.jpg',
    description: 'Golden crispy chickpea falafels tucked inside warm pita pockets with crunchy pickled cucumber, shredded lettuce, and tahini sauce.',
    ingredients: [
      { name: 'Soaked chickpeas & herbs (ground)', amount: '2 cups', available: true },
      { name: 'Warm pocket pita bread', amount: '2 pitas', available: true },
      { name: 'Crisp lettuce & diced tomatoes', amount: '1 cup', available: true },
      { name: 'Cumin, coriander, and garlic', amount: '1.5 tsp', available: true },
      { name: 'Creamy Sesame Tahini Sauce', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pulse soaked raw chickpeas with parsley, cilantro, garlic, and spices in food processor.',
      'Form into small balls or patties and deep fry in hot oil until crunchy and deep brown.',
      'Slit warm pita pockets, spread garlic hummus inside.',
      'Stuff with hot falafels, crunchy pickled veggies, and drizzle tahini sauce generously.'
    ],
    youtubeUrl: 'https://youtu.be/Q6udZLwaYG8?si=Mw9cgviSxD_r1lL_',
    isSaved: false
  },
  {
    id: 'snack-7',
    title: 'Crispy Punjabi Samosa with Mint Chutney',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '25 mins',
    cookTime: '20 mins',
    calories: '310 kcal',
    rating: '5.0',
    reviews: 620,
    image: '/samosa.jpg',
    description: 'Flaky, pyramid-shaped golden crust stuffed with spiced boiled potatoes, green peas, whole coriander seeds, and ginger.',
    ingredients: [
      { name: 'All-purpose flour (Maida) & Ajwain', amount: '2 cups', available: true },
      { name: 'Boiled potatoes (crumbled)', amount: '3 large', available: true },
      { name: 'Green peas & crushed cashews', amount: '1/2 cup', available: true },
      { name: 'Crushed coriander seeds & fennel', amount: '1 tbsp', available: true },
      { name: 'Ghee or oil for shortening & deep frying', amount: '2 cups', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Rub ghee into flour with ajwain and salt until breadcrumb consistency; knead into a stiff dough.',
      'Sauté crushed spices, ginger, green chilies, green peas, and crumbled potatoes until fragrant.',
      'Roll oval dough sheets, cut in half, form cones, stuff generously with aloo filling, and seal edges.',
      'Slow-fry on low-to-medium heat for 15-20 mins until blister-free, crunchy, and deep golden.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=punjabi+samosa+recipe+halwai+style',
    isSaved: false
  },
  {
    id: 'snack-8',
    title: 'Mumbai Vada Pav with Dry Garlic Chutney',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '340 kcal',
    rating: '5.0',
    reviews: 580,
    image: '/mumbai_vada_pav.jpg',
    description: 'The undisputed king of Mumbai street food: spiced mashed potato batata vada nestled in soft ladi pav with spicy dry red garlic chutney.',
    ingredients: [
      { name: 'Boiled mashed potatoes', amount: '4 medium', available: true },
      { name: 'Besan (gram flour) for batter', amount: '1.5 cups', available: true },
      { name: 'Fresh soft Ladi Pav', amount: '4 pavs', available: true },
      { name: 'Mustard seeds, curry leaves & turmeric', amount: '1 tbsp', available: true },
      { name: 'Dry coconut garlic chutney & fried green chillies', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Temper boiled mashed potatoes with mustard seeds, curry leaves, ginger-garlic-chilli paste, and turmeric.',
      'Shape into smooth round balls and dip each in seasoned turmeric-besan batter.',
      'Deep fry in hot oil until crisp and light golden yellow.',
      'Slit pav buns, smear green mint chutney and sweet chutney, sprinkle spicy dry garlic chutney, tuck in hot vada, and serve with fried salted chilli.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=mumbai+vada+pav+recipe+with+garlic+chutney',
    isSaved: false
  },
  {
    id: 'snack-9',
    title: 'Street-Style Sev Puri Chaat',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '10 mins',
    cookTime: '0 mins',
    calories: '240 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/street_sev_puri.jpg',
    description: 'Crispy flat papdis topped with diced boiled potatoes, onions, a trio of spicy, sweet & garlic chutneys, topped with a mountain of nylon sev.',
    ingredients: [
      { name: 'Flat crispy flour papdis', amount: '15-18 papdis', available: true },
      { name: 'Boiled diced potatoes', amount: '1 cup', available: true },
      { name: 'Finely chopped red onions & raw mango', amount: '1/2 cup', available: true },
      { name: 'Mint coriander & sweet tamarind chutneys', amount: '1/4 cup each', available: true },
      { name: 'Spicy red garlic chutney', amount: '2 tbsp', available: true },
      { name: 'Crunchy Nylon Sev & chaat masala', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Arrange flat crispy puris in a single layer on a wide plate.',
      'Top each puri with boiled potato cubes and finely chopped onions.',
      'Drizzle spicy green chutney, fiery garlic chutney, and sweet tamarind chutney on each piece.',
      'Generously blanket with crisp nylon sev, sprinkle chaat masala, and garnish with fresh coriander and raw mango.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=mumbai+sev+puri+recipe',
    isSaved: false
  },
  {
    id: 'snack-10',
    title: 'Crispy Onion Pakoda (Kanda Bhaji)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '10 mins',
    cookTime: '12 mins',
    calories: '270 kcal',
    rating: '4.9',
    reviews: 420,
    image: '/onion_pakoda.jpg',
    description: 'Ultra-crunchy Mumbai street-style shredded onion fritters made without extra water, spiced with ajwain, green chilies, and coriander.',
    ingredients: [
      { name: 'Thinly sliced red onions', amount: '3 large', available: true },
      { name: 'Besan (gram flour)', amount: '1 cup', available: true },
      { name: 'Rice flour (for extra crunch)', amount: '2 tbsp', available: true },
      { name: 'Carom seeds (Ajwain) & turmeric', amount: '1 tsp', available: true },
      { name: 'Green chilies & fresh coriander', amount: '2 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Toss sliced onions with salt, green chilies, and ajwain; squeeze and rest 5 mins until onions release moisture.',
      'Mix in besan and rice flour using only the released onion juices without adding water.',
      'Drop loose clumps into moderately hot oil and fry evenly on medium flame.',
      'Drain when deep golden brown and crispy; serve piping hot with cutting chai.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=kanda+bhaji+crispy+onion+pakoda+recipe',
    isSaved: false
  },
  {
    id: 'snack-11',
    title: 'Classic Pani Puri (Gol Gappe / Puchka)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '0 mins',
    calories: '190 kcal',
    rating: '5.0',
    reviews: 890,
    image: '/classic_pani_puri.jpg',
    description: 'Hollow, ultra-crisp semolina puries filled with spiced ragda or black chickpeas, bathed in icy tangy mint-coriander pani and sweet tamarind water.',
    ingredients: [
      { name: 'Crispy hollow Golgappa puris', amount: '20 puris', available: true },
      { name: 'Boiled mashed potatoes & black chickpeas / yellow peas', amount: '1.5 cups', available: true },
      { name: 'Fresh mint leaves, coriander & green chillies', amount: '1 cup', available: true },
      { name: 'Pani Puri masala, black salt & roasted cumin', amount: '2 tbsp', available: true },
      { name: 'Sweet tamarind date chutney & chilled water', amount: '1 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Blend mint, coriander, ginger, green chillies, lemon juice, black salt, and ice-cold water into refreshing spicy teekha pani.',
      'Prepare sweet khatti-meethi pani by diluting tamarind-date chutney with cold water.',
      'Make a spiced filling using boiled mashed potatoes, boiled chickpeas, and chaat masala.',
      'Poke a hole in puri, add filling, fill generously with chilled teekha pani, and eat immediately in one whole bite!'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=pani+puri+golgappa+recipe+street+style',
    isSaved: false
  },
  {
    id: 'snack-12',
    title: 'Cheesy Garlic Breadsticks',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Italian / American',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '320 kcal',
    rating: '4.8',
    reviews: 260,
    image: '/cheesy_garlic_breadsticks.jpg',
    description: 'Bakery-fresh soft pull-apart breadsticks loaded with roasted garlic butter, oregano, chili flakes, and gooey melted mozzarella cheese.',
    ingredients: [
      { name: 'Yeast bread dough or French loaf slices', amount: '300g', available: true },
      { name: 'Minced fresh garlic & salted butter', amount: '4 tbsp', available: true },
      { name: 'Shredded Mozzarella & Cheddar cheese', amount: '1.5 cups', available: false },
      { name: 'Dried oregano & red chili flakes', amount: '1 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Melt butter and whisk with finely minced garlic and chopped parsley.',
      'Roll out dough into an oval, brush inside with garlic butter, and pack with shredded mozzarella.',
      'Fold in half, crimp edges, score into fingers, and top with more garlic butter and Italian herbs.',
      'Bake at 200°C (400°F) for 12-15 minutes until bubbly, golden brown, and delightfully stretchy.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=dominos+style+stuffed+garlic+bread+recipe',
    isSaved: false
  },
  {
    id: 'snack-13',
    title: 'Crispy Vegetable Spring Rolls',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Asian / Indo-Chinese',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '280 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/veg_spring_rolls.png',
    description: 'Golden crunchy rolls stuffed with wok-tossed cabbage, shredded carrots, bell peppers, spring onions, and soy-garlic seasoning.',
    ingredients: [
      { name: 'Spring roll wrappers (pastry sheets)', amount: '10 sheets', available: true },
      { name: 'Shredded cabbage, carrots & bell peppers', amount: '3 cups', available: true },
      { name: 'Soy sauce, vinegar & white pepper', amount: '1.5 tbsp', available: true },
      { name: 'Garlic, ginger & green chillies', amount: '1 tbsp', available: true },
      { name: 'Sweet chili garlic dipping sauce', amount: '1/3 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Stir-fry shredded veggies in high-heat wok with garlic, ginger, soy sauce, and pepper until tender-crisp.',
      'Place filling diagonally on wrapper, fold corners securely, seal with cornstarch slurry.',
      'Deep fry in hot oil on medium heat until golden, bubbly, and shatteringly crisp.',
      'Slice diagonally and serve with sweet chili sauce or schezwan dip.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+veg+spring+rolls+recipe',
    isSaved: false
  },
  {
    id: 'snack-17',
    title: 'Crispy Golden Mozzarella Cheese Sticks',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'American / Italian',
    prepTime: '15 mins',
    cookTime: '5 mins',
    calories: '330 kcal',
    rating: '4.8',
    reviews: 240,
    image: '/mozzarella_sticks.png',
    description: 'Herb-seasoned crunchy breadcrumb crust encasing stretchy melted mozzarella cheese, served with rich marinara dipping sauce.',
    ingredients: [
      { name: 'Low-moisture Mozzarella cheese block (cut into batons)', amount: '250g', available: false },
      { name: 'Panko breadcrumbs & Italian seasoning', amount: '1.5 cups', available: true },
      { name: 'Eggs (beaten) or cornstarch slurry', amount: '2 eggs', available: true },
      { name: 'All-purpose flour & garlic powder', amount: '1/2 cup', available: true },
      { name: 'Warm zesty Marinara sauce for dipping', amount: '1/2 cup', available: false }
    ],
    missingCount: 2,
    instructions: [
      'Cut mozzarella into finger-sized sticks; dredge in flour, dip in egg wash, and coat in seasoned panko.',
      'Double coat with egg and breadcrumbs for an impenetrable shield, then freeze for 45 minutes.',
      'Deep fry in hot oil (180°C/350°F) for 60-90 seconds until golden brown without bursting.',
      'Drain briefly and serve immediately for an epic, gooey cheese pull.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+mozzarella+cheese+sticks+recipe',
    isSaved: false
  },
  {
    id: 'snack-18',
    title: 'Steamed Vegetable Momos with Fiery Chutney',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Tibetan / Indo-Chinese',
    prepTime: '25 mins',
    cookTime: '12 mins',
    calories: '210 kcal',
    rating: '5.0',
    reviews: 490,
    image: '/steamed_veg_momos.jpg',
    description: 'Delicate, thin-skinned pleated dumplings stuffed with juicy seasoned cabbage, carrots, onions, and garlic, served with fiery red tomato-chili sauce.',
    ingredients: [
      { name: 'All-purpose flour dough (thinly rolled)', amount: '2 cups', available: true },
      { name: 'Finely minced cabbage, carrots & onions', amount: '2.5 cups', available: true },
      { name: 'Garlic, ginger & black pepper', amount: '1.5 tbsp', available: true },
      { name: 'Soy sauce & sesame oil', amount: '1.5 tbsp', available: true },
      { name: 'Spicy red tomato-chilli momo chutney', amount: '1/3 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Sauté minced vegetables with garlic, ginger, soy sauce, and black pepper on high heat for 3 minutes.',
      'Roll dough into thin translucent 3-inch discs with slightly thinner edges.',
      'Place 1 tbsp filling in center, pleat and pinch edges together to form traditional crescent momos.',
      'Steam in a greased steamer for 10-12 minutes until glossy and translucent; serve piping hot with spicy red chutney.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=veg+momos+recipe+with+spicy+red+chutney',
    isSaved: false
  },
  {
    id: 'snack-19',
    title: 'Mumbai Chowpatty Bhel Puri',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '8 mins',
    cookTime: '0 mins',
    calories: '220 kcal',
    rating: '4.9',
    reviews: 380,
    image: '/mumbai_bhel_puri.jpg',
    description: 'Iconic beachside chaat tossed with light puffed rice, crispy papdis, crunchy sev, boiled potatoes, chopped onions, and three tangy chutneys.',
    ingredients: [
      { name: 'Crisp puffed rice (Murmura)', amount: '3 cups', available: true },
      { name: 'Crushed flat papdis & nylon sev', amount: '1 cup', available: true },
      { name: 'Boiled diced potatoes & chopped onions', amount: '1 cup', available: true },
      { name: 'Spicy green mint chutney & sweet tamarind chutney', amount: '3 tbsp each', available: true },
      { name: 'Roasted peanuts, chaat masala & lemon juice', amount: '2 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'In a wide mixing bowl, combine puffed rice, crushed papdis, roasted peanuts, and boiled potato cubes.',
      'Add finely chopped onions, tomatoes, and green chillies.',
      'Pour green chutney, spicy garlic chutney, and sweet tamarind chutney with a squeeze of fresh lemon.',
      'Toss vigorously for 15 seconds, top with extra nylon sev, and serve immediately in paper cones.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=mumbai+bhel+puri+chaat+chowpatty+recipe',
    isSaved: false
  },
  {
    id: 'snack-20',
    title: 'Stuffed Potato Bread Pakoda',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '360 kcal',
    rating: '4.8',
    reviews: 310,
    image: '/stuffed_bread_pakoda.jpg',
    description: 'Dhaba-style golden fried snack made of soft white bread sandwiches packed with spiced potato masala and green chutney, dipped in seasoned gram flour batter.',
    ingredients: [
      { name: 'White or whole wheat bread slices', amount: '4 slices', available: true },
      { name: 'Spiced boiled mashed potatoes', amount: '1.5 cups', available: true },
      { name: 'Besan (gram flour) with ajwain & turmeric', amount: '1.5 cups', available: true },
      { name: 'Mint coriander green chutney', amount: '3 tbsp', available: true },
      { name: 'Garam masala, chaat masala & oil for deep frying', amount: '2 cups', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Spread mint chutney on one bread slice and spiced mashed potato masala on the other; press together into a sandwich.',
      'Whisk besan with water, ajwain, salt, turmeric, and baking soda into a smooth, thick coating batter.',
      'Cut sandwich into triangles, dip into batter, and gently lower into hot oil.',
      'Deep fry on medium flame until puffed, golden, and crispy; slice and dust with chaat masala.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=halwai+style+stuffed+bread+pakoda+recipe',
    isSaved: false
  },
  {
    id: 'snack-22',
    title: 'Dilli Style Papdi Chaat',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '0 mins',
    calories: '290 kcal',
    rating: '5.0',
    reviews: 410,
    image: '/dilli_papdi_chaat.jpg',
    description: 'Crispy fried dough wafers (papdis) layered with boiled potatoes, chickpeas, sweetened whisked curd, tangy chutneys, and aromatic spice powders.',
    ingredients: [
      { name: 'Crisp round papdis', amount: '12-15 pieces', available: true },
      { name: 'Boiled diced potatoes & soaked boiled chickpeas', amount: '1 cup', available: true },
      { name: 'Sweetened thick whisked yogurt (Dahi)', amount: '1.5 cups', available: true },
      { name: 'Saunth (tamarind chutney) & spicy green chutney', amount: '1/3 cup each', available: true },
      { name: 'Roasted cumin, red chili & nylon sev', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Arrange papdis in a wide shallow bowl.',
      'Top with spiced boiled potatoes, soft chickpeas, and a sprinkle of chaat masala.',
      'Blanket generously with cold sweetened curd until all papdis are submerged.',
      'Drizzle tamarind saunth and green chutney; finish with roasted cumin powder, chili powder, sev, and pomegranate seeds.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=delhi+style+papdi+chaat+recipe',
    isSaved: false
  },
  {
    id: 'snack-23',
    title: 'Indo-Chinese Veg Manchurian Dry',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indo-Chinese',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '310 kcal',
    rating: '4.9',
    reviews: 370,
    image: '/veg_manchurian_dry.jpg',
    description: 'Crisp vegetable dumplings made from shredded cabbage and carrots, tossed in a sizzling wok with garlic, ginger, spring onions, and dark soy sauce.',
    ingredients: [
      { name: 'Finely grated cabbage, carrots & bell peppers', amount: '2.5 cups', available: true },
      { name: 'Corn flour & all-purpose flour', amount: '3 tbsp each', available: true },
      { name: 'Finely chopped garlic & ginger', amount: '2 tbsp', available: true },
      { name: 'Dark soy sauce, chili sauce & vinegar', amount: '2 tbsp', available: true },
      { name: 'Chopped spring onion greens', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Squeeze excess water from grated veggies; mix with flours, salt, and pepper into compact balls.',
      'Deep fry vegetable balls in hot oil until deeply golden and crispy.',
      'In a wok, sauté garlic, ginger, and green chillies on high flame; add sauces and a splash of water.',
      'Toss fried vegetable balls quickly in the glaze, coat evenly, and garnish with spring onion greens.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=veg+manchurian+dry+restaurant+style+recipe',
    isSaved: false
  },
  {
    id: 'snack-24',
    title: 'Crispy Paneer 65 Bites',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '350 kcal',
    rating: '4.9',
    reviews: 295,
    image: '/paneer_65.jpg',
    description: 'Spicy South Indian appetizer featuring batter-fried crispy paneer cubes tempered with fragrant curry leaves, mustard seeds, green chillies, and garlic.',
    ingredients: [
      { name: 'Fresh paneer (cut into bite-sized cubes)', amount: '250g', available: true },
      { name: 'Corn flour, rice flour & curd', amount: '3 tbsp each', available: true },
      { name: 'Kashmiri red chili powder & ginger-garlic paste', amount: '1.5 tbsp', available: true },
      { name: 'Fresh curry leaves & slit green chilies', amount: '10-12 leaves', available: true },
      { name: 'Mustard seeds & lemon juice', amount: '1 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Marinate paneer cubes in spiced yogurt, ginger-garlic paste, chili powder, and flour coating.',
      'Deep fry in hot oil until crispy on the outside and tender inside.',
      'In a separate pan, temper mustard seeds, curry leaves, and green chillies in 1 tbsp oil.',
      'Toss the fried paneer bites in the sizzling tempering with a squeeze of fresh lemon juice and serve.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=paneer+65+crispy+restaurant+style+recipe',
    isSaved: false
  },
  {
    id: 'snack-25',
    title: 'Chilli Paneer Dry (Restaurant Style)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indo-Chinese',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '340 kcal',
    rating: '5.0',
    reviews: 430,
    image: '/chilli_paneer_dry.jpg',
    description: 'Wok-tossed crispy batter-coated paneer cubes with crunchy diced bell peppers, onions, green chilies, garlic, and savory Asian sauces.',
    ingredients: [
      { name: 'Paneer cubes (lightly fried with cornstarch)', amount: '250g', available: true },
      { name: 'Diced green bell pepper & red onion cubes', amount: '1.5 cups', available: true },
      { name: 'Finely minced garlic & green chillies', amount: '2 tbsp', available: true },
      { name: 'Dark soy sauce, red chili sauce & vinegar', amount: '2 tbsp', available: true },
      { name: 'Cornstarch slurry & spring onions', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Toss paneer cubes in cornstarch, salt, and pepper; shallow fry until crispy and set aside.',
      'Stir-fry minced garlic, green chillies, onions, and capsicum in a hot smoking wok for 2 mins.',
      'Add soy sauce, chilli sauce, vinegar, and 2 tbsp cornstarch slurry to create a glossy clinging sauce.',
      'Fold in crispy paneer, toss on high heat for 1 minute, and garnish with spring onion greens.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=chilli+paneer+dry+restaurant+style+recipe',
    isSaved: false
  },
  {
    id: 'snack-26',
    title: 'Masala Crinkle Cut French Fries',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Fast Food',
    prepTime: '10 mins',
    cookTime: '15 mins',
    calories: '280 kcal',
    rating: '4.8',
    reviews: 210,
    image: '/crinkle_cut_fries.jpg',
    description: 'Golden crinkle cut potato fries dusted with a zesty blend of chaat masala, peri-peri, paprika, garlic powder, and rock salt.',
    ingredients: [
      { name: 'Crinkle cut large potatoes', amount: '3 large (400g)', available: true },
      { name: 'Cornstarch for extra crispness', amount: '2 tbsp', available: true },
      { name: 'Chaat masala & smoked paprika', amount: '1 tbsp', available: true },
      { name: 'Garlic powder & onion powder', amount: '1 tsp', available: true },
      { name: 'Creamy spicy chipotle mayo dip', amount: '1/3 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Soak crinkle cut potato batons in cold water for 15 mins, pat thoroughly dry, and dust with cornstarch.',
      'First fry at 160°C (320°F) for 5 minutes until cooked through; remove and rest for 10 mins.',
      'Flash-fry at 190°C (375°F) for 2-3 minutes until golden and deeply crispy.',
      'Toss immediately in a warm bowl with masala seasoning and serve with creamy dip.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=masala+french+fries+crispy+recipe',
    isSaved: false
  },
  {
    id: 'snack-27',
    title: 'Crispy Golden Beer-Battered Onion Rings',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'American / Pub Style',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '260 kcal',
    rating: '4.7',
    reviews: 165,
    image: '/onion_rings.jpg',
    description: 'Thick sweet yellow onion rings dipped in a light seasoned bubbly batter and panko breadcrumbs, fried until airy and golden.',
    ingredients: [
      { name: 'Large sweet Spanish onions (sliced into rings)', amount: '2 large', available: true },
      { name: 'All-purpose flour & cornstarch', amount: '1 cup', available: true },
      { name: 'Sparkling club soda or chilled water', amount: '1 cup', available: true },
      { name: 'Panko breadcrumbs & paprika', amount: '1 cup', available: true },
      { name: 'Creamy ranch or garlic aioli dip', amount: '1/3 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Separate onion slices into individual thick rings; dust lightly with plain flour.',
      'Whisk flour, cornstarch, paprika, garlic powder, and chilled sparkling water into an airy batter.',
      'Dip onion rings into batter, dredge in panko breadcrumbs, and deep fry in hot oil.',
      'Fry for 2-3 mins until light golden and super crisp; drain and season with sea salt.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+onion+rings+recipe+easy',
    isSaved: false
  },
  {
    id: 'snack-28',
    title: 'Loaded Baked Potato Wedges with Cheese Dip',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'American',
    prepTime: '10 mins',
    cookTime: '25 mins',
    calories: '290 kcal',
    rating: '4.8',
    reviews: 230,
    image: '/baked_potato_wedges.png',
    description: 'Thick-cut skin-on russet potato wedges seasoned with rosemary, smoked paprika, and garlic olive oil, baked until crisp and fluffy inside.',
    ingredients: [
      { name: 'Russet potatoes (cut into thick wedges)', amount: '3 large', available: true },
      { name: 'Extra virgin olive oil', amount: '3 tbsp', available: true },
      { name: 'Garlic powder, dried rosemary & thyme', amount: '1 tbsp', available: true },
      { name: 'Smoked paprika & black pepper', amount: '1 tsp', available: true },
      { name: 'Warm cheddar cheese sauce dip', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Parboil potato wedges in salted water for 5 minutes, then drain and steam dry.',
      'Toss wedges with olive oil, rosemary, garlic powder, paprika, salt, and pepper.',
      'Arrange on baking sheet in a single layer with skin-side down.',
      'Bake at 210°C (410°F) for 25-30 minutes until edges are blistered, golden, and crispy.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+baked+potato+wedges+recipe',
    isSaved: false
  },
  {
    id: 'snack-29',
    title: 'Golden Melting Cheese Corn Balls',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Continental / Cafe Style',
    prepTime: '20 mins',
    cookTime: '10 mins',
    calories: '310 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/cheese_corn_balls.jpg',
    description: 'Café-favorite crunchy golden spheres packed with sweet corn, mashed potatoes, green chillies, and molten mozzarella cheese.',
    ingredients: [
      { name: 'Boiled mashed potatoes', amount: '2 medium', available: true },
      { name: 'Boiled sweet corn kernels', amount: '1 cup', available: true },
      { name: 'Grated Mozzarella and Processed cheese', amount: '1 cup', available: false },
      { name: 'Oregano, chili flakes & black pepper', amount: '1 tsp', available: true },
      { name: 'Breadcrumbs & cornstarch slurry', amount: '1 cup', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Mix mashed potatoes, coarsely crushed sweet corn, cheese, oregano, and chili flakes.',
      'Form into tight spherical balls; dip in cornstarch slurry and roll generously in breadcrumbs.',
      'Chill in refrigerator for 20 minutes to set the structure.',
      'Deep fry in hot oil on medium-high flame until deeply golden; serve immediately for luscious cheese pull.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=cheese+corn+balls+recipe+cafe+style',
    isSaved: false
  },
  {
    id: 'snack-30',
    title: 'Hyderabadi Mirchi Bajji (Stuffed Chili Fritters)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '280 kcal',
    rating: '4.8',
    reviews: 210,
    image: '/mirchi_bajji.jpg',
    description: 'Large mild green chilies stuffed with tangy tamarind-cumin paste, dipped in spiced gram flour batter, and fried until crisp.',
    ingredients: [
      { name: 'Large Bhavnagri mild green chillies', amount: '6-8 large', available: true },
      { name: 'Tamarind pulp & roasted cumin powder (stuffing)', amount: '3 tbsp', available: true },
      { name: 'Besan (gram flour) & rice flour', amount: '1.5 cups', available: true },
      { name: 'Ajwain, turmeric & pinch of baking soda', amount: '1 tsp', available: true },
      { name: 'Finely chopped raw onions & lemon juice for topping', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Slit large chillies lengthwise, deseed to reduce heat, and stuff with tamarind-cumin-salt paste.',
      'Prepare a thick coating batter using besan, rice flour, ajwain, turmeric, and water.',
      'Dip stuffed chillies to coat completely and fry in hot oil until golden.',
      'Slit fried bajjis down the center, stuff with chopped raw onions, sprinkle chaat masala, and squeeze lemon.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=hyderabadi+mirchi+bajji+recipe+street+style',
    isSaved: false
  },
  {
    id: 'snack-31',
    title: 'Crispy Sabudana Vada (Tapioca Pearl Fritters)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian / Maharashtrian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '310 kcal',
    rating: '5.0',
    reviews: 440,
    image: '/sabudana_vada.jpg',
    description: 'Golden crispy Maharashtrian fasting snack made from soaked tapioca pearls, roasted crushed peanuts, mashed potatoes, and green chillies.',
    ingredients: [
      { name: 'Sabudana (tapioca pearls, soaked overnight)', amount: '1.5 cups', available: true },
      { name: 'Boiled mashed potatoes', amount: '2 medium', available: true },
      { name: 'Roasted crushed peanuts (Danyacha koot)', amount: '1/2 cup', available: true },
      { name: 'Finely chopped green chilies & cumin seeds', amount: '1.5 tbsp', available: true },
      { name: 'Fresh curd (sweet dahi) dip & mint chutney', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Drain soaked sabudana completely; combine with mashed potatoes, coarse crushed peanuts, chillies, cumin, and salt.',
      'Knead gently into a non-sticky dough and shape into flat round patties.',
      'Deep fry in medium-hot oil until the outer crust turns golden brown and shatteringly crisp without sticking.',
      'Serve hot with sweet peanut yogurt dip or mint chutney.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+sabudana+vada+recipe+maharashtrian',
    isSaved: false
  },
  {
    id: 'snack-32',
    title: 'Crushed Samosa Ragda Chaat',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '390 kcal',
    rating: '5.0',
    reviews: 520,
    image: '/samosa_ragda_chaat.jpg',
    description: 'Hot crispy samosas crushed and smothered in warm white pea ragda curry, chilled sweet yogurt, tangy tamarind & spicy mint chutneys.',
    ingredients: [
      { name: 'Hot crispy samosas', amount: '2 samosas', available: true },
      { name: 'Warm cooked white pea Ragda gravy', amount: '1.5 cups', available: true },
      { name: 'Chilled sweetened yogurt (Dahi)', amount: '1/2 cup', available: true },
      { name: 'Tamarind saunth & mint-coriander chutney', amount: '3 tbsp each', available: true },
      { name: 'Nylon sev, chopped onions & pomegranate seeds', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Crush 2 hot samosas roughly into a serving bowl.',
      'Pour piping hot spiced white pea ragda all over the crushed samosas.',
      'Drizzle sweetened yogurt, spicy green chutney, and tangy tamarind chutney generously.',
      'Garnish with chopped raw onions, nylon sev, chaat masala, and fresh coriander.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=samosa+ragda+chaat+recipe+street+style',
    isSaved: false
  },
  {
    id: 'snack-33',
    title: 'Indian Railway Style Crispy Veg Cutlet',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '12 mins',
    calories: '260 kcal',
    rating: '4.8',
    reviews: 290,
    image: '/railway_veg_cutlet.jpg',
    description: 'Nostalgic crumb-coated vegetable cutlet patties packed with potatoes, beetroot, carrots, and green peas, shallow-fried to perfection.',
    ingredients: [
      { name: 'Boiled potatoes, grated beetroot & carrots', amount: '2 cups', available: true },
      { name: 'Boiled green peas & sweet corn', amount: '1/2 cup', available: true },
      { name: 'Garam masala, amchur & ginger-chilli paste', amount: '1.5 tbsp', available: true },
      { name: 'Cornflour slurry & breadcrumbs', amount: '1 cup', available: true },
      { name: 'Butter toasted bread slices & tomato ketchup', amount: '2 pairs', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Sauté grated beetroot, carrots, and peas with spices; mix with boiled mashed potatoes.',
      'Shape into heart or oval cutlet patties.',
      'Dip each cutlet in cornflour slurry and coat thoroughly with dry breadcrumbs.',
      'Shallow fry on medium heat in oil/ghee until dark golden and crispy; serve with toasted butter bread and ketchup.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=railway+veg+cutlet+recipe',
    isSaved: false
  },
  {
    id: 'snack-34',
    title: 'Soft Spongy Dahi Bhalla / Dahi Vada',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '25 mins',
    cookTime: '15 mins',
    calories: '270 kcal',
    rating: '5.0',
    reviews: 480,
    image: '/dahi_bhalla.jpg',
    description: 'Melt-in-your-mouth lentil dumplings soaked in warm water and immersed in silky chilled sweetened yogurt with sweet and spicy chutneys.',
    ingredients: [
      { name: 'Soaked Urad dal (ground & aerated)', amount: '1.5 cups', available: true },
      { name: 'Fresh creamy yogurt (whisked with sugar)', amount: '2 cups', available: true },
      { name: 'Ginger, green chili & hing', amount: '1 tbsp', available: true },
      { name: 'Tamarind date chutney & spicy mint chutney', amount: '1/3 cup each', available: true },
      { name: 'Roasted cumin powder, black salt & Kashmiri chili', amount: '1 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Whip ground urad dal paste vigorously for 10 minutes until fluffy and light enough to float on water.',
      'Drop spoonfuls into medium oil and fry until pale golden; soak immediately in warm salted water for 15 mins.',
      'Gently squeeze water out between palms and arrange soft vadas on a plate.',
      'Drench in chilled sweetened yogurt, drizzle chutneys, and dust with roasted jeera and black salt.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=soft+dahi+bhalla+recipe+halwai+style',
    isSaved: false
  },
  {
    id: 'snack-35',
    title: 'Mumbai Style Ragda Pattice',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '340 kcal',
    rating: '4.9',
    reviews: 360,
    image: '/ragda_pattice.jpg',
    description: 'Golden shallow-fried crisp potato patties served on a bed of piping hot white pea gravy, garnished with chutneys, onions, and sev.',
    ingredients: [
      { name: 'Boiled mashed potatoes & cornstarch', amount: '3 large', available: true },
      { name: 'Cooked white dried peas (Ragda curry)', amount: '2 cups', available: true },
      { name: 'Turmeric, red chili & chaat masala', amount: '1.5 tbsp', available: true },
      { name: 'Mint chutney & tamarind chutney', amount: '1/4 cup each', available: true },
      { name: 'Chopped onions, coriander & nylon sev', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Simmer boiled white peas with turmeric, ginger-garlic paste, and salt until thick and creamy.',
      'Shape mashed potato mixture into smooth flat patties (pattice).',
      'Shallow fry on a hot tawa with oil until both sides are deeply golden and crusty.',
      'Place 2 hot pattice in a dish, ladle warm ragda over them, drizzle chutneys, and top with sev and onions.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=mumbai+ragda+pattice+recipe',
    isSaved: false
  },
  {
    id: 'snack-36',
    title: 'Crispy Moong Dal Pakoda (Ram Ladoo)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '240 kcal',
    rating: '4.8',
    reviews: 270,
    image: '/moong_dal_pakoda.jpg',
    description: 'Famous Delhi street snack made of light, crispy yellow moong dal fritters served with grated mooli (radish) and spicy tangy radish-leaf chutney.',
    ingredients: [
      { name: 'Yellow Moong dal & Chana dal (soaked)', amount: '1.5 cups', available: true },
      { name: 'Ginger, green chillies & hing', amount: '1 tbsp', available: true },
      { name: 'Grated fresh radish (Mooli)', amount: '1 cup', available: false },
      { name: 'Spicy radish-leaf green chutney', amount: '1/2 cup', available: true },
      { name: 'Chaat masala & lemon juice', amount: '1 tsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Grind soaked moong and chana dal into a coarse paste; whisk aerated for 5 minutes until fluffy.',
      'Add crushed ginger, green chillies, and cumin seeds.',
      'Drop small round fritters into hot oil and fry until golden brown and super crispy.',
      'Top hot fritters with freshly grated radish, spicy green chutney, and a dash of chaat masala.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=delhi+famous+ram+ladoo+moong+dal+pakode+recipe',
    isSaved: false
  },
  {
    id: 'snack-37',
    title: 'Spongy Gujarati Khaman Dhokla',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian / Gujarati',
    prepTime: '10 mins',
    cookTime: '18 mins',
    calories: '180 kcal',
    rating: '5.0',
    reviews: 460,
    image: '/khaman_dhokla.png',
    description: 'Juicy, melt-in-mouth steamed savory gram flour cake tempered with mustard seeds, curry leaves, green chillies, and sweet lime syrup.',
    ingredients: [
      { name: 'Besan (gram flour)', amount: '2 cups', available: true },
      { name: 'Eno fruit salt or baking soda', amount: '1 sachet', available: true },
      { name: 'Lemon juice & sugar', amount: '2 tbsp each', available: true },
      { name: 'Mustard seeds, green chilies & curry leaves', amount: '1 tbsp', available: true },
      { name: 'Freshly grated coconut & coriander for garnish', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Whisk besan with water, ginger-chili paste, turmeric, lemon juice, and sugar into a smooth batter.',
      'Add Eno fruit salt, whisk for 10 seconds until batter turns foamy, and pour into a greased steaming tin.',
      'Steam on high heat for 18-20 minutes until a toothpick inserted comes out clean.',
      'Prepare hot water tempering with mustard seeds, curry leaves, and green chillies; pour all over warm sliced dhokla.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=nylon+khaman+dhokla+gujarati+recipe',
    isSaved: false
  },
  {
    id: 'snack-38',
    title: 'Crispy Steamed Methi Muthia',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian / Gujarati',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '190 kcal',
    rating: '4.7',
    reviews: 180,
    image: '/methi_muthia.jpg',
    description: 'Nutritious spiced dumplings made from fresh fenugreek leaves, whole wheat flour, besan, steamed and pan-crisped with sesame seeds.',
    ingredients: [
      { name: 'Fresh methi (fenugreek leaves, chopped)', amount: '2 cups', available: true },
      { name: 'Besan & whole wheat flour', amount: '1/2 cup each', available: true },
      { name: 'White sesame seeds (Til) & mustard seeds', amount: '1.5 tbsp', available: true },
      { name: 'Ginger-green chili paste, turmeric & sugar', amount: '1 tbsp', available: true },
      { name: 'Oil for tempering', amount: '2 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Mix chopped methi, flours, spices, lemon juice, sugar, and 1 tbsp oil into a soft dough.',
      'Shape into cylindrical logs and steam in a steamer for 15-18 minutes.',
      'Cool slightly and slice into bite-sized rounds.',
      'Pan-fry in oil with mustard seeds, sesame seeds, and curry leaves until golden and crispy on the edges.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=methi+muthia+recipe+gujarati+steamed',
    isSaved: false
  },
  {
    id: 'snack-39',
    title: 'Cheesy Sweet Corn Quesadilla',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Mexican',
    prepTime: '10 mins',
    cookTime: '8 mins',
    calories: '340 kcal',
    rating: '4.8',
    reviews: 210,
    image: '/corn_quesadilla.jpeg',
    description: 'Toasted flour tortillas filled with melted Monterey Jack cheese, sweet corn, bell peppers, jalapeño slices, and Mexican spices.',
    ingredients: [
      { name: 'Flour or corn tortillas', amount: '2 large', available: true },
      { name: 'Boiled sweet corn & diced bell peppers', amount: '1 cup', available: true },
      { name: 'Shredded Cheddar & Mozzarella cheese', amount: '1.5 cups', available: false },
      { name: 'Pickled jalapeños & taco seasoning', amount: '1 tbsp', available: true },
      { name: 'Fresh salsa & sour cream', amount: '1/3 cup', available: false }
    ],
    missingCount: 2,
    instructions: [
      'Layer half of tortilla with shredded cheese, sweet corn, diced capsicum, and sliced jalapeños.',
      'Fold tortilla in half over the filling.',
      'Griddle on a hot skillet with butter on medium heat for 3-4 mins per side until cheese is molten and shell is golden crisp.',
      'Cut into wedges and serve with fresh tomato salsa and sour cream.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+cheese+corn+quesadilla+recipe',
    isSaved: false
  },
  {
    id: 'snack-41',
    title: 'Tandoori Stuffed Mushroom Tikka',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '230 kcal',
    rating: '4.9',
    reviews: 190,
    image: '/stuffed_mushroom_tikka.jpg',
    description: 'Juicy white button mushrooms stuffed with spiced paneer and cheese, marinated in smoky tandoori yogurt masala, and grilled to smoky perfection.',
    ingredients: [
      { name: 'Large fresh button mushrooms', amount: '250g', available: true },
      { name: 'Grated paneer & cheese (stuffing)', amount: '1/2 cup', available: false },
      { name: 'Thick Greek yogurt / Hung curd', amount: '1/2 cup', available: true },
      { name: 'Tandoori masala, kasuri methi & mustard oil', amount: '1.5 tbsp', available: true },
      { name: 'Chaat masala & mint chutney', amount: '2 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Gently remove mushroom stems, chop stems and sauté with paneer, cheese, and herbs.',
      'Stuff mushroom caps tightly with the paneer mixture.',
      'Coat generously in hung curd tandoori marinade with mustard oil and kasuri methi.',
      'Skewer and grill at 200°C (400°F) or pan-sear on tawa for 12-15 mins until lightly charred; dust with chaat masala.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=tandoori+stuffed+mushroom+tikka+recipe',
    isSaved: false
  },
  {
    id: 'snack-42',
    title: 'Kurkuri Masala Bhindi (Crispy Okra Fries)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '190 kcal',
    rating: '4.8',
    reviews: 220,
    image: '/kurkuri_bhindi.jpg',
    description: 'Thinly julienned okra strips dusted with besan, rice flour, amchur, and aromatic spices, flash-fried into irresistible crispy chips.',
    ingredients: [
      { name: 'Fresh Bhindi (Okra, deseeded & julienned)', amount: '250g', available: true },
      { name: 'Besan & rice flour', amount: '2 tbsp each', available: true },
      { name: 'Dry mango powder (Amchur) & chaat masala', amount: '1 tsp each', available: true },
      { name: 'Kashmiri red chili powder & ajwain', amount: '1 tsp', available: true },
      { name: 'Oil for deep frying', amount: '1.5 cups', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Wash okra and dry thoroughly with a towel; slit lengthwise, remove seeds, and cut into thin matchsticks.',
      'Toss okra matchsticks with spices, besan, and rice flour until every strip is lightly dusted.',
      'Deep fry in batches in hot oil on high flame for 3-4 mins until blistered and ultra-crispy.',
      'Drain on paper towels, sprinkle chaat masala, and serve as a crunchy snack.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=kurkuri+bhindi+crispy+okra+recipe',
    isSaved: false
  },
  {
    id: 'snack-43',
    title: 'Crispy Gobi 65 (Spiced Cauliflower Bites)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '12 mins',
    calories: '240 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/gobi_65.jpg',
    description: 'Crunchy battered cauliflower florets spiced with red chili paste, deep fried and tossed with sizzled curry leaves and green chillies.',
    ingredients: [
      { name: 'Cauliflower florets (parboiled for 2 mins)', amount: '300g', available: true },
      { name: 'Corn flour & rice flour', amount: '3 tbsp each', available: true },
      { name: 'Ginger-garlic paste, red chili powder & yogurt', amount: '2 tbsp', available: true },
      { name: 'Fresh curry leaves & green chilies', amount: '10 leaves', available: true },
      { name: 'Lemon wedges & onion rings for garnish', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Parboil cauliflower florets with turmeric and salt for 2 minutes; drain completely.',
      'Coat florets in spiced yogurt, ginger-garlic paste, cornflour, and rice flour batter.',
      'Deep fry in hot oil until deeply golden and crispy.',
      'Toss with crackled curry leaves and green chilies, then serve with lemon wedges.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=gobi+65+crispy+cauliflower+recipe',
    isSaved: false
  },
  {
    id: 'snack-44',
    title: 'Crunchy Kurkure Veg Momos',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Street Food / Indo-Tibetan',
    prepTime: '20 mins',
    cookTime: '12 mins',
    calories: '320 kcal',
    rating: '5.0',
    reviews: 380,
    image: '/kurkure_momos.jpg',
    description: 'Viral Delhi street food sensation: steamed veg momos coated in seasoned batter and crushed cornflakes, deep-fried for maximum audible crunch.',
    ingredients: [
      { name: 'Steamed vegetable momos', amount: '8 pieces', available: true },
      { name: 'Crushed cornflakes / kurkure chips', amount: '1.5 cups', available: false },
      { name: 'All-purpose flour & cornstarch batter', amount: '1/2 cup', available: true },
      { name: 'Oregano, chili flakes & chaat masala', amount: '1 tsp each', available: true },
      { name: 'Spicy momo red chutney & garlic mayo', amount: '1/3 cup', available: false }
    ],
    missingCount: 2,
    instructions: [
      'Prepare seasoned slurry using flour, cornstarch, water, red chili powder, and oregano.',
      'Dip each steamed veg momo into the batter slurry.',
      'Roll generously in crushed cornflakes or panko crumbs until completely encased.',
      'Deep fry in hot oil for 2-3 minutes until golden and shatteringly crunchy; serve with spicy red dip and mayo.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=kurkure+momos+recipe+street+style',
    isSaved: false
  },
  {
    id: 'snack-45',
    title: 'Tandoori Malai Soya Chaap Bites',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '20 mins',
    cookTime: '15 mins',
    calories: '310 kcal',
    rating: '4.9',
    reviews: 290,
    image: '/malai_soya_chaap.jpg',
    description: 'Protein-packed soya chaap chunks marinated in rich cashew-cream masala, skewered, and grilled with capsicum and onion petals.',
    ingredients: [
      { name: 'Soya chaap sticks (boiled & sliced)', amount: '300g', available: true },
      { name: 'Fresh cream & cashew paste', amount: '1/3 cup each', available: false },
      { name: 'Hung curd, ginger-garlic & green cardamom', amount: '2 tbsp', available: true },
      { name: 'Kasuri methi, butter & chaat masala', amount: '2 tbsp', available: true },
      { name: 'Onion rings & mint chutney', amount: '1/2 cup', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Cut boiled soya chaap into bite-sized pieces and shallow fry in butter for 3 minutes.',
      'Marinate in hung curd, fresh cream, cashew paste, kasuri methi, cardamom, and black pepper.',
      'Grill on a hot tawa or skewers in oven at 220°C for 12-15 minutes until charred.',
      'Toss in melted butter, cream, and chaat masala; serve hot with mint chutney.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=malai+soya+chaap+tikka+recipe',
    isSaved: false
  },
  {
    id: 'snack-46',
    title: 'Crunchy Paneer Popcorn Nuggets',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Fast Food',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '320 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/paneer_popcorn.jpg',
    description: 'Bite-sized cubes of fresh paneer marinated in peri-peri spices, coated in crunchy breadcrumbs, and flash fried into addictive popcorn bites.',
    ingredients: [
      { name: 'Fresh paneer (cut into 1-inch mini cubes)', amount: '250g', available: true },
      { name: 'Panko breadcrumbs / crushed chips', amount: '1.5 cups', available: true },
      { name: 'Cornstarch & all-purpose flour batter', amount: '1/2 cup', available: true },
      { name: 'Peri-peri spice mix & garlic powder', amount: '1.5 tbsp', available: true },
      { name: 'Cheesy jalapeño dip or sweet chili dip', amount: '1/3 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Season paneer cubes with peri-peri spice mix, salt, and garlic powder.',
      'Dip in flour batter and roll into breadcrumbs to form a crunchy shell.',
      'Deep fry in hot oil for 2-3 minutes until golden brown and super crispy.',
      'Toss with extra peri-peri seasoning and serve with cheesy dip.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=paneer+popcorn+crispy+recipe',
    isSaved: false
  },
  {
    id: 'snack-47',
    title: 'Street-Style Tawa Masala Cheese Toast',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '10 mins',
    cookTime: '8 mins',
    calories: '310 kcal',
    rating: '4.8',
    reviews: 240,
    image: '/tawa_masala_toast.jpg',
    description: 'Mumbai street food classic: buttered white bread topped with sautéed spicy onion-capsicum-tomato bhaji and a thick blanket of molten cheese.',
    ingredients: [
      { name: 'Bread slices (white or multigrain)', amount: '4 slices', available: true },
      { name: 'Finely chopped onions, tomatoes & capsicum', amount: '1.5 cups', available: true },
      { name: 'Butter', amount: '3 tbsp', available: true },
      { name: 'Pav bhaji masala & red chili powder', amount: '1.5 tsp', available: true },
      { name: 'Grated processed cheese & mozzarella', amount: '1 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Sauté onions, capsicum, and tomatoes on a hot buttery tawa with pav bhaji masala and salt for 3 mins.',
      'Toast bread slices on one side with butter until crisp.',
      'Spread the spicy vegetable mixture over bread, top generously with grated cheese and oregano.',
      'Cover with a lid on low flame for 2 mins until cheese is completely melted; slice into fingers and serve.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=tawa+cheese+masala+toast+sandwich+recipe',
    isSaved: false
  },
  {
    id: 'snack-48',
    title: 'South Indian Crispy Ribbon Pakoda (Murukku)',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'South Indian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '280 kcal',
    rating: '4.9',
    reviews: 210,
    image: '/ribbon_pakoda.jpg',
    description: 'Crisp ribbon-shaped savory tea-time snack made from rice flour, roasted gram flour (besan), butter, and seasoned with cumin and chili.',
    ingredients: [
      { name: 'Rice flour', amount: '2 cups', available: true },
      { name: 'Besan (gram flour) & roasted gram flour', amount: '1 cup', available: true },
      { name: 'Butter or hot oil (for shortening)', amount: '2 tbsp', available: true },
      { name: 'Cumin seeds (Jeera) & red chili powder', amount: '1.5 tsp', available: true },
      { name: 'Hing (asafoetida) & curry leaves for frying', amount: '1 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Mix rice flour, besan, salt, chili powder, cumin seeds, hing, and melted butter into a soft dough.',
      'Fit the murukku press with the flat slotted ribbon plate and fill with dough.',
      'Press ribbons directly into hot oil in circular motions.',
      'Fry on medium heat until golden and bubbles subside; cool completely for crispness.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=ribbon+pakoda+murukku+recipe+crispy',
    isSaved: false
  },
  {
    id: 'snack-49',
    title: 'Banarasi Crispy Palak Patta Chaat',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '250 kcal',
    rating: '5.0',
    reviews: 390,
    image: '/palak_patta_chaat.jpg',
    description: 'Whole fresh spinach leaves coated in thin spiced besan batter, fried until paper-crisp, and topped with yogurt, chutneys, and spice powders.',
    ingredients: [
      { name: 'Large fresh whole spinach leaves (Palak)', amount: '15-20 leaves', available: true },
      { name: 'Besan & rice flour', amount: '1 cup', available: true },
      { name: 'Chilled sweetened yogurt (Dahi)', amount: '1 cup', available: true },
      { name: 'Tamarind saunth & mint-coriander chutney', amount: '1/3 cup each', available: true },
      { name: 'Nylon sev, pomegranate seeds & chaat masala', amount: '1/2 cup', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Whisk besan, rice flour, ajwain, turmeric, and water into a smooth, thin coating batter.',
      'Dip whole spinach leaves one by one and deep fry in hot oil until crunchy and brittle.',
      'Arrange crispy palak leaves on a platter.',
      'Drizzle sweetened yogurt, mint chutney, tamarind chutney, and sprinkle nylon sev, chaat masala, and pomegranate seeds.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=palak+patta+chaat+recipe+halwai+style',
    isSaved: false
  },
  {
    id: 'snack-50',
    title: 'Cheesy Stuffed Jalapeño Poppers',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Mexican / American',
    prepTime: '15 mins',
    cookTime: '10 mins',
    calories: '290 kcal',
    rating: '4.8',
    reviews: 195,
    image: '/jalapeno_poppers.jpg',
    description: 'Spicy jalapeño peppers hollowed out and filled with cream cheese, cheddar, garlic herbs, coated in crispy breadcrumbs, and fried golden.',
    ingredients: [
      { name: 'Fresh Jalapeño peppers (halved & deseeded)', amount: '8 large', available: true },
      { name: 'Cream cheese & sharp cheddar cheese', amount: '1 cup each', available: false },
      { name: 'Garlic powder, onion powder & smoked paprika', amount: '1 tsp each', available: true },
      { name: 'Panko breadcrumbs & egg wash', amount: '1.5 cups', available: true },
      { name: 'Creamy cilantro lime ranch dip', amount: '1/3 cup', available: false }
    ],
    missingCount: 2,
    instructions: [
      'Mix softened cream cheese, shredded cheddar, garlic powder, and paprika until smooth.',
      'Fill jalapeño halves generously with cheese filling.',
      'Dredge in flour, dip in beaten egg, and coat thoroughly in seasoned panko crumbs.',
      'Deep fry in hot oil at 180°C (350°F) for 3-4 minutes until crunchy and cheese is molten inside.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=crispy+jalapeno+poppers+recipe',
    isSaved: false
  },
  {
    id: 'snack-51',
    title: 'Crispy Maharashtrian Kothimbir Vadi',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Indian / Maharashtrian',
    prepTime: '15 mins',
    cookTime: '15 mins',
    calories: '210 kcal',
    rating: '4.9',
    reviews: 260,
    image: '/kothimbir_vadi.jpg',
    description: 'Traditional Maharashtrian savory snack made of fresh chopped cilantro (kothimbir), besan, peanuts, and spices, steamed into cakes and fried crispy.',
    ingredients: [
      { name: 'Fresh cilantro / coriander (finely chopped)', amount: '3 cups', available: true },
      { name: 'Besan (gram flour) & rice flour', amount: '1 cup', available: true },
      { name: 'Roasted crushed peanuts & white sesame seeds', amount: '3 tbsp', available: true },
      { name: 'Ginger-green chili paste, turmeric & cumin', amount: '1.5 tbsp', available: true },
      { name: 'Lemon juice & oil for shallow frying', amount: '2 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Combine chopped coriander, besan, rice flour, crushed peanuts, sesame seeds, and spices into a dense dough without adding extra water.',
      'Shape into cylindrical rolls and steam in a greased steamer for 15-20 minutes until firm.',
      'Allow to cool completely, then slice into 1/2-inch thick discs.',
      'Shallow fry or deep fry in hot oil until edges are dark golden brown and deeply crunchy.'
    ],
    youtubeUrl: 'https://www.youtube.com/results?search_query=kothimbir+vadi+recipe+maharashtrian+crispy',
    isSaved: false
  },

  // ===================== BEVERAGES (DRINKS) (38) =====================
  {
    id: 'drink-1',
    title: 'Creamy Mango Lassi with Saffron',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '220 kcal',
    rating: '5.0',
    reviews: 215,
    image: '/mango_lassi.png',
    description: 'Thick, sweet, refreshing yogurt shake blended with Alphonso mango pulp, green cardamom, and garnished with pistachios.',
    ingredients: [
      { name: 'Sweet Alphonso mango pulp', amount: '1 cup', available: true },
      { name: 'Fresh thick curd / Greek yogurt', amount: '1.5 cups', available: true },
      { name: 'Cold milk & crushed ice', amount: '1/2 cup', available: true },
      { name: 'Sugar or honey', amount: '2 tbsp', available: true },
      { name: 'Kashmiri Saffron strands & crushed pista', amount: '1 pinch', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Add chilled mango pulp, thick yogurt, cold milk, sugar, and crushed cardamom to blender.',
      'Blend on high speed for 45 seconds until thick, frothy, and completely homogenous.',
      'Pour into tall earthen glasses or tumblers over crushed ice.',
      'Garnish top with saffron strands and slivered pistachio nuts.'
    ],
    youtubeUrl: 'https://youtu.be/pFvtHIy47Po?si=-VmQf31Nf6Zuz_ny',
    isSaved: true
  },
  {
    id: 'drink-2',
    title: 'Authentic Masala Chai',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '8 mins',
    calories: '110 kcal',
    rating: '5.0',
    reviews: 350,
    image: '/masala_chai.jpg',
    description: 'Strong Assam CTC black tea brewed with fresh crushed ginger, green cardamom, cloves, cinnamon, and whole milk.',
    ingredients: [
      { name: 'Assam CTC black tea leaves', amount: '2 tbsp', available: true },
      { name: 'Fresh ginger root (crushed)', amount: '1 inch piece', available: true },
      { name: 'Green cardamom pods (crushed)', amount: '3 pods', available: true },
      { name: 'Whole milk', amount: '1 cup', available: true },
      { name: 'Fresh holy basil (Tulsi) leaves', amount: '4 leaves', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Crush ginger and green cardamom in mortar and pestle.',
      'Bring 1 cup water to boil with crushed spices; add strong black tea leaves and simmer 2 mins.',
      'Pour in whole milk and sugar. Bring to rolling boil 3 times, swirling saucepan.',
      'Strain piping hot into clay kulhads and serve with tea biscuits.'
    ],
    youtubeUrl: 'https://youtu.be/2KI-PGM7PYQ?si=N-mN4qSJAIJSpZ8K',
    isSaved: false
  },
  {
    id: 'drink-3',
    title: 'Iced Matcha Green Tea Latte',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Japanese',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '140 kcal',
    rating: '4.8',
    reviews: 130,
    image: '/iced_matcha_latte.png',
    description: 'Ceremonial Japanese stone-ground green tea whisked with warm water and poured over iced vanilla oat milk.',
    ingredients: [
      { name: 'Ceremonial grade Matcha powder', amount: '1.5 tsp', available: true },
      { name: 'Creamy oat milk or almond milk', amount: '1 cup', available: true },
      { name: 'Ice cubes', amount: '1 cup', available: true },
      { name: 'Warm water (80°C)', amount: '60 ml', available: true },
      { name: 'Pure vanilla bean syrup', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Sift matcha into a small bowl to remove lumps; add 60ml warm water.',
      'Whisk vigorously in a "W" motion using bamboo chasen until vibrant green froth forms.',
      'Fill glass with ice and pour sweetened oat milk.',
      'Gently pour whisked matcha over milk to create a stunning layered effect.'
    ],
    youtubeUrl: 'https://youtu.be/_Tgy8uQkM6w?si=iXaAV-FBXjAx652d',
    isSaved: false
  },
  {
    id: 'drink-4',
    title: 'Fresh Cold-Pressed Mint Mojito Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '90 kcal',
    rating: '4.7',
    reviews: 85,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-crisp mocktail muddled with fresh spearmint leaves, lime wedges, pure cane syrup, and sparkling soda water.',
    ingredients: [
      { name: 'Fresh mint leaves', amount: '10 leaves', available: true },
      { name: 'Fresh lime wedges', amount: '4 wedges', available: true },
      { name: 'Sparkling club soda', amount: '1 can', available: true },
      { name: 'Crushed ice', amount: '1 cup', available: true },
      { name: 'Organic Blue Agave nectar', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Gently muddle mint leaves and lime wedges with agave in base of highball glass.',
      'Pack glass to the brim with crushed ice.',
      'Top with bubbly chilled club soda and stir gently with a bar spoon.',
      'Garnish with a slapped mint sprig and dehydrated lime wheel.'
    ],
    youtubeUrl: 'https://youtu.be/PIM2c_nryRY?si=G1EetgmWb_GrjsDZ',
    isSaved: false
  },
  {
    id: 'drink-5',
    title: 'Spiced Masala Chaas (Indian Buttermilk)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '65 kcal',
    rating: '4.9',
    reviews: 180,
    image: '/masala_chaas.jpg',
    description: 'Traditional cooling Indian buttermilk churned with fresh curd, chilled water, roasted cumin, black salt, and freshly chopped coriander.',
    ingredients: [
      { name: 'Fresh creamy curd (dahi)', amount: '1 cup', available: true },
      { name: 'Chilled water', amount: '2 cups', available: true },
      { name: 'Roasted cumin powder (bhuna jeera)', amount: '1 tsp', available: true },
      { name: 'Black salt & regular salt', amount: '1/2 tsp', available: true },
      { name: 'Finely chopped fresh coriander & green chili', amount: '1 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'In a pitcher or blender, whisk chilled fresh curd with cold water until light and frothy.',
      'Add roasted cumin powder, black salt, regular salt, and finely minced green chili.',
      'Blend or churn with a traditional madhani for 30 seconds until a slight froth forms on top.',
      'Pour into clay glasses (kulhads), garnish with fresh coriander, and serve chilled with ice cubes.'
    ],
    youtubeUrl: 'https://youtu.be/82DyooLMuLE?si=cSi3xUMThF8fDVuZ',
    isSaved: false
  },
  {
    id: 'drink-6',
    title: 'Tangy Kairi Aam Panna',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '10 mins',
    cookTime: '10 mins',
    calories: '95 kcal',
    rating: '4.9',
    reviews: 210,
    image: '/aam_panna.jpg',
    description: 'Iconic Indian summer cooler crafted from boiled green raw mangoes, sweetened with sugar, and seasoned with roasted cumin and black salt.',
    ingredients: [
      { name: 'Raw green mangoes (kairi)', amount: '2 medium', available: true },
      { name: 'Sugar or jaggery', amount: '1/2 cup', available: true },
      { name: 'Roasted cumin powder', amount: '1 tsp', available: true },
      { name: 'Black salt (kala namak)', amount: '1/2 tsp', available: true },
      { name: 'Fresh mint leaves & chilled water', amount: '3 cups', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Pressure cook raw mangoes with 1 cup water for 2 whistles until soft and pulpy.',
      'Once cooled, peel and scrape out the soft mango pulp into a blender.',
      'Add sugar, roasted cumin, black salt, and fresh mint leaves; blend into a smooth concentrate.',
      'Dilute 3 tablespoons of pulp in chilled water with ice cubes and stir well before serving.'
    ],
    youtubeUrl: 'https://youtu.be/oCz-NQfDmEs?si=tTE5vZfNB_utpmeH',
    isSaved: false
  },
  {
    id: 'drink-7',
    title: 'Classic Punjabi Sweet Lassi',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '240 kcal',
    rating: '5.0',
    reviews: 310,
    image: '/sweet_lassi.png',
    description: 'Rich, thick, creamy North Indian yogurt shake churned with sugar, cold milk, and topped with clotted malai and cardamom.',
    ingredients: [
      { name: 'Fresh thick curd (Greek or home dahi)', amount: '2 cups', available: true },
      { name: 'Chilled milk or water', amount: '1/2 cup', available: true },
      { name: 'Granulated sugar', amount: '3 tbsp', available: true },
      { name: 'Green cardamom powder', amount: '1/4 tsp', available: true },
      { name: 'Fresh clotted cream (malai) for topping', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'In a wide earthen pot or blender, combine thick curd, cold milk, sugar, and crushed cardamom.',
      'Blend or churn with a wooden hand-churner for 45 seconds until silky smooth and foamy.',
      'Pour into tall tumblers over crushed ice.',
      'Crown with a generous dollop of fresh malai and crushed pistachio slivers.'
    ],
    youtubeUrl: 'https://youtu.be/WY2W5jU5qPU?si=Yx6KuPBVMqUhNxs5',
    isSaved: false
  },
  {
    id: 'drink-8',
    title: 'Chilled Rose Milk (Gulab Sharbat)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '3 mins',
    cookTime: '0 mins',
    calories: '160 kcal',
    rating: '4.8',
    reviews: 140,
    image: '/rose_milk.png',
    description: 'Fragrant, pretty-in-pink sweet beverage made with cold whole milk infused with authentic rose syrup and soaked sabja seeds.',
    ingredients: [
      { name: 'Chilled whole milk', amount: '2 cups', available: true },
      { name: 'Concentrated rose syrup (or Rooh Afza)', amount: '3 tbsp', available: true },
      { name: 'Ice cubes', amount: '1/2 cup', available: true },
      { name: 'Soaked basil seeds (sabja)', amount: '1 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pour ice-cold milk into a jug or shaker.',
      'Add sweet concentrated rose syrup and stir briskly until evenly pink and fragrant.',
      'Stir in bloomed sabja seeds and ice cubes.',
      'Serve chilled in tall glasses with edible dried rose petals on top.'
    ],
    youtubeUrl: 'https://youtu.be/w6JW2vggG04?si=meCc8fo_dHhTNA1f',
    isSaved: false
  },
  {
    id: 'drink-9',
    title: 'Chatpata Jaljeera Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '45 kcal',
    rating: '4.7',
    reviews: 165,
    image: '/jaljeera.jpg',
    description: 'Electrifying digestive summer drink with fresh mint, lemon, cumin, dry ginger, black pepper, and crispy boondi.',
    ingredients: [
      { name: 'Fresh mint and coriander leaves', amount: '1 cup', available: true },
      { name: 'Fresh lemon juice', amount: '2 tbsp', available: true },
      { name: 'Roasted cumin powder & chaat masala', amount: '1 tbsp', available: true },
      { name: 'Black salt, ginger powder, and amchur', amount: '1 tsp', available: true },
      { name: 'Chilled water & crispy salted boondi', amount: '3 cups', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Blend mint, coriander, and green chili with a splash of water into a smooth herbal paste.',
      'Mix the paste into chilled water; add lemon juice, roasted cumin, black salt, and dry mango powder.',
      'Strain through a sieve for a crystal-clear refreshing infusion.',
      'Stir in crispy boondi and ice cubes right before serving.'
    ],
    youtubeUrl: 'https://youtu.be/mgHCazsqXPA?si=pcxGI7cEorvHg02G',
    isSaved: false
  },
  {
    id: 'drink-10',
    title: 'Desi Shikanji Nimbu Pani (Fresh Lemonade)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '70 kcal',
    rating: '5.0',
    reviews: 430,
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=800&q=80',
    description: 'Quintessential Indian street-style fresh lemonade shaken with lemon juice, chilled water, sugar, and shikanji masala salt.',
    ingredients: [
      { name: 'Freshly squeezed lemon juice', amount: '3 tbsp', available: true },
      { name: 'Chilled water or club soda', amount: '2 cups', available: true },
      { name: 'Sugar syrup or powdered sugar', amount: '2 tbsp', available: true },
      { name: 'Black salt and roasted jeera powder', amount: '1/2 tsp', available: true },
      { name: 'Fresh mint sprig & lemon slices', amount: 'For garnish', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Squeeze fresh lemon juice into a shaker or tall glass.',
      'Dissolve sugar syrup with black salt and a pinch of roasted cumin.',
      'Top with chilled water or sparkling soda and plenty of ice cubes.',
      'Stir vigorously and serve garnished with a floating lemon wheel and mint leaf.'
    ],
    youtubeUrl: 'https://youtu.be/8ygXBT4P0fg?si=qJ2gmHPQRUpL-XBF',
    isSaved: false
  },
  {
    id: 'drink-11',
    title: 'Tender Coconut Lemon Mint Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '3 mins',
    cookTime: '0 mins',
    calories: '55 kcal',
    rating: '4.8',
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    description: 'Natural electrolyte powerhouse combining sweet tender coconut water, tangy freshly squeezed lemon, and muddled spearmint.',
    ingredients: [
      { name: 'Fresh tender coconut water', amount: '2 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1 tbsp', available: true },
      { name: 'Fresh mint leaves', amount: '8-10 leaves', available: true },
      { name: 'Coconut malai strips', amount: '2 tbsp', available: false },
      { name: 'Crushed ice', amount: '1/2 cup', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Lightly clap or muddle fresh mint leaves in the bottom of serving glasses.',
      'Pour in chilled fresh tender coconut water and fresh lemon juice.',
      'Add crushed ice and tender coconut meat strips.',
      'Stir gently to blend flavors and serve immediately for instant hydration.'
    ],
    youtubeUrl: 'https://youtu.be/3HCyGuYk7b0?si=ZD0GN2FuJOzMuKn3',
    isSaved: false
  },
  {
    id: 'drink-12',
    title: 'Cooling Pudina Mint Sharbat',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '60 kcal',
    rating: '4.7',
    reviews: 110,
    image: '/pudina_sharbat.png',
    description: 'Deep-green cooling herbal potion extracted from garden mint leaves, raw cane sugar, lemon juice, and mountain spring water.',
    ingredients: [
      { name: 'Fresh mint leaves (pudina)', amount: '1.5 cups', available: true },
      { name: 'Fresh lemon juice', amount: '2 tbsp', available: true },
      { name: 'Sugar or rock sugar (mishri)', amount: '2 tbsp', available: true },
      { name: 'Chilled water', amount: '2.5 cups', available: true },
      { name: 'Black salt and cumin', amount: '1/4 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Blend clean mint leaves, sugar, lemon juice, and black salt with 1/2 cup water until vibrant green.',
      'Strain the concentrated syrup through a fine sieve into a pitcher.',
      'Add remaining chilled water and stir thoroughly.',
      'Serve over crushed ice with fresh mint garnish for an invigorating refresher.'
    ],
    youtubeUrl: 'https://youtu.be/QhRQtrK2Exg?si=pTscc5vqpo9ZdfY1',
    isSaved: false
  },
  {
    id: 'drink-13',
    title: 'Bihari Spiced Sattu Sharbat (Protein Cooler)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '150 kcal',
    rating: '4.9',
    reviews: 260,
    image: '/sattu_sharbat.jpg',
    description: 'Traditional desi protein powerhouse drink made with roasted Bengal gram (sattu) flour, lemon, roasted cumin, black salt, and green chili.',
    ingredients: [
      { name: 'Roasted gram flour (chana sattu)', amount: '4 tbsp', available: true },
      { name: 'Chilled water', amount: '2 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Black salt and roasted cumin powder', amount: '1/2 tsp each', available: true },
      { name: 'Finely minced green chili & coriander', amount: '1 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'In a tall glass or jug, add roasted chana sattu flour.',
      'Pour a little chilled water first and whisk with a fork to form a lump-free paste.',
      'Pour the remaining water, lemon juice, black salt, and roasted cumin powder.',
      'Stir vigorously and top with minced coriander and green chili. Drink fresh!'
    ],
    youtubeUrl: 'https://youtu.be/Lceeq2LlPsg?si=DW95k8LTh4CJ6-Kg',
    isSaved: false
  },
  {
    id: 'drink-14',
    title: 'Sparkling Citrus Orange Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '85 kcal',
    rating: '4.8',
    reviews: 135,
    image: '/orange_cooler.jpg',
    description: 'Vibrant sunrise mocktail combining freshly squeezed orange juice, sparkling soda water, lemon, and a hint of mint.',
    ingredients: [
      { name: 'Freshly squeezed orange juice', amount: '1.5 cups', available: true },
      { name: 'Chilled sparkling soda or water', amount: '1 cup', available: true },
      { name: 'Fresh lemon juice', amount: '1 tbsp', available: true },
      { name: 'Sugar syrup or honey', amount: '1 tbsp', available: true },
      { name: 'Orange slices and fresh ice', amount: '1 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Fill highball glasses with ice cubes and orange wheels.',
      'Pour sweet orange juice and freshly squeezed lemon juice.',
      'Slowly top with bubbly chilled soda water to create a fizzy crown.',
      'Garnish with mint leaves and a festive straw.'
    ],
    youtubeUrl: 'https://youtu.be/wocu1HTj0Rc?si=y9iTKPIXlXRm2rft',
    isSaved: false
  },
  {
    id: 'drink-15',
    title: 'Fresh Watermelon Mint Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '65 kcal',
    rating: '4.9',
    reviews: 290,
    image: '/watermelon_cooler.jpg',
    description: 'Ultra-hydrating summer quencher blended from ripe ruby-red watermelon chunks, lime juice, sea salt, and torn fresh spearmint.',
    ingredients: [
      { name: 'Fresh seedless watermelon chunks', amount: '3 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Fresh mint leaves', amount: '8 leaves', available: true },
      { name: 'Black salt or sea salt', amount: '1 pinch', available: true },
      { name: 'Crushed ice', amount: '1/2 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Add sweet watermelon chunks, fresh mint leaves, lemon juice, and a pinch of black salt to blender.',
      'Pulse for 30 seconds until liquid and smooth (no straining needed for fiber).',
      'Fill tall glasses with crushed ice and pour watermelon cooler over the top.',
      'Garnish with a triangular watermelon slice and a mint bouquet.'
    ],
    youtubeUrl: 'https://youtu.be/rAdQ2fHa2BU?si=1aXeGA9He4M__mzr',
    isSaved: false
  },
  {
    id: 'drink-16',
    title: 'Tropical Pineapple Lemon Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '90 kcal',
    rating: '4.8',
    reviews: 120,
    image: '/pineapple_cooler.png',
    description: 'Zingy tropical cooler crafted from sweet-tart pineapple pulp, fresh lemon juice, black salt, and crushed ice.',
    ingredients: [
      { name: 'Fresh ripe pineapple cubes', amount: '2 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1 tbsp', available: true },
      { name: 'Sugar or honey', amount: '1 tbsp', available: true },
      { name: 'Black salt and crushed ice', amount: '1/4 tsp', available: true },
      { name: 'Chilled water or ginger ale', amount: '1/2 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Blend pineapple cubes with a splash of water and honey until frothy and smooth.',
      'Strain through a mesh sieve if you prefer a silky texture.',
      'Stir in fresh lemon juice and a hint of black salt for that tropical kick.',
      'Serve over ice with a pineapple wedge perched on the rim.'
    ],
    youtubeUrl: 'https://youtu.be/zEJR9E702Os?si=jefZ-uG2PoNjIJ2F',
    isSaved: false
  },
  {
    id: 'drink-17',
    title: 'Sparkling Fresh Strawberry Lemonade',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '95 kcal',
    rating: '4.9',
    reviews: 240,
    image: '/strawberry_lemonade.jpg',
    description: 'Gorgeous red-ombre mocktail made with macerated sweet strawberries, tart freshly squeezed lemon, sugar syrup, and cold water.',
    ingredients: [
      { name: 'Fresh strawberries (hulled)', amount: '1.5 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1/4 cup', available: true },
      { name: 'Granulated sugar or honey', amount: '3 tbsp', available: true },
      { name: 'Chilled water or club soda', amount: '2 cups', available: true },
      { name: 'Ice cubes and strawberry slices', amount: '1 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Puree fresh strawberries with 2 tablespoons of sugar until silky smooth.',
      'In a tall jug, whisk fresh lemon juice, remaining sugar, and chilled water.',
      'Fill glasses with ice cubes, spoon 3 tablespoons of strawberry puree at the base.',
      'Top with lemonade and stir gently for a stunning ombré sunset effect.'
    ],
    youtubeUrl: 'https://youtu.be/fsqMpDy7y6s?si=pS4V8REFv69BCQUo',
    isSaved: false
  },
  {
    id: 'drink-18',
    title: 'Crisp Iced Apple Lemon Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '80 kcal',
    rating: '4.7',
    reviews: 115,
    image: '/apple_cooler.png',
    description: 'Crisp, sparkling orchard cooler balancing naturally sweet apple juice with tart lemon, sliced green apple, and mint.',
    ingredients: [
      { name: 'Pure apple juice (or fresh apple puree)', amount: '1.5 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Chilled soda or tonic water', amount: '1 cup', available: true },
      { name: 'Thin apple slices & ice', amount: '1/2 cup', available: true },
      { name: 'Fresh mint leaves', amount: '4 leaves', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Fill glasses with ice cubes and fan thin apple slices against the glass walls.',
      'Pour sweet apple juice and freshly squeezed lemon juice.',
      'Top with bubbly chilled soda or water and stir gently.',
      'Garnish with a sprig of fresh mint and serve immediately.'
    ],
    youtubeUrl: 'https://youtu.be/V8zaTnjDF_0?si=Jn9uc4QCbnp_0rEJ',
    isSaved: false
  },
  {
    id: 'drink-19',
    title: 'Chilled Black Grape Mint Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '90 kcal',
    rating: '4.8',
    reviews: 105,
    image: '/grape_cooler.png',
    description: 'Deep purple antioxidant elixir made with sweet seedless black grapes, a squeeze of lemon, sugar, and cooling mint.',
    ingredients: [
      { name: 'Seedless black or red grapes', amount: '2 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1 tbsp', available: true },
      { name: 'Sugar or honey', amount: '1.5 tbsp', available: true },
      { name: 'Chilled water or club soda', amount: '1 cup', available: true },
      { name: 'Black salt & mint', amount: '1 pinch', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Wash grapes and blend with sugar, lemon juice, black salt, and 1/2 cup water.',
      'Strain through a fine strainer to catch any thick grape skins.',
      'Pour into highball glasses loaded with crushed ice.',
      'Top with a splash of soda and garnish with mint leaves.'
    ],
    youtubeUrl: 'https://youtu.be/U3KwgIX7d_A?si=H3vGS3ruP5Q8iee5',
    isSaved: false
  },
  {
    id: 'drink-21',
    title: 'Detox Cucumber Mint Hydration Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '35 kcal',
    rating: '4.8',
    reviews: 130,
    image: '/cucumber_cooler.png',
    description: 'Crisp, spa-grade wellness cooler packed with pureed cucumber, fresh lemon, mint leaves, and ice-cold water.',
    ingredients: [
      { name: 'English cucumber (chopped)', amount: '1 cup', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Fresh mint leaves', amount: '8 leaves', available: true },
      { name: 'Chilled water', amount: '2 cups', available: true },
      { name: 'Pink Himalayan salt', amount: '1 pinch', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Blend diced cucumber, mint leaves, lemon juice, and salt with 1/2 cup water.',
      'Strain through a fine mesh sieve to extract pure green cucumber juice.',
      'Combine with remaining chilled water and ice cubes.',
      'Garnish with cucumber ribbons and fresh mint for a revitalizing spa drink.'
    ],
    youtubeUrl: 'https://youtu.be/XsG5h70rSSI?si=oR2ot5OXnmAELvG9',
    isSaved: false
  },
  {
    id: 'drink-22',
    title: 'Sweet Sunshine Mango Lemon Cooler',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '110 kcal',
    rating: '4.9',
    reviews: 190,
    image: '/mango_cooler.png',
    description: 'Golden tropical thirst quencher made with sweet Alphonso mango pulp, fresh lemon juice, chilled water, and crushed ice.',
    ingredients: [
      { name: 'Sweet mango pulp', amount: '1 cup', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Chilled water or soda', amount: '1.5 cups', available: true },
      { name: 'Crushed ice & mint', amount: '1/2 cup', available: true },
      { name: 'Black salt', amount: '1 pinch', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Combine mango pulp, fresh lemon juice, and a pinch of black salt in a pitcher.',
      'Whisk in ice-cold water until light and thoroughly incorporated.',
      'Fill glasses with crushed ice and pour the sunshine cooler.',
      'Top with fresh mint leaves and a lemon wedge.'
    ],
    youtubeUrl: 'https://youtu.be/ENjWI_kPIe4?si=gXRJ7MXnmXx45R6z',
    isSaved: false
  },
  {
    id: 'drink-23',
    title: 'Velvety Cold Chocolate Milk',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '3 mins',
    cookTime: '0 mins',
    calories: '180 kcal',
    rating: '4.9',
    reviews: 275,
    image: '/cold_chocolate_milk.jpg',
    description: 'Rich, comforting café-style chocolate milk shaken cold with Dutch cocoa powder, chilled milk, and a touch of sweetness.',
    ingredients: [
      { name: 'Chilled whole milk', amount: '2 cups', available: true },
      { name: 'Dutch cocoa powder', amount: '2 tbsp', available: true },
      { name: 'Sugar or maple syrup', amount: '2 tbsp', available: true },
      { name: 'Warm water (to dissolve cocoa)', amount: '2 tbsp', available: true },
      { name: 'Chocolate shavings', amount: 'For garnish', available: false }
    ],
    missingCount: 1,
    instructions: [
      'In a glass, whisk cocoa powder and sugar with warm water to create a glossy chocolate paste.',
      'Pour ice-cold milk into a cocktail shaker or jar, add the chocolate paste and ice cubes.',
      'Shake vigorously for 20 seconds until frothy and velvety.',
      'Pour into chilled glasses and dust top with cocoa powder or chocolate curls.'
    ],
    youtubeUrl: 'https://youtu.be/H2DKofxjb74?si=qOrveROhm__JSRc7',
    isSaved: false
  },
  {
    id: 'drink-24',
    title: 'Creamy Classic Banana Milkshake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '210 kcal',
    rating: '4.8',
    reviews: 320,
    image: '/banana_milkshake.png',
    description: 'Silky smooth, energy-packed shake blended from ripe bananas, chilled milk, sugar, and a hint of vanilla.',
    ingredients: [
      { name: 'Ripe bananas (sliced)', amount: '2 medium', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Sugar or honey', amount: '1.5 tbsp', available: true },
      { name: 'Vanilla extract or cardamom', amount: '1/4 tsp', available: true },
      { name: 'Ice cubes', amount: '4 cubes', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Peel and slice ripe bananas into the blender jar.',
      'Add chilled milk, sugar or honey, vanilla extract, and ice cubes.',
      'Blend on high speed for 60 seconds until thick, frothy, and totally lump-free.',
      'Pour into a tall glass and sprinkle a pinch of ground cinnamon on top.'
    ],
    youtubeUrl: 'https://youtu.be/uUv3cby4yMI?si=pcuioa-Dpa3UKcjU',
    isSaved: false
  },
  {
    id: 'drink-25',
    title: 'Fresh Pink Strawberry Milkshake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '230 kcal',
    rating: '5.0',
    reviews: 280,
    image: '/strawberry_milkshake.jpg',
    description: 'Thick, creamy diner-style strawberry shake made with fresh ripe strawberries, cold milk, sugar, and optional vanilla ice cream.',
    ingredients: [
      { name: 'Fresh ripe strawberries', amount: '1.5 cups', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Sugar', amount: '2 tbsp', available: true },
      { name: 'Vanilla ice cream', amount: '1 scoop', available: false },
      { name: 'Ice cubes', amount: '4 cubes', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Hull and slice fresh strawberries into blender.',
      'Add chilled milk, sugar, vanilla ice cream scoop, and ice cubes.',
      'Blend on high until silky smooth and pastel pink.',
      'Pour into soda glasses and garnish with a fresh strawberry on the rim.'
    ],
    youtubeUrl: 'https://youtu.be/vwO7nPaAWvs?si=77eFuwTXRoJrZiRl',
    isSaved: false
  },
  {
    id: 'drink-26',
    title: 'Thick Mango Milkshake with Ice Cream',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '250 kcal',
    rating: '5.0',
    reviews: 390,
    image: '/mango_icecream_milkshake.jpg',
    description: 'Street-style indulgent mango mastani shake made with sweet Alphonso pulp, chilled milk, and sugar.',
    ingredients: [
      { name: 'Sweet ripe mango pulp or cubes', amount: '1.5 cups', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Sugar', amount: '2 tbsp', available: true },
      { name: 'Vanilla or mango ice cream scoop', amount: '1 scoop', available: false },
      { name: 'Chopped cashews and tutty-fruity', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Blend fresh mango pulp, chilled milk, and sugar for 45 seconds until thick.',
      'Pour into tall tumblers over crushed ice.',
      'Crown with a scoop of ice cream.',
      'Garnish with chopped cashews, pistachios, and colorful tutty-fruity.'
    ],
    youtubeUrl: 'https://youtu.be/gllA8QgRJIA?si=WXZybfL8UzBr5AHS',
    isSaved: false
  },
  {
    id: 'drink-27',
    title: 'Spiced Apple Cinnamon Milkshake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '5 mins',
    cookTime: '0 mins',
    calories: '210 kcal',
    rating: '4.7',
    reviews: 90,
    image: '/apple_cinnamon_milkshake.jpg',
    description: 'Warmly spiced autumn shake blending tender apple pieces, cold milk, cinnamon powder, and honey.',
    ingredients: [
      { name: 'Sweet red apple (peeled & diced)', amount: '1 large', available: true },
      { name: 'Chilled milk', amount: '1.5 cups', available: true },
      { name: 'Ground cinnamon powder', amount: '1/2 tsp', available: true },
      { name: 'Honey or sugar', amount: '1.5 tbsp', available: true },
      { name: 'Vanilla extract & ice', amount: '1/4 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Add peeled diced apple, chilled milk, honey, and cinnamon into blender jar.',
      'Blend on high for 60-90 seconds until the apple is thoroughly pureed and frothy.',
      'Pour into chilled glasses over ice.',
      'Dust with extra ground cinnamon and serve cold.'
    ],
    youtubeUrl: 'https://youtu.be/ewx0WbnzDEk?si=7ZvVDOIaGNWcSgjT',
    isSaved: false
  },
  {
    id: 'drink-28',
    title: 'High-Protein Peanut Butter Banana Shake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '320 kcal',
    rating: '4.9',
    reviews: 310,
    image: '/peanut_butter_banana_shake.jpg',
    description: 'Gym-favorite protein powerhouse made by blending rich peanut butter, ripe banana, cold milk, and honey.',
    ingredients: [
      { name: 'Creamy peanut butter', amount: '2 tbsp', available: true },
      { name: 'Ripe banana', amount: '1 large', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Honey', amount: '1 tbsp', available: true },
      { name: 'Chia seeds or roasted peanuts', amount: '1 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Add banana slices, creamy peanut butter, honey, and cold milk into blender.',
      'Blend for 60 seconds until thick, nutty, and velvety.',
      'Pour into a shaker bottle or tall glass.',
      'Garnish with banana coins and crushed roasted peanuts.'
    ],
    youtubeUrl: 'https://youtu.be/DEiueXH--HI?si=rYWfNpnPd-p4yJ9r',
    isSaved: false
  },
  {
    id: 'drink-29',
    title: 'Café-Style Cookies & Cream Oreo Shake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '340 kcal',
    rating: '5.0',
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    description: 'Irresistible dessert shake made with crushed chocolate Oreo cookies, rich milk, and creamy vanilla ice cream.',
    ingredients: [
      { name: 'Oreo cookies', amount: '5 cookies', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Vanilla ice cream', amount: '2 scoops', available: false },
      { name: 'Chocolate syrup for drizzle', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Swirl chocolate syrup along inside walls of serving glasses.',
      'In a blender, combine 4 Oreo cookies, vanilla ice cream, and chilled milk.',
      'Pulse for 30 seconds so crunchy cookie crumbles remain suspended.',
      'Pour into prepared glasses and top with the remaining crumbled Oreo cookie.'
    ],
    youtubeUrl: 'https://youtu.be/jS3mRWkpVOA?si=fUfEK0YgnvHKwW6t',
    isSaved: false
  },
  {
    id: 'drink-30',
    title: 'Frothy Thick Café-Style Cold Coffee',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '170 kcal',
    rating: '5.0',
    reviews: 520,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    description: 'Rich, velvety, coffeehouse-standard cold coffee whipped with instant coffee granules, sugar, ice, and chilled milk.',
    ingredients: [
      { name: 'Instant coffee powder', amount: '1.5 tbsp', available: true },
      { name: 'Warm water (to dissolve)', amount: '2 tbsp', available: true },
      { name: 'Granulated sugar', amount: '2 tbsp', available: true },
      { name: 'Chilled whole milk', amount: '2 cups', available: true },
      { name: 'Ice cubes', amount: '1 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Dissolve instant coffee powder and sugar in warm water; whip until golden and frothy.',
      'Add the coffee mixture, cold milk, and ice cubes into the blender jar.',
      'Blend on high speed for 60 seconds until thick, creamy froth fills the top half.',
      'Drizzle chocolate syrup into glass, pour cold coffee, and spoon the foam on top.'
    ],
    youtubeUrl: 'https://youtu.be/BtJob9f2Zvc?si=oy437Oln7BdCkpHd',
    isSaved: false
  },
  {
    id: 'drink-31',
    title: 'Rich Chocolate Banana Energy Shake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '240 kcal',
    rating: '4.8',
    reviews: 160,
    image: '/chocolate_banana_shake.jpg',
    description: 'Fudge-like decadent blend of ripe sweet banana, pure cocoa powder, cold milk, and honey.',
    ingredients: [
      { name: 'Ripe banana', amount: '1 large', available: true },
      { name: 'Dutch cocoa powder', amount: '1.5 tbsp', available: true },
      { name: 'Chilled milk', amount: '1.5 cups', available: true },
      { name: 'Sugar or honey', amount: '1.5 tbsp', available: true },
      { name: 'Ice cubes', amount: '4 cubes', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Slice banana into blender jar; add cocoa powder, honey, and chilled milk.',
      'Add ice cubes and blend on high for 45 seconds until thick and chocolatey.',
      'Pour into tall tumblers.',
      'Garnish top with a dust of cocoa powder and banana chips.'
    ],
    youtubeUrl: 'https://youtu.be/SYYNkMwKHlw?si=Mi8rcNKJww7RIaDZ',
    isSaved: false
  },
  {
    id: 'drink-32',
    title: 'Royal Rose Ice Cream Milkshake',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '4 mins',
    cookTime: '0 mins',
    calories: '260 kcal',
    rating: '4.9',
    reviews: 175,
    image: '/royal_rose_milkshake.jpg',
    description: 'Luxurious sweet dessert milkshake made by blending aromatic rose syrup with chilled whole milk and creamy vanilla ice cream.',
    ingredients: [
      { name: 'Concentrated rose syrup (Rooh Afza)', amount: '3 tbsp', available: true },
      { name: 'Chilled whole milk', amount: '1.5 cups', available: true },
      { name: 'Vanilla ice cream', amount: '2 scoops', available: false },
      { name: 'Pistachio slivers & rose petals', amount: 'For garnish', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Blend rose syrup, 1 scoop of vanilla ice cream, and chilled milk until thick and creamy.',
      'Pour into soda fountain glasses.',
      'Top with a second scoop of vanilla ice cream.',
      'Drizzle with extra rose syrup and sprinkle crushed pistachios.'
    ],
    youtubeUrl: 'https://youtu.be/OBAYy0TQRjs?si=CnC4Gcktqt5eGjjM',
    isSaved: false
  },
  {
    id: 'drink-33',
    title: 'Soothing Adrak Ginger Tea',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '3 mins',
    cookTime: '6 mins',
    calories: '85 kcal',
    rating: '5.0',
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: 'Immunity-boosting fiery ginger tea simmered with fresh crushed adrak, Assam black tea leaves, and sweet milk.',
    ingredients: [
      { name: 'Fresh ginger (crushed)', amount: '1.5 inch piece', available: true },
      { name: 'Strong black tea leaves', amount: '2 tsp', available: true },
      { name: 'Water', amount: '1 cup', available: true },
      { name: 'Milk', amount: '1 cup', available: true },
      { name: 'Sugar or jaggery', amount: '2 tsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Pound fresh ginger thoroughly in mortar and pestle to release all aromatic juices.',
      'Boil water with the crushed ginger for 3 minutes to infuse the spicy ginger flavor.',
      'Add black tea leaves and simmer for 1 minute; add milk and sugar.',
      'Bring to rolling boil twice, strain into cups, and enjoy hot.'
    ],
    youtubeUrl: 'https://youtu.be/ogB4Y3dmODQ?si=7HTbWQmg3gz-msQs',
    isSaved: false
  },
  {
    id: 'drink-34',
    title: 'Warm Immunity Honey Lemon Tea',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Continental',
    prepTime: '3 mins',
    cookTime: '2 mins',
    calories: '60 kcal',
    rating: '4.9',
    reviews: 210,
    image: '/honey_lemon_tea.jpg',
    description: 'Classic soothing throat relief infusion made with hot water, freshly squeezed lemon juice, and pure raw honey.',
    ingredients: [
      { name: 'Warm/Hot water (not boiling)', amount: '1.5 cups', available: true },
      { name: 'Fresh lemon juice', amount: '1.5 tbsp', available: true },
      { name: 'Pure raw honey', amount: '1.5 tbsp', available: true },
      { name: 'Fresh ginger slice', amount: '1 slice', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Heat water until steaming hot (around 75°C - 80°C; do not boil honey).',
      'Squeeze in fresh lemon juice and add ginger slice.',
      'Stir in raw wild honey until completely dissolved.',
      'Sip slowly from a warm mug for instant soothing comfort.'
    ],
    youtubeUrl: 'https://youtu.be/XKv24ZzvmyQ?si=gX7nlt86dWf3w-Wn',
    isSaved: false
  },
  {
    id: 'drink-35',
    title: 'Decadent European Hot Chocolate',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'European',
    prepTime: '3 mins',
    cookTime: '5 mins',
    calories: '240 kcal',
    rating: '5.0',
    reviews: 410,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    description: 'Thick, velvety, European-style winter warmer simmered with whole milk, Dutch cocoa, dark chocolate, and sugar.',
    ingredients: [
      { name: 'Whole milk', amount: '2 cups', available: true },
      { name: 'Dark chocolate chips or chopped chocolate', amount: '50g', available: false },
      { name: 'Dutch cocoa powder', amount: '1.5 tbsp', available: true },
      { name: 'Sugar', amount: '2 tbsp', available: true },
      { name: 'Vanilla extract & pinch of salt', amount: '1/4 tsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Warm milk in a heavy saucepan over medium heat until steaming.',
      'Whisk in cocoa powder, sugar, and a pinch of salt until completely dissolved.',
      'Add dark chocolate chunks and whisk constantly until melted and silky thick.',
      'Pour into cozy mugs and top with whipped cream or mini marshmallows.'
    ],
    youtubeUrl: 'https://youtu.be/rdU5qbwpGgY?si=oJHSFrS_k-RqiXLY',
    isSaved: false
  },
  {
    id: 'drink-36',
    title: 'Traditional Kesar Badam Milk (Almond Milk)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '5 mins',
    cookTime: '8 mins',
    calories: '220 kcal',
    rating: '5.0',
    reviews: 320,
    image: '/kesar_badam_milk.jpg',
    description: 'Rich royal tonic simmered with soaked blanched almond paste, saffron strands, green cardamom, and warm whole milk.',
    ingredients: [
      { name: 'Whole milk', amount: '2 cups', available: true },
      { name: 'Soaked blanched almonds (badam)', amount: '15 almonds', available: true },
      { name: 'Saffron strands (kesar)', amount: '1 pinch', available: false },
      { name: 'Green cardamom powder', amount: '1/4 tsp', available: true },
      { name: 'Sugar', amount: '2 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'Blend soaked blanched almonds with 3 tablespoons of milk into a smooth paste.',
      'Bring remaining milk to a gentle boil with saffron strands.',
      'Stir in almond paste, sugar, and cardamom powder; simmer on low heat for 5 minutes.',
      'Serve steaming hot in winter or chilled in summer with sliced almonds.'
    ],
    youtubeUrl: 'https://youtu.be/t-OKJMEUSsI?si=3KtUMtFG2AKuzIIF',
    isSaved: false
  },
  {
    id: 'drink-37',
    title: 'Golden Haldi Doodh (Turmeric Latte)',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'Indian',
    prepTime: '2 mins',
    cookTime: '4 mins',
    calories: '130 kcal',
    rating: '4.9',
    reviews: 350,
    image: '/golden_haldi_doodh.jpg',
    description: 'Ayurvedic healing golden milk simmered with organic turmeric, black pepper, cinnamon, honey, and warm milk.',
    ingredients: [
      { name: 'Whole milk (or oat/almond milk)', amount: '2 cups', available: true },
      { name: 'Organic turmeric powder (haldi)', amount: '1/2 tsp', available: true },
      { name: 'Cracked black pepper (activates turmeric)', amount: '1 pinch', available: true },
      { name: 'Cinnamon stick or powder', amount: '1/4 tsp', available: true },
      { name: 'Honey or jaggery', amount: '1.5 tbsp', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Add milk, turmeric, black pepper, and cinnamon powder to a saucepan.',
      'Simmer gently on medium-low heat for 3-4 minutes, whisking occasionally.',
      'Pour into mugs through a strainer.',
      'Stir in honey or jaggery to taste and enjoy warm before bed.'
    ],
    youtubeUrl: 'https://youtu.be/qDvGBHuTswA?si=uV15lgM3uR55z0II',
    isSaved: false
  },
  {
    id: 'drink-38',
    title: 'Warm Spiced Cinnamon Apple Cider Drink',
    course: 'Drinks',
    category: 'Drinks',
    cuisine: 'American',
    prepTime: '3 mins',
    cookTime: '7 mins',
    calories: '95 kcal',
    rating: '4.8',
    reviews: 145,
    image: '/warm_cinnamon_apple_drink.jpg',
    description: 'Cozy spiced warm beverage brewed with pure apple juice, whole cinnamon quills, cloves, and a touch of lemon.',
    ingredients: [
      { name: 'Pure unfiltered apple juice', amount: '2.5 cups', available: true },
      { name: 'Cinnamon sticks', amount: '2 sticks', available: true },
      { name: 'Whole cloves & star anise', amount: '3 cloves', available: false },
      { name: 'Fresh orange or lemon peel', amount: '1 strip', available: true },
      { name: 'Brown sugar or maple syrup (optional)', amount: '1 tbsp', available: true }
    ],
    missingCount: 1,
    instructions: [
      'In a saucepan, combine apple juice, cinnamon sticks, cloves, and citrus peel.',
      'Simmer gently on low heat for 7-10 minutes so warming spices infuse deeply.',
      'Strain hot spiced cider into glass mugs.',
      'Garnish with a cinnamon stick stirrer and floating apple slices.'
    ],
    youtubeUrl: 'https://youtu.be/lxOhKo7Og4U?si=UXEAUPKeTE-Kf5bg',
    isSaved: false
  },

  // ===================== INSTANT & QUICK DISHES (8) =====================
  {
    id: 'instant-1',
    title: '5-Minute Street-Style Butter Masala Maggi',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Indian Fusion',
    prepTime: '2 mins',
    cookTime: '3 mins',
    calories: '290 kcal',
    rating: '4.9',
    reviews: 420,
    image: '/butter_masala_maggi.jpg',
    description: 'Classic quick noodles elevated with rich butter, green chilies, golden corn, and extra aromatic masala seasoning.',
    ingredients: [
      { name: 'Instant Masala Noodles with Tastemaker', amount: '1 pack', available: true },
      { name: 'Salted Butter', amount: '1 tbsp', available: true },
      { name: 'Chopped Green Chili & Onion', amount: '2 tbsp', available: true },
      { name: 'Grated Processed Cheese', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Melt butter in a small pan, saute chopped green chili and onion for 30 seconds.',
      'Add 1.5 cups water and noodle tastemaker spice blend; bring to a rapid boil.',
      'Break noodles into the pan and cook on high heat for 2 minutes until saucy.',
      'Top with grated cheese and fresh coriander. Serve piping hot!'
    ],
    youtubeUrl: 'https://youtu.be/HZno_fFusw0?si=mZqij19ITuN1d9pE',
    isSaved: true
  },
  {
    id: 'instant-2',
    title: 'Crispy Cheese & Chilli Toast',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Indo-Western',
    prepTime: '2 mins',
    cookTime: '4 mins',
    calories: '260 kcal',
    rating: '4.8',
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    description: 'Golden toasted bread loaded with melted bubbly cheese, minced green chilies, and oregano garlic butter.',
    ingredients: [
      { name: 'Bread slices (White or Brown)', amount: '2 slices', available: true },
      { name: 'Grated Mozzarella & Cheddar cheese', amount: '1/2 cup', available: true },
      { name: 'Finely minced green chilies & garlic', amount: '1 tsp', available: true },
      { name: 'Oregano & Chilli Flakes seasoning', amount: '1/2 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Lightly butter one side of bread slices and toast on a hot pan until crisp on the bottom.',
      'Flip, pile generously with grated cheese, minced chilies, and garlic butter.',
      'Cover pan with a lid for 2-3 minutes on low heat until cheese is bubbly and gooey.',
      'Sprinkle oregano and chilli flakes. Slice diagonally and serve!'
    ],
    youtubeUrl: 'https://youtu.be/u86z8lEedr8?si=Am0ritVrDhkK4PyF',
    isSaved: false
  },
  {
    id: 'instant-3',
    title: 'Speedy Masala Egg Bhurji (Scrambled Eggs)',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Indian',
    prepTime: '2 mins',
    cookTime: '4 mins',
    calories: '230 kcal',
    rating: '4.9',
    reviews: 330,
    image: '/egg_bhurji.jpg',
    description: 'Dhaba-style quick fluffy scrambled eggs cooked with finely chopped onions, tomatoes, and everyday spices.',
    ingredients: [
      { name: 'Fresh Eggs (whisked)', amount: '3 large', available: true },
      { name: 'Finely chopped Onion & Tomato', amount: '1/2 cup', available: true },
      { name: 'Butter or Cooking Oil', amount: '1 tbsp', available: true },
      { name: 'Garam Masala & Turmeric', amount: '1/2 tsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Heat butter in a skillet; saute onions and green chilies for 1 minute until soft.',
      'Add chopped tomato, turmeric, salt, and cook for another minute.',
      'Pour in whisked eggs and scramble gently over medium-low heat until soft and fluffy.',
      'Dust with garam masala and chopped cilantro. Serve warm with toast or roti.'
    ],
    youtubeUrl: 'https://youtu.be/glUEnS8J84Q?si=DUyQ2NayUswwOPOg',
    isSaved: false
  },
  {
    id: 'instant-4',
    title: '5-Minute Garlic Butter Fried Rice',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Asian Quick-Stir',
    prepTime: '2 mins',
    cookTime: '3 mins',
    calories: '310 kcal',
    rating: '4.8',
    reviews: 185,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    description: 'Fast and flavorful wok-tossed leftover rice with aromatic golden toasted garlic, butter, and light soy sauce.',
    ingredients: [
      { name: 'Cooked White / Basmati Rice', amount: '2 cups', available: true },
      { name: 'Minced fresh garlic cloves', amount: '5 cloves', available: true },
      { name: 'Salted Butter', amount: '2 tbsp', available: true },
      { name: 'Dark Soy Sauce & Spring Onions', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Melt butter in a hot pan over medium heat; add minced garlic and fry until golden brown and fragrant.',
      'Toss in chilled cooked rice and break up any clumps with a spatula.',
      'Drizzle soy sauce, black pepper, and toss vigorously on high heat for 2 minutes.',
      'Garnish with sliced spring onions and serve immediately!'
    ],
    youtubeUrl: 'https://youtu.be/A3pTdLEMJVk?si=6o9RpEAqbytSy9Fb',
    isSaved: false
  },
  {
    id: 'instant-5',
    title: 'Instant Microwave Chocolate Mug Cake',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Quick Dessert',
    prepTime: '2 mins',
    cookTime: '1.5 mins',
    calories: '270 kcal',
    rating: '4.9',
    reviews: 295,
    image: '/chocolate_mug_cake.jpg',
    description: 'Warm, moist, ultra-rich chocolate sponge cake baked right in your favorite coffee mug in just 90 seconds.',
    ingredients: [
      { name: 'All-purpose flour & Sugar', amount: '3 tbsp each', available: true },
      { name: 'Unsweetened Cocoa powder', amount: '1.5 tbsp', available: true },
      { name: 'Milk & Melted Butter', amount: '3 tbsp + 1 tbsp', available: true },
      { name: 'Chocolate chips / Nutella core', amount: '1 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Whisk flour, sugar, cocoa powder, and a pinch of baking powder directly in a microwave-safe mug.',
      'Add milk and melted butter; mix with a fork until a smooth batter forms.',
      'Drop a spoonful of chocolate chips or Nutella in the center (it sinks to create a molten core).',
      'Microwave on high for 75-90 seconds. Let cool for 1 minute and enjoy!'
    ],
    youtubeUrl: 'https://youtu.be/4TksxjQjvkQ?si=7Dm9XK8EsSw_S2v7',
    isSaved: false
  },
  {
    id: 'instant-6',
    title: '10-Minute Paneer Bhurji Wrap',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Indian',
    prepTime: '3 mins',
    cookTime: '5 mins',
    calories: '340 kcal',
    rating: '4.8',
    reviews: 160,
    image: '/paneer_bhurji_wrap.jpg',
    description: 'Spiced crumbled cottage cheese tossed with onion, tomato, and wrapped in warm roti with mint sauce.',
    ingredients: [
      { name: 'Fresh Paneer (crumbled)', amount: '150g', available: true },
      { name: 'Whole Wheat Roti / Tortilla', amount: '2 pieces', available: true },
      { name: 'Diced Onion & Tomato', amount: '1/2 cup', available: true },
      { name: 'Mint Chutney & Chaat Masala', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Heat 1 tsp oil in pan, quickly saute onions and tomatoes for 1-2 minutes.',
      'Add crumbled paneer, pinch of turmeric, salt, and toss for 2 minutes.',
      'Warm the rotis on a tawa, spread mint chutney down the center.',
      'Spoon paneer filling, sprinkle chaat masala, roll up tightly and serve!'
    ],
    youtubeUrl: 'https://youtu.be/9BF7CUM1lis?si=nDp1atZWBUFovh47',
    isSaved: false
  },
  {
    id: 'instant-7',
    title: 'Quick 3-Ingredient Creamy Mug Mac & Cheese',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Continental',
    prepTime: '2 mins',
    cookTime: '4 mins',
    calories: '320 kcal',
    rating: '4.7',
    reviews: 140,
    image: '/mug_mac_and_cheese.png',
    description: 'Cheesy, creamy comfort pasta cooked in a mug in minutes with zero boiling pots needed.',
    ingredients: [
      { name: 'Quick-cook Macaroni Elbows', amount: '1/3 cup', available: true },
      { name: 'Shredded Cheddar / Mozzarella cheese', amount: '1/2 cup', available: true },
      { name: 'Whole Milk', amount: '1/4 cup', available: true }
    ],
    missingCount: 0,
    instructions: [
      'Add macaroni and 1/2 cup water to a large mug; microwave for 2-3 mins until tender.',
      'Pour in milk and stir in shredded cheese until it melts into a thick sauce.',
      'Microwave for another 30 seconds to get bubbly and creamy. Season with pepper and enjoy!'
    ],
    youtubeUrl: 'https://youtu.be/IzLn0pXntNE?si=iW83IxcLARNKUHhJ',
    isSaved: false
  },
  {
    id: 'instant-8',
    title: 'Instant Tangy Aloo Chaat Toss',
    course: 'Instant',
    category: 'Instant',
    cuisine: 'Indian',
    prepTime: '2 mins',
    cookTime: '4 mins',
    calories: '190 kcal',
    rating: '4.9',
    reviews: 220,
    image: '/instant_aloo_chaat.jpg',
    description: 'Crisp pan-tossed potato cubes tossed in tangy lemon juice, roasted cumin, chaat masala, and spicy green chutney.',
    ingredients: [
      { name: 'Boiled potatoes (diced)', amount: '2 medium', available: true },
      { name: 'Chaat Masala & Roasted Cumin', amount: '1 tsp', available: true },
      { name: 'Fresh Lemon Juice', amount: '1 tbsp', available: true },
      { name: 'Spicy Mint Chutney & Crispy Sev', amount: '2 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Pan-fry boiled potato cubes in 1 tsp oil on high flame for 3-4 mins until golden and crunchy.',
      'Transfer to a bowl; toss immediately with chaat masala, cumin, salt, and lemon juice.',
      'Drizzle mint chutney and sprinkle crunchy sev on top.',
      'Serve with toothpicks for a lightning-fast savory snack!'
    ],
    youtubeUrl: 'https://youtu.be/3-kZh8yYJ0o?si=tYmAN1oGIrmN23eW',
    isSaved: false
  },
  {
    id: 'snack-french-fries',
    title: 'Crispy Peri-Peri Golden French Fries',
    course: 'Snacks',
    category: 'Snacks',
    cuisine: 'Fast Food / Continental',
    prepTime: '10 mins',
    cookTime: '15 mins',
    calories: '290 kcal',
    rating: '4.9',
    reviews: 185,
    image: '/french_fries.jpg',
    description: 'Hot, ultra-crispy double-fried golden potato batons tossed in a zesty peri-peri spice blend, served with creamy garlic dip and chilled ketchup.',
    ingredients: [
      { name: 'Russet or Large Potatoes (cut into batons)', amount: '3 large (400g)', available: true },
      { name: 'Peri-Peri Seasoning & Sea Salt', amount: '1.5 tbsp', available: true },
      { name: 'Cornstarch (for extra crunch)', amount: '2 tbsp', available: true },
      { name: 'Cooking Oil for frying', amount: '2 cups', available: true },
      { name: 'Creamy Garlic Mayo Dip & Tomato Ketchup', amount: '3 tbsp', available: false }
    ],
    missingCount: 1,
    instructions: [
      'Peel and slice potatoes into uniform 1/4-inch long batons. Soak in ice-cold water for 15 mins to remove excess starch.',
      'Drain and pat the potato batons completely dry with a clean kitchen towel. Lightly dust with cornstarch.',
      'First Fry (Par-cook): Heat oil to medium (160°C/320°F) and fry the potatoes for 4-5 minutes without browning. Drain on paper towels and let cool.',
      'Second Fry (Crisp): Increase oil heat to high (190°C/375°F) and fry for 3-4 minutes until blistered, deep golden, and shatteringly crispy.',
      'Immediately transfer to a bowl, dust generously with peri-peri seasoning and sea salt, tossing while hot.',
      'Serve piping hot in a rustic cone with creamy garlic mayo and chilled ketchup!'
    ],
    youtubeUrl: 'https://youtu.be/yM9r4V6Mr2w?si=C8Wxbr1raDO6AbHg',
    isSaved: true
  }
];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function isVegRecipe(recipe) {
  if (!recipe) return true;
  if (typeof recipe.isVeg === 'boolean') return recipe.isVeg;
  if (recipe.dietType === 'non-veg') return false;
  if (recipe.dietType === 'veg') return true;

  // Strict non-veg keywords
  const nonVegKeywords = [
    'chicken', 'mutton', 'fish', 'prawn', 'egg', 'lamb', 'pork', 'beef',
    'keema', 'meat', 'beef', 'pork', 'seafood', 'salmon', 'tuna', 'bacon', 'shrimp', 
    'crab', 'poultry', 'seekh kebab'
  ];

  const combined = (
    (recipe.title || '') + ' ' + 
    (recipe.description || '') + ' ' + 
    (recipe.ingredients ? recipe.ingredients.map(i => typeof i === 'string' ? i : (i.name || '')).join(' ') : '')
  ).toLowerCase();

  for (const keyword of nonVegKeywords) {
    const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i');
    if (regex.test(combined)) {
      if (keyword.startsWith('egg') && (combined.includes('eggless') || combined.includes('eggplant'))) {
        continue;
      }
      return false;
    }
  }

  return true;
}
