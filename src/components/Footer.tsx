import styled from "styled-components";

const Footer = styled.section`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 20rem;
  background-color: #2a2c39;
  padding-top: 5vh;
  text-align: center;
  > ul {
    width: 80%;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    > :first-child {
      list-style: none;
      justify-self: start;
    }
    > :nth-child(2) {
      list-style: none;
      justify-self: end;
    }
  }
  > p {
    color: white;
    position: absolute;
    width: 100vw;
    bottom: 2rem;
    text-align: center;
    > a {
      color: #ffeaea;
    }
  }
`;
export default Footer;
