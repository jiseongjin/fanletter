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
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DetailFanletter() {
  const navigaet = useNavigate();
  const location = useLocation();
  const foundData = location.state.item;

  return (
    <>
      <MoveHomeButton
        onClick={() => {
          navigaet("/");
        }}
      >
        홈으로
      </MoveHomeButton>
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
            <Detail>{foundData.detail}</Detail>
          </section>
          <DetailBoxButtons>
            <BoxButton>수정</BoxButton>
            <BoxButton>삭제</BoxButton>
          </DetailBoxButtons>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
