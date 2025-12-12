import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="wrapper">
      <div className="card">
        <h2 className="text">
          {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h2>

        <button
          className="btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
