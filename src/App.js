import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import Newsfeed from "./pages/Newsfeed";
import Sidebar from "./components/Sidebar";
import More from "./pages/More";
import Community from "./pages/Community";
function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/more" element={<More />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
