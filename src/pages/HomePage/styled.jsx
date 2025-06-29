import styled from "styled-components";

export const ColecoesDestaqueStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ProdutosAlta = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 20px;
  background-color: #f3f4f6;
`;

export const OfertaEspecialSection = styled.section`
  display: flex;
  max-height: 553px;

  .ofertaimg {
    position: relative;
    margin-top: 100px;
    margin-left: 50px;
    width: 466px;
    height: 466px;
    border-radius: 50%;
    background: radial-gradient(circle, #4200ff80, #ffffff);
    & img {
      position: absolute;
      top: 100px;
      left: 100px;
      width: 573px;
      height: 330px;
    }
  }
`;
