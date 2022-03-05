import styled from "@emotion/styled";

export const WrapperStyled = styled.div`
  .container__details {
    height: 100vh;
    max-width: 1150px;
    margin: auto;
    margin-top: 50px;
  }
  .details__data {
    display: flex;
    padding: 30;
    min-height: 200px;
    border-bottom: solid;
    padding-bottom: 47px;
    .data: {
      width: 100%;
      background-color: yellow;
      padding: 20px;
    }
  }
  .image {
    width: 300px;
    height: 275px;
  }
  .image>img{
    width: 100%;
    height: 100%;
  }
`;
