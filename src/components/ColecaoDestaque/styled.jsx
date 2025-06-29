import styled from "styled-components";
import { Button } from "primereact/button";

// 1. O Container Principal com a imagem de fundo
export const CardContainer = styled.div`
  position: relative;
  height: 251px;
  max-width: 405px;
  border-radius: 8px;
  margin: 20px;

  /* Garante que tudo fique dentro das bordas arredondadas */
  overflow: hidden;
  /* Aplicando a imagem de fundo que vem da prop */
  background-image: url(${(props) => props.$bgImageSrc});
  /* Faz a imagem cobrir todo o espaço do card */
  background-size: cover;
  /* Centraliza a imagem */
  background-position: center;
`;

// 2. O Badge de Desconto com posicionamento absoluto
export const DiscountBadge = styled.span`
  position: absolute; /* Posicionamento "flutuante" */
  top: 25px; /* Distância do topo */
  left: 50px; /* Distância da esquerda */

  background-color: #e7ff86;
  color: #1f2937;
  padding: 5px 15px;
  max-width: 96px;
  max-height: 32px;
  border-radius: 29px;
  font-family: Inter;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.75px;
  font-weight: bold;
  z-index: 10; /* Garante que fique na frente do fundo */
`;

// 3. O Botão Estilizado com posicionamento absoluto
export const ShopButton = styled(Button)`
  /* Posicionando o botão em si */
  position: absolute !important;
  bottom: 32px; /* Distância de baixo */
  left: 32px; /* Distância da esquerda */
  z-index: 10; /* Garante que fique na frente do fundo */
  width: 153px;
  height: 48px;
  background-color: #f5f5f5;
  color: #c92071;
  border: none;
  /* Estilizando a aparência interna do botão */
  .p-button {
    background: #f5f5f5 !important;
    color: #c92071 !important;

    border: none !important;
    font-weight: bold !important;
    padding: 12px 24px !important;
    border-radius: 4px !important;
    transition: background-color 0.2s;

    &:hover {
      background: #e0e0e0 !important;
    }
  }
`;
