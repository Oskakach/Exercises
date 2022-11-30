import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function LinkTab(props) {
  let navigate = useNavigate();
  return (
    <Tab
      iconPosition="start"
      label="start"
      icon={props.icon}
      component="a"
      onClick={(event) => {
        event.preventDefault();
        console.log(props.href);
        navigate(props.href);
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Home" href="/" icon={<HomeOutlinedIcon />} />
        <LinkTab label="About" href="/about" icon={<InfoOutlinedIcon />} />
      </Tabs>
    </Box>
  );
}
