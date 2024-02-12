import React from 'react';
import { ThemeToggleContextProvider } from './src/components/Context/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeToggleContextProvider>{element}</ThemeToggleContextProvider>
);
