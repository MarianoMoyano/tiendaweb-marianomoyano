import NachBar from "./components/NachBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/dropdown'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Inicio from "./components/Inicio";
import Categoria from "./components/Categoria"

function App() {
  return (
    <Router>
      <NachBar tiendaWebMM = "Thinkgeekfake"/>
      <Routes>
      <Route path="/" element={<Inicio />}  />
      <Route path="/categoria/:id" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App;