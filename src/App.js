import './App.css';
import PopzupInfo from './Components/About';
import AdsList from './Components/AdsList';
import Dashboard from './Components/DashBoard';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import LoginForm from './Components/Login';
import Navbar from './Components/Navbar';
import TopCatagories from './Components/TopCatagories';
import TopLists from './Components/TopLists';
import RegistrationForm from './Components/RegistrationForm';
import ConcernedLists from './Components/ConcernedAds';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-sky-100">
     <Navbar/>
      <Hero/>
    <TopCatagories/>
    <ConcernedLists/>
      <AdsList/>
      <TopLists/>
      <PopzupInfo/>
      <Footer/>
    </div>
  );
}

export default App;
