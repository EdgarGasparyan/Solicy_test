import { nanoid } from "nanoid";
const data = JSON.parse(localStorage.getItem("data"));

export const initialState = data || [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDNUMBER": {
      const newState = [
        ...state,
        {
          id: nanoid(),
			 num: Math.floor(Math.random() * 1000)
        },
      ];
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    }
    case "SORTNUMBER": {
      const newState = [
        ...state.sort((a, b) => {
          return a.num > b.num ? 1 : -1;
        }),
      ];
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    }
    case "DELETENUMBER": {
      const newState = state.filter((item) => item.id !== action.id);
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    }
    default:
       localStorage.setItem("data", JSON.stringify(state));
      return state;
  }
};
