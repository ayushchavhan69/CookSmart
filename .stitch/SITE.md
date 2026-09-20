# CookSmart Site Architecture & Roadmap

## 1. Vision
Build an intuitive, delightfully responsive 4-screen mobile web experience for CookSmart:
- Screen 1: Home Dashboard with global search, dietary category chips, and featured recipe cards.
- Screen 2: AI Ingredient Engine with interactive tag chips, dietary toggles, and high-impact glowing CTA.
- Screen 3: Recipe Result Screen with rich metadata, checklist ingredients, highlighted missing pantry items, step-by-step instructions, and floating Save/Share action bar.
- Screen 4: My Cookbook (Saved Recipes) 2-column grid with instant bookmark toggle and empty state.

## 2. Screen Map
- [x] Screen 1: Home Dashboard (`HomeScreen.jsx`)
- [x] Screen 2: AI Ingredient Engine (`IngredientScreen.jsx`)
- [x] Screen 3: AI Recipe Results / Detail View (`RecipeDetailScreen.jsx`)
- [x] Screen 4: My Cookbook / Saved Recipes Grid (`CookbookScreen.jsx`)

## 3. Shared State & Interactions
- Persistent Bottom Navigation Bar (Home, Input, Saved).
- Seamless navigation state machine (`currentScreen`, `selectedRecipe`, `navigationHistory`).
- Live recipe generator with simulated AI thinking delay, sound/visual feedback.
- Real-time save/unsave toggle with toast feedback.
