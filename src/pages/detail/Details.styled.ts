import styled from "@emotion/styled";

export const WrapperStyled = styled.div`
  .container__details {
    height: 100vh;
    max-width: 1150px;
    margin: auto;
    margin-top: 20px;
  }
  .banner-image {
    width: 100%;
  }
  .character__detail{
    display: flex;
    padding: 30;  
  }
  .character__detail__image {
    width: 350px;
    height: 350px;
    border-radius: 8px;
    margin-right: 25px;
  }
  .character__detail__image>img{
    width: 100%;
    height: 100%;
  } 
  .character__detail_data {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    width: 100%;
    margin-top: 20px;
    .name{
      font-size: 30px;
      margin-bottom: 10px;
      color: darkcyan;
      border-bottom: 1px solid;
    }
    .data__block{
      margin-bottom: 10px;
    }
    .quotes{
      border: solid;
      background-color: ghostwhite;
      height: 114px;
      border-radius: 10px;
      align-items: center;
      display: flex;
      padding-left:20px;
    }
    .data__block__horizontal{
      border: solid;
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      background-color: ghostwhite;
      height: 114px;
      border-radius: 10px;
      align-items: center;
    }
    .title {
      font-size: 20;
      font-weight: 600;
      color: "#000";
    }
  }
  .table{
    padding-bottom: 50px;
  }

`;
