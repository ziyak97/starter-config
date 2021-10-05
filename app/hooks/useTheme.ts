import { useEffect } from 'react';

import { selectTheme, Theme, toggleTheme } from 'store/slices/AppSlice';
import { store } from 'store/store';

const useTheme = (): void => {
  const theme = selectTheme(store.getState());

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | undefined;
    if (storedTheme) store.dispatch(toggleTheme(storedTheme));
  }, []);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.body.classList.remove(Theme.Light);
      document.body.classList.add(Theme.Dark);
      localStorage.setItem('theme', Theme.Dark);
    } else if (theme === Theme.Light) {
      document.body.classList.remove(Theme.Dark);
      document.body.classList.add(Theme.Light);
      localStorage.setItem('theme', Theme.Light);
    }
  }, [theme]);
};

export default useTheme;
