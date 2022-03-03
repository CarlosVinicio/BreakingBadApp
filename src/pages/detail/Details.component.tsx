import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCharacterById,
  getQuoteByAuthor,
} from "../../api/services/breaking-bad";
import { Character } from "../../utils/interfaces/Api";
import { WrapperStyled } from "./Details.styled";

export const Details = () => {
  const [details, setDetails] = useState<Character[]>();
  const [quoteDetail, setQuoteDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCharacterData(id);
    }
  }, [id]);

  useEffect(() => {
    getQuoteData();
  }, [details]);

  const getCharacterData = async (id: string) => {
    const response = await getCharacterById(id);
    setDetails(response);
  };

  const getQuoteData = async () => {
    if (details && details?.length > 0) {
      const response = await getQuoteByAuthor(details[0].name);
      setQuoteDetail(response);
    }
  };

  return (
    <WrapperStyled>
      {details && quoteDetail && (
        <div className="container__details">
          <div>{JSON.stringify(details)}</div>
          <div>{JSON.stringify(quoteDetail)}</div>
          <div>Datos principales</div>
          <div className="details__data">
            <div className="image">imagen</div>
            <div className="data">
              <div>nombre</div>
              <div>nickname</div>
              <div>cumpleaños</div>
            </div>
          </div>
        </div>
      )}
    </WrapperStyled>
  );
};
