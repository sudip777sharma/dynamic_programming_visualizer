import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useCode } from "../contexts/EditorContext";

const MonacoEditorComponent = () => {
  const [language, setLanguage] = useState("javascript");
  const [sampleCode, setSampleCode] = useState({
    select_sample_code: `/* Before running the code for visualization, you need to modify the function as shown below. Instead of directly returning the result, it should return an object that contains the result and additional information. This allows us to visualize the execution of the function.

Example 1:
Before:

function fn(n) {
    const memo = {};
    function fib(n) {
        if (n <= 1) {
            return n;
        }
        if (n in memo) {
            return memo[n];
        }
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
    return fib(n);
}
fn(6);
After:

function fn(n) {
    const memo = {};
    function fib(n) {
      if (n <= 1) {
        arguments.return_value = n;
        return {attributes: arguments, children: null};
      }
      if (n in memo) {
        arguments.return_value = memo[n];
        return {attributes: arguments, children: null};
      }
      let ans1 = fib(n - 1);
      let ans2 = fib(n - 2);
      let ans = ans1.attributes.return_value + ans2.attributes.return_value;
      memo[n] = ans;
      arguments.return_value = ans;
      return {attributes: arguments, children: [ans1, ans2]};
    }
    return fib(n);
}
fn(6);

Example 2: 

before:

// run code to visualize..
    function LCSRec(X, Y, m, n) {
    const memo = {};
    function LCS(i, j, m, n) {
        if (i === 0 || j === 0) {
      return 0;
    }

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (s1[i - 1] === s2[j - 1]) {
      memo[i][j] = 1 + LCS(i - 1, j - 1);
    } else {
      memo[i][j] = Math.max(LCS(i, j - 1), LCS(i - 1, j));
    }

    return memo[i][j];
    }

    return LCS(0, 0, m, n);
}

const X = "AGTB";
const Y = "GTXAB";
const m = X.length;
const n = Y.length;

LCSRec(X, Y, m, n);


After:
// run code to visualize..
    function LCSRec(X, Y, m, n) {
    const memo = {};
    function LCS(i, j, m, n) {
        if (i >= m || j >= n) {
            arguments.return_value = 0;
            return {attributes: arguments, children: []};
        }

        if (memo[i + "_" + j]) {
            arguments.return_value = memo[i + "_" + j];
            return {attributes: arguments, children: []};
        }

        if (X[i] === Y[j]) {
            let ans = LCS(i + 1, j + 1, m, n);
            memo[i + "_" + j] = ans.attributes.return_value + 1;
            arguments.return_value = ans.attributes.return_value + 1;
            return {attributes: arguments, children: [ans]};
        } else {
            let ans1 = LCS(i + 1, j, m, n);
            let ans2 = LCS(i, j + 1, m, n);
            let ans = Math.max(ans1.attributes.return_value, ans2.attributes.return_value);
            memo[i + "_" + j] = ans;
            arguments.return_value = ans;
            return {attributes: arguments, children: [ans1, ans2]};
        }
    }

    return LCS(0, 0, m, n);
}

const X = "AGTB";
const Y = "GTXAB";
const m = X.length;
const n = Y.length;

LCSRec(X, Y, m, n);
*/
`,
    fibonacci: `// run code to visualize..
    function fn(n) {
    const memo = {};
    function fib(n) {
      if (n <= 1) {
        // return n;
        arguments.return_value = n;
        return {attributes: arguments, children: null};
      }
      if (n in memo) {
        // return memo[n];
        arguments.return_value = memo[n];
        return {attributes: arguments, children: null};
      }
      let ans1 = fib(n - 1);
      let ans2 = fib(n - 2);
      let ans = ans1.attributes.return_value + ans2.attributes.return_value;
      memo[n] = ans;
      // return memo[n];
      arguments.return_value = ans;
      return {attributes: arguments, children: [ans1, ans2]};
    }
    return fib(n);
}
fn(6);`,
    LCS: `// run code to visualize..
    function LCSRec(X, Y, m, n) {
    const memo = {};
    function LCS(i, j, m, n) {
        if (i >= m || j >= n) {
            arguments.return_value = 0;
            return {attributes: arguments, children: []};
        }

        if (memo[i + "_" + j]) {
            arguments.return_value = memo[i + "_" + j];
            return {attributes: arguments, children: []};
        }

        if (X[i] === Y[j]) {
            let ans = LCS(i + 1, j + 1, m, n);
            memo[i + "_" + j] = ans.attributes.return_value + 1;
            arguments.return_value = ans.attributes.return_value + 1;
            return {attributes: arguments, children: [ans]};
        } else {
            let ans1 = LCS(i + 1, j, m, n);
            let ans2 = LCS(i, j + 1, m, n);
            let ans = Math.max(ans1.attributes.return_value, ans2.attributes.return_value);
            memo[i + "_" + j] = ans;
            arguments.return_value = ans;
            return {attributes: arguments, children: [ans1, ans2]};
        }
    }

    return LCS(0, 0, m, n);
}

const X = "AGTB";
const Y = "GTXAB";
const m = X.length;
const n = Y.length;

LCSRec(X, Y, m, n);
`,
    custom: `/* Before running the code for visualization, you need to modify the function as shown below. Instead of directly returning the result, it should return an object that contains the result and additional information. This allows us to visualize the execution of the function.

Example 1:
Before:

function fn(n) {
    const memo = {};
    function fib(n) {
        if (n <= 1) {
            return n;
        }
        if (n in memo) {
            return memo[n];
        }
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
    return fib(n);
}
fn(6);
After:

function fn(n) {
    const memo = {};
    function fib(n) {
      if (n <= 1) {
        arguments.return_value = n;
        return {attributes: arguments, children: null};
      }
      if (n in memo) {
        arguments.return_value = memo[n];
        return {attributes: arguments, children: null};
      }
      let ans1 = fib(n - 1);
      let ans2 = fib(n - 2);
      let ans = ans1.attributes.return_value + ans2.attributes.return_value;
      memo[n] = ans;
      arguments.return_value = ans;
      return {attributes: arguments, children: [ans1, ans2]};
    }
    return fib(n);
}
fn(6);

Example 2: 

before:

// run code to visualize..
    function LCSRec(X, Y, m, n) {
    const memo = {};
    function LCS(i, j, m, n) {
        if (i === 0 || j === 0) {
      return 0;
    }

    if (memo[i][j] !== -1) {
      return memo[i][j];
    }

    if (s1[i - 1] === s2[j - 1]) {
      memo[i][j] = 1 + LCS(i - 1, j - 1);
    } else {
      memo[i][j] = Math.max(LCS(i, j - 1), LCS(i - 1, j));
    }

    return memo[i][j];
    }

    return LCS(0, 0, m, n);
}

const X = "AGTB";
const Y = "GTXAB";
const m = X.length;
const n = Y.length;

LCSRec(X, Y, m, n);


After:
// run code to visualize..
    function LCSRec(X, Y, m, n) {
    const memo = {};
    function LCS(i, j, m, n) {
        if (i >= m || j >= n) {
            arguments.return_value = 0;
            return {attributes: arguments, children: []};
        }

        if (memo[i + "_" + j]) {
            arguments.return_value = memo[i + "_" + j];
            return {attributes: arguments, children: []};
        }

        if (X[i] === Y[j]) {
            let ans = LCS(i + 1, j + 1, m, n);
            memo[i + "_" + j] = ans.attributes.return_value + 1;
            arguments.return_value = ans.attributes.return_value + 1;
            return {attributes: arguments, children: [ans]};
        } else {
            let ans1 = LCS(i + 1, j, m, n);
            let ans2 = LCS(i, j + 1, m, n);
            let ans = Math.max(ans1.attributes.return_value, ans2.attributes.return_value);
            memo[i + "_" + j] = ans;
            arguments.return_value = ans;
            return {attributes: arguments, children: [ans1, ans2]};
        }
    }

    return LCS(0, 0, m, n);
}

const X = "AGTB";
const Y = "GTXAB";
const m = X.length;
const n = Y.length;

LCSRec(X, Y, m, n);
*/


write you code modified here!
`,
  });

  const [codeText, setCodeText] = useState("");
  const [problemName, setProblemName] = useState("");
  const { updateCode } = useCode();

  const handleEditorChange = (newValue) => {
    setCodeText(newValue);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleRun = () => {
    updateCode(codeText);
  };
  return (
    <div>
      <div className="flex gap-2">
        <select
          className="outline-none"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
        </select>
        <select
          className="outline-none"
          value={problemName}
          onChange={(e) => {
            setCodeText(sampleCode[e.target.value]);
            setProblemName(e.target.value);
          }}
        >
          {Object.entries(sampleCode).map(([key]) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
        <button
          onClick={handleRun}
          className="bg-green-700 text-white px-3 rounded-lg hover:bg-green-500 active:bg-blue-700"
        >
          run code
        </button>
      </div>
      <Editor
        language={language}
        theme="vs-dark"
        value={codeText}
        onChange={handleEditorChange}
        options={{
          wordWrap: "on",
          minimap: { enabled: true },
        }}
        height="94vh"
      />
    </div>
  );
};

export default MonacoEditorComponent;
