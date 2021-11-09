import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProductPage } from "./pages/ProductPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/product" component={ProductPage}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;