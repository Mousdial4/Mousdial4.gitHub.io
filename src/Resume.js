import styled from "styled-components";
import React from "react";

const StyledAboutme = styled.div`
  background: #f0efe2;
  width: auto;
  height: auto;
  align-items: center;
  border-bottom: 0.9px solid black;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: #dc143c;
  }
`;

const Aboutme = () => {
  return (
    <StyledAboutme>
      <div>
        <h1 id="Resume">Résumé</h1>
        <p>Résumé Section</p>
      </div>
    </StyledAboutme>
  );
};
export default Aboutme;
