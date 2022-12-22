import "./App.css";
import { FaBeer } from "react-icons/fa";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="app bg-dark-gray h-screen flex text-white">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
