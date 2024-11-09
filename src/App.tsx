import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import ItemPage from "./ItemPage.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/item-page" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
