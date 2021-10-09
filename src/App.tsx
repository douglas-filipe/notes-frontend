import { Toaster } from "react-hot-toast";
import GlobalStyle from "./global";
import Signup from "./pages/signup";
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
