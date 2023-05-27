import "./App.css";
import React from "react";
import TodoFeature from "./features/Todo/pages/ListPage/index";
import MemberFeature from "./features/Member/pages";
import ProductFeature from "./features/Product/pages";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import Footer from "./components/Footer";
import HomeDetail from "./features/HomeDetail/pages";
import LoginFeature from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Authentication/protected";
import Account from "./components/Account";
import WalletFeature from "./components/Wallet";

function NavigateToPost() {
  const { postId } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/posts/${postId}`} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Authentication />
          <Header />
          <Routes>
            <Route path="/todo-list" element={<TodoFeature />} />
            <Route path="/products" element={<ProductFeature />} />
            <Route path="/members" element={<MemberFeature />} />
            <Route path="/wallet" element={<WalletFeature />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<HomeDetail />} />
            <Route path="/login" element={<LoginFeature />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/post-list/:postId" element={<NavigateToPost />} />
            <Route path="*" element={NotFound} />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
