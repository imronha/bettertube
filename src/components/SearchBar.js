import React from "react";

import { TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    // Prevents browsers default behavior after submit (prevents refreshing page)
    e.preventDefault();
  };

  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="">
            BetterTube
          </Typography>
          <div className={styles.search}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Search"
                fullWidth
                onChange={this.handleChange}
              ></TextField>
            </form>
          </div>

          <div className={styles.icons}>
            <IconButton aria-label="show 4 new apps" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <AppsIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default SearchBar;
