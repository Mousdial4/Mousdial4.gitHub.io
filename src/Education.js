import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function CustomizedTooltips() {
  return (
    <div>
      <BootstrapTooltip title="Assistant Manager @ Speedway">
        <Button>Job</Button>
      </BootstrapTooltip>
      <BootstrapTooltip title="New Visions Charter High School For Math And Science 2">
        <Button>High School</Button>
      </BootstrapTooltip>
      <BootstrapTooltip title="New York University">
        <Button>College School</Button>
      </BootstrapTooltip>
    </div>
  );
}
