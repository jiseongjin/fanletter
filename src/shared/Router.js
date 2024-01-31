import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import DetailFanletter from "pages/DetailFanletter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<DetailFanletter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
