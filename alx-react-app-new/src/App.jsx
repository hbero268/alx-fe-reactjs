import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const user = {
    name: "Felicien",
    age: 25,
    bio: "I love coding React apps!",
  };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar />
        <Header />
        <UserProfile />
        <MainContent />
        <Counter />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
