// CodeContext.js
import { createContext, useContext, useState } from "react";

const CodeContext = createContext();

export const useCode = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("");

  const updateCode = (newCode) => {
    setCode(newCode);
  };

  return (
    <CodeContext.Provider value={{ code, updateCode }}>
      {children}
    </CodeContext.Provider>
  );
};
