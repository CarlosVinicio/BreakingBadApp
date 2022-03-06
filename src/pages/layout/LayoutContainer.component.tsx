import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import AppMenu from "../../components/appBar/AppBar.component";
import { reduxState } from "../../utils/interfaces/Redux";
interface Props {
  children: object;
}
export const LayoutContainer = (props: Props) => {
  const { children } = props;
  const { isFetching } = useSelector((state: reduxState) => state.global);
  return (
    <div>
      <AppMenu />
      {children}
      {isFetching && (
        <Box sx={{ position: "absolute", left: "50%", top: "50%" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
