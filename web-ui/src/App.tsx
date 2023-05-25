import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Page/MainPage";
import HomePage from "./Page/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainPage />}>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
