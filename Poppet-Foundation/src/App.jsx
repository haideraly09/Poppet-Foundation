// App.js
import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import ImpactStats from './Components/ImpactStats';
import About from './Components/About';
import WaysToHelp from './Components/WaysToHelp';
import StudentStories from './Components/StudentStories';
import Transparency from './Components/Transparency';
import FAQ from './Components/FAQ';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <Hero />
      <ImpactStats />
      <About />
      <WaysToHelp />
      <StudentStories />
      <Transparency />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;