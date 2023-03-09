import "./App.css";
import HeaderBar from "./Sections/HeaderBar";
import Footer from "./Sections/Footer";
import { Routes, Route } from "react-router-dom";
import Resume1 from "./page/resume1";
import Resume2 from "./page/resume2";
import Todo from "./page/TodoExp";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/resume1" element={<Resume1 />}></Route>
        <Route path="/resume2" element={<Resume2 />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
