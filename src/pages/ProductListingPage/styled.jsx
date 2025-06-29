import styled from "styled-components";

export const SectionStyled1 = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  background-color: #f9f8fe;
  .ordenar {
    width: 332;
    height: 60;
    /* top: 232px; */
    /* left: 1008px; */
    border-radius: 4px;
    border-width: 1px;
    background-color: #f9f8fe;
    border: solid black 1px;
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    padding: 5px;
    color: #474747;
    & select {
      background-color: transparent;
      border: none;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const SectionStyled2 = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  background-color: #f9f8fe;

  .ordenarPor {
    /* ======== CONFIG DA CAIXA ===== */
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 308px;
    height: 720px;
    border-radius: 4px;
    padding: 10px 30px;
    gap: 20px;
    /* border: black solid 2px; */
    h3 {
      width: 85;
      height: 24;
    }
    /* ===== fonte config ======== */
    font-family: Inter;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;

    /* ====== blocos com checkbox ======= */
    .divsBlocos {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h4 {
        font-size: 20px;
      }
      div {
        display: flex;
        gap: 20px;

        /* ======= ALTRANDO O CHECBOX ====== */
        input[type="checkbox"] {
          accent-color: #c92071;
          width: 22px;
          height: 22px;
          border-radius: 2px;
          border-width: 1px;
          cursor: pointer;
        }
      }
      label {
        display: flex;
        gap: 20px;

        /* ======= ALTRANDO O CHECBOX ====== */
        input[type="checkbox"] {
          accent-color: #c92071;
          width: 22px;
          height: 22px;
          border-radius: 2px;
          border-width: 1px;
          cursor: pointer;
        }
        input[type="radio"] {
          accent-color: #c92071;
        }
      }
    }
  }

  /* =========== BLOCO DE PRODUTOS ========== */
.blocoProdutos {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas grandes */
  padding: 20px;
  gap: 10px;
  max-width: 100%; /* Evita que ultrapasse a largura da tela */
  width: 904px;
  min-height: 918px;
}

/* Telas médias (tablet) */
@media (max-width: 1024px) {
  .blocoProdutos {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    width: 100%;
  }
}

/* Telas pequenas (celulares) */
@media (max-width: 600px) {
  .blocoProdutos {
    grid-template-columns: 1fr; /* 1 coluna */
    width: 100%;
  }
}

`;
