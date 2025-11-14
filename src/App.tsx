import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Home } from "./layout/home/Home";
import ProjectsAll from "./layout/projects/ProjectsAll";
import { AboutMePage } from "./layout/about-me/AboutMePage";
import { ContactPage } from "./layout/contact/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<ProjectsAll />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
