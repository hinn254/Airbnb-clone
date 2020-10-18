import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </Router>

      {/* Home */}
      {/* Header */}
      {/* Banner */}
      {/* search */}
      {/* Cards */}
      {/* FOoter */}
      {/* Search Page */}
      {/* Header */}
      {/* ... */}
    </div>
  );
}

export default App;
