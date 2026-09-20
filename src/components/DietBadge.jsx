import React from 'react';

/**
 * Authentic Non-Vegetarian Logo (Red square border with solid red triangle on white background)
 * As officially specified by food regulatory standards.
 */
export function NonVegIcon({ className = 'w-3.5 h-3.5', size }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      title="Non-Vegetarian"
      aria-label="Non-Vegetarian"
    >
      {/* Sleek Black Background Box with Red Border */}
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="3"
        stroke="#ef4444"
        strokeWidth="2.4"
        fill="#000000"
      />
      {/* Upward-pointing Solid Red Triangle */}
      <polygon points="12,5.5 18.5,17.5 5.5,17.5" fill="#ef4444" />
    </svg>
  );
}

/**
 * Authentic Vegetarian Logo (Green square border with solid green circle on black background)
 */
export function VegIcon({ className = 'w-3.5 h-3.5', size }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      title="Pure Vegetarian"
      aria-label="Pure Vegetarian"
    >
      {/* Sleek Black Background Box with Green Border */}
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="3"
        stroke="#22c55e"
        strokeWidth="2.4"
        fill="#000000"
      />
      {/* Solid Green Centered Circle */}
      <circle cx="12" cy="12" r="5" fill="#22c55e" />
    </svg>
  );
}

/**
 * Combined Diet Indicator Component
 */
export function DietIndicator({ isVeg, className = 'w-3.5 h-3.5', size }) {
  return isVeg ? (
    <VegIcon className={className} size={size} />
  ) : (
    <NonVegIcon className={className} size={size} />
  );
}

export default DietIndicator;
