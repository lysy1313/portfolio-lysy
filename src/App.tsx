import "./App.css";
import { Header } from "./layout/header/Header";
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
    </div>
  );
}

export default App;
