import styled from "styled-components";
import React from "react";
import Button from "./Button";
import Education from "./Education";

const StyledAboutme = styled.div`
  background: #f0efe2;
  align-items: center;

  padding: 10px;

  h1 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    color: #dc143c;
  }
  div {
    padding: 10px;
  }
`;
const StyledResume = styled.div`
  background: #f0efe2;
  align-items: center;
  display: flex;
  justify-content: center;

  button {
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: #dc143c;
  }
  button:hover {
    background: red;
  }
`;

const Aboutme = () => {
  return (
    <StyledAboutme>
      <div>
        <h1 id="about">About Me</h1>
        <p>
          Hello my name is Moussa Diallo. I got a degree in Business
          Administration and Management from the school of New York University.
          As a Freshman at New York University majoring in Business Management,
          I have been interested in a career in Business. Being mentored by an
          Entrepreneur in Harlem, I am committed to becoming a part of something
          great. An opportunity to be a part of a great company would be an
          excellent opportunity to contribute my skills to better improve this
          company, while also gaining knowledge and experience for my intended
          journey in life. Having worked as an assistant manager at a Speedway,
          I have a strong understanding of the daily processes in a fast-paced
          environment. I value discretion, I am an excellent communicator, and
          consistently demonstrate a strong work ethic in all areas of my life.
          My academic and professional backgrounds have prepared me well for the
          specific responsibilities to become a part of your company. At NYU, I
          have already taken courses in Leadership, Financing, and Business,
          where I received an A on a group project about what makes a great
          leader. At Speedway, I had daily contact with a mass variety of
          people, meeting and speaking to people around the world. In addition
          to being the assistant manager I was a part of a team that worked
          together in union to keep the company running. In both my schoolwork
          and previous positions, I work with high proficiency in both Microsoft
          Office and the Google suite, and have been responsible for maintaining
          and ensuring the data of my store and other companies.
        </p>
        <StyledResume>
          <Button />
        </StyledResume>
        <div>
          <h1 id="education">Education</h1>
          <Education />
        </div>
      </div>
    </StyledAboutme>
  );
};
export default Aboutme;
