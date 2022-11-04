import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login-Page";
import { RegisterUserPage } from "./pages/RegisterUser-Page";
import {AboutUs} from "./pages/AboutUs"
import { ConfirmEmailPage } from "./pages/ConfirmEmail";
import { RecoverPassword } from "./pages/RecoverPassword";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register-user" element={<RegisterUserPage />} />
      <Route path="/email-validated" element={<ConfirmEmailPage />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="/aboutUs" element={<AboutUs/>}/>
    </Routes>
  );
};

