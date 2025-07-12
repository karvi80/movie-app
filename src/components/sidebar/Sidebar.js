import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FenceIcon from "@mui/icons-material/Fence";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PetsIcon from "@mui/icons-material/Pets";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import GavelIcon from "@mui/icons-material/Gavel";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import TvIcon from "@mui/icons-material/Tv";
import GrassIcon from "@mui/icons-material/Grass";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/assets/logo.png" alt="" className="logo" />

      <h3>Categories</h3>

      <SidebarOptions Icon={LocalMoviesOutlinedIcon} text="Popular" />
      <SidebarOptions Icon={StarBorderOutlinedIcon} text="Top Rated" />
      <SidebarOptions Icon={FenceIcon} text="Action" />
      <SidebarOptions Icon={ExploreOutlinedIcon} text="Adventure" />
      <SidebarOptions Icon={PetsIcon} text="Animation" />
      <SidebarOptions Icon={TheaterComedyIcon} text="Comedy" />
      <SidebarOptions Icon={GavelIcon} text="Crime" />
      <SidebarOptions Icon={PhotoCameraFrontIcon} text="Documentary" />
      <SidebarOptions Icon={TheaterComedyIcon} text="Drama" />
      <SidebarOptions Icon={AutoFixHighOutlinedIcon} text="Fantasy" />
      <SidebarOptions Icon={QueueMusicIcon} text="Music" />
      <SidebarOptions Icon={Diversity1Icon} text="Romance" />
      <SidebarOptions Icon={TvIcon} text="TV Show" />
      <SidebarOptions Icon={GrassIcon} text="Western" />
    </div>
  );
}

export default Sidebar;
