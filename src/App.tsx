import { Toaster } from "react-hot-toast";
import GlobalStyle from "./global";
import { Routes } from "./routes";

const App = () => {
  return (
    <>
      <Toaster/>
      <Routes/>
      <GlobalStyle />
    </>
  );
}

export default App;
