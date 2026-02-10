import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Home } from "./layout/home/Home";
import ProjectsAll from "./layout/projects/ProjectsAll";
import { AboutMePage } from "./layout/about-me/AboutMePage";
import { ContactPage } from "./layout/contact/ContactPage";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio-lysy/" element={<Home />} />
        <Route path="/portfolio-lysy/works" element={<ProjectsAll />} />
        <Route path="/portfolio-lysy/about-me" element={<AboutMePage />} />
        <Route path="/portfolio-lysy/contacts" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to={"/portfolio-lysy/"} />} />
      </Routes>
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
