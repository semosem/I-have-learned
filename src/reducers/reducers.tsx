export function globalReducer(state: any, action: any): any {
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.payload;
    case "POSITION_TEXT":
      return action.payload;
    default:
      return state;
  }
}
