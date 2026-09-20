import React from 'react';
import { isVegRecipe } from '../data/recipes';
import { DietIndicator } from '../components/DietBadge';

const DEFAULT_SAVED = [];

export default function CookbookScreen({ savedRecipes = DEFAULT_SAVED, onSelectRecipe, onToggleSave, onNavigateToInput }) {
  // Guarantee every recipe in cookbook is unique by title / id
  const uniqueSavedRecipes = React.useMemo(() => {
    const seen = new Set();
    return (savedRecipes || []).filter((r) => {
      if (!r) return false;
      const key = (r.title || r.id).toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [savedRecipes]);

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto min-h-screen text-neutral-100 animate-fadeIn">
      {/* Header */}
      <header className="mb-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <h1 className="text-2xl font-black tracking-tight text-white">
              My Cookbook
            </h1>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {uniqueSavedRecipes.length} curated {uniqueSavedRecipes.length === 1 ? 'recipe' : 'recipes'} saved
          </p>
        </div>

        {uniqueSavedRecipes.length > 0 && (
          <button
            type="button"
            onClick={onNavigateToInput}
            className="px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 transition-colors text-xs font-bold"
          >
            + New Meal
          </button>
        )}
      </header>

      {/* Empty State */}
      {uniqueSavedRecipes.length === 0 ? (
        <div className="py-16 px-6 text-center bg-neutral-900/50 border border-neutral-800/80 rounded-3xl mt-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-neutral-800/70 border border-neutral-700/60 flex items-center justify-center text-4xl shadow-inner">
            🍲
          </div>
          <h2 className="text-lg font-extrabold text-white mb-2">
            Your cookbook is empty
          </h2>
          <p className="text-xs text-neutral-400 max-w-xs mx-auto mb-6 leading-relaxed">
            Go generate some meals with your pantry ingredients or explore the featured catalog!
          </p>
          <button
            type="button"
            onClick={onNavigateToInput}
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-transform duration-150 active:scale-98"
          >
            Generate Your First Meal →
          </button>
        </div>
      ) : (
        /* 2-Column Saved Recipes Grid */
        <div className="grid grid-cols-2 gap-3.5">
          {uniqueSavedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative group bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/40 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:shadow-lg hover:shadow-black/40 flex flex-col active:scale-[0.98]"
            >
              {/* Heart Saved Button (Filled Orange - click to unsave directly) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onToggleSave) onToggleSave(recipe, true);
                }}
                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-orange-500 shadow-md hover:scale-110 active:scale-90 transition-transform cursor-pointer z-20"
                title="Remove from Cookbook"
                aria-label={`Remove ${recipe.title} from Cookbook`}
              >
                <svg className="w-4 h-4 fill-orange-500 hover:fill-orange-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

              {/* Card Navigation Trigger */}
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
                className="flex flex-col flex-1 w-full text-left"
              >
                {/* Card Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-800">
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

                  {/* Cook / Prep time tag */}
                  <div className="absolute bottom-2 left-2.5 text-[10px] font-semibold text-neutral-300 bg-neutral-950/70 backdrop-blur-sm px-2 py-0.5 rounded-md">
                    ⏱️ {recipe.prepTime}
                  </div>
                </div>

                {/* Title & Info */}
                <div className="p-3 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                      {recipe.category}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <DietIndicator isVeg={isVegRecipe(recipe)} className="w-3 h-3 flex-shrink-0" />
                      <h3 className="text-xs font-bold text-white line-clamp-1 group-hover:text-orange-400 transition-colors">
                        {recipe.title}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>{recipe.calories}</span>
                    <span className="text-orange-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
