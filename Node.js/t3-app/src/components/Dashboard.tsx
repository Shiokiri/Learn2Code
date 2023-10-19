import * as React from "react";
import { useSession } from "next-auth/react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListDashboardItems from "./ListItems";
import { type GridColDef, type GridValueGetterParams } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar } from "@mui/material";

import DataTable from "./course/DataTable";
import Checkout from "./course/Checkout";
import User from "./user/User";
import Copyright from "./Copyright";
import Notice from "./notice/Notice";
import Topic from "./topic/Topic";
import UserCheck from "./user/userCheck/UserCheck";
import Data from "./data/Data";
import MyCourse from "./course/myCourse/MyCourse";

import { appConfig } from "../common/config";
import { type Course } from "@prisma/client";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// database
const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 70 },
  { field: "name", headerName: "名称", width: 130 },
  { field: "time", headerName: "时间", width: 130 },
  { field: "place", headerName: "地点", width: 130 },
  {
    field: "price",
    headerName: "价格",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ""} ${params.row.time || ""}`,
  },
];

// database
const rows = [
  { id: 1, name: "Snow", time: "Jon", price: 35.4343, test: "test" },
  { id: 2, name: "Lannister", time: "Cersei", price: 42 },
  { id: 3, name: "Lannister", time: "Jaime", price: 45 },
  { id: 4, name: "Stark", time: "Arya", price: 16 },
  { id: 5, name: "Targaryen", time: "Daenerys", price: null },
  { id: 6, name: "Melisandre", time: null, price: 150 },
  { id: 7, name: "Clifford", time: "Ferrara", price: 44 },
  { id: 8, name: "Frances", time: "Rossini", price: 36 },
  { id: 9, name: "Roxie", time: "Harvey", price: 65 },
  { id: 10, name: "Roxie", time: "Harvey", price: 65 },
];

export enum Page {
  Dashboard,
  MyCourse,
  CreateCourse,
  User,
  UserCheck,
  Notice,
  Topic,
  Data,
}

export default function Dashboard() {
  const { data: session } = useSession();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [page, setPage] = React.useState<Page>(Page.Dashboard);
  const handleCreateButtonClick = () => {
    setPage(Page.CreateCourse);
  };

  const [courseData, setCourseData] = React.useState<Course>({
    id: "",
    name: "",
    time: "",
    place: "",
    price: null,
    income: null,
    lecturerId: "",
    executorId: "",
  });

  const switchPage = (page: Page) => {
    if (page === Page.Dashboard) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "rows",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={handleCreateButtonClick}>
                  新建（admin）
                </Button>
                <Button variant="outlined">选课（student）</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  删除（admin）
                </Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <DataTable rows={rows} columns={columns} />
            </Paper>
          </Grid>
        </Grid>
      );
    } else if (page === Page.MyCourse) {
      return <MyCourse />;
    } else if (page === Page.User) {
      return <User />;
    } else if (page === Page.UserCheck) {
      return <UserCheck />;
    } else if (page === Page.CreateCourse) {
      return (
        <Checkout
          courseData={courseData}
          setCourseData={setCourseData}
          setDataTableView={setPage}
        ></Checkout>
      );
    } else if (page === Page.Notice) {
      return <Notice />;
    } else if (page === Page.Topic) {
      return <Topic />;
    } else if (page === Page.Data) {
      return <Data />;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {appConfig.APP_TITLE}
            </Typography>
            <Avatar alt="User Avatar" src={session?.user.image ?? ""} />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListDashboardItems setPage={setPage} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {switchPage(page)}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
