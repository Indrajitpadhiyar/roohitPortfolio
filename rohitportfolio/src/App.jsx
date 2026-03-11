import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryArc from './components/StoryArc';
import Works from './components/Works';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

// Asset Imports
import heroBg from './assets/hero_bg.png';
import heroChar from './assets/hero_char.png';
import panelsImg from './assets/panels.png';
// import toolsImg from './assets/tools.png'; // Will use elsewhere if needed

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero heroBg={heroBg} heroChar={heroChar} />
        <StoryArc panelsImg={panelsImg} />
        <Works />
        <Contact />
      </main>

      {/* Global Footer Customization */}
      <footer className="py-12 bg-black text-white border-t-4 border-purple-600">
        <div className="container mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-white/40">
            Designed & Developed by Rohit • {new Date().getFullYear()} • No AI was harmed (much).
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
