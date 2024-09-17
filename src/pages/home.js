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

const FourColumnLayout = () =>

  
    <div className="container-selection">
      <div className="column guru-premium">
        <span className="label">GiftGuru Premium</span>
      </div>
      <div className="column chat-bot">
        <span className="label">Ask GURU</span>
      </div>
      <div className="column marketplace">
        <span className="label">Market place</span>
      </div>
      <div className="column custom-gift">
        <span className="label">Custom Gift</span>
      </div>
    </div>

const MainContent = () => 
    <main className="content">
        Main Content
        <FourColumnLayout />
    </main>;

const Footer = () => 
    <footer className="footer">
        Footer 
        {/* Copyright notice
        Privacy policy link
        Terms of service link
        Contact information
        Social media links
        Site map or main navigation links
        Company address
        Newsletter signup form
        "Back to top" button
        Logo (usually smaller than in the header) */}
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