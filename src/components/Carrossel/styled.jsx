// Arquivo styled.js

import { Carousel } from 'primereact/carousel';
import styled from 'styled-components';

export const CarouselWrapper = styled.section`
    width: 100%;
    margin: 40px auto;
`;

export const StyledCarousel = styled(Carousel)`
    /* Precisamos de um container relativo para posicionar as setas e indicadores */
    position: relative;

    /* --- ESTILOS DAS SETAS --- */

    .p-carousel-prev, .p-carousel-next {
        position: absolute;  /* Posicionamento absoluto DENTRO do carrossel */
        top: 50%;            /* Alinha verticalmente no centro */
        transform: translateY(-50%); /* Ajuste fino do alinhamento vertical */
        background: white !important;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: #333 !important;
        box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        z-index: 10; /* Garante que fiquem acima dos slides */
        
    }

    .p-carousel-prev {
        left: 2rem; /* Distância da borda esquerda */
    }

    .p-carousel-next {
        right: 2rem; /* Distância da borda direita */
    }

    /* --- ESTILOS DOS INDICADORES (BOLINHAS) --- */

    .p-carousel-indicators {
        position: absolute; /* Posicionamento absoluto */
        bottom: 20px;       /* Distância da borda inferior */
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
        z-index: 10;
        
    }

    .p-carousel-indicator button {
        background-color: #D1D5DB; /* Cor cinza para bolinhas inativas */
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: background-color 0.3s;
        margin-left:5px;
        
    }
    
    .p-carousel-indicator.p-highlight button {
        background-color: #C92071; /* Cor rosa/magenta para a bolinha ativa */
    }
`;

export const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 6rem; /* Mais padding para acomodar as setas */
    gap: 2rem;
    background-color: #F3F4F6; // Um cinza mais claro, como na imagem
    border-radius: 8px;
    position: relative; /* Para o padrão de bolinhas decorativo */
    overflow: hidden; /* Garante que a decoração não vaze */

    /* Padrão de bolinhas amarelas no canto (opcional, mas fiel à imagem) */
    &::after {
        content: '';
        position: absolute;
        top: 20px;
        right: 40px;
        width: 100px;
        height: 100px;
        background-image: radial-gradient(#FBBF24 15%, transparent 20%);
        background-size: 15px 15px;
        opacity: 0.5;
    }
`;

// Novo componente para o texto laranja
export const Subheading = styled.span`
    color: #F59E0B; /* Laranja/Amarelo */
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
`;

export const SlideContent = styled.div`
    flex: 1;
    text-align: left;
    max-width: 450px;
    z-index: 5; /* Garante que o texto fique acima da decoração */

    h1 {
        font-size: 3.5rem; /* Maior e mais impactante */
        font-weight: 800; /* Mais grosso */
        color: #1F2937;
        margin: 0.5rem 0 1rem 0;
        line-height: 1.1;
    }

    p {
        font-size: 1rem;
        color: #4B5563;
        margin: 1rem 0 2rem 0;
        max-width: 400px;
    }
    
    /* O botão será estilizado pelo componente Button do PrimeReact,
       mas podemos garantir o tamanho aqui se quisermos */
    .p-button {
        background-color: #C92071;
        border-color: #C92071;
        width: 200px;
        height: 48px;
        font-weight: bold;

        &:hover {
            background-color: #a8195d !important;
            border-color: #a8195d !important;
        }
    }
`;

export const SlideImage = styled.div`
    flex: 1;
    
    img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
        transform: rotate(-15deg) scale(1.1); /* Efeito de rotação e escala como na imagem */
        filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
    }
`;