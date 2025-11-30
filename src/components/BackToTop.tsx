import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 z-40 p-4 apple-glass rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 border border-gray-200/50" aria-label="Back to top">
      <ArrowUp className="w-5 h-5 text-gray-900" />
    </button>
  ) : null;
};

export default BackToTop;
