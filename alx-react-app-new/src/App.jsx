import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

// import React from 'react';
// import Header from './components/Header';
// import UserProfile from './components/UserProfile';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Counter from './components/Counter';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <UserProfile 
//         name="John Traveler" 
//         age={28} 
//         bio="Avid explorer and city enthusiast. Love discovering hidden gems in every city I visit."
//       />
//       <UserProfile 
//         name="Sarah Adventurer" 
//         age={32} 
//         bio="Professional travel blogger with a passion for architecture and local cuisine."
//       />
//       <Counter />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// export default App;

