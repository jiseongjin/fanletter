import GlobalStyle from "GlobalStyle";
import React from "react";
import styled from "styled-components";

const Main = styled.main`
  flex-direction: column;
`;
const MemberNames = styled.section`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ccd1cc;
  margin: 10px 0;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
`;

const NameButton = styled.button`
  width: 100px;
  padding: 5px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;

const FillBox = styled.section`
  width: 600px;
  background-color: #ccd1cc;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FillBoxTexts = styled.article`
  display: flex;
`;

const FillContent = styled.p`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameText = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

const ContentText = styled.input`
  height: 80px;
  width: 100%;
  padding: 5px 10px;
`;

const RegisterButton = styled.button`
  height: 30px;
  background-color: black;
  color: white;
`;

const FanLetterList = styled.section`
  width: 600px;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  gap: 20px;
`;

const Profile = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;

const Fanletter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
  padding: 10px;
  color: white;
`;

const FanletterContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const FanletterDetail = styled.p`
  width: 450px;
  background-color: gray;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function FanletterMain() {
  //   const date = new Date().toLocaleString();
  //   console.log(date);

  return (
    <>
      <GlobalStyle />
      <Main>
        <MemberNames>
          <NameButton>안유진</NameButton>
          <NameButton>가을</NameButton>
          <NameButton>레이</NameButton>
          <NameButton>장원영</NameButton>
          <NameButton>리즈</NameButton>
          <NameButton>이서</NameButton>
        </MemberNames>
        <FillBox>
          <FillBoxTexts>
            <FillContent>닉네임:&nbsp;</FillContent>
            <NameText
              type="text"
              placeholder="최대 20글자까지 작성할 수 있습니다."
            />
          </FillBoxTexts>
          <FillBoxTexts>
            <FillContent>내용:&nbsp;</FillContent>
            <ContentText
              type="text"
              placeholder="최대 100자까지만 작성할 수 있습니다."
            />
          </FillBoxTexts>
          <article>
            누구에게 보내실 건가요?&nbsp;
            <select>
              <option>안유진</option>
              <option>가을</option>
              <option>레이</option>
              <option>장원영</option>
              <option>리즈</option>
              <option>이서</option>
            </select>
          </article>
          <RegisterButton>팬레터 등록</RegisterButton>
        </FillBox>
        <FanLetterList>
          <Fanletter>
            <Profile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU"
              alt=""
            />
            <FanletterContent>
              <p>sdafsddfasfdsfsgfdgdfgfdgdfgdf</p>
              <p>dfgdfgfdgdfgdgdfgdfgdf</p>
              <FanletterDetail>
                gdfgdfgdfgdfgdfgdfgdfgdfgdfuhdsafjkdshfuhfasduwdhfjfguiehuidfheqiudhqiudhqwiudhqiwudhiqwdhqiwudhqigdfgdfgdf
              </FanletterDetail>
            </FanletterContent>
          </Fanletter>
        </FanLetterList>
      </Main>
    </>
  );
}

export default FanletterMain;
