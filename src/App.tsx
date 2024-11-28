import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ThreeBackground } from './components/ThreeBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ThreeBackground />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;