import "./App.css";
import readmeContent from "../README.md?raw";
import Markdown from "react-markdown";

function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "left",
      }}
    >
      <Markdown>{readmeContent}</Markdown>
    </div>
  );
}

export default App;
