import { theContent } from "./data";

export function sliderChange(text: any): any {
  return {
    type: "CHANGE_TEXT",
    payload: { text: text }
  };
}
export function textChange(top: number): any {
  return {
    type: "POSITION_TEXT",
    payload: { top: top + "vh" }
  };
}
