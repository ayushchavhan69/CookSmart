# CookSmart Design System & Tokens

## 1. Concept & Theme Overview
CookSmart is a clean, minimalist mobile-first AI kitchen assistant. It helps users discover recipes, input available ingredients from their pantry, receive AI-crafted recipes with highlighted missing ingredients, and save favorite dishes into a personal cookbook.

## 2. Color Palette
- **Background Primary**: `#121212` / `bg-neutral-900` / `#0f0f0f`
- **Surface Dark**: `#1c1c1e` / `#1e1e1e` (card containers, elevated sheets)
- **Card Sub-surface**: `#252528` / `#28282c` (tags, input boxes)
- **Primary Accent / CTA**: `#FF6B00` (Warm vibrant electric orange)
- **Primary Accent Glow**: `rgba(255, 107, 0, 0.35)`
- **Text Primary**: `#FFFFFF` (Crisp white headers & titles)
- **Text Secondary**: `#9CA3AF` / `#A1A1AA` (Pantry labels, metadata, steps)
- **Missing Ingredient Accent**: `#EF4444` / `bg-red-500/15` / `border-red-500/40` (Alerting ingredients to buy)
- **Success Accent**: `#10B981` / `bg-emerald-500/15`

## 3. Typography & Sizing
- **Heading 1**: 24px - 28px, Bold / Extra Bold (Jakarta Sans / System)
- **Heading 2**: 18px - 20px, Semi-Bold
- **Body / Labels**: 14px - 15px, Medium
- **Micro-copy / Badges**: 11px - 12px, Semi-Bold, uppercase tracking

## 4. Components & Layout
- **Mobile Container**: 100% width on phone screens, max-w-md on desktop centered with subtle frame border and device shadow.
- **Bottom Navigation**: Fixed frosted glass bottom bar (`backdrop-blur-md bg-neutral-950/85`) with 3 primary tabs:
  1. Home (`Home`)
  2. Kitchen Engine (`Sparkles / ChefHat`)
  3. Cookbook (`Bookmark / Heart`)
- **Screen 3 Transition**: AI Recipe Result accessible directly from generation, featured recipe taps, or cookbook items with intuitive Back button.
