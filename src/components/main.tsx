import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight/FunctionalTrafficLight.tsx";
import { ClassTrafficLight } from "./ClassTrafficLight/ClassTrafficLight.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main>
      <h1>Traffic light App</h1>
      <div className="container">
        <div className="left">
          <FunctionalTrafficLight />
        </div>
        <div className="right">
          <ClassTrafficLight />
        </div>
      </div>
    </main>
  </React.StrictMode>
);
