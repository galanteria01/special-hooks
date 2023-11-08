import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useTheme = (defaultTheme: Theme = 'light'): { theme: Theme; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as Theme);
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
