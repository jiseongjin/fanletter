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
import { members } from "assets/ivemembers";

function FanletterMain() {
  // 닉네임,내용,보내는 멤버 useState
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState("");
  const [iveMember, setIveMember] = useState("안유진");
  // 닉네임 입력
  const onChangeName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };
  // 내용 입력
  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };
  // 멤버 선택
  const onChangeIveName = (event) => {
    const inputValue = event.target.value;
    setIveMember(inputValue);
  };
  //팬레터 리스트
  const [fanLetters, setFanLetters] = useState(fakeData);
  // 팬레터 추가 버튼
  const addButton = () => {
    const newLetter = {
      id: crypto.randomUUID(),
      name: userName,
      detail,
      iveName: iveMember,
      date: Date(),
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
      setFanLetters([...fanLetters, newLetter]);
      setUserName("");
      setDetail("");
    }
  };

  // 선택 멤버 저장
  const [selectedMember, setSelectedMember] = useState("");
  // 멤버 선택시 팬레터 변경
  const selectMembers = (event) => {
    const inputValue = event.target.value;
    setSelectedMember(inputValue);
  };

  // 팬레터 리스트 함수
  const memberFilter = () => {
    const filteringMember = fanLetters.filter(
      (item) => selectedMember === "" || item.iveName === selectedMember
    );
    if (filteringMember.length > 0) {
      return filteringMember.map((item) => (
        <Fanletters key={item.id} item={item} />
      ));
    } else {
      return <div>테스트</div>;
    }
  };
  return (
    <>
      <GlobalStyle />
      <Main>
        {/* 멤버 선택 버튼 */}
        <MemberNames>
          {members.map((member) => {
            return (
              <NameButton
                value={member}
                onClick={selectMembers}
                key={member}
                selected={selectedMember === member}
              >
                {member}
              </NameButton>
            );
          })}
        </MemberNames>
        {/* 팬레터 작성  */}
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
          {memberFilter()}
        </div>
      </Main>
    </>
  );
}

export default FanletterMain;
