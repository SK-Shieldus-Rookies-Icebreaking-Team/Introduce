import React from 'react';
import TeamMemberList from './components/TeamMemberList';
import OurToolkit from './components/OurToolkit';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="gpu-fan-header"></div> {/* Header GPU Fan */}
        <h1>Team 1: The GPU</h1>
      </header>
      <main>
        <TeamMemberList />
        <OurToolkit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
