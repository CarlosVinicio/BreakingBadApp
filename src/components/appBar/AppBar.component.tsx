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
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "./AppBar.styled";
import SearchIcon from "@mui/icons-material/Search";
import { getCharacterByName } from "../../api/services/breaking-bad";

const settings = [
  { language: "Español", id: "es" },
  { language: "English", id: "en" },
];

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let delayTimer: NodeJS.Timeout;

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

  const searchCharacterByName = (e: { target: { value: string; }; }) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      dispatch(getCharacterByName(e.target.value));
    }, 1000);
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
            onClick={() => navigate("/")}
          >
            <HomeOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Breaking Bad
          </Typography>

          <div style={{ display: "flex" }}>
            {pathname === "/" && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={`${t("details.quotes.search")}`}
                  inputProps={{ "aria-label": "Buscar" }}
                  onChange={searchCharacterByName}
                />
              </Search>
            )}
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
