import { useState } from "react";
import "./App.css";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

function App() {
  const [appState, setAppSate] = useState(true);
  const [class1, setClass1] = useState("unfocus button act btn");
  const [class2, setClass2] = useState("unfocus button btn");
  return (
    <div className="container">
      <h4 className="mt-2" style={{ textAlign: "center" }}>
        Lead Management
      </h4>
      <div
        class="btn-group mt-3 mb-2 d-flex justify-content-center"
        style={{ textAlign: "center" }}
        role="group"
      >
        <button
          type="button"
          onClick={() => {
            setAppSate(true);
            setClass1("unfocus button act btn");
            setClass2("unfocus button btn");
          }}
          className={class1}
        >
          Lead Form
        </button>

        <button
          type="button"
          onClick={() => {
            setAppSate(false);
            setClass2("unfocus button act btn");
            setClass1("unfocus button btn");
          }}
          class={class2}
        >
          Lead List
        </button>
      </div>

      {appState == true ? <LeadForm /> : <LeadList />}
    </div>
  );
}

export default App;
