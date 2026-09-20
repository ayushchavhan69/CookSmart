import React from 'react';

export default function BottomNav({ activeTab, onTabChange }) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (isActive) => (
        <svg
          className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`}
          fill={isActive ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={isActive ? '2' : '1.75'}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      )
    },
    {
      id: 'input',
      label: 'AI Kitchen',
      isAccent: true,
      icon: (isActive) => (
        <svg
          className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )
    },
    {
      id: 'saved',
      label: 'Cookbook',
      icon: (isActive) => (
        <svg
          className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 fill-orange-500 text-orange-500' : ''}`}
          fill={isActive ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={isActive ? '2' : '1.75'}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )
    }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 max-w-md mx-auto z-40 px-4 pb-4 pt-1 pointer-events-none">
      <div className="bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-3xl p-1.5 shadow-2xl shadow-black/80 flex items-center justify-around pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          if (item.isAccent) {
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="flex flex-col items-center group -mt-5 relative focus:outline-none"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/40 group-hover:scale-105 group-active:scale-95 transition-transform duration-150 border border-orange-400/50">
                  {item.icon(isActive)}
                </div>
                <span className={`text-[10px] font-bold mt-1 transition-colors ${
                  isActive ? 'text-orange-400' : 'text-neutral-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex-1 py-2 px-3 rounded-2xl flex flex-col items-center justify-center transition-all ${
                isActive
                  ? 'text-orange-500 font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {item.icon(isActive)}
              <span className={`text-[10px] mt-1 transition-colors ${
                isActive ? 'font-bold text-white' : 'font-medium'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
