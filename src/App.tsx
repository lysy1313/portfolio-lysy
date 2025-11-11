import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Home } from "./layout/home/Home";
import ProjectsAll from "./layout/projects/ProjectsAll";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<ProjectsAll />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
