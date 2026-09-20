import React, { useState } from 'react';
import { isVegRecipe } from '../data/recipes';
import { DietIndicator } from '../components/DietBadge';

function getCuisineLabel(recipe) {
  if (!recipe) return 'Curated Recipe';
  if (recipe.category === 'Instant' || recipe.course === 'Instant') {
    return '⚡ Instant Dish';
  }
  const c = (recipe.cuisine || '').toLowerCase();
  if (c.includes('indian fusion')) return '🇮🇳 Indian Fusion';
  if (c.includes('indo-chinese')) return '🥢 Indo-Chinese';
  if (c.includes('indo-western')) return '✨ Indo-Western';
  if (c.includes('indian')) return '🇮🇳 Indian';
  if (c.includes('italian')) return '🇮🇹 Italian';
  if (c.includes('thai')) return '🇹🇭 Thai';
  if (c.includes('japanese')) return '🇯🇵 Japanese';
  if (c.includes('mexican')) return '🇲🇽 Mexican';
  if (c.includes('french')) return '🇫🇷 French';
  if (c.includes('middle eastern')) return '🧆 Middle East';
  if (c.includes('american')) return '🇺🇸 American';
  if (c.includes('asian')) return '🥢 Asian';
  if (c.includes('continental') || c.includes('fast food')) return '🍟 Continental';
  if (c.includes('quick dessert')) return '🍨 Quick Dessert';
  return recipe.cuisine || recipe.category || 'Special Dish';
}

function DetailHeader({ onBack, recipe, onShare }) {
  return (
    <div className="px-4 py-3 flex items-center justify-between sticky top-0 bg-[#0f0f0f]/90 backdrop-blur-md z-30 border-b border-neutral-800/80">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-200 hover:text-white hover:border-orange-500/60 transition-colors text-xs font-semibold"
        aria-label="Go back"
      >
        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back</span>
      </button>

      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 shadow-xs">
        <span className="text-amber-400 font-extrabold flex items-center gap-1 text-xs">
          <span>⭐</span>
          <span>{recipe.rating || '4.9'}</span>
        </span>
        <span className="text-neutral-600 text-xs font-bold">•</span>
        <span className="text-xs font-bold text-orange-400 truncate max-w-[140px]">
          {getCuisineLabel(recipe)}
        </span>
      </div>

      <button
        type="button"
        onClick={onShare}
        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
        aria-label="Share Recipe"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
    </div>
  );
}

function DetailHero({ recipe, isVeg }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
      
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-950/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
          {recipe.category || 'Special Dish'}
        </span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-1.5 border ${
          isVeg
            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
            : 'bg-red-950/80 text-red-400 border-red-500/40'
        }`}>
          <DietIndicator isVeg={isVeg} className="w-3.5 h-3.5" />
          <span className="text-[11px]">{isVeg ? 'Pure Veg' : 'Non-Veg'}</span>
        </span>
      </div>
    </div>
  );
}

function DetailOverview({ recipe, isVeg }) {
  return (
    <>
      <div className="bg-[#171717]/95 backdrop-blur-xl border border-neutral-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-2 mb-1.5">
          <DietIndicator isVeg={isVeg} className="w-4 h-4" />
          <h1 className="text-2xl font-black tracking-tight text-white leading-tight">
            {recipe.title}
          </h1>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {recipe.description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-center shadow-lg shadow-black/20">
        <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-neutral-950/50">
          <span className="text-orange-400 text-sm mb-0.5">⏱️</span>
          <span className="text-[10px] uppercase font-bold text-neutral-500">Prep Time</span>
          <span className="text-xs font-extrabold text-neutral-100">{recipe.prepTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-neutral-950/50">
          <span className="text-orange-400 text-sm mb-0.5">🍳</span>
          <span className="text-[10px] uppercase font-bold text-neutral-500">Cook Time</span>
          <span className="text-xs font-extrabold text-neutral-100">{recipe.cookTime}</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-neutral-950/50">
          <span className="text-orange-400 text-sm mb-0.5">🔥</span>
          <span className="text-[10px] uppercase font-bold text-neutral-500">Est. Calories</span>
          <span className="text-xs font-extrabold text-neutral-100">{recipe.calories}</span>
        </div>
      </div>
    </>
  );
}

function DetailMissingBanner({ missingIngredients }) {
  if (!missingIngredients || missingIngredients.length === 0) return null;
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-red-950/20 to-neutral-900 border border-red-500/40 shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold border border-red-500/40">
          !
        </span>
        <h3 className="text-xs font-bold uppercase tracking-wider text-red-400">
          Pantry Gap (Missing Ingredients)
        </h3>
      </div>
      <p className="text-xs text-neutral-300 mb-2">
        You're only missing {missingIngredients.length} item(s) to complete this recipe:
      </p>
      <div className="flex flex-wrap gap-2">
        {missingIngredients.map((ing) => (
          <span
            key={ing.name}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500/20 border border-red-500/40 text-red-200 flex items-center gap-1.5"
          >
            <span className="text-red-400">🛒</span>
            <span>{ing.name} ({ing.amount})</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function DetailIngredientsChecklist({ ingredients, checkedIngredients, onToggleCheck }) {
  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
          Ingredients Checklist ({ingredients.length})
        </h2>
        <span className="text-[11px] text-neutral-500">Tap to check off</span>
      </div>

      <div className="space-y-2">
        {ingredients.map((ing) => {
          const isChecked = Boolean(checkedIngredients[ing.name]);
          return (
            <div
              key={ing.name}
              role="button"
              tabIndex={0}
              onClick={() => onToggleCheck(ing.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggleCheck(ing.name);
                }
              }}
              className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                isChecked
                  ? 'bg-neutral-950/30 border-neutral-800/50 opacity-60'
                  : !ing.available
                  ? 'bg-red-950/20 border-red-500/30 text-red-100'
                  : 'bg-neutral-950/60 border-neutral-800 text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                  isChecked
                    ? 'bg-emerald-500 text-white'
                    : 'border border-neutral-700 bg-neutral-900'
                }`}>
                  {isChecked && '✓'}
                </div>
                <span className={`text-xs font-medium ${isChecked ? 'line-through text-neutral-500' : ''}`}>
                  {ing.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 font-semibold">{ing.amount}</span>
                {!ing.available && (
                  <span className="text-[10px] font-bold uppercase bg-red-500/30 text-red-300 px-1.5 py-0.5 rounded">
                    Missing
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetailInstructions({ instructions, onOpenYouTube }) {
  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 mb-8">
      <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
        Step-by-Step Instructions
      </h2>

      <div className="space-y-4">
        {instructions.map((step, idx) => (
          <div key={step} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">
              {idx + 1}
            </div>
            <p className="text-xs text-neutral-200 leading-relaxed pt-0.5">
              {step}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 mt-5 border-t border-neutral-800/80">
        <button
          type="button"
          onClick={onOpenYouTube}
          className="w-full py-3.5 px-5 rounded-full bg-[#ff0000] hover:bg-[#e60000] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/30 active:scale-[0.98] transition-transform duration-150 cursor-pointer"
        >
          <div className="w-6 h-4 bg-white rounded-[4px] flex items-center justify-center flex-shrink-0 shadow-xs">
            <svg className="w-2.5 h-2.5 fill-[#ff0000] ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span>Open in YouTube</span>
          <span className="text-base leading-none font-bold">↗</span>
        </button>
      </div>
    </div>
  );
}

function DetailFloatingActionBar({ isSaved, onToggleSave, recipe, onShare }) {
  return (
    <div className="fixed bottom-0 inset-x-0 max-w-md mx-auto p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent z-40">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onToggleSave(recipe, isSaved)}
          className={`flex-1 py-3.5 px-4 rounded-2xl font-extrabold text-sm tracking-wide transition-colors duration-150 flex items-center justify-center gap-2 border shadow-lg ${
            isSaved
              ? 'bg-orange-500 text-white border-orange-500 shadow-orange-500/30'
              : 'bg-neutral-900/90 border-orange-500/80 text-orange-400 hover:bg-orange-500/10'
          }`}
        >
          <svg
            className={`w-5 h-5 ${isSaved ? 'fill-current' : 'fill-none stroke-current'}`}
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{isSaved ? 'Saved in Cookbook' : 'Save Recipe'}</span>
        </button>

        <button
          type="button"
          onClick={onShare}
          className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
          aria-label="Share Recipe"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function RecipeDetailScreen({
  recipe,
  onBack,
  onToggleSave,
  isSaved,
  showToast
}) {
  const [checkedIngredients, setCheckedIngredients] = useState({});

  if (!recipe) {
    return (
      <div className="p-8 text-center text-neutral-400">
        <p>No recipe selected.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-orange-500 rounded-xl text-white font-bold">
          Go Back
        </button>
      </div>
    );
  }

  const isVeg = isVegRecipe(recipe);

  const toggleCheck = (ingredientName) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingredientName]: !prev[ingredientName]
    }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: `Check out this recipe for ${recipe.title} on CookSmart!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${recipe.title} - Generated with CookSmart!`);
      showToast?.('Recipe link copied to clipboard!');
    }
  };

  const handleOpenYouTube = () => {
    if (recipe.youtubeUrl) {
      window.open(recipe.youtubeUrl, '_blank', 'noopener,noreferrer');
    } else {
      const query = encodeURIComponent(`${recipe.title} recipe authentic cooking tutorial`);
      window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank', 'noopener,noreferrer');
    }
  };

  const missingIngredients = (recipe.ingredients || []).filter(i => !i.available);

  return (
    <div className="pb-36 pt-2 max-w-md mx-auto min-h-screen text-neutral-100 animate-fadeIn relative">
      <DetailHeader onBack={onBack} recipe={recipe} onShare={handleShare} />

      <DetailHero recipe={recipe} isVeg={isVeg} />

      <div className="px-4 -mt-6 relative z-10 space-y-6">
        <DetailOverview recipe={recipe} isVeg={isVeg} />

        <DetailMissingBanner missingIngredients={missingIngredients} />

        <DetailIngredientsChecklist
          ingredients={recipe.ingredients || []}
          checkedIngredients={checkedIngredients}
          onToggleCheck={toggleCheck}
        />

        <DetailInstructions
          instructions={recipe.instructions || []}
          onOpenYouTube={handleOpenYouTube}
        />
      </div>

      <DetailFloatingActionBar
        isSaved={isSaved}
        onToggleSave={onToggleSave}
        recipe={recipe}
        onShare={handleShare}
      />
    </div>
  );
}
