import styled from "styled-components";
import React from "react";

const StyledAboutme = styled.div`
  background: white;
  width: auto;
  height: auto;
  align-items: center;
  border-bottom: 0.9px solid black;
  display: flex;
    justify-content: center;



h1{
font-size: 40px;
display: flex;
justify-content: center;
color: #DC143C;
}


`;

const Aboutme = () => {
  return (
    <StyledAboutme>
      <div>
          <h1>About Me</h1>
          <p>Hello my name is moussa diallo</p>
      </div>
    </StyledAboutme>
  );
};
export default Aboutme;

