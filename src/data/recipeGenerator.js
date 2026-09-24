// Smart AI Recipe Generation & Advanced User Demand Analyzer Engine

export const INGREDIENT_SYNONYMS = {
  paneer: ['paneer', 'cottage cheese', 'chenna'],
  spinach: ['spinach', 'palak', 'greens', 'saag'],
  potato: ['potato', 'potatoes', 'aloo', 'potatos', 'baby potato', 'french fries', 'fries', 'finger chips', 'franchfice', 'french fry'],
  fries: ['french fries', 'fries', 'finger chips', 'peri peri fries', 'frenchfries', 'franchfice', 'french fry', 'frenchfry', 'franch fries'],
  chicken: ['chicken', 'chicken breast', 'poultry', 'boneless chicken'],
  rice: ['rice', 'basmati', 'basmati rice', 'white rice', 'brown rice', 'chawal', 'cooked rice'],
  egg: ['egg', 'eggs', 'anda', 'egg bhurji', 'egg yolk', 'egg white'],
  maggi: ['maggi', 'maggi noodles', 'noodles', 'instant noodles', 'ramen'],
  cheese: ['cheese', 'mozzarella', 'cheddar', 'processed cheese', 'parmesan'],
  bread: ['bread', 'bread slices', 'toast', 'roti', 'tortilla', 'paratha', 'pita', 'sandwich bread'],
  chole: ['chole', 'chana', 'chickpeas', 'kabuli chana', 'falafel'],
  garlic: ['garlic', 'ginger-garlic', 'garlic cloves', 'lasun'],
  onion: ['onion', 'yellow onion', 'red onion', 'shallots', 'pyaz'],
  tomato: ['tomato', 'tomatoes', 'tamatar', 'tomato puree'],
  butter: ['butter', 'salted butter', 'makhan'],
  ghee: ['ghee', 'desi ghee', 'clarified butter'],
  milk: ['milk', 'full cream milk', 'cow milk', 'oat milk', 'almond milk', 'rabdi'],
  mango: ['mango', 'mango pulp', 'alphonso', 'aam'],
  chocolate: ['chocolate', 'cocoa', 'cocoa powder', 'dark chocolate'],
  tofu: ['tofu', 'soya', 'soy chunks', 'bean curd'],
  fish: ['fish', 'kingfish', 'pomfret', 'salmon'],
  corn: ['corn', 'sweet corn', 'sweetcorn', 'corn kernels'],
  pasta: ['pasta', 'macaroni', 'spaghetti', 'penne', 'fusilli'],
  curd: ['curd', 'yogurt', 'dahi', 'greek yogurt', 'hung curd'],
  tea: ['tea', 'chai', 'black tea', 'tea leaves'],
  matcha: ['matcha', 'green tea'],
  sugar: ['sugar', 'honey', 'jaggery', 'gur', 'maple syrup'],
  flour: ['flour', 'maida', 'atta', 'wheat flour', 'besan', 'gram flour', 'oats'],
  lemon: ['lemon', 'lime', 'nimbu', 'lemon juice'],
  banana: ['banana', 'bananas', 'kela'],
  strawberry: ['strawberry', 'strawberries'],
  watermelon: ['watermelon', 'tarbooj'],
  pineapple: ['pineapple', 'ananas'],
  apple: ['apple', 'apples', 'seb', 'apple juice'],
  grape: ['grape', 'grapes', 'angoor'],
  orange: ['orange', 'oranges', 'orange juice', 'santre'],
  cucumber: ['cucumber', 'kheera'],
  coconut: ['coconut water', 'coconut', 'nariyal pani', 'nariyal'],
  rose: ['rose syrup', 'rooh afza', 'gulab syrup', 'rose'],
  coffee: ['coffee', 'instant coffee', 'cold coffee', 'espresso'],
  peanut_butter: ['peanut butter', 'peanuts'],
  oreo: ['oreo', 'oreo biscuit', 'cookies'],
  ice_cream: ['ice cream', 'vanilla ice cream'],
  cumin: ['cumin', 'jeera', 'bhuna jeera', 'cumin seeds'],
  sattu: ['sattu', 'roasted gram flour'],
  almond: ['almond', 'almonds', 'badam'],
  turmeric: ['turmeric', 'haldi'],
  honey: ['honey', 'shahad'],
  mint: ['mint', 'pudina', 'mint leaves']
};

export const CO_OCCURRENCE_PAIRS = {
  paneer: ['Spinach (Palak)', 'Butter', 'Bell Pepper', 'Garam Masala', 'Tomato', 'Kasuri Methi', 'Onion'],
  chicken: ['Garlic Cloves', 'Basmati Rice', 'Butter', 'Black Pepper', 'Heavy Cream', 'Ginger', 'Onion'],
  egg: ['Bread Slices', 'Cheese', 'Yellow Onion', 'Green Chilies', 'Butter', 'Black Pepper'],
  maggi: ['Processed Cheese', 'Butter', 'Yellow Onion', 'Tomato', 'Green Chilies', 'Chaat Masala'],
  potato: ['Peri-Peri Seasoning', 'Green Peas', 'Chaat Masala', 'Besan / Maida', 'Coriander Leaves', 'Tamarind Chutney'],
  fries: ['Peri-Peri Seasoning', 'Garlic Mayo Dip', 'Tomato Ketchup', 'Cheese Sauce', 'Oregano'],
  chocolate: ['Milk', 'Cocoa Powder', 'Baking Powder', 'Butter', 'Sugar / Honey'],
  pasta: ['Cheddar / Mozzarella', 'Butter', 'Garlic', 'Heavy Cream', 'Oregano & Chili Flakes'],
  bread: ['Cheese Slices', 'Eggs', 'Butter', 'Oregano', 'Tomato', 'Mayonnaise'],
  rice: ['Chicken Breast', 'Garlic', 'Butter', 'Soy Sauce', 'Spring Onions', 'Ghee'],
  tofu: ['Thai Basil', 'Soy Sauce', 'Cashews', 'Garlic', 'Bell Peppers', 'Sesame Oil'],
  spinach: ['Paneer', 'Garlic', 'Onion', 'Cream', 'Green Chilies', 'Cumin Seeds'],
  milk: ['Cardamom Powder', 'Saffron (Kesar)', 'Pistachios', 'Sugar', 'Mango Pulp'],
  curd: ['Chaat Masala', 'Sev / Papdi', 'Boiled Potatoes', 'Mint Chutney', 'Cumin'],
  corn: ['Butter', 'Chili Flakes', 'Bell Pepper', 'Cheese', 'Black Pepper'],
  chole: ['Kulcha / Bhatura', 'Ginger & Chilies', 'Garam Masala', 'Onion Rings', 'Lemon']
};

export const DEMAND_MOODS = [
  { id: 'quick', label: '⚡ Super Quick (<15m)', desc: 'Fast, minimal-prep express meals' },
  { id: 'high-protein', label: '💪 High Protein', desc: 'Protein-packed fuel for fitness' },
  { id: 'spicy', label: '🔥 Spicy & Chatpata', desc: 'Zesty, street-style, punchy flavors' },
  { id: 'healthy', label: '🥑 Light & Fit (<350 kcal)', desc: 'Nutrient-rich, low-calorie clean eating' },
  { id: 'comfort', label: '🧀 Cheesy & Comfort', desc: 'Indulgent, creamy, melted comfort' },
  { id: 'sweet', label: '🍰 Sweet Cravings', desc: 'Desserts, mug cakes, and sweet treats' }
];

export const MEAL_OCCASIONS = [
  { id: 'all', label: '🍽️ All Meals' },
  { id: 'breakfast', label: '🍳 Breakfast' },
  { id: 'snack', label: '🥪 Snack & Bites' },
  { id: 'main', label: '🍛 Lunch / Dinner' },
  { id: 'dessert', label: '🍨 Dessert / Drinks' }
];

const FOOD_TYPE_IMAGES = {
  french_fries: '/french_fries.jpg',
  fries: '/french_fries.jpg',
  maggi: '/butter_masala_maggi.jpg',
  noodles: '/butter_masala_maggi.jpg',
  egg: '/egg_bhurji.jpg',
  paneer_wrap: '/paneer_kathi_roll.png',
  paneer_curry: '/palak_paneer.jpg',
  paneer_starter: '/malai_paneer_tikka.jpg',
  chicken_tuscan: '/tuscan_chicken.jpg',
  chicken_main: '/butter_chicken.jpg',
  chicken_rice: '/chicken_biryani.jpg',
  kebab: '/hara_bhara_kebab.png',
  chole: '/chole_kulche.png',
  fish: '/malabar_fish_curry.png',
  tofu: '/thai_basil_tofu.jpg',
  toast: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
  fried_rice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
  pasta: '/mug_mac_and_cheese.png',
  aloo_chaat: '/instant_aloo_chaat.jpg',
  aloo_tikki: '/delhi_aloo_tikki.jpg',
  dahi_puri: '/dahi_puri.jpg',
  nachos: '/loaded_nachos.jpg',
  falafel: '/falafel_pita.jpg',
  chocolate_cake: '/chocolate_mug_cake.jpg',
  lava_cake: '/lava_cake.png',
  tiramisu: '/tiramisu.jpg',
  creme_brulee: '/creme_brulee.jpg',
  gulab_jamun: '/gulab_jamun.jpg',
  rasmalai: '/rasmalai.png',
  gajar_halwa: '/gajar_ka_halwa.jpg',
  jalebi: '/jalebi.jpg',
  besan_ladoo: '/besan_ladoo.jpg',
  shahi_tukda: '/shahi_tukda.jpg',
  mango_lassi: '/mango_lassi.png',
  chai: '/masala_chai.jpg',
  matcha: '/iced_matcha_latte.png',
  chaas: '/masala_chaas.jpg',
  aam_panna: '/aam_panna.jpg',
  lassi: '/sweet_lassi.png',
  rose_milk: '/rose_milk.png',
  cooler: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=800&q=80',
  lemonade: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
  shake: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
  cold_coffee: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  hot_chocolate: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  badam_milk: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80',
  haldi_milk: 'https://images.unsplash.com/photo-1578859318504-204695586b82?auto=format&fit=crop&w=800&q=80',
  generic_curry: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  generic_bowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
};

export function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .trim();
}

export function getSynonymKeys(rawIngredient) {
  const norm = normalizeText(rawIngredient);
  const wordsSet = new Set(norm.split(/\s+/).filter(Boolean));
  const matchedKeys = new Set();

  for (const [key, terms] of Object.entries(INGREDIENT_SYNONYMS)) {
    for (const term of terms) {
      if (norm === term || wordsSet.has(term) || (term.length >= 4 && norm.includes(term))) {
        matchedKeys.add(key);
      }
    }
  }

  if (matchedKeys.size === 0) {
    matchedKeys.add(norm);
  }

  return Array.from(matchedKeys);
}

/**
 * Intelligent Ingredient Suggestions based on user's current pantry items
 */
export function getSmartIngredientSuggestions(currentIngredients = []) {
  const currentKeys = new Set();
  currentIngredients.forEach(i => getSynonymKeys(i).forEach(k => currentKeys.add(k)));

  const recommended = new Set();

  // Find co-occurrences
  currentKeys.forEach(k => {
    if (CO_OCCURRENCE_PAIRS[k]) {
      CO_OCCURRENCE_PAIRS[k].forEach(item => recommended.add(item));
    }
  });

  // Filter out what user already has
  const filtered = Array.from(recommended).filter(item => {
    const itemKeys = getSynonymKeys(item);
    return !itemKeys.some(k => currentKeys.has(k));
  });

  if (filtered.length >= 4) {
    return filtered.slice(0, 8);
  }

  // Fallback defaults if empty or few
  const defaultStaples = [
    'Paneer', 'Butter', 'Maggi Noodles', 'Eggs', 'Cheese', 
    'Bread', 'Spinach', 'Chicken', 'Garlic', 'Potato', 'Basmati Rice', 'Chocolate'
  ];

  defaultStaples.forEach(s => {
    const sKeys = getSynonymKeys(s);
    if (!sKeys.some(k => currentKeys.has(k))) {
      filtered.push(s);
    }
  });

  return Array.from(new Set(filtered)).slice(0, 8);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Advanced Natural Language User Demand & Intent Parser
 */
export function parseUserDemand(queryText = '') {
  if (!queryText || typeof queryText !== 'string') {
    return {
      extractedIngredients: [],
      mood: null,
      mealType: 'all',
      maxTime: null,
      dietary: {}
    };
  }

  const text = queryText.toLowerCase();
  const extractedIngredients = [];
  const extractedIngredientsSet = new Set();
  const dietary = {};

  // Extract ingredients mentioned in query
  for (const terms of Object.values(INGREDIENT_SYNONYMS)) {
    for (const term of terms) {
      const regex = new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i');
      if (regex.test(text)) {
        // Capitalize nicely
        const cleanName = term.charAt(0).toUpperCase() + term.slice(1);
        if (!extractedIngredientsSet.has(cleanName)) {
          extractedIngredientsSet.add(cleanName);
          extractedIngredients.push(cleanName);
        }
        break;
      }
    }
  }

  // Mood detection
  let mood = null;
  if (text.includes('protein') || text.includes('gym') || text.includes('muscle') || text.includes('fitness')) {
    mood = 'high-protein';
  } else if (text.includes('quick') || text.includes('fast') || text.includes('instant') || text.includes('5 min') || text.includes('10 min') || text.includes('express')) {
    mood = 'quick';
  } else if (text.includes('spicy') || text.includes('masala') || text.includes('chatpata') || text.includes('street') || text.includes('tikka') || text.includes('chaat')) {
    mood = 'spicy';
  } else if (text.includes('healthy') || text.includes('low cal') || text.includes('diet') || text.includes('clean') || text.includes('salad')) {
    mood = 'healthy';
  } else if (text.includes('cheese') || text.includes('cheesy') || text.includes('comfort') || text.includes('creamy') || text.includes('butter')) {
    mood = 'comfort';
  } else if (text.includes('sweet') || text.includes('dessert') || text.includes('cake') || text.includes('sugar') || text.includes('chocolate') || text.includes('craving')) {
    mood = 'sweet';
  }

  // Meal Type detection
  let mealType = 'all';
  if (text.includes('breakfast') || text.includes('morning') || text.includes('nashta')) {
    mealType = 'breakfast';
  } else if (text.includes('snack') || text.includes('starter') || text.includes('appetizer') || text.includes('tiffin') || text.includes('bite')) {
    mealType = 'snack';
  } else if (text.includes('lunch') || text.includes('dinner') || text.includes('main course') || text.includes('curry') || text.includes('meal')) {
    mealType = 'main';
  } else if (text.includes('dessert') || text.includes('sweet') || text.includes('drink') || text.includes('shake') || text.includes('late night')) {
    mealType = 'dessert';
  }

  // Max Time extraction (e.g., "10 mins", "15 minutes")
  let maxTime = null;
  const timeMatch = text.match(/(\d+)\s*(?:min|minute|m\b)/i);
  if (timeMatch) {
    maxTime = parseInt(timeMatch[1], 10);
  } else if (mood === 'quick') {
    maxTime = 15;
  }

  // Dietary detection
  if (text.includes('vegan')) dietary.vegan = true;
  if (text.includes('gluten free') || text.includes('gluten-free')) dietary.glutenFree = true;
  if (text.includes('dairy free') || text.includes('dairy-free')) dietary.dairyFree = true;
  if (text.includes('keto')) dietary.keto = true;

  return {
    extractedIngredients,
    mood,
    mealType,
    maxTime,
    dietary
  };
}

/**
 * Calculates total cooking time in minutes from prep & cook time strings
 */
export function parseTotalMinutes(prepTimeStr = '10 mins', cookTimeStr = '10 mins') {
  const parseMin = (s) => {
    const m = (s || '').match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 10;
  };
  return parseMin(prepTimeStr) + parseMin(cookTimeStr);
}

/**
 * Extracts numeric calories
 */
export function parseCaloriesNumber(calStr = '300 kcal') {
  const m = (calStr || '').match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 320;
}

/**
 * Estimates protein content based on primary ingredients
 */
export function estimateProteinGrams(recipe) {
  const fullText = (recipe.title + ' ' + recipe.description + ' ' + (recipe.ingredients || []).map(i => i.name).join(' ')).toLowerCase();
  
  if (fullText.includes('chicken') || fullText.includes('salmon') || fullText.includes('fish')) return '32g Protein';
  if (fullText.includes('paneer') || fullText.includes('cottage cheese')) return '22g Protein';
  if (fullText.includes('egg') || fullText.includes('anda')) return '18g Protein';
  if (fullText.includes('tofu') || fullText.includes('soya')) return '20g Protein';
  if (fullText.includes('chole') || fullText.includes('chana') || fullText.includes('falafel')) return '15g Protein';
  if (fullText.includes('cheese') || fullText.includes('yogurt') || fullText.includes('curd')) return '14g Protein';
  return '8g Protein';
}

/**
 * Advanced Multi-Factor Demand & Relevancy Scoring
 */
export function scoreRecipeDemand(recipe, demandParams = {}) {
  const {
    ingredients = [],
    mood = null,
    mealType = 'all',
    maxTime = null,
    dietary = {}
  } = demandParams;

  let score = 0;
  const userKeys = new Set();
  ingredients.forEach(i => getSynonymKeys(i).forEach(k => userKeys.add(k)));

  const recipeTitleNorm = normalizeText(recipe.title);
  const recipeDescNorm = normalizeText(recipe.description);
  const recipeCategoryNorm = normalizeText(recipe.category || recipe.course || '');
  const recipeFullText = (recipe.title + ' ' + recipe.description + ' ' + (recipe.ingredients || []).map(i => i.name).join(' ')).toLowerCase();

  // 1. HERO INGREDIENT MATCHING (40% Weight)
  let isHeroMatch = false;
  userKeys.forEach(key => {
    const keyWords = key.split(/\s+/).filter(w => w.length >= 3);
    if (keyWords.some(w => recipeTitleNorm.includes(w)) || recipeTitleNorm.includes(key)) {
      score += 12; // Huge boost for hero in title
      isHeroMatch = true;
    } else if (keyWords.some(w => recipeDescNorm.includes(w)) || recipeDescNorm.includes(key)) {
      score += 4;
    }
  });

  // 2. INGREDIENT OVERLAP & COVERAGE (25% Weight)
  let matchedCount = 0;
  if (recipe.ingredients && recipe.ingredients.length > 0) {
    recipe.ingredients.forEach(rIng => {
      const rKeys = getSynonymKeys(rIng.name);
      if (rKeys.some(k => userKeys.has(k))) {
        matchedCount++;
        score += 4;
      }
    });

    const coverageRatio = matchedCount / recipe.ingredients.length;
    score += coverageRatio * 6; // High ratio of pantry items
  }

  const totalMinutes = parseTotalMinutes(recipe.prepTime, recipe.cookTime);

  // STRICT RELEVANCE GUARD: If user specified ingredients, reject dishes with zero ingredient connection
  if (userKeys.size > 0 && matchedCount === 0 && !isHeroMatch) {
    return {
      score: 0,
      isHeroMatch: false,
      matchedCount: 0,
      totalMinutes
    };
  }

  // 3. MOOD & CRAVING ALIGNMENT (20% Weight)
  const caloriesNum = parseCaloriesNumber(recipe.calories);

  if (mood === 'quick') {
    if (totalMinutes <= 10) score += 9;
    else if (totalMinutes <= 15) score += 6;
    else if (totalMinutes > 25) score -= 4;
  } else if (mood === 'high-protein') {
    if (recipeFullText.includes('chicken') || recipeFullText.includes('paneer') || recipeFullText.includes('egg') || recipeFullText.includes('tofu') || recipeFullText.includes('fish') || recipeFullText.includes('chole')) {
      score += 8;
    }
  } else if (mood === 'spicy') {
    if (recipeCategoryNorm.includes('snack') || recipeCategoryNorm.includes('starter') || recipeFullText.includes('masala') || recipeFullText.includes('tikka') || recipeFullText.includes('chaat') || recipeFullText.includes('chilli') || recipeFullText.includes('spicy')) {
      score += 7;
    }
    if (recipeCategoryNorm.includes('dessert') || recipeCategoryNorm.includes('sweet')) {
      score -= 8;
    }
  } else if (mood === 'healthy') {
    if (caloriesNum <= 300) score += 7;
    else if (caloriesNum <= 380) score += 4;
    else if (caloriesNum > 500) score -= 5;
  } else if (mood === 'comfort') {
    if (recipeFullText.includes('cheese') || recipeFullText.includes('butter') || recipeFullText.includes('creamy') || recipeFullText.includes('pasta') || recipeFullText.includes('biryani')) {
      score += 7;
    }
  } else if (mood === 'sweet') {
    if (recipeCategoryNorm.includes('dessert') || recipeCategoryNorm.includes('sweet') || recipeFullText.includes('chocolate') || recipeFullText.includes('cake') || recipeFullText.includes('halwa') || recipeFullText.includes('sweet')) {
      score += 12;
    } else {
      score -= 12; // Demote savory when user explicitly demands sweet
    }
  }

  // 4. MEAL OCCASION ALIGNMENT (10% Weight)
  if (mealType === 'breakfast') {
    if (recipeCategoryNorm.includes('instant') || recipeFullText.includes('egg') || recipeFullText.includes('toast') || recipeFullText.includes('smoothie') || recipeFullText.includes('bhurji')) {
      score += 6;
    }
  } else if (mealType === 'snack') {
    if (recipeCategoryNorm.includes('snack') || recipeCategoryNorm.includes('starter') || recipeCategoryNorm.includes('instant')) {
      score += 6;
    }
  } else if (mealType === 'main') {
    if (recipeCategoryNorm.includes('main') || recipeFullText.includes('rice') || recipeFullText.includes('curry') || recipeFullText.includes('biryani') || recipeFullText.includes('gravy')) {
      score += 6;
    }
  } else if (mealType === 'dessert') {
    if (recipeCategoryNorm.includes('dessert') || recipeCategoryNorm.includes('sweet')) {
      score += 8;
    }
  }

  // 5. MAX TIME CONSTRAINT
  if (maxTime && maxTime > 0) {
    if (totalMinutes <= maxTime) {
      score += 7;
    } else if (totalMinutes > maxTime + 10) {
      score -= 6;
    }
  }

  // 6. STRICT DIETARY CHECKS
  if (dietary.dairyFree && (recipeFullText.includes('paneer') || recipeFullText.includes('butter') || recipeFullText.includes('milk') || recipeFullText.includes('cheese') || recipeFullText.includes('ghee') || recipeFullText.includes('curd'))) {
    score -= 15;
  }
  if (dietary.vegan && (recipeFullText.includes('chicken') || recipeFullText.includes('fish') || recipeFullText.includes('egg') || recipeFullText.includes('paneer') || recipeFullText.includes('milk') || recipeFullText.includes('butter') || recipeFullText.includes('cheese') || recipeFullText.includes('honey') || recipeFullText.includes('ghee'))) {
    score -= 20;
  }
  if (dietary.glutenFree && (recipeFullText.includes('bread') || recipeFullText.includes('maida') || recipeFullText.includes('wheat') || recipeFullText.includes('roti') || recipeFullText.includes('pasta') || recipeFullText.includes('macaroni') || recipeFullText.includes('flour'))) {
    score -= 15;
  }

  return {
    score,
    isHeroMatch,
    matchedCount,
    totalMinutes
  };
}

/**
 * Builds highlight tags tailored to the recipe and user demand
 */
export function buildDemandHighlights(recipe, _demandParams = {}) {
  const highlights = [];
  const totalMinutes = parseTotalMinutes(recipe.prepTime, recipe.cookTime);
  const protein = estimateProteinGrams(recipe);

  // Time highlight
  if (totalMinutes <= 10) {
    highlights.push('⚡ Ready in 10 mins');
  } else if (totalMinutes <= 15) {
    highlights.push('⏱️ Express 15m');
  }

  // Protein highlight
  if (protein.includes('32g') || protein.includes('22g') || protein.includes('20g') || protein.includes('18g')) {
    highlights.push(`💪 ${protein}`);
  }

  // Pantry highlight
  if (recipe.missingCount === 0) {
    highlights.push('✨ 100% Pantry Match');
  } else if (recipe.missingCount === 1) {
    highlights.push('🛒 Just 1 item needed');
  }

  // Mood/Flavor highlight
  const title = (recipe.title || '').toLowerCase();
  if (title.includes('masala') || title.includes('tikka') || title.includes('chaat') || title.includes('spicy')) {
    highlights.push('🔥 Chatpata Flavor');
  } else if (title.includes('cheese') || title.includes('creamy') || title.includes('butter')) {
    highlights.push('🧀 Rich & Comforting');
  } else if (recipe.category === 'Desserts' || recipe.category === 'Sweets') {
    highlights.push('🍰 Sweet Delight');
  }

  return highlights.slice(0, 3);
}

/**
 * Synthesizes an on-demand custom recipe uniquely formulated for user's demand + ingredients
 */
export function synthesizeCustomRecipe(userIngredients = [], demandParams = {}) {
  const {
    mood = null,
    mealType: _mealType = 'all',
    dietary = {}
  } = demandParams;

  const activeDiets = Object.entries(dietary || {})
    .filter(([, v]) => v)
    .map(([k]) => k.replace('Free', '-Free').toUpperCase());

  const userKeys = new Set();
  userIngredients.forEach(i => getSynonymKeys(i).forEach(k => userKeys.add(k)));

  const isMaggi = userKeys.has('maggi');
  const hasEgg = userKeys.has('egg');
  const hasChicken = userKeys.has('chicken');
  const hasPaneer = userKeys.has('paneer');
  const hasRice = userKeys.has('rice');
  const hasBread = userKeys.has('bread');
  const hasCheese = userKeys.has('cheese');
  const hasChocolate = userKeys.has('chocolate');
  const hasMango = userKeys.has('mango');
  const hasSpinach = userKeys.has('spinach');
  const hasButter = userKeys.has('butter') || userKeys.has('ghee');
  const hasFries = userKeys.has('fries');

  let title = '';
  let course = 'Instant';
  let category = 'Instant';
  let cuisine = 'Fusion';
  let prepTime = '3 mins';
  let cookTime = '7 mins';
  let calories = '310 kcal';
  let image = FOOD_TYPE_IMAGES.generic_bowl;
  let description = '';
  let instructions = [];
  let complementaryIngredients = [];

  if (hasFries) {
    title = 'Crispy Loaded Cheese & Herb French Fries';
    course = 'Snacks';
    category = 'Snacks';
    cuisine = 'Fast Food';
    prepTime = '5 mins';
    cookTime = '10 mins';
    calories = '310 kcal';
    image = FOOD_TYPE_IMAGES.french_fries;
    description = `Shatteringly crisp golden fries tossed with zesty herbs and drizzled with warm sauce and seasonings (${userIngredients.join(', ')}).`;
    complementaryIngredients = [
      { name: 'Peri-Peri Spice Mix & Sea Salt', amount: '1 tsp', available: false },
      { name: 'Garlic Mayo or Cheese Dip', amount: '2 tbsp', available: false }
    ];
    instructions = [
      'Fry or air-fry the potato batons until golden and super crispy.',
      'Transfer immediately to a warm bowl and toss with seasonings while hot.',
      'Drizzle with melted cheese dip or garlic mayo and top with herbs.',
      'Serve hot and crunchy right out of the bowl!'
    ];
  } else if (isMaggi) {
    title = hasCheese ? 'Creamy Cheesy Street-Style Masala Maggi' : '5-Minute Butter Tadka Masala Maggi';
    course = 'Instant';
    category = 'Instant';
    cuisine = 'Indian Fusion';
    prepTime = '2 mins';
    cookTime = '3 mins';
    calories = '310 kcal';
    image = FOOD_TYPE_IMAGES.maggi;
    description = `Quick and irresistible masala noodles tossed with ${userIngredients.join(', ')} and rich aromatic butter.`;
    complementaryIngredients = [{ name: 'Garam Masala & Chaat Masala', amount: '1/2 tsp', available: false }];
    instructions = [
      `Heat a pan with ${hasButter ? 'butter' : 'oil'} over medium heat and sauté aromatics (${userIngredients.filter(i => !i.toLowerCase().includes('maggi')).join(', ') || 'green chilies'}).`,
      'Add 1.5 cups of water and stir in the tastemaker spice blend until boiling rapidly.',
      'Drop in noodles and cook on high heat for 2 minutes until glossy and saucy.',
      `Finish with ${hasCheese ? 'grated cheese and ' : ''}fresh coriander, serving steaming hot in a bowl.`
    ];
  } else if (hasBread && (hasCheese || hasButter || hasEgg)) {
    title = hasEgg ? 'Golden Pan-Toasted Cheesy Egg French Toast' : 'Crispy Pan-Grilled Cheese & Herb Toast';
    image = hasEgg ? FOOD_TYPE_IMAGES.egg : FOOD_TYPE_IMAGES.toast;
    course = 'Instant';
    category = 'Instant';
    cuisine = 'Continental';
    prepTime = '3 mins';
    cookTime = '4 mins';
    calories = '320 kcal';
    description = `Crisp, golden-crusted pan-grilled bread loaded with melted toppings and seasoned to perfection.`;
    complementaryIngredients = [{ name: 'Mixed Italian Herbs & Chili Flakes', amount: '1/2 tsp', available: false }];
    instructions = [
      `Lightly butter bread slices and preheat skillet over medium heat.`,
      `Layer ingredients (${userIngredients.filter(i => !i.toLowerCase().includes('bread')).join(', ')}) evenly.`,
      'Cover pan with lid on low heat for 3 minutes until base is crisp and cheese is bubbly.',
      'Slice diagonally and serve hot with ketchup or mint dip.'
    ];
  } else if (hasEgg) {
    title = 'Speedy Homestyle Masala Scrambled Eggs (Bhurji)';
    course = 'Instant';
    category = 'Instant';
    cuisine = 'Indian';
    prepTime = '2 mins';
    cookTime = '4 mins';
    calories = '240 kcal';
    image = FOOD_TYPE_IMAGES.egg;
    description = `Fluffy, savory eggs scrambled with fresh sautéed aromatics (${userIngredients.join(', ')}).`;
    complementaryIngredients = [{ name: 'Chopped Green Chilies & Cilantro', amount: '2 tbsp', available: false }];
    instructions = [
      'Whisk eggs in a bowl with a pinch of salt and black pepper.',
      `Melt butter/oil in a pan and sauté ${userIngredients.filter(i => !i.toLowerCase().includes('egg')).join(', ') || 'onions'} for 1-2 minutes.`,
      'Pour in whisked eggs and stir gently over low-medium heat until soft curds form.',
      'Garnish with fresh coriander and serve immediately.'
    ];
  } else if (hasChicken && hasRice) {
    title = 'Aromatic Garlic Butter Chicken & Steamed Rice Skillet';
    course = 'Main Course';
    category = 'Main Course';
    cuisine = 'Continental / Fusion';
    prepTime = '8 mins';
    cookTime = '12 mins';
    calories = '480 kcal';
    image = FOOD_TYPE_IMAGES.chicken_rice;
    description = `Tender sautéed chicken breast tossed in garlic butter paired with fluffy steamed rice.`;
    complementaryIngredients = [{ name: 'Black Pepper & Dried Parsley', amount: '1 tsp', available: false }];
    instructions = [
      'Cut chicken into bite-sized strips and season with salt, crushed garlic, and pepper.',
      'Sear chicken in a hot skillet with butter for 6-8 minutes until golden brown.',
      `Toss in remaining ingredients (${userIngredients.filter(i => !i.toLowerCase().includes('chicken') && !i.toLowerCase().includes('rice')).join(', ') || 'onions'}) and simmer for 2 minutes.`,
      'Serve chicken warm over a generous bed of fluffy steamed rice with pan juices.'
    ];
  } else if (hasPaneer && hasSpinach) {
    title = 'Homestyle Velvet Palak Paneer Gravy';
    course = 'Main Course';
    category = 'Main Course';
    cuisine = 'Indian';
    prepTime = '8 mins';
    cookTime = '10 mins';
    calories = '360 kcal';
    image = FOOD_TYPE_IMAGES.paneer_curry;
    description = `Tender paneer cubes simmered in a spiced, silky green spinach and garlic gravy.`;
    complementaryIngredients = [{ name: 'Garam Masala & Kasuri Methi', amount: '1 tsp', available: false }];
    instructions = [
      'Blanch spinach leaves in boiling water for 2 minutes, then blend into a smooth green purée.',
      `Heat ghee or oil; sauté ${userIngredients.filter(i => !i.toLowerCase().includes('paneer') && !i.toLowerCase().includes('spinach')).join(', ') || 'garlic and onions'} until fragrant.`,
      'Pour in spinach purée and spices; simmer gently for 4 minutes.',
      'Add fresh paneer cubes and let them absorb flavors for 2 minutes before serving.'
    ];
  } else if (hasPaneer) {
    title = '10-Minute Spiced Paneer Bhurji Sauté';
    course = 'Instant';
    category = 'Instant';
    cuisine = 'Indian';
    prepTime = '3 mins';
    cookTime = '5 mins';
    calories = '320 kcal';
    image = FOOD_TYPE_IMAGES.paneer_wrap;
    description = `Crumbled cottage cheese quickly sautéed with ${userIngredients.join(', ')} and warm spices.`;
    complementaryIngredients = [{ name: 'Chaat Masala & Coriander', amount: '1 tsp', available: false }];
    instructions = [
      `Heat butter or oil; sauté ${userIngredients.filter(i => !i.toLowerCase().includes('paneer')).join(', ') || 'onions and tomatoes'} for 2 minutes.`,
      'Crumble fresh paneer into the pan and season with turmeric, salt, and cumin.',
      'Toss actively on medium heat for 3 minutes until fragrant.',
      'Dust with chaat masala and enjoy hot with roti or as a protein wrap filling.'
    ];
  } else if (hasChocolate || hasMango || mood === 'sweet') {
    title = hasChocolate ? '90-Second Instant Chocolate Mug Cake' : 'Creamy Mango Saffron Dessert Smoothie';
    course = 'Desserts';
    category = 'Desserts';
    cuisine = 'Quick Sweet';
    prepTime = '2 mins';
    cookTime = hasChocolate ? '1.5 mins' : '0 mins';
    calories = '260 kcal';
    image = FOOD_TYPE_IMAGES.chocolate_cake;
    description = `Fast, sweet treat made on demand with ${userIngredients.join(', ')}.`;
    complementaryIngredients = [{ name: 'Pinch of Cinnamon / Cardamom', amount: '1 pinch', available: false }];
    instructions = [
      `Combine sweet ingredients (${userIngredients.join(', ')}) in a mug or blender.`,
      hasChocolate ? 'Whisk into a smooth thick batter with a fork.' : 'Blend on high for 45 seconds until velvety.',
      hasChocolate ? 'Microwave on high for 80 seconds until risen and moist.' : 'Pour over ice in a chilled glass.',
      'Serve fresh for an instant sweet indulgence!'
    ];
  } else {
    const mainItem = userIngredients[0] || 'Garden Fresh';
    title = `Sizzling ${mainItem} & Herb Sauté`;
    course = 'Instant';
    category = 'Instant';
    cuisine = 'Fusion';
    prepTime = '3 mins';
    cookTime = '5 mins';
    calories = '260 kcal';
    image = FOOD_TYPE_IMAGES.generic_bowl;
    description = `Fresh, vibrant, and quick pan-sauté bringing out the natural umami of ${userIngredients.join(', ')}.`;
    complementaryIngredients = [
      { name: 'Extra Virgin Olive Oil / Ghee', amount: '1 tbsp', available: false },
      { name: 'Sea Salt & Crushed Pepper', amount: 'To taste', available: false }
    ];
    instructions = [
      `Rinse and chop ${userIngredients.join(', ')} into uniform bite-sized pieces.`,
      'Heat oil or butter in a skillet over medium-high heat.',
      `Sauté ingredients in sequence, searing on high to caramelize edges and lock in flavor.`,
      'Season with salt, pepper, and fresh herbs; serve immediately as a wholesome meal.'
    ];
  }

  const formattedIngredients = [
    ...userIngredients.map(ing => ({
      name: ing,
      amount: 'Pantry Portion',
      available: true
    })),
    ...complementaryIngredients
  ];

  const recipe = {
    id: `custom-ai-${Date.now()}`,
    title,
    course,
    category: activeDiets.length > 0 ? activeDiets[0] : category,
    cuisine,
    prepTime,
    cookTime,
    calories,
    rating: '4.9',
    reviews: 1,
    image,
    description,
    ingredients: formattedIngredients,
    missingCount: complementaryIngredients.length,
    instructions,
    isSaved: false,
    isAiGenerated: true
  };

  recipe.demandHighlights = buildDemandHighlights(recipe, demandParams);
  recipe.matchPercentage = 98;
  return recipe;
}

/**
 * Main Multi-Recipe Demand Analyzer & Generator
 */
export function generateMultipleSmartRecipes({
  ingredients = [],
  demandQuery = '',
  mood = null,
  mealType = 'all',
  maxTime = null,
  dietary = {},
  allRecipes = []
}) {
  // 1. If natural language demand query is present, parse it to supplement inputs
  let combinedIngredients = [...ingredients];
  let effectiveMood = mood;
  let effectiveMealType = mealType;
  let effectiveMaxTime = maxTime;
  let effectiveDietary = { ...dietary };

  if (demandQuery && demandQuery.trim()) {
    const parsed = parseUserDemand(demandQuery);
    parsed.extractedIngredients.forEach(item => {
      if (!combinedIngredients.some(i => i.toLowerCase() === item.toLowerCase())) {
        combinedIngredients.push(item);
      }
    });
    if (!effectiveMood && parsed.mood) effectiveMood = parsed.mood;
    if (effectiveMealType === 'all' && parsed.mealType !== 'all') effectiveMealType = parsed.mealType;
    if (!effectiveMaxTime && parsed.maxTime) effectiveMaxTime = parsed.maxTime;
    effectiveDietary = { ...effectiveDietary, ...parsed.dietary };
  }

  if (combinedIngredients.length === 0) {
    return [];
  }

  const demandParams = {
    ingredients: combinedIngredients,
    mood: effectiveMood,
    mealType: effectiveMealType,
    maxTime: effectiveMaxTime,
    dietary: effectiveDietary
  };

  const userKeys = new Set();
  combinedIngredients.forEach(i => getSynonymKeys(i).forEach(k => userKeys.add(k)));

  // 2. Score and rank all catalogue recipes
  const scoredList = allRecipes
    .map(recipe => {
      const { score, isHeroMatch, matchedCount, totalMinutes } = scoreRecipeDemand(recipe, demandParams);
      return { recipe, score, isHeroMatch, matchedCount, totalMinutes };
    })
    .filter(item => item.score >= 2.0)
    .sort((a, b) => b.score - a.score);

  const results = [];
  const seenTitles = new Set();

  // 3. Transform top matched catalog recipes (up to 8 options)
  scoredList.slice(0, 8).forEach(({ recipe, score, isHeroMatch }) => {
    const key = recipe.title.toLowerCase();
    if (seenTitles.has(key)) return;
    seenTitles.add(key);

    const updatedIngredients = (recipe.ingredients || []).map(ing => {
      const ingKeys = getSynonymKeys(ing.name);
      const isAvailable = ingKeys.some(k => userKeys.has(k));
      return {
        ...ing,
        available: isAvailable
      };
    });

    const missingCount = updatedIngredients.filter(i => !i.available).length;
    
    // Calculate match percentage (75% to 100%)
    const matchPercentage = Math.min(100, Math.max(70, Math.round(70 + (score * 3.2))));

    const transformedRecipe = {
      ...recipe,
      id: recipe.id,
      ingredients: updatedIngredients,
      missingCount,
      isAiGenerated: false,
      isPantryMatch: true,
      isHeroMatch,
      matchPercentage
    };

    transformedRecipe.demandHighlights = buildDemandHighlights(transformedRecipe, demandParams);
    results.push(transformedRecipe);
  });

  // 4. Synthesize custom AI Chef recipe tailored to exact combination & demand
  const customAiRecipe = synthesizeCustomRecipe(combinedIngredients, demandParams);
  if (!seenTitles.has(customAiRecipe.title.toLowerCase())) {
    if (results.length === 0 || results[0].missingCount > 1 || effectiveMood === 'quick') {
      results.unshift(customAiRecipe);
    } else {
      results.push(customAiRecipe);
    }
  }

  return results;
}

/**
 * Single Recipe Generator (Fallback)
 */
export function generateSmartRecipe(params) {
  const matches = generateMultipleSmartRecipes(params);
  return matches && matches.length > 0 ? matches[0] : synthesizeCustomRecipe(params.ingredients || [], params);
}


