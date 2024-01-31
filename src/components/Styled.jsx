import styled from "styled-components";

export const Main = styled.main`
  flex-direction: column;
`;

export const MemberNames = styled.section`
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

export const NameButton = styled.button`
  width: 100px;
  padding: 5px;
  background-color: black;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  &:hover {
    background-color: pink;
  }
`;

export const FillBox = styled.section`
  width: 600px;
  background-color: #ccd1cc;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FillBoxTexts = styled.article`
  display: flex;
`;

export const FillContent = styled.p`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export const ContentText = styled.input`
  height: 80px;
  width: 100%;
  padding: 5px 10px;
`;

export const RegisterButton = styled.button`
  height: 30px;
  background-color: black;
  color: white;
`;

export const FanLetterList = styled.section`
  width: 600px;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  gap: 20px;
`;

export const Profile = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;

export const Fanletter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
  padding: 10px;
  color: white;
`;

export const FanletterContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const FanletterDetail = styled.p`
  width: 450px;
  background-color: gray;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
