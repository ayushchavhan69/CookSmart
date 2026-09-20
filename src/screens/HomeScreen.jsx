import React, { useState } from 'react';
import { isVegRecipe } from '../data/recipes';
import { VegIcon, NonVegIcon, DietIndicator } from '../components/DietBadge';

export default function HomeScreen({ recipes, onSelectRecipe, onNavigateToInput, onNavigateToLanding }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'

  const categories = [
    'All',
    'Instant Dishes ⚡',
    'Starters 🍢',
    'Main Course 🍛',
    'Desserts 🍰',
    'Sweets 🍯',
    'Snacks 🥪',
    'Drinks 🥤',
    'Indian 🇮🇳',
  ];

  const filteredRecipes = React.useMemo(() => {
    const seen = new Set();
    const q = searchQuery.toLowerCase().trim();
    const isAllCategory = activeCategory === 'All';
    const isInstant = activeCategory.includes('Instant');
    const isStarters = activeCategory.includes('Starters');
    const isMainCourse = activeCategory.includes('Main Course');
    const isDesserts = activeCategory.includes('Desserts');
    const isSweets = activeCategory.includes('Sweets');
    const isSnacks = activeCategory.includes('Snacks');
    const isDrinks = activeCategory.includes('Drinks');
    const isIndian = activeCategory.includes('Indian');

    return (recipes || []).filter((recipe) => {
      // Deduplicate so identical dishes are never shown multiple times
      const key = (recipe.title || recipe.id).toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);

      // 1. Veg / Non-Veg Filter
      const isVeg = isVegRecipe(recipe);
      if (dietFilter === 'veg' && !isVeg) return false;
      if (dietFilter === 'non-veg' && isVeg) return false;

      // 2. Search query match
      const matchesSearch = !q || 
        recipe.title.toLowerCase().includes(q) ||
        recipe.description.toLowerCase().includes(q) ||
        (recipe.cuisine && recipe.cuisine.toLowerCase().includes(q)) ||
        recipe.category.toLowerCase().includes(q);

      if (!matchesSearch) return false;
      if (isAllCategory) return true;

      // 3. Matching logic for categories
      if (isInstant) return recipe.category === 'Instant' || recipe.category === 'Instant Dishes';
      if (isStarters) return recipe.category === 'Starters';
      if (isMainCourse) return recipe.category === 'Main Course';
      if (isDesserts) return recipe.category === 'Desserts';
      if (isSweets) return recipe.category === 'Sweets';
      if (isSnacks) return recipe.category === 'Snacks';
      if (isDrinks) return recipe.category === 'Drinks';
      if (isIndian) return recipe.cuisine === 'Indian';

      return true;
    });
  }, [recipes, dietFilter, searchQuery, activeCategory]);

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto min-h-screen text-neutral-100 animate-fadeIn">
      {/* Top Header & Greeting */}
      <header className="flex items-center justify-between mb-5 gap-2">
        <div>
          <button
            type="button"
            onClick={onNavigateToLanding}
            className="flex items-center gap-2 text-left group cursor-pointer"
            title="Return to Landing Page"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <span className="text-white text-lg font-black">🍳</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
              CookSmart<span className="text-orange-500"> Ai</span>
            </h1>
          </button>
          <p className="text-xs text-neutral-400 mt-1 font-medium">
            Good evening, Chef! Ready to cook delicious food?
          </p>
        </div>

        {/* Veg & Non-Veg Filter Toggle Switch */}
        <div className="flex items-center bg-neutral-900/90 border border-neutral-800 p-1 rounded-full shadow-lg shadow-black/40 flex-shrink-0">
          <button
            type="button"
            onClick={() => setDietFilter(dietFilter === 'veg' ? 'all' : 'veg')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${
              dietFilter === 'veg'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/60 shadow-sm shadow-emerald-500/30 font-extrabold'
                : 'text-neutral-400 hover:text-emerald-400 border border-transparent'
            }`}
            title={dietFilter === 'veg' ? 'Showing Vegetarian (Click to reset)' : 'Filter by Pure Vegetarian'}
          >
            <VegIcon className="w-3.5 h-3.5" />
            <span className="text-[11px]">Veg</span>
          </button>

          <button
            type="button"
            onClick={() => setDietFilter(dietFilter === 'non-veg' ? 'all' : 'non-veg')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all active:scale-95 ${
              dietFilter === 'non-veg'
                ? 'bg-red-500/20 text-red-400 border border-red-500/60 shadow-sm shadow-red-500/30 font-extrabold'
                : 'text-neutral-400 hover:text-red-400 border border-transparent'
            }`}
            title={dietFilter === 'non-veg' ? 'Showing Non-Veg (Click to reset)' : 'Filter by Non-Vegetarian'}
          >
            <NonVegIcon className="w-3.5 h-3.5" />
            <span className="text-[11px]">Non-Veg</span>
          </button>
        </div>
      </header>

      {/* Global Pill Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          aria-label="Search recipes, ingredients, tags"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes, ingredients, tags..."
          className="w-full pl-10 pr-10 py-3.5 bg-neutral-900/90 border border-neutral-800 rounded-full text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors shadow-inner"
        />
        {searchQuery && (
          <button
            type="button"
            aria-label="Clear search query"
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dietary Category Chips (Horizontally Scrolling) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
            Categories
          </h2>
          <span className="text-xs text-neutral-500">Tap to filter</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
          {categories.map((cat) => {
            const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(isActive && cat.toLowerCase() !== 'all' ? 'All' : cat)}
                onDoubleClick={() => setActiveCategory('All')}
                title={isActive ? 'Active. Click again or double-click to reset to All' : `Category: ${cat}`}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer select-none ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-102'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Recipes (Vertical Feed) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
            Featured Recipes ({filteredRecipes.length})
          </h2>
          <span className="text-xs text-neutral-500">Hand-picked for you</span>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="p-8 text-center bg-neutral-900/60 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">No recipes match "{searchQuery}" in {activeCategory}.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-3 text-xs text-orange-400 hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id || recipe.title}
              role="button"
              tabIndex={0}
              onClick={() => onSelectRecipe(recipe)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectRecipe(recipe);
                }
              }}
              className="group bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/40 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-xl hover:shadow-black/50 active:scale-[0.99]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-800">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-950/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
                    {recipe.category}
                  </span>
                  {recipe.cuisine && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-900/80 backdrop-blur-md text-neutral-300 border border-neutral-700/50">
                      {recipe.cuisine}
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-950/70 backdrop-blur-md text-amber-300 text-xs font-semibold">
                  <span>★</span>
                  <span>{recipe.rating}</span>
                </div>

                {/* Time & Calories Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-200">
                  <div className="flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700/40">
                    <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Prep: {recipe.prepTime}</span>
                  </div>
                  <div className="bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700/40 text-neutral-300">
                    {recipe.calories}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DietIndicator isVeg={isVegRecipe(recipe)} className="w-3.5 h-3.5" />
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs">
                  <span className="text-neutral-500 font-medium">
                    {recipe.ingredients.length} ingredients • {recipe.missingCount > 0 ? (
                      <span className="text-red-400 font-semibold">{recipe.missingCount} to buy</span>
                    ) : (
                      <span className="text-emerald-400 font-semibold">All in pantry</span>
                    )}
                  </span>
                  <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Recipe →
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
