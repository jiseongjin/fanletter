import { useNavigate } from "react-router-dom";
import {
  FanLetterList,
  Fanletter,
  FanletterContent,
  FanletterDetail,
  Profile,
} from "./Styled";

const Fanletters = ({ item }) => {
  // 디테일 페이지 이동
  const navigate = useNavigate({ item });
  return (
    <FanLetterList
      onClick={() => {
        navigate("/detail");
      }}
    >
      <Fanletter>
        <Profile src={item.avatar} alt="" />
        <FanletterContent>
          <p>{item.name}</p>
          <p>{new Date(item.date).toLocaleString()}</p>
          <FanletterDetail>{item.detail}</FanletterDetail>
        </FanletterContent>
      </Fanletter>
    </FanLetterList>
  );
};

export default Fanletters;
