"use client";

import { useState, useEffect } from "react";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full p-4 bg-orange-600 text-white hover:bg-orange-700 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 z-50 animate-levitate"
          aria-label="Scroll to top"
        >
          <ArrowUpToLine className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
