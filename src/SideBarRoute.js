import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import Newsfeed from "./pages/Newsfeed";
import Sidebar from "./components/Sidebar";
import More from "./pages/More";
import Community from "./pages/Profile";
import {  Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
const SideBarRoute = () =>{
    return(
        <div>
            <Sidebar>
            <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/product" element={<Product />} />
              <Route path="/newsfeed" element={<Newsfeed />} />
              <Route path="/more" element={<More />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              </Routes>
            </Sidebar>
        </div>
    )
}
export default SideBarRoute;
