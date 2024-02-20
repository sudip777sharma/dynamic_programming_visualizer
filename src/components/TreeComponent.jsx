import { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import { useCode } from "../contexts/EditorContext";

const defaultTreeData = {
  children: [
    {
      name: "TreeNode",
      attributes: {
        details: "",
      },
      children: [],
    },
  ],
};

const TreeComponent = () => {
  const { code } = useCode();
  const [treeData, setTreeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (code) {
      try {
        const result = eval(code);
        setTreeData(result);
        setError(null);
      } catch (err) {
        console.error("Error evaluating code:", err);
        setError(err.message);
      }
    } else {
      setTreeData(defaultTreeData);
      setError(null);
    }
  }, [code]);

  if (error) {
    return <div className="text-xl text-red-500 p-5">Error: {error}</div>;
  }

  if (!treeData) {
    return (
      <h1 className="text-xl text-yellow-500 p-5">
        message: something went wrong!
      </h1>
    );
  }
  
  return (
    <Tree data={treeData} orientation="vertical" translate={{ x: 20, y: 20 }} />
  );
};

export default TreeComponent;
