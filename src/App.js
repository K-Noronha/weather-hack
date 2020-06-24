import React, { useContext } from "react";

import "./Styles.scss";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./components/Home";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? null : "dark"}`}>
      <Home />
    </div>
  );
}

export default App;
