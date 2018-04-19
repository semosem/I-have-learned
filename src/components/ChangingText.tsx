import * as React from "react";
import styled from "../theme/theme";

interface SectionProps {
  // see https://github.com/Microsoft/TypeScript/issues/8588
  // children?: React.ReactChild;
  className?: string;
}

class Section extends React.Component<SectionProps, {}> {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

const Text = styled(Section)`
  > h1 {
    @import url("https://fonts.googleapis.com/css?family=Abril+Fatface");
    font: 400 56px/64px Abril Fatface;
    text-align: center;
    left: 10vw;
    position: absolute;
    top: 5vh;
    color: black;
    animation: fade 10s both;
    transition: all 0.25s;
  }
  > p {
    @import url("https://fonts.googleapis.com/css?family=Righteous");
    padding: 0 12vw 0 12vw;
    text-align: center;
    font-family: "Righteous", cursive;
    font-size: 2rem;
    margin-top: 25vh;
    color: grey;
  }
  @media (max-width: 920px) {
    margin-top: 15vh;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Text;
