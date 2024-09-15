import React from 'react';
import './App.css';  // Make sure to import the CSS file

const Header = () => 
    <header className="header">
        Header
    </header>;

const Sidebar = () => 
    <aside className="sidebar">
        Sidebar
    </aside>;
    
const MainContent = () => <main className="content">Main Content</main>;
const Footer = () => <footer className="footer">Footer</footer>;

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;