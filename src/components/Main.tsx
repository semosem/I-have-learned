import * as React from "react";
import Slider from "./Slider";
import Text from "./ChangingText";
import Footer from "./Footer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { theData } from "../actions/data/";
import { connect } from "react-redux";
import { sliderChange, headingPosition } from "../actions/actions";

//customizing material ui slider component
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

// an interface for optional main component props
export interface MainProps {
  text?: string;
  onSliderChange?: any;
  headingPosition?: any;
  top?: number;
}

// create class based Main component
class Main extends React.Component<MainProps, {}> {
  // on event of change in slider value
  handleSliderChange(e: any, value: number) {
    theData.filter((data: any) => {
      if (data.id === value) {
        if (value === 0) {
          this.props.headingPosition(25);
        } else {
          this.props.onSliderChange(data.text);
        }
      }
    }, this);
  }

  render() {
    const headingPos = this.props.top;
    return (
      <div className="main">
        <Text>
          <h1 style={{ top: headingPos + "vh" }}>
            {headingPos > 5 ? "I have learned..." : "that"}
          </h1>
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
            <li>Start sliding</li>
            <li>End</li>
          </ul>
          <p>
            Inspiration
            <a target="__blank" href="https://getcoleman.com/">
              COLEMAN
            </a>
          </p>
        </Footer>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};
const mapActionsToProps = {
  onSliderChange: sliderChange,
  headingPosition: headingPosition
};
export default connect(mapStateToProps, mapActionsToProps)(Main);
