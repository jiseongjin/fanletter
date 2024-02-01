import GlobalStyle from "components/GlobalStyle";
import React, { useState } from "react";
import fakeData from "assets/fakeData.json";
import { Main } from "../Styled";
import Fanletters from "./Fanletters";
import IveMembers from "./IveMembers";
import FanletterWrite from "./FanletterWrite";

function FanletterMain() {
  //팬레터 리스트
  const [fanLetters, setFanLetters] = useState(fakeData);
  // 팬레터 추가 버튼
  const addButton = ({ userName, detail, iveMember }) => {
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
        <IveMembers
          selectMembers={selectMembers}
          selectedMember={selectedMember}
        />
        {/* 팬레터 작성  */}
        <FanletterWrite addButton={addButton} />
        <div>
          {/* 팬레터 리스트들 map */}
          {memberFilter()}
        </div>
      </Main>
    </>
  );
}

export default FanletterMain;
