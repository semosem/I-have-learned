import * as React from "react";
import Slider from "./Slider";
import { Text } from "./ChangingText";
import Footer from "./Footer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { theContent } from "../actions/data/";
import { connect } from "react-redux";
import { sliderChange } from "../actions/actions";
const muiTheme = getMuiTheme({
  slider: {
    trackSize: 3,
    trackColor: "white",
    trackColorSelected: "white",
    handleSize: 25,
    handleSizeActive: 35,
    handleColorZero: "white",
    handleFillColor: "grey",
    selectionColor: "grey"
    // rippleColor: "yellow"
  }
});
export interface MainProps {
  text?: string;
  onSliderChange?: any;
  top?: number;
}

class Main extends React.Component<MainProps, {}> {
  handleSliderChange(e: any, value: number) {
    theContent.filter((action: any) => {
      if (action.id === value) {
        this.props.onSliderChange(action.text);
      }
    }, this);
  }

  render() {
    return (
      <div className="main">
        <Text>
          <h1 style={{ top: this.props.top + "vh" }}>I have learned...</h1>
          <p>{this.props.text}</p>
        </Text>
        <Footer>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Slider
              onChange={this.handleSliderChange.bind(this)}
              min={0}
              step={10}
              max={100}
            />
          </MuiThemeProvider>
          <ul>
            <li>Start</li>
            <li>End</li>
          </ul>
          <p>
            Inspiration
            <a target="__blank" href="https://getcoleman.com/">
              {" "}
              COLEMAN
            </a>
          </p>
        </Footer>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  // console.log(state);
  return state;
};
const mapActionsToProps = {
  onSliderChange: sliderChange
};
export default connect(mapStateToProps, mapActionsToProps)(Main);
