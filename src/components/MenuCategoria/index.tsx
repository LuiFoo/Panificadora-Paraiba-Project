"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Interface for category menu props
interface CategoryNavProps {
  categories: string[];
  activeCategory?: string | null;
  variant?: "button" | "link";
  onCategoryClick?: (category: string) => void;
}

function MenuCategoria({
  categories,
  activeCategory = null,
  variant = "button",
  onCategoryClick
}: CategoryNavProps) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  // Check if the nav is overflowing to adjust styling
  useEffect(() => {
    if (containerRef) {
      const isOverflow = containerRef.scrollWidth > containerRef.clientWidth;
      setIsOverflowing(isOverflow);
    }
  }, [containerRef, categories]);

  // Handle click for button variant
  const handleItemClick = (category: string) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <nav 
      className={`mt-8 ${isOverflowing ? 'overflow-x-auto' : 'flex justify-center'}`}
      ref={setContainerRef}
    >
      <ul className="flex gap-3 whitespace-nowrap px-4">
        {categories.map((category, index) => (
          <li key={index} className="flex-shrink-0">
            {variant === "button" ? (
              <button
                onClick={() => handleItemClick(category)}
                className={`block px-4 py-3 text-sm font-semibold rounded-lg shadow transition
                  ${activeCategory === category
                    ? 'bg-[var(--color-alavaco-100)] text-white'
                    : 'bg-[var(--color-avocado-600)] text-amber-900 hover:bg-[var(--color-avocado-500)]'
                  } focus:outline-none focus:ring-2 focus:ring-[var(--color-alavaco-100)]`}
              >
                {category}
              </button>
            ) : (
              <Link
                href={`/produtos?categoria=${encodeURIComponent(category)}`}
                className="block px-4 py-3 bg-[var(--color-avocado-600)] text-white text-sm font-semibold rounded-lg shadow hover:bg-[var(--color-avocado-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-avocado-500)] transition"
              >
                {category}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuCategoria;