import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/Login';
import Dashboardd from './Components/DashBoard';
import PaswordUpdateForm from './Components/password_update';
import ProfileUpdateForm from './Components/profile_update';
import Logout from './Components/Logout';
import PricingTable from './Components/Plans';
import User from './Components/User';
import HomePage from './Components/HomePage'; // Import the new HomePage component
import TopLists from './Components/TopLists';
import PaymentPage from './Components/PaymentPage';
import SubscriptionModal from './Components/SubscriptionModal';
import ComingSoonPage from './Components/soon';
import Offers from './Components/Offers';
import Offerss from './Components/Offerss';
import AddnewListing from'./Components/AddnewLIsting';
import TopCatagories from './Components/TopCatagories';



function App() {
  const handleFloatingButtonClick = () => {
    console.log('Floating button clicked!');
  };

  return (
    <Routes>
      
      <Route path="/" element={<HomePage handleFloatingButtonClick={handleFloatingButtonClick} />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboardd />} />
      <Route path="/resetpwd" element={<PaswordUpdateForm />} />
      <Route path="/profile_update" element={<ProfileUpdateForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/home" element={<HomePage handleFloatingButtonClick={handleFloatingButtonClick} />} /> {/* Link /home to HomePage */}
      <Route path="/plans" element={<PricingTable />} />
      <Route path="/listings" element={<TopLists />} />
      <Route path="/user" element={<User />} />
      <Route path="/pay" element={<PaymentPage />} />
      <Route path="/offer" element={<SubscriptionModal />} />
      <Route path="/soon" element={<ComingSoonPage />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/offerss" element={<Offerss />} />
      <Route path="/addlist" element={<AddnewListing />} />
      <Route path="/cat" element={<TopCatagories />} />
    
    </Routes>
  );
}

export default App;
