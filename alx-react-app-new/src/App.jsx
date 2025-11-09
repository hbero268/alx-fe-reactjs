import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />
      <UserProfile 
        name="John Traveler" 
        age={28} 
        bio="Avid explorer and city enthusiast. Love discovering hidden gems in every city I visit."
      />
      <UserProfile 
        name="Sarah Adventurer" 
        age={32} 
        bio="Professional travel blogger with a passion for architecture and local cuisine."
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserContext from "./UserContext";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import MainContent from "./components/MainContent";
// import UserProfile from "./components/UserProfile";
// import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   const user = {
//     name: "Felicien",
//     age: 25,
//     bio: "I love coding React apps!",
//   };

//   return (
//     <UserContext.Provider value={user}>
//       <Router>
//         <Navbar />
//         <Header />
//         <UserProfile />
//         <MainContent />
//         <Counter />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <Footer />
//       </Router>
//     </UserContext.Provider>
//   );
// }

// export default App;
