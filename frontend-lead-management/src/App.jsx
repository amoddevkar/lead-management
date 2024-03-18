import { useState } from "react";
import "./App.css";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

function App() {
  const [appState, setAppSate] = useState(true);
  const [class1, setClass1] = useState("btn btn-primary active");
  const [class2, setClass2] = useState("btn btn-primary");
  return (
    <div className="container">
      <div class="btn-group mt-3 mb-2" role="group">
        <button
          type="button"
          onClick={() => {
            setAppSate(true);
            setClass1("btn btn-primary active");
            setClass2("btn btn-primary ");
            e.currentTarget.blur();
          }}
          className={class1}
        >
          Lead Form
        </button>

        <button
          type="button"
          onClick={() => {
            setAppSate(false);
            setClass2("btn btn-primary active");
            setClass1("btn btn-primary");
            e.currentTarget.blur();
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
