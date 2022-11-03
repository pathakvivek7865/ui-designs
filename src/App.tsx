import CreditCardPage from "./pages/CreditCardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UiDesignLayout from "./components/UiDesignLayout";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProfilePageHeader from "./pages/ProfilePageHeader";
import PriceCard from "./pages/PriceCard";
import EnterPassword from "./pages/EnterPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/components" element={<UiDesignLayout />}>
          <Route path="credit-card" element={<CreditCardPage />} />
          <Route path="login" element={<Login />} />
          <Route path="price-card" element={<PriceCard />} />
          <Route path="profile-page-header" element={<ProfilePageHeader />} />
          <Route path="enter-password" element={<EnterPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
