import React from 'react';
import NavBar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <QuoteCard 
      character="Nelson Muntz"
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      quote="In theory, Comunisn works! In theory."
      />
    </div>
  );
}



export default App;
