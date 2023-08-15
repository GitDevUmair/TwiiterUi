import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Followers from "../pages/Followers";
import Following from "../pages/Followings";
import Mytweets from "../pages/Mytweets";
import Users from "../pages/Users";

function Reacttabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Reacttabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Followers" {...a11yProps(0)} />
          <Tab label="Following" {...a11yProps(1)} />
          <Tab label="My Tweets" {...a11yProps(2)} />
          <Tab label="People" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Reacttabs value={value} index={0}>
        <Followers />
      </Reacttabs>
      <Reacttabs value={value} index={1}>
        <Following />
      </Reacttabs>
      <Reacttabs value={value} index={2}>
        <Mytweets />
      </Reacttabs>
      <Reacttabs value={value} index={3}>
        <Users />
      </Reacttabs>
    </Box>
  );
}
