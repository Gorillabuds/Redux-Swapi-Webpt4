import{FETCHING_CHARS, FETCHING_CHARS_SUCCESS, FETCHING_CHARS_FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return{...state,fetching:true};
    case FETCHING_CHARS_SUCCESS:
      return{...state,fetching:false,characters:[...state.characters,...action.payload]};
    case FETCHING_CHARS_FAILURE:
      return{...state,fetching:false,error:action.payload};
    default:
      return state;
  }
};
