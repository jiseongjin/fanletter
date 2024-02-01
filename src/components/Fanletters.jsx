import { useNavigate } from "react-router-dom";
import {
  FanLetterList,
  Fanletter,
  FanletterContent,
  FanletterDetail,
  Profile,
} from "./Styled";

const Fanletters = () => {
  // 디테일 페이지 이동
  const navigate = useNavigate();
  return (
    <FanLetterList
      onClick={() => {
        navigate("/detail");
      }}
    >
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
  );
};

export default Fanletters;
