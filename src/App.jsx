import {} from "react";
import "./App.css";
import TreeComponent from "./components/TreeComponent";
import MonacoEditorComponent from "./components/Editor";

function App() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center w-screen md:h-screen h-full bg-slate-800 p-1 gap-1">
      <div className="md:w-2/5 w-full h-full rounded-lg">
        {/* <textarea className="w-full h-full bg-slate-700 p-2 rounded-lg outline-none"/> */}
        <MonacoEditorComponent />
      </div>
      <div className="md:w-3/5 w-full h-full border border-purple-600 rounded-lg">
        <TreeComponent />
      </div>
    </div>
  );
}

export default App;
