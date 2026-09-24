import React, { useState, useMemo, useEffect, useRef } from 'react';
import { INITIAL_RECIPES } from './data/recipes';
import { generateMultipleSmartRecipes } from './data/recipeGenerator';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import IngredientScreen from './screens/IngredientScreen';
import RecipeResultsScreen from './screens/RecipeResultsScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import CookbookScreen from './screens/CookbookScreen';
import BottomNav from './components/BottomNav';

const STORAGE_KEY = 'cooksmart_app_recipes_v3';

function loadInitialRecipes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const savedMap = new Map();
        parsed.forEach((p) => {
          const key = (p.title || p.id).toLowerCase().trim();
          savedMap.set(key, p.isSaved);
        });

        // Merge saved states with INITIAL_RECIPES
        const mergedInitial = INITIAL_RECIPES.map((r) => {
          const key = (r.title || r.id).toLowerCase().trim();
          if (savedMap.has(key)) {
            return { ...r, isSaved: !!savedMap.get(key) };
          }
          return r;
        });

        // Include any custom AI generated recipes from localStorage
        const customFromStorage = parsed.filter(
          (p) =>
            !INITIAL_RECIPES.some(
              (r) =>
                r.id === p.id ||
                (r.title || '').toLowerCase().trim() === (p.title || '').toLowerCase().trim()
            )
        );

        return [...customFromStorage, ...mergedInitial];
      }
    }
  } catch (e) {
    console.error('Failed to load recipes from storage:', e);
  }
  return INITIAL_RECIPES;
}

function App() {
  // Screen state: 'landing' | 'home' | 'input' | 'results' | 'detail' | 'saved'
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [recipes, setRecipes] = useState(loadInitialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(INITIAL_RECIPES[0]);
  const [recipeResults, setRecipeResults] = useState([]);
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [searchedDemand, setSearchedDemand] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const previousScreenRef = useRef('landing');

  // Persist recipes state to localStorage whenever modified
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    } catch (e) {
      console.error('Failed to save recipes to storage:', e);
    }
  }, [recipes]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSelectRecipe = (recipe) => {
    if (!recipe) return;
    const targetTitle = (recipe.title || '').toLowerCase().trim();
    // Synchronize latest isSaved from global recipes state
    const currentInState = recipes.find(
      (r) => r.id === recipe.id || (targetTitle && (r.title || '').toLowerCase().trim() === targetTitle)
    );
    const updatedRecipe = currentInState
      ? { ...recipe, isSaved: !!currentInState.isSaved }
      : recipe;

    setSelectedRecipe(updatedRecipe);
    previousScreenRef.current = currentScreen;
    setCurrentScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSave = (recipeToToggle, currentlySavedProp) => {
    if (!recipeToToggle) return;
    const targetTitle = (recipeToToggle.title || '').toLowerCase().trim();

    let currentlySaved = false;
    if (typeof currentlySavedProp === 'boolean') {
      currentlySaved = currentlySavedProp;
    } else {
      const existing = recipes.find(
        (r) => r.id === recipeToToggle.id || (targetTitle && (r.title || '').toLowerCase().trim() === targetTitle)
      );
      currentlySaved = existing ? !!existing.isSaved : !!recipeToToggle.isSaved;
    }

    const willBeSaved = !currentlySaved;

    setRecipes((prev) => {
      const exists = prev.some(
        (r) => r.id === recipeToToggle.id || (targetTitle && (r.title || '').toLowerCase().trim() === targetTitle)
      );
      if (exists) {
        return prev.map((r) => {
          const rTitle = (r.title || '').toLowerCase().trim();
          if (r.id === recipeToToggle.id || (targetTitle && rTitle === targetTitle)) {
            return { ...r, isSaved: willBeSaved };
          }
          return r;
        });
      } else {
        // If the recipe is not yet in recipes, add it with the new isSaved status
        return [{ ...recipeToToggle, isSaved: willBeSaved }, ...prev];
      }
    });

    // Also update in recipeResults if present
    setRecipeResults((prev) =>
      prev.map((r) => {
        const rTitle = (r.title || '').toLowerCase().trim();
        if (r.id === recipeToToggle.id || (targetTitle && rTitle === targetTitle)) {
          return { ...r, isSaved: willBeSaved };
        }
        return r;
      })
    );

    setSelectedRecipe((prev) => ({
      ...(prev || recipeToToggle),
      ...recipeToToggle,
      isSaved: willBeSaved
    }));

    showToast(
      willBeSaved
        ? `Added "${recipeToToggle.title}" to Cookbook!`
        : `Removed "${recipeToToggle.title}" from Cookbook`
    );
  };

  // AI Advanced User Demand & Multi-Recipe Engine
  const handleGenerateRecipe = ({ ingredients, demandQuery, mood, mealType, maxTime, dietary }) => {
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);

      const matches = generateMultipleSmartRecipes({
        ingredients,
        demandQuery,
        mood,
        mealType,
        maxTime,
        dietary,
        allRecipes: recipes
      });

      if (!matches || matches.length === 0) {
        showToast('Please add ingredients to find recipes.');
        return;
      }

      // Add newly generated custom recipes to state (only novel AI recipes, never catalog duplicates)
      setRecipes((prev) => {
        const newOnes = matches.filter(
          m => m.isAiGenerated && !prev.some(r => r.id === m.id || r.title.toLowerCase().trim() === m.title.toLowerCase().trim())
        );
        if (newOnes.length === 0) return prev;
        return [...newOnes, ...prev];
      });

      setRecipeResults(matches);
      setSearchedIngredients(ingredients);
      setSearchedDemand({ demandQuery, mood, mealType, maxTime, dietary });
      previousScreenRef.current = 'input';
      setCurrentScreen('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast(`✨ Found ${matches.length} matched recipes!`);
    }, 800);
  };

  const handleTabChange = (tabId) => {
    setCurrentScreen(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setCurrentScreen(previousScreenRef.current || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Deduplicate saved recipes by unique title / ID so a dish is NEVER shown multiple times
  const savedRecipes = useMemo(() => {
    const seen = new Set();
    return recipes.filter((r) => {
      if (!r.isSaved) return false;
      const key = (r.title || r.id).toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [recipes]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start antialiased transition-colors duration-300 bg-[#0d0d0d] selection:bg-orange-500">
      {/* Mobile Shell Container (Centered for desktop, native feel on mobile) */}
      <div className="w-full max-w-md min-h-screen relative flex flex-col shadow-2xl transition-colors duration-300 overflow-x-hidden bg-[#121212] shadow-black/80 border-x border-neutral-900 text-neutral-100">
        {/* Toast Notification Alert */}
        {toastMessage && (
          <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none animate-bounce">
            <div className="bg-neutral-900/95 border border-emerald-500/80 text-emerald-400 px-4 py-2.5 rounded-2xl shadow-2xl shadow-emerald-500/20 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
              <span>✨</span>
              <span>{toastMessage}</span>
            </div>
          </div>
        )}

        {/* Dynamic Screen View */}
        <main className="flex-1 w-full flex flex-col">
          {currentScreen === 'landing' && (
            <LandingScreen
              onGetStarted={() => {
                setCurrentScreen('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast('🎉 Welcome to CookSmart Ai!');
              }}
              onLogin={(_user) => {
                setCurrentScreen('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast(`👋 Welcome back, Chef!`);
              }}
            />
          )}

          {currentScreen === 'home' && (
            <HomeScreen
              recipes={recipes}
              onSelectRecipe={handleSelectRecipe}
              onNavigateToInput={() => handleTabChange('input')}
              onNavigateToLanding={() => {
                setCurrentScreen('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {currentScreen === 'input' && (
            <IngredientScreen
              onGenerateRecipe={handleGenerateRecipe}
              isGenerating={isGenerating}
            />
          )}

          {currentScreen === 'results' && (
            <RecipeResultsScreen
              results={recipeResults}
              searchIngredients={searchedIngredients}
              searchedDemand={searchedDemand}
              onSelectRecipe={handleSelectRecipe}
              onBackToInput={() => {
                setCurrentScreen('input');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onToggleSave={handleToggleSave}
            />
          )}

          {currentScreen === 'detail' && (
            <RecipeDetailScreen
              recipe={selectedRecipe}
              onBack={handleBackFromDetail}
              onToggleSave={handleToggleSave}
              isSaved={selectedRecipe?.isSaved || false}
              showToast={showToast}
            />
          )}

          {currentScreen === 'saved' && (
            <CookbookScreen
              savedRecipes={savedRecipes}
              onSelectRecipe={handleSelectRecipe}
              onToggleSave={handleToggleSave}
              onNavigateToInput={() => handleTabChange('input')}
            />
          )}
        </main>

        {/* Bottom Tab Bar (Present on Home, Input, Results, Saved screens - hidden on Landing and Detail) */}
        {currentScreen !== 'landing' && currentScreen !== 'detail' && (
          <BottomNav
            activeTab={currentScreen === 'results' ? 'input' : currentScreen}
            onTabChange={handleTabChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;


