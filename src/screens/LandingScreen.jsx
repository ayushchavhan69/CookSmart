import React, { useState } from 'react';
import AnimatedGallery from '../components/landing/AnimatedGallery';
import { ChefHat, Lock, Mail, X, CheckCircle2, Sparkles } from 'lucide-react';

export default function LandingScreen({ onGetStarted, onLogin }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setShowLoginModal(false);
      if (onLogin) onLogin({ email: email || 'chef@cooksmart.ai' });
      else onGetStarted();
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    setEmail('chef.demo@cooksmart.ai');
    setPassword('••••••••');
    setLoginSuccess(true);
    setTimeout(() => {
      setShowLoginModal(false);
      if (onLogin) onLogin({ email: 'chef.demo@cooksmart.ai' });
      else onGetStarted();
    }, 500);
  };

  return (
    <div className="h-full min-h-screen max-h-screen flex flex-col justify-between overflow-hidden bg-[#121212] text-neutral-100 py-2 sm:py-3 selection:bg-orange-500 selection:text-white font-sans">
      {/* 1. Animated Food Gallery (Top Section - 100% Full-Bleed Edge-to-Edge with 0 Side Gaps) */}
      <section className="w-full flex-shrink-0 pt-0.5 overflow-hidden">
        <AnimatedGallery />
      </section>

      {/* 2. Main Hero Section (Centered & Fitted in Viewport with comfortable padding) */}
      <section className="w-full max-w-[340px] sm:max-w-[360px] mx-auto flex-1 flex flex-col justify-center items-center text-center px-4 py-2 sm:py-3">
        {/* Main Heading (3-Line Balanced Distribution) */}
        <h1 className="text-[22px] sm:text-[25px] font-black text-white tracking-tight leading-[1.2] mb-2.5 sm:mb-3">
          CookSmart Ai 🥗 🔍 | Find,<br />
          Create &amp; Enjoy Delicious<br />
          Recipes!
        </h1>

        {/* Subtitle (2-Line Balanced Distribution) */}
        <p className="text-[13px] sm:text-[14px] text-neutral-400 font-medium leading-[1.4] max-w-[310px] mx-auto mb-5 sm:mb-6">
          Generate delicious recipes in seconds with the<br />
          power of AI! 🍔✨
        </p>

        {/* 3. Primary Call-to-Action: Vibrant Orange "Get Started" Button */}
        <div className="w-full mb-3 sm:mb-3.5">
          <button
            type="button"
            onClick={onGetStarted}
            className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-[#ff6b00] hover:bg-[#ea580c] active:scale-[0.98] text-white font-extrabold text-base sm:text-[17px] tracking-wide shadow-lg shadow-orange-500/30 transition-transform duration-150 cursor-pointer text-center"
          >
            Get Started
          </button>
        </div>

        {/* 4. Login Link (Exact Text & Alignment) */}
        <div className="text-[12px] sm:text-[13px] text-neutral-400 font-medium">
          <button
            type="button"
            onClick={() => setShowLoginModal(true)}
            className="text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
          >
            Click Here to Reload if You already Login
          </button>
        </div>
      </section>

      {/* 5. Interactive Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-neutral-900 rounded-3xl p-6 sm:p-7 w-full max-w-md shadow-2xl border border-neutral-800 relative animate-scaleUp text-neutral-100">
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close login dialog"
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-black border border-orange-500/30">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">Welcome Back, Chef!</h3>
                <p className="text-xs text-neutral-400">Sign in to sync your saved recipes and favorites</p>
              </div>
            </div>

            {loginSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white">Login Successful!</h4>
                <p className="text-xs text-neutral-400">Redirecting to your kitchen...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-3.5 mt-4">
                <div>
                  <label htmlFor="login-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      id="login-email"
                      aria-label="Email Address"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="chef@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <input
                      id="login-password"
                      aria-label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-colors text-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-bold text-sm shadow-md shadow-orange-500/25 active:scale-[0.98] transition-transform duration-150 cursor-pointer"
                >
                  Log In &amp; Continue
                </button>

                {/* Quick 1-Click Demo Login */}
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-neutral-700"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instant 1-Click Chef Demo Sign In</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
