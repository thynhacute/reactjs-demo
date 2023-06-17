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
import SignUpFeature from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Authentication/protected";
import Account from "./components/Account";
import WalletFeature from "./components/Wallet";
import ArticleFeature from "./features/Article/pages";
import ProductArticle from "./components/ProductArticle";
import Contact from "./components/Contact";
import MemberTeam from "./components/Member";
import MomoFeature from "./components/Wallet/WalletOption/Momo";
import VNPayFeature from "./components/Wallet/WalletOption/VNPay";
import ZaloPayFeature from "./components/Wallet/WalletOption/ZaloPay";
import BankingFeature from "./components/Wallet/WalletOption/Banking";
import LoginSuccess from "./components/Login/LoginSuccess";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SendTransaction from "./components/SendTransaction";

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
            <Route path="/wallet" element={<WalletFeature />} />
            <Route path="wallet/momo" element={<MomoFeature />} />
            <Route path="wallet/vnpay" element={<VNPayFeature />} />
            <Route path="wallet/zalopay" element={<ZaloPayFeature />} />
            <Route path="wallet/banking" element={<BankingFeature />} />
            <Route path="/members" element={<MemberTeam />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/send-transaction" element={<SendTransaction />} />
            <Route path="/" element={<HomeDetail />} />
            <Route path="/login" element={<LoginFeature />} />
            <Route path="/signup" element={<SignUpFeature />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            {/* add login success */}
            <Route path="/login-success" element={<LoginSuccess />} />

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
            <Route
              path="/my-product"
              element={<PrivateRoute Component={ArticleFeature} />}
            />
            <Route
              path="/add-product"
              element={<PrivateRoute Component={ProductArticle} />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
