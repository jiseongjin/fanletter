import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import fakeData from "assets/fakeData.json";
import DetailFanletter from "pages/DetailFanletter";
import { useState } from "react";
import { FanLettersContext } from "context/FanLettersContext";

const Router = () => {
  //팬레터 리스트
  const [fanLetters, setFanLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <FanLettersContext.Provider
        value={{
          fanLetters,
          setFanLetters,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<DetailFanletter />} />
        </Routes>
      </FanLettersContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
