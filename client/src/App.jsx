import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Property from "./pages/Property/Property";
import Contact from "./components/Contact/contact";
import ContactForm from "./components/ContactForm/ContactForm";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favorites from "./components/Favourites/Favourites";

import Login from "./pages/Login/Login";
import UploadProperty from "./pages/UploadProperty/UploadProperty";
import Leads from "./pages/Leads/Leads";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";


function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                
                <Route path="/bookings" element={<Bookings />} />
                
                <Route path="/favourites" element={<Favorites />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/contact-form" element={<ContactForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
            <PrivateRoute>
              
            </PrivateRoute>
          } />
          <Route path="/upload-property" element={
            <PrivateRoute>
              <UploadProperty />
            </PrivateRoute>
          } />
          <Route path="/leads" element={
            <PrivateRoute>
              <Leads />
            </PrivateRoute>
          } />
          
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
