import Alert from "./Alert";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textforms from "./Components/Textforms";
import Footer from "./Components/Footer"; 

import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  React.useEffect(() => {
    if (Mode === "dark") {
      document.body.style.backgroundColor = "#042743";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [Mode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message || "",
      type: type || "",
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textforms heading="TextUtils - Word Counter, Character Counter" mode={Mode} />
            </Route>
          </Switch>
        </div>
        <Footer mode={Mode} />
      </Router>
    </>
  );
}


export default App;
