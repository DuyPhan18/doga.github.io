import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Blog from "./pages/blog/Blog";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Register from "./pages/Register/Register";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route  path="/product-details/:productId"  element={<ProductDetails/>} />
            <Route  path="/dashboard"  element={<Dashboard/>} />
            <Route  path="/blog"  element={<Blog/>} />
            <Route  path="/login"  element={<Login/>} />
            <Route  path="/register"  element={<Register/>} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
