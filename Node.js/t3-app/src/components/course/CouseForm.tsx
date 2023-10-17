import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { type Course } from "@prisma/client";
import { Label } from "@mui/icons-material";
import { Decimal } from "@prisma/client/runtime/library";

const CourseForm: React.FC<{
  courseData: Course;
  setCourseData: React.Dispatch<React.SetStateAction<Course>>;
}> = ({ courseData, setCourseData }) => {
  const [lecturer, setLecturer] = React.useState([
    {
      id: "1",
      name: "11",
    },
  ]);
  const [executor, setExecutor] = React.useState([
    {
      id: "1",
      name: "11",
    },
  ]);
  React.useEffect(() => {
    // TODO: database lecturer
    const lecturerData = [
      { id: "1", name: "111" },
      { id: "2", name: "222" },
      { id: "3", name: "333" },
    ];
    setLecturer(lecturerData);
    // TODO: database executor
    const executorData = [
      { id: "1", name: "111" },
      { id: "2", name: "222" },
      { id: "3", name: "333" },
      { id: "4", name: "444" },
    ];
    setExecutor(executorData);
  }, []);

  const handleInputChange = (value: string | number, filedName: string) => {
    setCourseData({
      ...courseData,
      [filedName]: value,
    });
  };

  console.log(courseData);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        课程信息
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            onChange={(e) => handleInputChange(e.target.value, "name")}
            value={courseData.name ?? ""}
            label="课程名称"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            type="number"
            onChange={(e) => handleInputChange(Number(e.target.value), "price")}
            value={courseData.price ?? ""}
            label="课程价格"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="place"
            name="place"
            onChange={(e) => handleInputChange(e.target.value, "place")}
            value={courseData.place ?? ""}
            label="课程地点"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="time"
            name="time"
            onChange={(e) => handleInputChange(e.target.value, "time")}
            value={courseData.time ?? ""}
            label="课程时间"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel id="lecturer-label">授课人</InputLabel>
            <Select
              labelId="lecturer-label"
              id="lecturer"
              name="lecturer"
              onChange={(e) => handleInputChange(e.target.value, "lecturerId")}
              value={courseData.lecturerId ?? ""}
              variant="standard"
            >
              {lecturer.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel id="executor-label">执行人</InputLabel>
            <Select
              labelId="executor-label"
              id="executor"
              name="executor"
              onChange={(e) => handleInputChange(e.target.value, "executorId")}
              value={courseData.executorId ?? ""}
              variant="standard"
            >
              {executor.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CourseForm;
