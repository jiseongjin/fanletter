import fakeData from "assets/fakeData.json";

const LETER_PLUS = "PLUS";
const ADD = "ADD";
const DELETE = "DELETE";

export const letterFlus = (newLetter) => {
  return {
    type: LETER_PLUS,
    payload: newLetter,
  };
};

export const addLetter = (addFanLetter) => {
  return {
    type: ADD,
    payload: addFanLetter,
  };
};

export const deleteLetter = (updatFanletters) => {
  return {
    type: DELETE,
    payload: updatFanletters,
  };
};

const fanLettersReducer = (state = fakeData, action) => {
  switch (action.type) {
    case LETER_PLUS:
      return [...state, action.payload];
    case ADD:
      return action.payload;
    case DELETE:
      return action.payload;
    default:
      return state;
  }
};

export default fanLettersReducer;
