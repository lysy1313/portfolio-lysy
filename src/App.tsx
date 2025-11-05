import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { AboutMe } from "./layout/section/aboutme/AboutMe";
import { Contacts } from "./layout/section/contacts/Contacts";
import { Main } from "./layout/section/main/Main";
import { Projects } from "./layout/section/projects/Projects";
import { Skills } from "./layout/section/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
