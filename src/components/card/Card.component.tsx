import React from "react";
import { useNavigate } from "react-router-dom";
import { Character } from "../../utils/interfaces/Api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
interface Props {
  character: Character;
}

export const CardComponent = (props: Props) => {
  const { character } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToDetail = () => {
    navigate(`/details/${character.char_id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={navigateToDetail}>
      <CardMedia
        component="img"
        height="240"
        image={character.img}
        alt="image"
        className={"card-image"}
        sx={{
          objectFit: "fill",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}({character.nickname})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("details.ocupation")}: {character.occupation}
        </Typography>
      </CardContent>
    </Card>
  );
};
