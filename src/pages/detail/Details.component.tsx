import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllEpisodes,
  getCharacterById,
  getQuoteByAuthor,
} from "../../api/services/breaking-bad";
import { Character, Episodes, Quote } from "../../utils/interfaces/Api";
import { WrapperStyled } from "./Details.styled";
import { getRandomQuote } from "../../utils/helpers/global";
import { useTranslation } from "react-i18next";
import image from "../../assets/363c4a9baa2ca6b38ceae40259e94a0c.jpeg";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Details = () => {
  const [randomQuote, setRandomQuote] = useState<Quote>();
  const [characterById, setCharacterById] = useState<Character[]>();
  const [episodes, setEpisodes] = useState<Episodes[]>();
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      getCharacterById(id)
        .then((resp: Character[]) => {
          setCharacterById(resp);
          return resp;
        })
        .then((resp: Character[]) => {
          getQuoteByAuthor(resp[0].name).then((response: Quote[]) => {
            const randomQuote = getRandomQuote(response);
            setRandomQuote(randomQuote);
          });
          return resp;
        });
    }
  }, []);

  const getEpisodesBySeries = (
    episodes: Episodes[],
    characterById: Character
  ) => {
    return episodes.filter((episode: Episodes) => {
      return episode.series === characterById.category;
    });
  };

  useEffect(() => {
    if (characterById) {
      getAllEpisodes().then((response: Episodes[]) => {
        setEpisodes(getEpisodesBySeries(response, characterById[0]));
      });
    }
  }, [characterById]);

  const columns = [
    { id: "1", label: `${t("details.episodes.title")}`, minWidth: 170 },
    { id: "2", label: `${t("details.episodes.espisode")}`, minWidth: 170 },
    { id: "3", label: `${t("details.episodes.sesion")}`, minWidth: 170 },
    { id: "4", label: `${t("details.episodes.series")}`, minWidth: 170 },
    { id: "5", label: `${t("details.episodes.date")}`, minWidth: 170 },
  ];

  return (
    <WrapperStyled>
      <div className="container__details">
        <img src={image} className="banner-image" />
        <div>
          {characterById && (
            <div className="character__detail">
              <img
                src={characterById[0].img}
                className="character__detail__image"
              />
              <div className="character__detail_data">
                <div className="name">{t("details.personal.information")}</div>
                <div className="data__block">
                  <div className="title">{t("details.name")}</div>
                  <div>{characterById[0].name}</div>
                </div>
                <div className="data__block">
                  <div className="title">{t("details.nickname")}</div>
                  <div>{characterById[0].nickname}</div>
                </div>
                <div className="data__block">
                  <div className="title">{t("details.birthday")}</div>
                  <div>{characterById[0].birthday}</div>
                </div>
                <div className="data__block">
                  <div className="title">{t("details.ocupation")}</div>
                  <div>{characterById[0].occupation}</div>
                </div>
                <div className="data__block">
                  <div className="title">{t("details.state")}</div>
                  <div>{characterById[0].status}</div>
                </div>
              </div>
            </div>
          )}
          {
            characterById && episodes && episodes.length > 0 && (
              <div className="character__detail">
              <div className="character__detail_data">
                <div className="name">{t("details.quotes")}</div>
                <div className="data__block quotes">
                  <div>
                    {randomQuote?.quote || `${t("details.quotes.exists")}`}
                  </div>
                </div>
              </div>
            </div>
            )
          }
          {episodes && episodes.length > 0 && (
            <div className="character__detail_data table">
              <div className="name">{t("details.episodes")}</div>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 400 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {episodes.map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.episode_id}
                          >
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.episode}</TableCell>
                            <TableCell>{row.season}</TableCell>
                            <TableCell>{row.series}</TableCell>
                            <TableCell>{row.air_date}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          )}
        </div>
      </div>
    </WrapperStyled>
  );
};
