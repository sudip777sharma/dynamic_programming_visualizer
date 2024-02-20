import {} from "react";
import "./App.css";
import TreeComponent from "./components/TreeComponent";
import MonacoEditorComponent from "./components/Editor";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-800 p-1 gap-1">
      <div className="w-2/5 h-full rounded-lg">
        {/* <textarea className="w-full h-full bg-slate-700 p-2 rounded-lg outline-none"/> */}
        <MonacoEditorComponent />
      </div>
      <div className="w-3/5 h-full border border-purple-600 rounded-lg">
        <TreeComponent />
      </div>
    </div>
  );
}

export default App;
