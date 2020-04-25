import React, { useState } from "react";
import { Button, Breadcrumb, ButtonGroup } from "react-bootstrap";
//import { ReactComponent as ReactIcon } from "./assets/original.svg"; importar imgs
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);
  const llave = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
  };
  return (
    <div className="App">
      <Router>
        <ButtonGroup aria-label="Basic example">
          <Link to="/">
            <Button variant="secondary">Inicio</Button>
          </Link>
          <Link to="/quiensoy">
            <Button variant="secondary">Quien soy</Button>
          </Link>
          <Link to="/contacto">
            <Button variant="secondary">Contacto</Button>
          </Link>
        </ButtonGroup>

        <Switch>
          <Route path="/quiensoy">
            <QuienSoy />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </Router>
      <br />
      <h1>EL auto esta: {stateCar ? "Encendido" : "Apagado"}</h1>
      <h2>Clicks dados : {contar} en total</h2>
      <Button variant="success" onClick={llave}>
        Encender/Apagar
      </Button>
    </div>
  );
}

export default App;
