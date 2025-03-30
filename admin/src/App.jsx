import React, { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import AddProperties from "./pages/AddProperties";
import AddBlogs from "./pages/AddBlogs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Request from "./pages/Request";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import { lookInSession } from "./common/session";
import EditProfile from "./pages/EditProfile";
import { Toaster } from "react-hot-toast";
import Property from "./pages/Property";

export const UserContext = createContext({});

const App = () => {
  const [userAuth, setUserAuth] = useState({ access_token: null });

  useEffect(() => {
    let userInSession = lookInSession("user");
    if (userInSession) {
      setUserAuth(JSON.parse(userInSession));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Toaster />
      <div className="h-screen overflow-hidden flex flex-col clashdisplay">
        {userAuth.access_token ? (
          <div>
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <div className="w-[82%] h-[85vh] overflow-auto my-8 pb-10 text-gray-600 text-base">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/profile" element={<EditProfile />} />
                  <Route path="/properties" element={<Properties />} />
                  <Route path="/properties/:propertyId" element={<Property />} />
                  <Route path="/properties/add-property" element={<AddProperties />} />
                  <Route path="/properties/edit-property/:propertyId" element={<AddProperties />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/blog/:blogId" element={<Blog />} />
                  <Route path="/blogs/add-blog" element={<AddBlogs />} />
                  <Route path="/blogs/edit-blog/:blogId" element={<AddBlogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/post-property-request" element={<Request />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </UserContext.Provider>
  );
};

export default App;
