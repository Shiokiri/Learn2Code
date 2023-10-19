import * as React from "react";
import { useSession } from "next-auth/react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";

import { Page } from "./Dashboard";

const ListDashboardItems: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}> = ({ setPage }) => {
  const { data: session } = useSession();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => setPage(Page.Dashboard)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="课程管理（all）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.MyCourse)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="我的课程（stu+lec+exe）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.Notice)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="通知公告（all）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.Topic)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="评价反馈（all）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.User)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="职责变更（user）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.UserCheck)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="职责审核（admin）" />
      </ListItemButton>
      <ListItemButton onClick={() => setPage(Page.Data)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="统计数据（all）" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default ListDashboardItems;
