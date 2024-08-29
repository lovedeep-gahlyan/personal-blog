import { Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/navbar";
import Footer from "./components/footer";
import LandingPage from "./pages/landing";
import WritePage from "./pages/writePage";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import BlogPost from "./components/BlogPost";
import "./globals.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogPost" element={<BlogPost />} />
          <Route path="/writePost" element={<WritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
