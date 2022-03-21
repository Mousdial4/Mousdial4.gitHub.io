import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "auto" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="J" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Job"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Speedway
              </Typography>
              {" — 2016-2020"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="C" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                NYU
              </Typography>
              {" — 2016-2020"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="H" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                AMS2
              </Typography>
              {" — 2016-2020"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
