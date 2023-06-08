import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import token from "../../src/components/Login/token.json"
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };

  //add state category
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])
  const [productMe, setProductMe] = useState([])
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", user);
    });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://2hand.monoinfinity.net/api/v1.0/admin/product",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token?.token}`,
            },
          }
        );

        const responseCate = await axios.get(
          "https://2hand.monoinfinity.net/api/v1.0/category/all",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token?.token}`,
            },
          }
        );

        const data = response?.data?.data;
        const dataCate = responseCate?.data;

        setProducts(data);
        setCategory(dataCate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, category, setCategory, products, setProducts, productMe, setProductMe }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
