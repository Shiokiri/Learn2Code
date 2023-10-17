import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { type Course } from "@prisma/client";

const Review: React.FC<{
  courseData: Course;
}> = ({ courseData }) => {
  console.log(courseData);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        课程信息
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>{courseData.name}</Typography>
          <Typography gutterBottom>{courseData.price.toFixed(2)}</Typography>
          <Typography gutterBottom>{courseData.place}</Typography>
          <Typography gutterBottom>{courseData.time}</Typography>
          <Typography gutterBottom>{courseData.lecturerId}</Typography>
          <Typography gutterBottom>{courseData.executorId}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
