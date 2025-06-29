import { Rating } from "primereact/rating";
import { SelectButton } from "primereact/selectbutton";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha em telas pequenas */
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  gap: 40px; /* Espaço entre a galeria e os detalhes */
  font-family: "Inter", sans-serif; /* Use a fonte do seu projeto */

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const GalleryWrapper = styled.div`
  flex: 1; /* Ocupa metade do espaço */
  max-width: 50%;

  .p-galleria-item-wrapper {
    /* Forçar a imagem a ter uma cor de fundo, como no exemplo */
    background-color: #f0f0f8;
  }

  .p-galleria-thumbnail-container {
    background-color: transparent;
  }

  .p-galleria .p-galleria-thumbnail-item.p-galleria-thumbnail-item-current {
    outline: 2px solid #e6007e; /* Cor do seu tema */
    outline-offset: 2px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const DetailsWrapper = styled.div`
  flex: 1; /* Ocupa a outra metade */
  max-width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: #1f2937;
`;

export const ProductMeta = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
`;

// ========= ESTRELAS DOURADAS ======
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  color: #6b7280;
  & .nota {
    display: flex;
    align-items: center;
    gap: 5px;
    color: white;
    background-color: #f6aa1c;
    padding: 4px 14px;
    border-radius: 6px;
    font-weight: 900;
  }
  & .rating-star-icon {
    color: white; /* Define a cor da estrela para branco */
    font-size: 18px; /* Ajusta o tamanho da estrela */
  }
`;

export const GoldenStar = styled(Rating)`
  .p-rating-item:not(.p-highlight) .p-rating-icon {
    color: #f6aa1c;
  }
`;

export const PriceContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

export const CurrentPrice = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
`;

export const OldPrice = styled.span`
  font-size: 20px;
  color: #9ca3af;
  text-decoration: line-through;
`;

export const Description = styled.div`
  margin-top: 24px;
  color: #4b5563;
  line-height: 1.6;
  & .titulo_descricao {
    color: #8f8f8f;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.75px;
    padding-bottom: 10px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #3741519e;
  margin-top: 24px;
  margin-bottom: 12px;
`;

// =========== modificando css do primeREact ==========
export const SelectButtonStyled = styled(SelectButton)`
  display: flex;
  gap: 10px;

  /* Estilo para CADA botão individualmente */
  .p-button {
    background: #ffffff;           
    border: 1px solid #adb5bd;    
    color: #495057;        
    width: 48px;
    height: 48px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s; /* Animação suave */

    /* Centraliza o texto/número dentro do botão */
    .p-button-label {
      flex-grow: 1;
    }
  }

  /* Estilo para o botão que está SELECIONADO (com a classe .p-highlight) */
  .p-button.p-highlight {
    background-color: #e6007e; /* Cor de fundo rosa para o SELECIONADO */
    border-color: #e6007e;     /* Cor da borda rosa para o SELECIONADO */
    color: white;              /* Cor do texto branca para o SELECIONADO */
  }

  /* Opcional: Efeito HOVER (passar o mouse) para os botões NÃO selecionados */
  .p-button:not(.p-highlight):hover {
    background-color: #fdf2f8; 
    border-color: #e6007e;     
    color: #e6007e;          
  }

  /* Opcional: Remove a sombra que o PrimeReact adiciona ao focar */
  .p-button:focus {
    box-shadow: none;
  }
`


export const ColorOptions = styled.div`
  display: flex;
  gap: 12px;
`;

export const ColorDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  cursor: pointer;
  border: 2px solid transparent;
  outline: ${props => props.$isSelected ? `2px solid ${props.color}` : "none"};
  outline-offset: 3px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BuyButton = styled.div`
  margin-top: 32px;
  .p-button {
    background-color: #fbbf24; /* Cor amarela do botão */
    border-color: #fbbf24;
    color: white;
    width: 220px;
    height: 48px;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      background-color: #f59e0b;
      border-color: #f59e0b;
    }
  }
`;
