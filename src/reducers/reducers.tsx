export function globalReducer(state: {}, action: any): {} {
  console.log(action);
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.payload;
    case "HEADING_POSITION":
      return action.payload;
    default:
      return state;
  }
}
