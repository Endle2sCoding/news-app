import { MainPage } from "@/pages/MainPage";
import { Header } from "@/layoutSections/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
