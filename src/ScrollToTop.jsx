// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Prevent scroll jumping by using a small timeout
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
  
      return () => clearTimeout(timeout);
    }, [pathname]);
  
    return null;
}

export default ScrollToTop;
