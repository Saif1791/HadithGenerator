import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
