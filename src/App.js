import * as React from "react";
import MePic from "./images/MePic-removebg-preview.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Resume from "./Resume";
import Resume_Link from "./images/Moussa_Diallo_Resume.pdf";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";

const Div = styled("div")`
  background: #f0efe2;

  .wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    font-family: "Lucida Console", "Courier New", monospace;
    padding-bottom: 50px;
  }
  img {
    width: 500px;
    height: 500px;
    border-radius: 600px;
    border: 5px double #f0efe2;
  }

  .aside-1 {
    text-align: center;
    flex: 4;
    order: 1;
  }
  .aside-2 {
    text-align: center;
    font-size: 60px;
    color: #dc143c;
    font-family: "Lucida Console", "Courier New", monospace;
    flex: 3;
    order: 2;
    font-weight: 550;
  }
  .aside-2 p {
    font-size: 25px;
    color: black;
    font-weight: bold;
  }
  button {
    font-weight: bold;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #dc143c;
    color: black;
    border: 2px solid #dc143c;
    font-family: "Lucida Console", "Courier New", monospace;
  }
`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#dc143c",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 390,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function App() {
  return (
    <Div>
      <div className="wrapper">
        <aside className="aside aside-1">
          <a href="https://www.linkedin.com/in/moussa-diallo-8654a81bb/">
            <img src={MePic} alt="Moussa Diallo" />
          </a>
        </aside>
        <aside className="aside aside-2">
          <p> Hello My Name is </p>
          Moussa Diallo
          <div>
            <HtmlTooltip
              TransitionComponent={Zoom}
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    Assistant Manager <b>{"@ Speedway"}</b>
                  </Typography>
                  <center>
                    <b>{"Janauray 2018 - Current"}</b>
                  </center>
                </React.Fragment>
              }
            >
              <Button>Job</Button>
            </HtmlTooltip>
            <HtmlTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title={
                <React.Fragment>
                  <center>
                    <Typography color="inherit">New York University</Typography>
                  </center>
                  <center>
                    <b>{"Class Of 2021"}</b>
                  </center>
                  <p>
                    {"Degree:"}
                    <b>{" Business Administration and Management"}</b>
                  </p>
                </React.Fragment>
              }
            >
              <Button>College</Button>
            </HtmlTooltip>
            <HtmlTooltip
              TransitionComponent={Zoom}
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    New Visions Charter High School For Math And Science 2
                  </Typography>
                  <center>
                    <b>{"Class Of 2018"}</b>
                  </center>
                </React.Fragment>
              }
            >
              <Button>High School</Button>
            </HtmlTooltip>
          </div>
          <a href={Resume_Link} download="Moussa_Diallo_Resume.pdf">
            <Resume />
          </a>
        </aside>
      </div>
    </Div>
  );
}

export default App;

/*    <button
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#about");
              }}
            >
              All About Me
            </button> */
