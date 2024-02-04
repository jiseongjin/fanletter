import {
  BoxButton,
  Detail,
  DetailBoxButtons,
  DetailIveName,
  DetailMain,
  ImgUserName,
  LetterDetailBox,
  LetterUser,
  MoveHomeButton,
  UserImg,
} from "components/Styled";
import { FanLettersContext } from "context/FanLettersContext";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DetailFanletter() {
  const contextData = useContext(FanLettersContext);

  const navigaete = useNavigate();
  const location = useLocation();
  const foundData = location.state.item;

  // console.log(foundData);

  const [onFix, setOnFix] = useState(true);

  // 수정 버튼
  const editButton = () => {
    setOnFix(false);
  };

  const [test, setTest] = useState(foundData.detail);
  const changDetail = (event) => {
    const inputValue = event.target.value;
    setTest(inputValue);
  };

  //수정 완료 버튼
  const addButton = () => {
    if (foundData.detail === test) {
      alert("수정된 부분이 없습니다.");
    } else {
      const addFanLetter = contextData.fanLetters.map((item) =>
        item.id === foundData.id ? { ...item, detail: test } : item
      );
      contextData.setFanLetters(addFanLetter);
      setOnFix(true);
      navigaete("/");
    }
  };
  // 삭제 버튼
  const deleteButton = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      const updatFanletters = contextData.fanLetters.filter(
        (item) => item.id !== foundData.id
      );
      contextData.setFanLetters(updatFanletters);
      navigaete("/");
    }
  };
  return (
    <>
      <Link to={"/"}>
        <MoveHomeButton>홈으로</MoveHomeButton>
      </Link>
      <DetailMain>
        <LetterDetailBox>
          <section>
            <LetterUser>
              <ImgUserName>
                <UserImg src={foundData.avatar} alt="이미지" />
                <p>{foundData.name}</p>
              </ImgUserName>
              <time>{new Date(foundData.date).toLocaleString()}</time>
            </LetterUser>
            <DetailIveName>To: {foundData.iveName}</DetailIveName>
            <Detail disabled={onFix} onChange={changDetail}>
              {test}
            </Detail>
          </section>
          <DetailBoxButtons>
            {onFix ? (
              <>
                <BoxButton onClick={editButton}>수정</BoxButton>
                <BoxButton onClick={deleteButton}>삭제</BoxButton>
              </>
            ) : (
              <BoxButton onClick={addButton}>수정완료</BoxButton>
            )}
          </DetailBoxButtons>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
