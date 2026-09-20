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

  // ===================== BEVERAGES (DRINKS) (4) =====================
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
