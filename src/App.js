import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import { Toggle } from "./Toggle";

const App = () => {
  const themeHook = useState("peru");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        {/*           <header>
            <Link to="/">Labyrinth Lords DnD Tool</Link>
          </header> */}
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>{" "}
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
