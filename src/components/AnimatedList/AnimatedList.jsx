import { nanoid } from "nanoid";
import React from "react";
import { List, ListItem, IconWrapper } from "./AnimatedList.styled";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const AnimatedList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={nanoid()} delay={index * 0.5}>
          <IconWrapper>
            <DoneAllIcon style={{ color: "#ffc500", marginRight: "10px" }} />
            <span>{item}</span>
          </IconWrapper>
        </ListItem>
      ))}
    </List>
  );
};

export default AnimatedList;
