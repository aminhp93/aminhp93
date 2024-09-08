import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
