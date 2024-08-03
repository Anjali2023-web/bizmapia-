import './App.css';
import { Routes, Route } from 'react-router-dom';
import PopzupInfo from './Components/About';
import AdsList from './Components/AdsList';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import LoginForm from './Components/Login';
import Navbar from './Components/Navbar';
import TopCatagories from './Components/TopCatagories';
import TopLists from './Components/TopLists';
import RegistrationForm from './Components/RegistrationForm';
import ConcernedLists from './Components/ConcernedAds';
import Dashboardd from './Components/DashBoard';
import PaswordUpdateForm from './Components/password_update';
import ProfileUpdateForm from './Components/profile_update';
import FloatingButton from './Components/FloatingActionButton';
import Logout from './Components/Logout';


function App() {
  const handleFloatingButtonClick = () => {
    // Handle the floating button click action here
    console.log('Floating button clicked!');
    // You can add navigation or open a modal here
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 to-sky-100">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TopCatagories />
            <ConcernedLists />
            <AdsList />
            <TopLists />
            <PopzupInfo />
            <Footer />
          </>
        } />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboardd/>} />
        <Route path="/resetpwd" element={<PaswordUpdateForm/>} />
        <Route path="/profile_update" element={<ProfileUpdateForm/> } />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      
      {/* Add the FloatingButton component here */}
      <FloatingButton onClick={handleFloatingButtonClick} />
    </div>
  );
}

export default App;