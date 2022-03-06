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

  useEffect(() => {
    getAllEpisodes().then((response: Episodes[]) => {
      setEpisodes(response);
    });
  }, []);

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

          {episodes && episodes.length > 0 && (
            <div className="character__detail">
              <div className="character__detail_data">
                <div className="name">{t("details.episodes")}</div>
                <div className="data__block__horizontal">
                  <div>
                    <div className="title">{t("details.episodes.title")}</div>
                    <div>{episodes[0].title}</div>
                  </div>
                  <div>
                    <div className="title">
                      {t("details.episodes.espisode")}
                    </div>
                    <div>{episodes[0].episode}</div>
                  </div>
                  <div>
                    <div className="title">{t("details.episodes.sesion")}</div>
                    <div>{episodes[0].season}</div>
                  </div>
                  <div>
                    <div className="title">{t("details.episodes.series")}</div>
                    <div>{episodes[0].series}</div>
                  </div>
                  <div>
                    <div className="title">{t("details.episodes.date")}</div>
                    <div>{episodes[0].air_date}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
        </div>
      </div>
    </WrapperStyled>
  );
};
