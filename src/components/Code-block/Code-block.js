// CodeBlock.js
import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";



const CodeBlock = () => {
  const code = 
  `const greet = () => {
  console.log("Hello, I'm Anudeep 👋");
  console.log("Full-Stack Developer | Spring Boot | Angular | AWS");
    };
    greet();
  `;

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setCode(codeSample.slice(0, i));
//       i++;
//       if (i > codeSample.length) clearInterval(interval);
//     }, 30);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="code-editor">
//       <Editor
//         value={code}
//         onValueChange={setCode}
//         highlight={(code) => highlight(code, languages.javascript)}
//         padding={20}
//         style={{
//           fontFamily: '"Fira code", Fira, monospace',
//           fontSize: 14,
//           backgroundColor: "#2d2d2d",
//           color: "#f8f8f2",
//           borderRadius: "12px",
//         }}
//       />
//     </div>
//   );

return (
    <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "100%", background: "#2d2d2d" }}>
      <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
