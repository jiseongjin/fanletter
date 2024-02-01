import GlobalStyle from "components/GlobalStyle";
import React, { useState } from "react";
import fakeData from "assets/fakeData.json";
import {
  Main,
  MemberNames,
  NameButton,
  FillBox,
  FillBoxTexts,
  FillContent,
  NameText,
  ContentText,
  RegisterButton,
} from "./Styled";
import Fanletters from "./Fanletters";

// 아이브멤버
const members = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

function FanletterMain() {
  // 닉네임,내용,보내는 멤버 useState
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState("");
  const [iveMember, setIveMember] = useState("안유진");

  const onChangeName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };

  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };

  const onChangeIveName = (event) => {
    const inputValue = event.target.value;
    setIveMember(inputValue);
  };

  //팬레터 리스트
  const [fanLetters, steFanLetters] = useState(fakeData);

  // 팬레터 추가 버튼
  const addButton = () => {
    const newLetter = {
      id: crypto.randomUUID(),
      name: userName,
      detail,
      iveName: iveMember,
      date: new Date().toLocaleString(),
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU",
    };
    if (
      newLetter.name.length <= 0 ||
      newLetter.name.length > 20 ||
      newLetter.detail.length <= 0 ||
      newLetter.detail.length > 100
    ) {
      alert(
        "닉네임, 내용이 공백 또는 형식에 맞지 않습니다.(닉네임 최대 20자 / 내용 최대 100자)"
      );
    } else {
      steFanLetters([...fanLetters, newLetter]);
    }
    console.log(fanLetters);
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <MemberNames>
          {members.map((member) => {
            return <NameButton key={member}>{member}</NameButton>;
          })}
        </MemberNames>
        <FillBox>
          <FillBoxTexts>
            <FillContent>닉네임:&nbsp;</FillContent>
            <NameText
              type="text"
              placeholder="최대 20글자까지 작성할 수 있습니다."
              value={userName}
              onChange={onChangeName}
            />
          </FillBoxTexts>
          <FillBoxTexts>
            <FillContent>내용:&nbsp;</FillContent>
            <ContentText
              type="text"
              placeholder="최대 100자까지만 작성할 수 있습니다."
              value={detail}
              onChange={onChangeDetail}
            />
          </FillBoxTexts>
          <article>
            누구에게 보내실 건가요?&nbsp;
            <select onChange={onChangeIveName} value={iveMember}>
              {members.map((member) => {
                return (
                  <option value={member} key={member}>
                    {member}
                  </option>
                );
              })}
            </select>
          </article>
          <RegisterButton onClick={addButton}>팬레터 등록</RegisterButton>
        </FillBox>
        <div>
          {/* 팬레터 리스트들 map */}
          {fanLetters.map((item) => {
            return <Fanletters key={item.id} item={item} />;
          })}
        </div>
      </Main>
    </>
  );
}

export default FanletterMain;

// <FanLetterList
//   onClick={() => {
//     navigate("/detail");
//   }}
// >
//   <Fanletter>
//     <Profile
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU"
//       alt=""
//     />
//     <FanletterContent>
//       <p>sdafsddfasfdsfsgfdgdfgfdgdfgdf</p>
//       <p>dfgdfgfdgdfgdgdfgdfgdf</p>
//       <FanletterDetail>
//         gdfgdfgdfgdfgdfgdfgdfgdfgdfuhdsafjkdshfuhfasduwdhfjfguiehuidfheqiudhqiudhqwiudhqiwudhiqwdhqiwudhqigdfgdfgdf
//       </FanletterDetail>
//     </FanletterContent>
//   </Fanletter>
// </FanLetterList>
