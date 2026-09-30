// Smart AI Recipe Generation & Advanced User Demand Analyzer Engine

export const INGREDIENT_SYNONYMS = {
  potato: ['potato', 'potatoes', 'aloo', 'alu', 'baby potato', 'french fries', 'fries', 'batata', 'finger chips', 'hash brown', 'potato wedges'],
  paneer: ['paneer', 'cottage cheese', 'chenna', 'chhena', 'fresh paneer', 'malai paneer'],
  chicken: ['chicken', 'chicken breast', 'boneless chicken', 'murgh', 'chicken thighs', 'chicken keema', 'poultry', 'minced chicken'],
  rice: ['rice', 'basmati', 'basmati rice', 'white rice', 'brown rice', 'chawal', 'cooked rice', 'jeera rice', 'sticky rice', 'gobindobhog'],
  egg: ['egg', 'eggs', 'anda', 'egg bhurji', 'egg yolk', 'egg white', 'boiled egg', 'scrambled egg'],
  maggi: ['maggi', 'maggi noodles', 'instant noodles', 'ramen', 'tastemaker'],
  cheese: ['cheese', 'mozzarella', 'cheddar', 'processed cheese', 'parmesan', 'cheese slices', 'queso', 'gouda', 'cheese cubes'],
  bread: ['bread', 'bread slices', 'toast', 'sandwich bread', 'pav', 'ladi pav', 'bun', 'sourdough', 'baguette', 'ciabatta', 'pita', 'brioche', 'breadcrumbs', 'panko'],
  roti_dough: ['roti', 'chapati', 'paratha', 'tortilla', 'dough', 'kulcha', 'bhatura', 'naan'],
  dal: ['dal', 'lentils', 'daal', 'urad dal', 'moong dal', 'toor dal', 'chana dal', 'masoor dal', 'black lentils', 'yellow lentils', 'sambar dal', 'urad', 'moong', 'toor', 'masoor', 'arhar'],
  chole: ['chole', 'chana', 'chickpeas', 'kabuli chana', 'white chickpeas', 'kala chana', 'garbanzo', 'falafel', 'hummus'],
  rajma: ['rajma', 'kidney beans', 'red kidney beans'],
  spinach: ['spinach', 'palak', 'saag', 'blanched spinach', 'leafy greens'],
  onion: ['onion', 'onions', 'pyaz', 'shallots', 'spring onion', 'scallions', 'scallion', 'red onion', 'white onion'],
  tomato: ['tomato', 'tomatoes', 'tamatar', 'tomato puree', 'pureed tomatoes', 'tomato ketchup', 'cherry tomatoes', 'sun-dried tomatoes', 'sundried tomatoes'],
  garlic: ['garlic', 'lasun', 'lahsun', 'garlic cloves', 'minced garlic', 'roasted garlic'],
  ginger: ['ginger', 'adrak', 'ginger-garlic', 'ginger garlic', 'ginger-garlic paste', 'fresh ginger'],
  butter: ['butter', 'makhan', 'salted butter', 'unsalted butter', 'garlic butter'],
  ghee: ['ghee', 'desi ghee', 'clarified butter'],
  cream: ['cream', 'heavy cream', 'malai', 'fresh cream', 'whipping cream', 'heavy whipping cream', 'cashew cream'],
  milk: ['milk', 'doodh', 'whole milk', 'full cream milk', 'cow milk', 'oat milk', 'almond milk', 'warm milk', 'chilled milk', 'rabdi'],
  condensed_milk: ['condensed milk', 'milkmaid', 'sweetened condensed milk'],
  khoya: ['khoya', 'mawa', 'dried whole milk solids', 'milk powder', 'dairy whitener'],
  curd: ['curd', 'yogurt', 'dahi', 'greek yogurt', 'hung curd', 'chaas', 'buttermilk', 'lassi'],
  cream_cheese: ['cream cheese', 'mascarpone'],
  besan: ['besan', 'gram flour', 'roasted gram flour', 'chickpea flour', 'sattu'],
  flour: ['maida', 'all-purpose flour', 'all purpose flour', 'plain flour', 'refined flour'],
  atta: ['atta', 'whole wheat flour', 'wheat flour'],
  semolina: ['semolina', 'sooji', 'suji', 'rava', 'bombay rava', 'sheera'],
  poha: ['poha', 'flattened rice', 'beaten rice', 'aval', 'chivda'],
  sabudana: ['sabudana', 'tapioca pearls', 'tapioca', 'sago'],
  corn: ['corn', 'sweet corn', 'sweetcorn', 'corn kernels', 'baby corn', 'makai'],
  cornstarch: ['cornstarch', 'corn flour', 'corn starch', 'starch', 'potato starch', 'katakuriko'],
  peas: ['peas', 'green peas', 'matar', 'frozen peas', 'boiled peas'],
  capsicum: ['capsicum', 'bell pepper', 'bell peppers', 'shimla mirch', 'green bell pepper', 'red bell pepper', 'yellow bell pepper'],
  cauliflower: ['cauliflower', 'gobi', 'phool gobi'],
  cabbage: ['cabbage', 'patta gobi'],
  carrot: ['carrot', 'carrots', 'gajar', 'baby carrots', 'grated carrot', 'grated carrots'],
  mushroom: ['mushroom', 'mushrooms', 'button mushroom', 'khumb'],
  cucumber: ['cucumber', 'kheera', 'kakdi'],
  petha: ['petha', 'ash gourd', 'candied ash gourd', 'winter melon', 'safed petha', 'petha kaddoo'],
  fish: ['fish', 'salmon', 'kingfish', 'pomfret', 'prawns', 'shrimp', 'tiger prawns', 'seafood'],
  meat: ['mutton', 'lamb', 'goat', 'gosht', 'keema', 'minced meat'],
  pasta: ['pasta', 'macaroni', 'spaghetti', 'penne', 'fusilli', 'lasagna'],
  noodles: ['noodles', 'hakka noodles', 'chow mein', 'ramen', 'vermicelli', 'seviyan', 'semiya'],
  sugar: ['sugar', 'chini', 'granulated sugar', 'powdered sugar', 'castor sugar', 'brown sugar', 'icing sugar', 'sugar syrup', 'misri'],
  jaggery: ['jaggery', 'gur', 'gud', 'palm jaggery', 'cane jaggery'],
  honey: ['honey', 'shahad', 'maple syrup'],
  chocolate: ['chocolate', 'cocoa', 'cocoa powder', 'dark chocolate', 'cocoa nibs', 'choco chips', 'chocolate syrup', 'nutella'],
  coffee: ['coffee', 'instant coffee', 'cold coffee', 'espresso', 'coffee powder'],
  tea: ['tea', 'chai', 'tea leaves', 'black tea', 'green tea', 'matcha'],
  cardamom: ['cardamom', 'elaichi', 'choti elaichi', 'green cardamom', 'cardamom powder', 'elaichi powder'],
  cinnamon: ['cinnamon', 'dalchini', 'ground cinnamon', 'cinnamon stick', 'cinnamon powder'],
  clove: ['clove', 'cloves', 'laung', 'lavang'],
  saffron: ['saffron', 'kesar', 'saffron strands', 'zafran'],
  cashew: ['cashew', 'cashews', 'kaju', 'cashew nuts', 'cashew paste', 'cashew halves'],
  almond: ['almond', 'almonds', 'badam', 'sliced almonds'],
  pistachio: ['pistachio', 'pistachios', 'pista', 'chopped pista'],
  walnut: ['walnut', 'walnuts', 'akhrot', 'pecans', 'pecan'],
  peanuts: ['peanuts', 'peanut', 'moongfali', 'roasted peanuts', 'peanut butter'],
  raisins: ['raisins', 'kishmish', 'sultanas'],
  dates: ['dates', 'khajur', 'khajoor'],
  coconut: ['coconut', 'nariyal', 'grated coconut', 'coconut milk', 'desiccated coconut', 'coconut water'],
  mango: ['mango', 'mangoes', 'aam', 'alphonso', 'mango pulp', 'ripe mango', 'kacha aam'],
  banana: ['banana', 'bananas', 'kela', 'ripe banana'],
  apple: ['apple', 'apples', 'seb', 'granny smith', 'apple juice'],
  strawberry: ['strawberry', 'strawberries', 'berries', 'blueberries', 'raspberries'],
  lemon: ['lemon', 'lime', 'nimbu', 'lemon juice', 'lime juice'],
  mint: ['mint', 'pudina', 'mint leaves', 'fresh mint', 'mint chutney'],
  coriander: ['coriander', 'cilantro', 'dhania', 'fresh coriander', 'coriander leaves'],
  chili: ['chili', 'chilies', 'chillies', 'green chili', 'green chillies', 'red chili', 'hari mirch', 'lal mirch', 'chili flakes'],
  cumin: ['cumin', 'jeera', 'cumin seeds', 'bhuna jeera', 'roasted cumin'],
  turmeric: ['turmeric', 'haldi', 'turmeric powder'],
  garam_masala: ['garam masala', 'whole spices', 'khada masala'],
  chaat_masala: ['chaat masala', 'amchur', 'dry mango powder'],
  tamarind: ['tamarind', 'imli', 'tamarind chutney', 'tamarind pulp'],
  sev: ['sev', 'nylon sev', 'bhujia', 'ratlami sev'],
  puri: ['puri', 'puris', 'poori', 'papdi', 'golgappa puris', 'pani puri'],
  bhel: ['murmura', 'puffed rice', 'kurmura', 'bhel'],
  nachos: ['nachos', 'tortilla chips', 'corn chips', 'taco shells'],
  mayo: ['mayonnaise', 'mayo', 'garlic mayo'],
  rose: ['rose', 'rose water', 'rose syrup', 'rooh afza', 'gulab jal', 'dried rose petals'],
  vanilla: ['vanilla', 'vanilla extract', 'vanilla essence', 'vanilla bean'],
  baking: ['baking powder', 'baking soda', 'yeast']
};

export const CO_OCCURRENCE_PAIRS = {
  paneer: ['Spinach (Palak)', 'Butter', 'Bell Pepper', 'Garam Masala', 'Tomato', 'Kasuri Methi', 'Onion'],
  chicken: ['Garlic Cloves', 'Basmati Rice', 'Butter', 'Black Pepper', 'Heavy Cream', 'Ginger', 'Onion'],
  egg: ['Bread Slices', 'Cheese', 'Yellow Onion', 'Green Chilies', 'Butter', 'Black Pepper'],
  maggi: ['Processed Cheese', 'Butter', 'Yellow Onion', 'Tomato', 'Green Chilies', 'Chaat Masala'],
  potato: ['Green Peas', 'Chaat Masala', 'Besan / Maida', 'Coriander Leaves', 'Tamarind Chutney', 'Cumin Seeds'],
  dal: ['Pure Desi Ghee', 'Cumin (Jeera)', 'Garlic', 'Yellow Onion', 'Turmeric', 'Basmati Rice'],
  chocolate: ['Milk', 'Cocoa Powder', 'Baking Powder', 'Butter', 'Sugar / Honey'],
  pasta: ['Cheddar / Mozzarella', 'Butter', 'Garlic', 'Heavy Cream', 'Oregano & Chili Flakes'],
  bread: ['Cheese Slices', 'Eggs', 'Butter', 'Oregano', 'Tomato', 'Mayonnaise'],
  rice: ['Chicken Breast', 'Garlic', 'Butter', 'Soy Sauce', 'Spring Onions', 'Ghee'],
  tofu: ['Thai Basil', 'Soy Sauce', 'Cashews', 'Garlic', 'Bell Peppers', 'Sesame Oil'],
  spinach: ['Paneer', 'Garlic', 'Onion', 'Cream', 'Green Chilies', 'Cumin Seeds'],
  milk: ['Cardamom Powder', 'Saffron (Kesar)', 'Pistachios', 'Sugar', 'Almonds'],
  curd: ['Chaat Masala', 'Sev / Papdi', 'Boiled Potatoes', 'Mint Chutney', 'Cumin'],
  corn: ['Butter', 'Chili Flakes', 'Bell Pepper', 'Cheese', 'Black Pepper'],
  chole: ['Kulcha / Bhatura', 'Ginger & Chilies', 'Garam Masala', 'Onion Rings', 'Lemon'],
  peas: ['Boiled Potatoes', 'Paneer', 'Coriander Leaves', 'Chaat Masala', 'Garam Masala'],
  capsicum: ['Paneer', 'Yellow Onion', 'Ripe Tomatoes', 'Garlic', 'Soy Sauce'],
  mushroom: ['Garlic Cloves', 'Butter', 'Black Pepper', 'Onion', 'Heavy Cream'],
  suji: ['Desi Ghee', 'Granulated Sugar', 'Cardamom Powder', 'Cashews', 'Milk'],
  besan: ['Desi Ghee', 'Granulated Sugar', 'Cardamom Powder', 'Curd', 'Chopped Onions'],
  sev: ['Boiled Potatoes', 'Curd', 'Mint Chutney', 'Tamarind Chutney', 'Chaat Masala', 'Puri']
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
  jaljeera: '/jaljeera.jpg',
  pudina_sharbat: '/pudina_sharbat.png',
  sattu_sharbat: '/sattu_sharbat.jpg',
  orange_cooler: '/orange_cooler.jpg',
  watermelon_cooler: '/watermelon_cooler.jpg',
  pineapple_cooler: '/pineapple_cooler.png',
  strawberry_lemonade: '/strawberry_lemonade.jpg',
  apple_cooler: '/apple_cooler.png',
  grape_cooler: '/grape_cooler.png',
  cucumber_cooler: '/cucumber_cooler.png',
  lemonade: '/strawberry_lemonade.jpg',
  shake: '/banana_milkshake.png',
  banana_shake: '/banana_milkshake.png',
  strawberry_shake: '/strawberry_milkshake.jpg',
  mango_shake: '/mango_icecream_milkshake.jpg',
  apple_shake: '/apple_cinnamon_milkshake.jpg',
  peanut_butter_shake: '/peanut_butter_banana_shake.jpg',
  chocolate_banana_shake: '/chocolate_banana_shake.jpg',
  rose_milkshake: '/royal_rose_milkshake.jpg',
  chocolate_milk: '/cold_chocolate_milk.jpg',
  honey_lemon_tea: '/honey_lemon_tea.jpg',
  cold_coffee: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
  hot_chocolate: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
  badam_milk: '/kesar_badam_milk.jpg',
  haldi_milk: '/golden_haldi_doodh.jpg',
  cinnamon_apple_drink: '/warm_cinnamon_apple_drink.jpg',
  generic_curry: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  generic_bowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
};

export function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^\w\s]/gi, ' ')
    .trim();
}

function stemWord(w) {
  if (!w || typeof w !== 'string') return '';
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && w.length > 4 && !w.endsWith('cheese')) return w.slice(0, -2);
  if (w.endsWith('s') && w.length > 3 && !w.endsWith('ss') && !w.endsWith('us')) return w.slice(0, -1);
  return w;
}

const NOISE_WORDS = new Set([
  'fresh', 'organic', 'boiled', 'mashed', 'crushed', 'grated', 'shredded', 'diced',
  'sliced', 'chopped', 'finely', 'coarsely', 'blanched', 'roasted', 'toasted', 'fried',
  'baked', 'melted', 'warm', 'cold', 'chilled', 'hot', 'pureed', 'soaked', 'peeled',
  'deveined', 'cubed', 'large', 'small', 'medium', 'thick', 'thin', 'soft', 'ripe',
  'sweet', 'salted', 'unsalted', 'raw', 'cooked', 'steamed', 'powder', 'powdered',
  'paste', 'sauce', 'puree', 'leaves', 'seeds', 'pieces', 'cloves', 'stalks', 'cups',
  'tbsp', 'tsp', 'grams', 'pinch', 'bunch', 'optional', 'for', 'and', 'with', 'in',
  'oil', 'water', 'taste', 'garnish', 'serving', 'pure', 'desi', 'edible', 'extra',
  'virgin', 'cold-pressed', 'sweetened', 'curdled',
  // Color adjectives that should not match as standalone ingredients
  'green', 'red', 'yellow', 'black', 'white', 'brown', 'pink', 'golden', 'dark'
]);

export function extractSubstantiveTokens(text) {
  const norm = normalizeText(text);
  const words = norm.split(/\s+/).filter(w => w.length >= 2 && !NOISE_WORDS.has(w));
  return new Set(words.map(stemWord));
}

export function getSynonymKeys(rawIngredient) {
  const norm = normalizeText(rawIngredient);
  const words = norm.split(/\s+/).filter(Boolean);
  const stemmedWords = new Set(words.map(stemWord));
  const matchedKeys = new Set();

  for (const [key, terms] of Object.entries(INGREDIENT_SYNONYMS)) {
    for (const term of terms) {
      const termNorm = normalizeText(term);
      const termWords = termNorm.split(/\s+/).filter(Boolean);

      if (termWords.length === 1) {
        // Single word term: MUST match exact word token, not partial substring!
        const singleTermStemmed = stemWord(termWords[0]);
        if (stemmedWords.has(singleTermStemmed)) {
          matchedKeys.add(key);
          break;
        }
      } else {
        // Multi-word term (e.g. "green peas", "whole milk", "cocoa powder"):
        // Must match either exact substring with word boundaries or all words present
        const termStemmed = termWords.map(stemWord);
        if (termStemmed.every(tw => stemmedWords.has(tw))) {
          matchedKeys.add(key);
          break;
        }
      }
    }
  }

  return Array.from(matchedKeys);
}

/**
 * Robust ingredient matcher: checks synonym categories, token overlap, and direct inclusion
 */
export function isIngredientMatch(userIng, recipeIngName) {
  if (!userIng || !recipeIngName) return false;

  const uKeys = getSynonymKeys(userIng);
  const rKeys = getSynonymKeys(recipeIngName);

  // 1. Synonym group overlap
  if (uKeys.length > 0 && rKeys.length > 0) {
    if (uKeys.some(k => rKeys.includes(k))) return true;
  }

  // 2. Substantive token overlap (nouns only, no noise/color words)
  const uTokens = extractSubstantiveTokens(userIng);
  const rTokens = extractSubstantiveTokens(recipeIngName);
  for (const ut of uTokens) {
    if (rTokens.has(ut)) return true;
    for (const rt of rTokens) {
      if (ut.length >= 5 && rt.includes(ut)) return true;
      if (rt.length >= 5 && ut.includes(rt)) return true;
    }
  }

  return false;
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
    return !currentIngredients.some(ci => isIngredientMatch(ci, item));
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
    if (!currentIngredients.some(ci => isIngredientMatch(ci, s))) {
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
  } else if (text.includes('sweet') || text.includes('dessert') || text.includes('cake') || text.includes('sugar') || text.includes('chocolate') || text.includes('craving') || text.includes('mithai')) {
    mood = 'sweet';
  }

  // Meal Type detection
  let mealType = 'all';
  if (text.includes('breakfast') || text.includes('morning') || text.includes('nashta')) {
    mealType = 'breakfast';
  } else if (text.includes('snack') || text.includes('starter') || text.includes('appetizer') || text.includes('tiffin') || text.includes('bite') || text.includes('chaat')) {
    mealType = 'snack';
  } else if (text.includes('lunch') || text.includes('dinner') || text.includes('main course') || text.includes('curry') || text.includes('meal') || text.includes('sabzi') || text.includes('biryani')) {
    mealType = 'main';
  } else if (text.includes('dessert') || text.includes('sweet') || text.includes('drink') || text.includes('shake') || text.includes('late night') || text.includes('mithai')) {
    mealType = 'dessert';
  }

  // Max Time extraction
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
  
  if (fullText.includes('chicken') || fullText.includes('salmon') || fullText.includes('fish') || fullText.includes('prawns')) return '32g Protein';
  if (fullText.includes('paneer') || fullText.includes('cottage cheese')) return '22g Protein';
  if (fullText.includes('egg') || fullText.includes('anda')) return '18g Protein';
  if (fullText.includes('tofu') || fullText.includes('soya')) return '20g Protein';
  if (fullText.includes('chole') || fullText.includes('chana') || fullText.includes('falafel') || fullText.includes('rajma') || fullText.includes('dal')) return '16g Protein';
  if (fullText.includes('cheese') || fullText.includes('yogurt') || fullText.includes('curd')) return '14g Protein';
  return '8g Protein';
}

/**
 * Advanced Multi-Factor Demand & Relevancy Scoring strictly based on ingredients
 */
export function scoreRecipeDemand(recipe, demandParams = {}) {
  const {
    ingredients = [],
    mood = null,
    mealType = 'all',
    maxTime = null,
    dietary = {}
  } = demandParams;

  const totalMinutes = parseTotalMinutes(recipe.prepTime, recipe.cookTime);
  const totalRecipeIngs = (recipe.ingredients || []).length;

  const matchedUserIngredients = new Set();
  const matchedRecipeIndices = new Set();

  (recipe.ingredients || []).forEach((rIng, idx) => {
    ingredients.forEach(uIng => {
      if (isIngredientMatch(uIng, rIng.name)) {
        matchedUserIngredients.add(uIng);
        matchedRecipeIndices.add(idx);
      }
    });
  });

  const matchedCount = matchedRecipeIndices.size;
  const userMatchedCount = matchedUserIngredients.size;
  const missingCount = Math.max(0, totalRecipeIngs - matchedCount);

  // STRICT RELEVANCE GUARD:
  // If the user specified ingredients, reject any dish with 0 matched ingredients!
  if (ingredients.length > 0 && matchedCount === 0) {
    return {
      score: 0,
      isHeroMatch: false,
      matchedCount: 0,
      userMatchedCount: 0,
      missingCount,
      matchPercentage: 0,
      totalMinutes,
      matchedRecipeIndices
    };
  }

  let score = 0;

  // 1. USER INGREDIENTS UTILIZATION (Primary Driver)
  // Recipes that incorporate more of what the user has in pantry are heavily boosted
  const userRatio = ingredients.length > 0 ? (userMatchedCount / ingredients.length) : 0;
  score += userMatchedCount * 22;
  score += userRatio * 28;

  // 2. RECIPE PANTRY READINESS
  // Recipes where user has most/all ingredients get a major boost
  const recipeCoverage = totalRecipeIngs > 0 ? (matchedCount / totalRecipeIngs) : 0;
  score += matchedCount * 8;
  score += recipeCoverage * 16;

  if (missingCount === 0) {
    score += 14; // Complete 100% pantry match
  } else if (missingCount === 1) {
    score += 7; // Just 1 item needed
  } else {
    score -= missingCount * 0.5;
  }

  // 3. TITLE / HERO INGREDIENT MATCH
  const recipeTitleNorm = normalizeText(recipe.title);
  let isHeroMatch = false;
  ingredients.forEach(uIng => {
    const uTokens = extractSubstantiveTokens(uIng);
    for (const t of uTokens) {
      if (t.length >= 3 && recipeTitleNorm.includes(t)) {
        score += 10;
        isHeroMatch = true;
        break;
      }
    }
  });

  // 4. INCOMPATIBILITY CHECKS
  // If user entered savory staples (chicken, meat, fish, egg, potato, onion, garlic, capsicum) without any sweet ingredients,
  // demote sweet desserts unless user explicitly requested sweet/dessert
  const isSavoryStaple = ingredients.some(i => {
    const k = getSynonymKeys(i);
    return k.includes('chicken') || k.includes('meat') || k.includes('fish') || k.includes('egg') || k.includes('potato') || k.includes('onion') || k.includes('garlic') || k.includes('capsicum');
  });
  const hasSweetUserItem = ingredients.some(i => {
    const k = getSynonymKeys(i);
    return k.includes('sugar') || k.includes('chocolate') || k.includes('condensed_milk') || k.includes('honey') || k.includes('jaggery') || k.includes('khoya');
  });
  const isRecipeDessert = (recipe.category || recipe.course || '').toLowerCase().includes('dessert') ||
                          (recipe.category || recipe.course || '').toLowerCase().includes('sweet');

  if (isSavoryStaple && !hasSweetUserItem && isRecipeDessert && mood !== 'sweet' && mealType !== 'dessert') {
    score -= 40;
  }

  // 5. MOOD & CRAVING ALIGNMENT
  const caloriesNum = parseCaloriesNumber(recipe.calories);
  const recipeCategoryNorm = normalizeText(recipe.category || recipe.course || '');
  const recipeFullText = (recipe.title + ' ' + recipe.description + ' ' + (recipe.ingredients || []).map(i => i.name).join(' ')).toLowerCase();

  if (mood === 'quick') {
    if (totalMinutes <= 10) score += 9;
    else if (totalMinutes <= 15) score += 6;
    else if (totalMinutes > 25) score -= 4;
  } else if (mood === 'high-protein') {
    if (recipeFullText.includes('chicken') || recipeFullText.includes('paneer') || recipeFullText.includes('egg') || recipeFullText.includes('tofu') || recipeFullText.includes('fish') || recipeFullText.includes('chole') || recipeFullText.includes('dal')) {
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
      score += 14;
    } else {
      score -= 14;
    }
  }

  // 6. MEAL OCCASION ALIGNMENT
  if (mealType === 'breakfast') {
    if (recipeCategoryNorm.includes('instant') || recipeFullText.includes('egg') || recipeFullText.includes('toast') || recipeFullText.includes('smoothie') || recipeFullText.includes('bhurji') || recipeFullText.includes('poha')) {
      score += 6;
    }
  } else if (mealType === 'snack') {
    if (recipeCategoryNorm.includes('snack') || recipeCategoryNorm.includes('starter') || recipeCategoryNorm.includes('instant') || recipeCategoryNorm.includes('chaat')) {
      score += 6;
    }
  } else if (mealType === 'main') {
    if (recipeCategoryNorm.includes('main') || recipeFullText.includes('rice') || recipeFullText.includes('curry') || recipeFullText.includes('biryani') || recipeFullText.includes('gravy') || recipeFullText.includes('dal')) {
      score += 6;
    }
  } else if (mealType === 'dessert') {
    if (recipeCategoryNorm.includes('dessert') || recipeCategoryNorm.includes('sweet') || recipeCategoryNorm.includes('drink')) {
      score += 8;
    }
  }

  // 7. MAX TIME CONSTRAINT
  if (maxTime && maxTime > 0) {
    if (totalMinutes <= maxTime) {
      score += 7;
    } else if (totalMinutes > maxTime + 10) {
      score -= 6;
    }
  }

  // 8. STRICT DIETARY CHECKS
  if (dietary.dairyFree && (recipeFullText.includes('paneer') || recipeFullText.includes('butter') || recipeFullText.includes('milk') || recipeFullText.includes('cheese') || recipeFullText.includes('ghee') || recipeFullText.includes('curd'))) {
    score -= 20;
  }
  if (dietary.vegan && (recipeFullText.includes('chicken') || recipeFullText.includes('fish') || recipeFullText.includes('egg') || recipeFullText.includes('paneer') || recipeFullText.includes('milk') || recipeFullText.includes('butter') || recipeFullText.includes('cheese') || recipeFullText.includes('honey') || recipeFullText.includes('ghee'))) {
    score -= 25;
  }
  if (dietary.glutenFree && (recipeFullText.includes('bread') || recipeFullText.includes('maida') || recipeFullText.includes('wheat') || recipeFullText.includes('roti') || recipeFullText.includes('pasta') || recipeFullText.includes('macaroni') || recipeFullText.includes('flour'))) {
    score -= 20;
  }

  // 9. ACCURATE MATCH PERCENTAGE CALCULATION
  let matchPercentage;
  if (missingCount === 0 && userRatio >= 0.8) {
    matchPercentage = 100;
  } else if (missingCount === 0) {
    matchPercentage = 95;
  } else {
    const rawPct = Math.round((recipeCoverage * 60) + (userRatio * 40));
    matchPercentage = Math.min(94, Math.max(50, rawPct));
  }

  return {
    score,
    isHeroMatch,
    matchedCount,
    userMatchedCount,
    missingCount,
    matchPercentage,
    totalMinutes,
    matchedRecipeIndices
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
  if (protein.includes('32g') || protein.includes('22g') || protein.includes('20g') || protein.includes('18g') || protein.includes('16g')) {
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
  const hasPotato = userKeys.has('potato');
  const hasDal = userKeys.has('dal');
  const hasMilk = userKeys.has('milk') || userKeys.has('condensed_milk') || userKeys.has('khoya');
  const hasSweetness = userKeys.has('sugar') || userKeys.has('jaggery') || userKeys.has('honey');

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
  let applicableUserIngredients = [...userIngredients];

  if (hasPotato) {
    title = 'Crispy Chatpata Masala Potato Wedges';
    course = 'Snacks';
    category = 'Snacks';
    cuisine = 'Street Food';
    prepTime = '5 mins';
    cookTime = '10 mins';
    calories = '290 kcal';
    image = FOOD_TYPE_IMAGES.french_fries;
    description = `Golden, crunchy potato batons tossed in zesty Indian chaat masala, lemon, and aromatic spices (${userIngredients.join(', ')}).`;
    complementaryIngredients = [
      { name: 'Chaat Masala & Kashmiri Red Chili', amount: '1 tsp', available: false },
      { name: 'Fresh Mint Chutney or Mayo Dip', amount: '2 tbsp', available: false }
    ];
    instructions = [
      'Slice potatoes into crisp wedges or batons and par-boil or air-fry until tender.',
      'Sauté on high heat with a drizzle of oil/butter until edges turn golden and shatteringly crisp.',
      'Toss immediately with chaat masala, fresh coriander, and a squeeze of lime.',
      'Serve steaming hot with your favorite dip.'
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
    // Strictly filter out milk, dairy milk drinks, tea, coffee, chocolate, sugar, and fruits from egg bhurji
    applicableUserIngredients = userIngredients.filter(ing => {
      const k = getSynonymKeys(ing);
      return !k.includes('milk') &&
             !k.includes('condensed_milk') &&
             !k.includes('khoya') &&
             !k.includes('sugar') &&
             !k.includes('chocolate') &&
             !k.includes('tea') &&
             !k.includes('coffee') &&
             !k.includes('apple') &&
             !k.includes('mango') &&
             !k.includes('banana') &&
             !k.includes('strawberry');
    });
    const hasUserOnionTomato = applicableUserIngredients.some(i => {
      const k = getSynonymKeys(i);
      return k.includes('onion') || k.includes('tomato');
    });
    const hasUserButter = applicableUserIngredients.some(i => {
      const k = getSynonymKeys(i);
      return k.includes('butter') || k.includes('ghee');
    });
    complementaryIngredients = [];
    if (!hasUserOnionTomato) {
      complementaryIngredients.push({ name: 'Finely chopped Onion & Tomato', amount: '1/2 cup', available: false });
    }
    if (!hasUserButter) {
      complementaryIngredients.push({ name: 'Butter or Cooking Oil', amount: '1 tbsp', available: false });
    }
    complementaryIngredients.push(
      { name: 'Chopped Green Chilies & Cilantro', amount: '2 tbsp', available: false },
      { name: 'Garam Masala & Turmeric', amount: '1/2 tsp', available: false }
    );
    const eggAromatics = applicableUserIngredients.filter(i => !i.toLowerCase().includes('egg'));
    description = `Fluffy, savory dhaba-style scrambled eggs prepared with fresh sautéed aromatics${eggAromatics.length > 0 ? ` (${eggAromatics.join(', ')})` : ''} and everyday spices.`;
    instructions = [
      'Whisk eggs in a bowl with a pinch of salt and black pepper.',
      `Melt butter/oil in a pan and sauté ${eggAromatics.join(', ') || 'finely chopped onions and tomatoes'} for 1-2 minutes until soft.`,
      'Pour in whisked eggs and scramble gently over medium-low heat until soft curds form.',
      'Garnish with fresh green chilies, cilantro, and a pinch of garam masala. Serve hot with warm toast or roti.'
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
  } else if (hasDal) {
    title = 'Speedy Homestyle Tadka Dal';
    course = 'Main Course';
    category = 'Main Course';
    cuisine = 'Indian';
    prepTime = '5 mins';
    cookTime = '12 mins';
    calories = '260 kcal';
    image = FOOD_TYPE_IMAGES.generic_curry;
    description = `Comforting homestyle lentils tempered with sizzling cumin seeds, garlic, and fresh coriander (${userIngredients.join(', ')}).`;
    complementaryIngredients = [
      { name: 'Desi Ghee & Cumin Seeds (Jeera)', amount: '1.5 tbsp', available: false },
      { name: 'Fresh Coriander Leaves', amount: '2 tbsp', available: false }
    ];
    instructions = [
      'Pressure cook or boil lentils with turmeric and salt until velvety and soft.',
      'In a tadka pan, heat ghee and crackle cumin seeds, minced garlic, and green chilies.',
      'Pour the sizzling fragrant tadka over the dal and cover immediately to lock in the aroma.',
      'Garnish with freshly chopped cilantro and enjoy hot with rice or warm rotis.'
    ];
  } else if ((hasMilk || userKeys.has('chhena') || userKeys.has('khoya')) && (hasSweetness || mood === 'sweet')) {
    title = 'Velvety Cardamom Kheer & Sweet Milk Delight';
    course = 'Desserts';
    category = 'Desserts';
    cuisine = 'Indian Sweet';
    prepTime = '5 mins';
    cookTime = '10 mins';
    calories = '280 kcal';
    image = FOOD_TYPE_IMAGES.rasmalai;
    description = `A rich, comforting traditional sweet formulated with ${userIngredients.join(', ')} and fragrant green cardamom.`;
    complementaryIngredients = [
      { name: 'Green Cardamom Powder (Elaichi)', amount: '1/2 tsp', available: false },
      { name: 'Sliced Pistachios & Saffron Strands', amount: '1 tbsp', available: false }
    ];
    instructions = [
      'Simmer milk over medium heat until thickened and reduced slightly.',
      `Fold in ${userIngredients.filter(i => !i.toLowerCase().includes('milk')).join(', ') || 'sugar'} and stir continuously.`,
      'Infuse with crushed cardamom powder and toasted nuts for a rich royal aroma.',
      'Serve warm or chilled in dessert bowls garnished with saffron.'
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
    title = `Speedy Chatpata ${mainItem} Masala Toss`;
    course = 'Snacks';
    category = 'Snacks';
    cuisine = 'Indian Street Style';
    prepTime = '3 mins';
    cookTime = '5 mins';
    calories = '240 kcal';
    image = FOOD_TYPE_IMAGES.generic_bowl;
    description = `Vibrant, quick pan-toss bringing out the rich roasted aroma of ${userIngredients.join(', ')} with zesty Indian spices.`;
    complementaryIngredients = [
      { name: 'Extra Virgin Olive Oil / Desi Ghee', amount: '1 tbsp', available: false },
      { name: 'Roasted Cumin & Chaat Masala', amount: '1 tsp', available: false }
    ];
    instructions = [
      `Rinse and chop ${userIngredients.join(', ')} into uniform bite-sized pieces.`,
      'Heat oil or butter in a skillet over medium-high heat with cumin seeds.',
      `Sauté ingredients in sequence, searing on high heat to caramelize edges and lock in flavor.`,
      'Season with salt, chaat masala, and fresh herbs; serve immediately as a wholesome dish.'
    ];
  }

  const formattedIngredients = [
    ...applicableUserIngredients.map(ing => ({
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
    isAiGenerated: true,
    isPantryMatch: true,
    isHeroMatch: true,
    matchPercentage: 92
  };

  recipe.demandHighlights = buildDemandHighlights(recipe, demandParams);
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

  // 2. Score and rank all catalogue recipes
  const scoredList = allRecipes
    .map(recipe => {
      const evaluation = scoreRecipeDemand(recipe, demandParams);
      return { recipe, ...evaluation };
    })
    .filter(item => item.score > 0 && item.matchedCount > 0)
    .sort((a, b) => b.score - a.score);

  const results = [];
  const seenTitles = new Set();

  // 3. Transform top matched catalog recipes (up to 28 options for extensive variety across filters)
  scoredList.slice(0, 28).forEach(({ recipe, score, isHeroMatch, matchPercentage }) => {
    const key = recipe.title.toLowerCase();
    if (seenTitles.has(key)) return;
    seenTitles.add(key);

    const updatedIngredients = (recipe.ingredients || []).map(ing => {
      const isAvailable = combinedIngredients.some(uIng => isIngredientMatch(uIng, ing.name));
      return {
        ...ing,
        available: isAvailable
      };
    });

    const missingCount = updatedIngredients.filter(i => !i.available).length;

    const transformedRecipe = {
      ...recipe,
      id: recipe.id,
      ingredients: updatedIngredients,
      missingCount,
      isAiGenerated: false,
      isPantryMatch: true,
      isHeroMatch,
      matchPercentage,
      _demandScore: score
    };

    transformedRecipe.demandHighlights = buildDemandHighlights(transformedRecipe, demandParams);
    results.push(transformedRecipe);
  });

  // 4. Synthesize custom AI Chef recipe tailored to exact combination & demand
  const customAiRecipe = synthesizeCustomRecipe(combinedIngredients, demandParams);
  if (!seenTitles.has(customAiRecipe.title.toLowerCase())) {
    if (results.length === 0) {
      results.unshift(customAiRecipe);
    } else if (results.length >= 2 && effectiveMood === 'quick') {
      results.splice(1, 0, customAiRecipe);
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
