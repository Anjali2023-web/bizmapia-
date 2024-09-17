import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import LoginForm from "./Components/Login";
import Dashboardd from "./Components/DashBoard";
import PaswordUpdateForm from "./Components/password_update";
import ProfileUpdateForm from "./Components/profile_update";
import Logout from "./Components/Logout";
import PricingTable from "./Components/Plans";
import User from "./Components/User";
import HomePage from "./Components/HomePage";
import TopLists from "./Components/TopLists";
import PaymentPage from "./Components/PaymentPage";
import SubscriptionModal from "./Components/SubscriptionModal";
import ComingSoonPage from "./Components/soon";
import Offers from "./Components/Offers";
import Offerss from "./Components/Offerss";
import AddnewListing from "./Components/AddnewLIsting";
import TopCatagories from "./Components/TopCatagories";
import ProtectedRoute from "./Components/PrivateRoute";
import { useAuth } from "./context/AuthContext";
import VideoUploadPage from "./Components/VideoUploadPage";
import AdsUploadPage from "./Components/AdsUploadPage";
import CategoryForm from "./Components/catreq";
import Shop from "./Components/Shop";

const App = () => {
  function handleFloatingButtonClick() {}
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent back navigation to login/register if authenticated
  useEffect(() => {
    if (
      isAuthenticated &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, location, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage handleFloatingButtonClick={handleFloatingButtonClick} />
        }
      />
      <Route
        path="/register"
        element={
          !isAuthenticated ? (
            <RegistrationForm />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
      <Route
        path="/login"
        element={
          !isAuthenticated ? (
            <LoginForm />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            element={<Dashboardd />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
<Route
        path="/resetpwd"
        element={
          <ProtectedRoute
            element={<PaswordUpdateForm />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      
       
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/home"
        element={
          <HomePage handleFloatingButtonClick={handleFloatingButtonClick} />
        }
      />
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
      <Route path="/video" element={<VideoUploadPage />} />
      <Route path="/upload" element={<AdsUploadPage />} />
      <Route path="/reqcat" element={<CategoryForm />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile_update" element={<ProfileUpdateForm />} />
      
    </Routes>
  );
};

export default App;