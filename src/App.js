import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Productos />}></Route>
            <Route exact path="/productos/nuevo" element={<NuevoProducto />}></Route>
            <Route exact path="/productos/editar/:id" element={<EditarProducto />}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
