import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { loginUserActionCreator } from "./features/users/slices/userSlice/userSlice";
import fetchToken from "./utils/auth/auth";
import DetailContactPage from "./pages/DetailContactPage/DetailContactPage";
import CreateContact from "./components/CreateContact/CreateContact";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import UpdateContactPage from "./pages/UpdateContactPage/UpdateContactPage";

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  useNavigate();

  if (token) {
    const user = fetchToken(token);
    dispatch(loginUserActionCreator(user));
  }

  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Navigate to="/contacts" />} />

        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contact/:id" element={<DetailContactPage />} />
        <Route path="/update/:id" element={<UpdateContactPage />} />
        <Route path="/create/" element={<CreateContact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
