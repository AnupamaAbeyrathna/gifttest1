import React from 'react';
import './home.css';  //
import logo from '../Images/Logo/logo5.png';

const Header = () => 
<header className="header">
  <div className="logo"><img src={logo} className="App-logo" alt="Company logo" /></div>
  <nav className="nav-tabs">
    <button>Home</button>
    <button>About Us</button>
    <button>Contact</button>
    <button>News</button>
  </nav>
  <button className="sign-in">Sign In</button>
</header>;

const MainContent = () => 
    <main className="content">
        Main Content
    </main>;

const Footer = () => 
    <footer className="footer">
        Footer
        </footer>;

const Home = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;