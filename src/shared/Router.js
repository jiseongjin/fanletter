import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import fakeData from "assets/fakeData.json";
import DetailFanletter from "pages/DetailFanletter";
import { useState } from "react";

const Router = () => {
  //팬레터 리스트
  const [fanLetters, setFanLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home fanLetters={fanLetters} setFanLetters={setFanLetters} />
          }
        />
        <Route
          path="detail/:id"
          element={
            <DetailFanletter
              fanLetters={fanLetters}
              setFanLetters={setFanLetters}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
