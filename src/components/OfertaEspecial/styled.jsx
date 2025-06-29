import styled from 'styled-components';

// O container principal que alinha as duas colunas
export const OfertaContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem; /* Espaço entre a imagem e o texto */
    padding: 4rem 2rem;
    max-width: 1100px;
    max-height: 553px;
    margin: 40px auto;
    flex-wrap: wrap; /* Permite quebrar em telas menores */
`;

// O container que funciona como a "máscara" circular roxa
export const ImageWrapper = styled.div`
    position: relative; /* Essencial para posicionar a imagem dentro dele */
    width: 466px;
    height: 466px;
    
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #EBEBFF; /* Cor de fundo lilás */
        border-radius: 50%; /* Faz a forma ser um círculo perfeito */
        transform: rotate(-15deg); /* Gira a forma para o efeito da imagem */
    }
`;

// A imagem do produto, posicionada sobre a máscara
export const ProductImage = styled.img`
    position: absolute;
    width: 120%; /* Imagem um pouco maior que o container para "vazar" */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centraliza a imagem perfeitamente */
`;

// O container para todo o conteúdo de texto
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinha o texto à esquerda */
    max-width: 450px;
`;

// O texto pequeno e rosa "Oferta especial"
export const Subheading = styled.span`
    color: #C92071; /* Cor rosa/magenta */
    font-weight: bold;
    font-size: 1rem;
`;

// O título principal
export const Title = styled.h2`
    font-size: 3rem; /* 48px */
    font-weight: 800;
    color: #1F2937;
    margin: 0.5rem 0 1rem 0;
    line-height: 1.2;
`;

// O parágrafo de descrição
export const Description = styled.p`
    font-size: 1rem;
    color: #4B5563; /* Cinza escuro */
    line-height: 1.6;
    margin-bottom: 2rem;
`;

// O botão "Ver Oferta" (usando a tag <button>)
export const CtaButton = styled.button`
    background-color: #C92071;
    color: white;
    width: 200px;
    height: 40px;
    text-align:center;
    font-weight: bold;
    font-size: 1rem;
    /* padding: 14px 32px; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #a8195d; /* Um tom mais escuro para o hover */
    }
`;