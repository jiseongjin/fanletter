import {
  DetailMain,
  LetterDetailBox,
  LetterUser,
  MoveHomeButton,
  UserImg,
} from "components/Styled";
import React from "react";
import { useNavigate } from "react-router-dom";

function DetailFanletter({ item }) {
  const navigaet = useNavigate();
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
              <div>
                <UserImg
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU"
                  alt="이미지"
                />
                <p>이름</p>
              </div>
              <time>시간</time>
            </LetterUser>
            <p>To: 안유진</p>
            <p>내용들</p>
          </section>
          <footer>
            <button>수정</button>
            <button>삭제</button>
          </footer>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
