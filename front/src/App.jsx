import { Route, Routes } from "react-router-dom";
import RegisterContact from "./pages/Register";
import SearchContact from "./pages/Search/index.";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterContact />} />
      <Route path="/pesquisa" element={<SearchContact />} />
    </Routes>
  );
}

export default App;
