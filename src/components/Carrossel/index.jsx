// ======== codigo atual =====================================================
import React from 'react';
import { Button } from 'primereact/button';
import { CarouselWrapper, SlideContainer, SlideContent, SlideImage, StyledCarousel } from './styled';

// Seus dados dos slides
  const slides = [
    {
      id: 1,
      title: "Queima de estoque Nike 🔥",
      description:
        "Descontos imperdíveis em produtos selecionados. Aproveite enquanto durarem os estoques!",
      image: '/tenis1.png',
      buttonText: "Ver ofertas",
    },
    {
      id: 2,
      title: "Coleção Air Jordan 2025",
      description:
        "Descubra os novos modelos da linha Air Jordan com tecnologia de ponta.",
      image: "/tenis2.png",
      buttonText: "Explorar coleção",
    },
    {
      id: 3,
      title: "Acessórios esportivos",
      description:
        "Complete seu estilo com nossa linha de acessórios premium para esporte.",
      image: "/tenis3.png",
      buttonText: "Ver acessórios",
    },
    {
      id: 4,
      title: "Edição limitada",
      description:
        "Tênis exclusivos em edição limitada. Design único para quem busca exclusividade.",
      image: "/tenis4.png",
      buttonText: "Ver coleção",
    },
  ];

export const CarouselPrime = () => {
    // Este é o "molde" para cada item do carrossel.
    const slideTemplate = (slide) => {
        return (
            <SlideContainer>
                <SlideContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <Button label={slide.buttonText} className="p-button-raised p-button-warning" />
                </SlideContent>
                <SlideImage>
                    <img src={slide.image} alt={slide.title} />
                </SlideImage>
            </SlideContainer>
        );
    };

    return (
        <CarouselWrapper>
            <StyledCarousel 
                value={slides} 
                itemTemplate={slideTemplate} 
                numVisible={1} // Mostra 1 slide por vez
                numScroll={1} // Passa 1 slide por vez
                circular // Permite navegar do último para o primeiro
                autoplayInterval={5000} // Muda a cada 5 segundos
            />
        </CarouselWrapper>
    );
};


