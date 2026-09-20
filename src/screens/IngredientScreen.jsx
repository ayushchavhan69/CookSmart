import React, { useState, useRef } from 'react';
import { MEAL_OCCASIONS, parseUserDemand } from '../data/recipeGenerator';
import { FOOD_TYPE_INGREDIENTS } from '../data/foodTypeIngredients';

const QUICK_PROMPT_PILLS = [
  '💪 High-Protein Meal',
  '🔥 Spicy Street Food',
  '🍰 Quick Sweet Treat',
  '🥑 Low Calorie Fit',
  '🧀 Cheesy Comfort'
];

const TIME_OPTIONS = [
  { val: 10, label: '⚡ < 10 mins' },
  { val: 20, label: '⏱️ < 20 mins' },
  { val: null, label: '🕒 Any Time' }
];

function IngredientHeader() {
  return (
    <header className="mb-5">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 text-[11px] font-extrabold tracking-wide uppercase mb-2 shadow-sm">
        <span>🧠 AI Demand & Pantry Engine</span>
      </div>
      <h1 className="text-2xl font-black tracking-tight text-white">
        Smart Culinary Matcher
      </h1>
      <p className="text-xs text-neutral-400 mt-1">
        Tell us your craving, cooking mood, or ingredients. Our AI analyzes your demand to find the most accurate dishes.
      </p>
    </header>
  );
}

function CravingPresets({ demandPrompt, setDemandPrompt, onSelectPreset }) {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-3.5 mb-5 shadow-xl shadow-black/40">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-base">💭</span>
          <span className="text-xs font-black uppercase tracking-wider text-neutral-300">
            Quick Craving Presets
          </span>
        </div>
        {demandPrompt && (
          <button
            type="button"
            onClick={() => setDemandPrompt('')}
            className="text-[10px] text-neutral-400 hover:text-orange-400 transition-colors font-semibold cursor-pointer"
          >
            Clear preset ✕
          </button>
        )}
      </div>

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1">
        {QUICK_PROMPT_PILLS.map((pill) => {
          const isSelected = demandPrompt === pill;
          return (
            <button
              key={pill}
              type="button"
              onClick={() => onSelectPreset(isSelected ? '' : pill)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-colors active:scale-95 cursor-pointer ${
                isSelected
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                  : 'bg-neutral-800/90 border border-neutral-700/60 hover:border-orange-500/50 hover:bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              {pill}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PantryIngredients({
  ingredients,
  onClearAll,
  onRemove,
  inputValue,
  setInputValue,
  onKeyDown,
  onAdd
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor="pantry-ingredient-input" className="text-xs font-bold uppercase tracking-wider text-neutral-400">
          Pantry Ingredients ({ingredients.length})
        </label>
        {ingredients.length > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-[11px] text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-3 min-h-[42px] items-center">
        {ingredients.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-neutral-800 to-neutral-850 text-neutral-100 border border-neutral-700/70 hover:border-orange-500/50 transition-colors shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
            <span>{item}</span>
            <button
              type="button"
              onClick={() => onRemove(item)}
              className="w-4 h-4 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label={`Remove ${item}`}
            >
              ×
            </button>
          </span>
        ))}

        {ingredients.length === 0 && (
          <span className="text-xs text-neutral-500 italic">No ingredients in pantry yet. Type or tap below!</span>
        )}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
        <input
          id="pantry-ingredient-input"
          aria-label="Add ingredient to pantry"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Add ingredient (e.g. Spinach, Egg) & hit Enter..."
          className="flex-1 bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none py-1.5"
        />
        <button
          type="button"
          onClick={() => onAdd(inputValue)}
          disabled={!inputValue.trim()}
          className="px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-xs font-bold text-orange-400 border border-neutral-700 transition-colors active:scale-95 cursor-pointer"
        >
          Add +
        </button>
      </div>
    </>
  );
}

function FoodTypeCatalog({
  selectedFoodType,
  setSelectedFoodType,
  onAddAll,
  onToggle,
  ingredients
}) {
  return (
    <div className="pt-2.5 mt-2 border-t border-neutral-800/80 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase font-bold text-neutral-400 whitespace-nowrap flex items-center gap-1">
          <span>🍽️</span> Mentioned in Food Types:
        </span>
        <button
          type="button"
          onClick={() => onAddAll(selectedFoodType)}
          className="text-[10px] font-bold text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 px-2.5 py-0.5 rounded-full transition-colors active:scale-95 cursor-pointer flex items-center gap-1 shadow-xs"
          title="Add all ingredients from this food category"
        >
          <span>+ Add All ({FOOD_TYPE_INGREDIENTS[selectedFoodType]?.items?.length || 0})</span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1 scroll-smooth">
        {Object.entries(FOOD_TYPE_INGREDIENTS).map(([key, cat]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelectedFoodType(key)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedFoodType === key
                ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30 font-extrabold'
                : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1 max-h-40 overflow-y-auto no-scrollbar">
        {(FOOD_TYPE_INGREDIENTS[selectedFoodType]?.items || []).map((item) => {
          const isAdded = ingredients.some(
            i => i.toLowerCase() === item.val.toLowerCase() || i.toLowerCase().includes(item.val.toLowerCase())
          );
          return (
            <button
              key={`${selectedFoodType}-${item.val}`}
              type="button"
              onClick={() => onToggle(item.val)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 whitespace-nowrap transition-colors active:scale-95 cursor-pointer border ${
                isAdded
                  ? 'bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-xs'
                  : 'bg-neutral-950/80 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
              }`}
              title={isAdded ? 'Click to remove' : 'Click to add to pantry'}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
              <span className={`text-[10px] font-bold ${isAdded ? 'text-orange-400' : 'text-neutral-500'}`}>
                {isAdded ? '✓' : '+'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MealOccasionSection({ selectedMeal, setSelectedMeal, maxCookingTime, setMaxCookingTime }) {
  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 mb-5 space-y-4">
      <div>
        <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
          Meal Occasion
        </span>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {MEAL_OCCASIONS.map((occ) => {
            const isActive = selectedMeal === occ.id;
            return (
              <button
                key={occ.id}
                type="button"
                onClick={() => setSelectedMeal(occ.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {occ.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
            Max Cooking Time
          </span>
          <span className="text-xs font-extrabold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md">
            {maxCookingTime ? `≤ ${maxCookingTime} Mins` : 'Any Time'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {TIME_OPTIONS.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setMaxCookingTime(t.val)}
              className={`py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                maxCookingTime === t.val
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatchCtaSection({ isGenerating, hasIngredients, onSubmit }) {
  return (
    <div className="relative pt-1">
      <div className="absolute inset-x-4 top-2 h-12 bg-orange-500/30 blur-xl rounded-full" />

      <button
        type="button"
        onClick={onSubmit}
        disabled={isGenerating || !hasIngredients}
        className="relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-base tracking-wide shadow-xl shadow-orange-500/25 active:scale-[0.98] transition-transform duration-150 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Analyzing Demand & Finding Dishes...</span>
          </>
        ) : (
          <>
            <span>⚡</span>
            <span>Find Accurate Matching Recipes</span>
            <span>→</span>
          </>
        )}
      </button>

      {!hasIngredients && (
        <p className="text-center text-[11px] text-neutral-500 mt-2">
          Please add at least 1 ingredient to find dishes.
        </p>
      )}
    </div>
  );
}

export default function IngredientScreen({ onGenerateRecipe, isGenerating }) {
  const [ingredients, setIngredients] = useState([
    'Paneer',
    'Butter',
    'Garlic',
    'Tomato'
  ]);
  const [demandPrompt, setDemandPrompt] = useState('');
  const selectedMoodRef = useRef('quick');
  const [selectedMeal, setSelectedMeal] = useState('all');
  const [maxCookingTime, setMaxCookingTime] = useState(15);
  const [inputValue, setInputValue] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('all');

  const handleAddIngredient = (item) => {
    const trimmed = item.trim();
    if (!trimmed) return;
    if (!ingredients.some(i => i.toLowerCase() === trimmed.toLowerCase())) {
      setIngredients([...ingredients, trimmed]);
    }
    setInputValue('');
  };

  const handleToggleIngredient = (val) => {
    if (ingredients.some(i => i.toLowerCase() === val.toLowerCase())) {
      setIngredients(ingredients.filter(i => i.toLowerCase() !== val.toLowerCase()));
    } else {
      setIngredients([...ingredients, val]);
    }
  };

  const handleAddAllFromFoodType = (typeKey) => {
    const items = FOOD_TYPE_INGREDIENTS[typeKey]?.items || [];
    setIngredients(prev => {
      const next = [...prev];
      items.forEach(item => {
        if (!next.some(i => i.toLowerCase() === item.val.toLowerCase())) {
          next.push(item.val);
        }
      });
      return next;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddIngredient(inputValue);
    }
  };

  const handleRemove = (itemToRemove) => {
    setIngredients(ingredients.filter(i => i !== itemToRemove));
  };

  const handleSelectPresetDemand = (promptText) => {
    setDemandPrompt(promptText);
    const parsed = parseUserDemand(promptText);
    if (parsed.mood) selectedMoodRef.current = parsed.mood;
    if (parsed.mealType && parsed.mealType !== 'all') setSelectedMeal(parsed.mealType);
    if (parsed.maxTime) setMaxCookingTime(parsed.maxTime);
    parsed.extractedIngredients.forEach(item => {
      if (!ingredients.some(i => i.toLowerCase() === item.toLowerCase())) {
        setIngredients(prev => [...prev, item]);
      }
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (ingredients.length === 0) return;

    onGenerateRecipe({
      ingredients,
      demandQuery: demandPrompt,
      mood: selectedMoodRef.current,
      mealType: selectedMeal,
      maxTime: maxCookingTime,
    });
  };

  return (
    <div className="pb-36 pt-4 px-4 max-w-md mx-auto min-h-screen text-neutral-100 animate-fadeIn">
      <IngredientHeader />

      <CravingPresets
        demandPrompt={demandPrompt}
        setDemandPrompt={setDemandPrompt}
        onSelectPreset={handleSelectPresetDemand}
      />

      <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 mb-5 shadow-lg shadow-black/30 focus-within:border-orange-500/70 transition-colors">
        <PantryIngredients
          ingredients={ingredients}
          onClearAll={() => setIngredients([])}
          onRemove={handleRemove}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onKeyDown={handleKeyDown}
          onAdd={handleAddIngredient}
        />

        <FoodTypeCatalog
          selectedFoodType={selectedFoodType}
          setSelectedFoodType={setSelectedFoodType}
          onAddAll={handleAddAllFromFoodType}
          onToggle={handleToggleIngredient}
          ingredients={ingredients}
        />
      </div>

      <MealOccasionSection
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        maxCookingTime={maxCookingTime}
        setMaxCookingTime={setMaxCookingTime}
      />

      <MatchCtaSection
        isGenerating={isGenerating}
        hasIngredients={ingredients.length > 0}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
