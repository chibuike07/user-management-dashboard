import Views from "./Views/Views";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user-management-dashboard" element={<Views />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Wrong path you followed!</p>
            </main>
          }
        />
      </Routes>
      ;
    </div>
  );
}

export default App;
