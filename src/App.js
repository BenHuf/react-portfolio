import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import './style.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigation/> }>
            <Route index element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="resume" element={<Resume/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={ <Navigate replace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>

  );
}

export default App;
