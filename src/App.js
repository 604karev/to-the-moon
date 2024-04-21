import "./styles/global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
