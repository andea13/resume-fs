import * as React from "react";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const CustomTimeline = ({ title, children, icon }) => {
  return (
    <Timeline>
      {/* header item */}
      <TimelineItem
        sx={{
          minHeight: "0px",
          "&::before": {
            display: "none",
          },
        }}
      >
        <TimelineSeparator sx={{ minHeight: "30px" }}>
          <TimelineDot
            variant="outlined"
            sx={{
              backgroundColor: "#ffc500",
              borderStyle: "none",
              marginLeft: "-10px",
            }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector
            sx={{
              minHeight: "25px",
              backgroundColor: "#eee",
              marginLeft: "-10px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Typography sx={{ padding: "10px" }}>{title}</Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator>
      <TimelineDot sx={{ backgroundColor: "#fff", borderColor: "#ffc500" }} />
      <TimelineConnector sx={{ minHeight: "25px", backgroundColor: "#eee" }} />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
//       <TimelineItem>

//         <TimelineContent>
//           <Typography sx={{ paddingLeft: "20px" }}>{title}</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot
//             variant="outlined"
//             sx={{ backgroundColor: "#fff", borderColor: "#ffc500" }}
//           />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography sx={{ paddingLeft: "20px" }}>Sleep</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// };
