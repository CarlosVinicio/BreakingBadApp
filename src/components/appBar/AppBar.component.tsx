import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { setLanguage } from "../../store/reducers/global";
import { useDispatch, useSelector } from "react-redux";
import { reduxState } from "../../utils/interfaces/Redux";
import { useTranslation } from "react-i18next";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { useNavigate } from "react-router-dom";
const settings = [
  { language: "Español", id: "es" },
  { language: "English", id: "en" },
];

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseUserMenu = (id: string) => {
    if (id === "es") {
      dispatch(setLanguage("en"));
      i18n.changeLanguage(id);
    } else {
      dispatch(setLanguage("es"));
      i18n.changeLanguage(id);
    }
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() =>navigate('/')}
          >
            <HomeOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Breaking Bad
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <LanguageRoundedIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
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
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppMenu;
