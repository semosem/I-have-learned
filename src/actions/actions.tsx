export function sliderChange(text: any): any {
  return {
    type: "CHANGE_TEXT",
    payload: {
      text: text,
      top: 5
    }
  };
}
export function headingPosition(top: number): any {
  return {
    type: "HEADING_POSITION",
    payload: { top: top }
  };
}
