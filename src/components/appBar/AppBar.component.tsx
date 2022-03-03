import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "../../store/reducers/global";
import { useDispatch, useSelector } from "react-redux";
import { reduxState } from "../../utils/interfaces/Redux";
import { useTranslation } from "react-i18next";

const settings = [
  { language: "Español", id: "es" },
  { language: "English", id: "en" },
];

const AppMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: reduxState) => {
    return state.global;
  });

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (id: string) => {
    if (id === "es") {
      dispatch(setLanguage("en"));
      i18n.changeLanguage(id);
    } else {
      dispatch(setLanguage("es"));
      i18n.changeLanguage(id);
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="lenguajes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleCloseUserMenu(setting.id)}
                >
                  <Typography textAlign="center">{setting.language}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppMenu;
