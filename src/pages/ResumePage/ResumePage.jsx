import { Grid } from "@mui/material";

const ResumePage = () => {
  return (
    <>
      {/* about me */}
      <Grid container>
        <Grid item>
          <h1>About Me</h1>
        </Grid>
      </Grid>

      {/* education and experiences */}
      <Grid container>
        <Grid item>
          <h1>Education and Experiences</h1>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid container>
        <Grid item>
          <h1>Skills</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default ResumePage;
