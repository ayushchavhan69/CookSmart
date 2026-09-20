import React, { useState, useMemo } from 'react';
import { VegIcon, NonVegIcon } from '../components/DietBadge';
import { ArrowUpDown } from 'lucide-react';
import { isVegRecipe } from '../data/recipes';
import { DietIndicator } from '../components/DietBadge';

const DEFAULT_RESULTS = [];
const DEFAULT_SEARCH_INGREDIENTS = [];
const DEFAULT_SEARCHED_DEMAND = {};

const FILTER_OPTIONS = ['All', 'Quick (<15m)', 'High Protein', 'Pantry Ready', 'Budget Meal', 'Fusion Special'];

const MOOD_LABEL_MAP = {
  quick: '⚡ 15-Min Express',
  high_protein: '💪 Gym Protein Boost',
  comfort: '🛋️ Warm Comfort Food',
  party: '🎉 Street Food & Party',
  healthy: '🥗 Healthy & Clean',
  budget: '💰 Pocket Friendly'
};

const SORT_OPTIONS = [
  { id: 'match', label: 'Best Match', icon: '🎯' },
  { id: 'speed', label: 'Quickest', icon: '⚡' },
  { id: 'protein', label: 'High Protein', icon: '💪' },
  { id: 'pantry', label: 'Most Ready', icon: '🛒' }
];

function getTotalCookingMinutes(recipe) {
  const match = (recipe.cookTime || '').match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 30;
}

function getProteinGrams(recipe) {
  const match = (recipe.protein || '').match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function getFilteredAndSortedResults(results, filter, sortBy, dietFilter) {
  let list = [...results];

  if (dietFilter === 'veg') {
    list = list.filter(r => isVegRecipe(r));
  } else if (dietFilter === 'non-veg') {
    list = list.filter(r => !isVegRecipe(r));
  }

  if (filter === 'Quick (<15m)') {
    list = list.filter(r => getTotalCookingMinutes(r) <= 15);
  } else if (filter === 'High Protein') {
    list = list.filter(r => getProteinGrams(r) >= 15);
  } else if (filter === 'Pantry Ready') {
    list = list.filter(r => (r.missingCount || 0) === 0);
  } else if (filter === 'Budget Meal') {
    list = list.filter(r => (r.ingredients || []).length <= 6);
  } else if (filter === 'Fusion Special') {
    list = list.filter(r => (r.cuisine || '').toLowerCase().includes('fusion'));
  }

  return list.sort((a, b) => {
    if (sortBy === 'speed') {
      return getTotalCookingMinutes(a) - getTotalCookingMinutes(b);
    }
    if (sortBy === 'pantry') {
      return (a.missingCount || 0) - (b.missingCount || 0);
    }
    if (sortBy === 'protein') {
      return getProteinGrams(b) - getProteinGrams(a);
    }
    return (b.matchPercentage || 90) - (a.matchPercentage || 90);
  });
}

function ResultsHeader({ onBackToInput, processedCount, totalCount, searchedDemand, searchIngredients, dietFilter, setDietFilter }) {
  return (
    <header className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={onBackToInput}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 text-xs font-semibold text-neutral-300 hover:text-white transition-colors active:scale-95 shadow-sm"
        >
          <span>←</span>
          <span>Edit Demand & Pantry</span>
        </button>
        
        <span className="text-[11px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/25 transition-colors">
          {processedCount === totalCount
            ? `${processedCount} ${processedCount === 1 ? 'Dish Found' : 'Dishes Found'}`
            : `${processedCount} of ${totalCount} ${totalCount === 1 ? 'Dish' : 'Dishes'}`}
        </span>
      </div>

      <h1 className="text-2xl font-black tracking-tight text-white leading-tight">
        Curated Dishes for You
      </h1>

      <div className="mt-2.5 p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 shadow-md">
        <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-1 font-medium">
          <span className="text-orange-400">🧠 AI Demand Analysis:</span>
          <span className="font-bold text-white">
            {searchedDemand.mood ? MOOD_LABEL_MAP[searchedDemand.mood] || searchedDemand.mood : 'Smart Pantry Match'}
          </span>
          {searchedDemand.maxTime && (
            <span className="text-[11px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded-md font-bold">
              ≤{searchedDemand.maxTime}m
            </span>
          )}
        </div>

        <p className="text-[11px] text-neutral-400 leading-snug">
          Ingredients: <span className="text-neutral-200 font-semibold">{searchIngredients.join(', ')}</span>
          {searchedDemand.demandQuery && (
            <span className="italic block text-neutral-500 mt-0.5">
              "{searchedDemand.demandQuery}"
            </span>
          )}
        </p>
      </div>

      <div className="flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-full shadow-md flex-shrink-0 mt-3">
        <button
          type="button"
          onClick={() => setDietFilter(dietFilter === 'veg' ? 'all' : 'veg')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors active:scale-95 cursor-pointer ${
            dietFilter === 'veg'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/60 shadow-sm'
              : 'text-neutral-400 hover:text-emerald-400 border border-transparent'
          }`}
          title={dietFilter === 'veg' ? 'Showing Veg (click to show all)' : 'Filter Veg only'}
        >
          <VegIcon className="w-3 h-3" />
          <span className="text-[10px]">Veg</span>
        </button>
        <button
          type="button"
          onClick={() => setDietFilter(dietFilter === 'non-veg' ? 'all' : 'non-veg')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors active:scale-95 cursor-pointer ${
            dietFilter === 'non-veg'
              ? 'bg-red-500/20 text-red-400 border border-red-500/60 shadow-sm'
              : 'text-neutral-400 hover:text-red-400 border border-transparent'
          }`}
          title={dietFilter === 'non-veg' ? 'Showing Non-Veg (click to show all)' : 'Filter Non-Veg only'}
        >
          <NonVegIcon className="w-3 h-3" />
          <span className="text-[10px]">Non-Veg</span>
        </button>
      </div>
    </header>
  );
}

function ResultsFilterBar({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <>
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 mb-3 scroll-smooth">
        {FILTER_OPTIONS.map((opt) => {
          const isActive = filter === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(filter === opt ? 'All' : opt)}
              onDoubleClick={() => setFilter('All')}
              title={isActive ? 'Active filter. Click again or double-click to reset to All' : `Filter by ${opt}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 ring-2 ring-orange-500/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mb-4 -mx-4 px-4 overflow-x-auto no-scrollbar py-0.5 scroll-smooth">
        <button
          type="button"
          onClick={() => setSortBy('match')}
          title="Click to reset sort to Best Match"
          className="flex items-center gap-1 text-[11px] font-bold text-neutral-400 hover:text-orange-400 uppercase tracking-wider flex-shrink-0 pl-1 cursor-pointer transition-colors"
        >
          <ArrowUpDown className="w-3 h-3 text-orange-400" />
          <span>Sort:</span>
        </button>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {SORT_OPTIONS.map((s) => {
            const isSelected = sortBy === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSortBy(sortBy === s.id && s.id !== 'match' ? 'match' : s.id)}
                onDoubleClick={() => setSortBy('match')}
                title={isSelected ? 'Active sort. Click again or double-click to reset to Best Match' : `Sort by ${s.label}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors duration-150 cursor-pointer select-none active:scale-95 flex-shrink-0 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 border-orange-400/40 ring-2 ring-orange-500/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function EmptyResultsState({ dietFilter, filter, totalCount, onResetDiet, onResetAll }) {
  return (
    <div className="py-12 px-6 text-center bg-neutral-900/60 border border-neutral-800 rounded-3xl mt-2">
      <div className="text-3xl mb-3">🔍</div>
      <h3 className="text-base font-extrabold text-white mb-1">
        {dietFilter !== 'all'
          ? `No ${dietFilter === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} dishes found${filter !== 'All' ? ` in ${filter}` : ''}`
          : `No dishes found in ${filter}`}
      </h3>
      <p className="text-xs text-neutral-400 mb-4">
        {dietFilter === 'non-veg'
          ? 'Try resetting the filter to view vegetarian matches or add chicken/meat to your ingredients.'
          : "Try switching to 'All' or adjusting your filters."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {dietFilter !== 'all' && (
          <button
            type="button"
            onClick={onResetDiet}
            className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-500/30 hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Reset Diet Filter
          </button>
        )}
        <button
          type="button"
          onClick={onResetAll}
          className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-bold hover:bg-neutral-700 transition-colors cursor-pointer"
        >
          Show All {totalCount} Recipes
        </button>
      </div>
    </div>
  );
}

export default function RecipeResultsScreen({
  results = DEFAULT_RESULTS,
  searchIngredients = DEFAULT_SEARCH_INGREDIENTS,
  searchedDemand = DEFAULT_SEARCHED_DEMAND,
  onSelectRecipe,
  onBackToInput
}) {
  const [filter, setFilter] = useState('All');
  const [dietFilter, setDietFilter] = useState('all');
  const [sortBy, setSortBy] = useState('match');

  const processedResults = useMemo(
    () => getFilteredAndSortedResults(results, filter, sortBy, dietFilter),
    [results, filter, sortBy, dietFilter]
  );

  return (
    <div className="pb-32 pt-4 px-4 max-w-md mx-auto min-h-screen text-neutral-100 animate-fadeIn">
      <ResultsHeader
        onBackToInput={onBackToInput}
        processedCount={processedResults.length}
        totalCount={results.length}
        searchedDemand={searchedDemand}
        searchIngredients={searchIngredients}
        dietFilter={dietFilter}
        setDietFilter={setDietFilter}
      />

      <ResultsFilterBar
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {processedResults.length === 0 ? (
        <EmptyResultsState
          dietFilter={dietFilter}
          filter={filter}
          totalCount={results.length}
          onResetDiet={() => setDietFilter('all')}
          onResetAll={() => { setFilter('All'); setDietFilter('all'); }}
        />
      ) : (
        <div className="space-y-4">
          {processedResults.map((recipe) => (
            <RecipeResultCard
              key={recipe.id || recipe.title}
              recipe={recipe}
              onSelectRecipe={onSelectRecipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function RecipeResultCard({ recipe, onSelectRecipe }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelectRecipe(recipe)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectRecipe(recipe);
        }
      }}
      className="group bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-xl hover:shadow-black/50 active:scale-[0.99] flex flex-col"
    >
      {/* Recipe Image Banner */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 max-w-[75%]">
          {recipe.isHeroMatch && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/90 backdrop-blur-md text-neutral-950 shadow-sm">
              ⭐ Hero Dish
            </span>
          )}

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-900/80 backdrop-blur-md text-neutral-300 border border-neutral-700/50">
            {recipe.category || recipe.course}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-950/75 backdrop-blur-md text-amber-300 text-xs font-semibold shadow-sm">
          <span>★</span>
          <span>{recipe.rating || '4.9'}</span>
        </div>

        {/* Time & Calories Pill */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-neutral-200">
          <div className="flex items-center gap-1.5 bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700/40">
            <svg className="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{recipe.prepTime} prep • {recipe.cookTime} cook</span>
          </div>
          <div className="bg-neutral-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-neutral-700/40 text-neutral-300 text-[11px] font-medium">
            {recipe.calories}
          </div>
        </div>
      </div>

      {/* Recipe Card Body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <DietIndicator isVeg={isVegRecipe(recipe)} className="w-3.5 h-3.5" />
          <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
            {recipe.title}
          </h3>
        </div>

        {/* AI Demand Highlights Pills */}
        {recipe.demandHighlights && recipe.demandHighlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {recipe.demandHighlights.map((hl) => (
              <span
                key={hl}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-neutral-800 text-orange-300 border border-neutral-700/60"
              >
                {hl}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
          {recipe.description}
        </p>

        {/* Pantry vs Need Ingredients Breakdown */}
        <div className="bg-neutral-950/60 rounded-xl p-2.5 border border-neutral-800/60 mb-3 space-y-1 text-[11px]">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span>✓</span>
            <span className="truncate">
              Pantry: {(recipe.ingredients || []).filter(i => i.available).map(i => i.name).slice(0, 3).join(', ') || 'Your ingredients'}
              {(recipe.ingredients || []).filter(i => i.available).length > 3 ? '...' : ''}
            </span>
          </div>
          {(recipe.ingredients || []).some(i => !i.available) && (
            <div className="flex items-center gap-1.5 text-neutral-400">
              <span className="text-amber-400">🛒</span>
              <span className="truncate text-neutral-300">
                Need: {(recipe.ingredients || []).filter(i => !i.available).map(i => i.name).slice(0, 2).join(', ')}
              </span>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs">
          <span className="text-neutral-500 font-medium">
            {(recipe.ingredients || []).length} total ingredients
          </span>
          <span className="text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Cook Recipe →
          </span>
        </div>
      </div>
    </div>
  );
}
