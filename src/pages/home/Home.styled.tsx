import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  height: 100%;
  max-width: 1150px;
  margin: auto;
  margin-top: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
    margin-bottom: 5px;
  }
`;