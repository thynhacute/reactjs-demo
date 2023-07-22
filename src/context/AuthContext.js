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
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
    localStorage.clear();
    window.location.reload();
  };

  //add state category
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [productMe, setProductMe] = useState([]);
  const [isPendingUpdated, setIsPendingUpdated] = useState(null);
  const [userProfile, setUserProfile] = useState([]);
  const [priceUser, setPriceUser] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", user);
    });
    const fetchData = async () => {
      try {
        const accessToken = JSON.parse(localStorage.getItem("access_token"));
        if (accessToken) {
          const responseProfile = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/users/me",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
            }
          );
          setUserProfile(responseProfile?.data);
          const responsePriceUser = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/wallet/me",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
            }
          );
          // setPriceUser(responsePriceUser?.data);
          // const response = await axios.get(
          //   "https://2hand.monoinfinity.net/api/v1.0/admin/product",
          //   {
          //     headers: {
          //       "Content-Type": "application/json",
          //       Authorization: `Bearer ${accessToken?.token}`,
          //     },
          //   }
          // );
          setPriceUser(responsePriceUser?.data);
          const response = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/product/post?pageSize=1000",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
              params: {
                // page: 0,
                // pageSize: 1000,
                orderBy: "createdAt",
                // order: "ASC",
                // isShowInactive: "fasle",
                // name: "",
                // minPrice: 0,
                // maxPrice: 0,
                city: "",
                status: "POST",
              },
            }
          );
          const responseCate = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/category/all",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
            }
          );

          const data = response?.data?.data;
          const dataCate = responseCate?.data;

          setProducts(data);
          setCategory(dataCate);
        } else {
          console.log("Access token not found");
          const response = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/product/post?pageSize=1000",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
              params: {
                // page: 0,
                // pageSize: 1000,
                orderBy: "createdAt",
                // order: "ASC",
                // isShowInactive: "fasle",
                // name: "",
                // minPrice: 0,
                // maxPrice: 0,
                city: "",
                status: "POST",
              },
            }
          );
          const responseCate = await axios.get(
            "https://2hand.monoinfinity.net/api/v1.0/category/all",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken?.token}`,
              },
            }
          );

          const data = response?.data?.data;
          const dataCate = responseCate?.data;

          setProducts(data);
          setCategory(dataCate);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      unsubscribe();
    };
  }, [isPendingUpdated]);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        category,
        setCategory,
        products,
        setProducts,
        productMe,
        setProductMe,
        setIsPendingUpdated,
        isPendingUpdated,
        userProfile,
        setUserProfile,
        priceUser,
        setPriceUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
