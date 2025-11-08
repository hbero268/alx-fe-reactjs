import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <UserProfile name="Felicien" age="25" bio="I travel and code React!" />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
