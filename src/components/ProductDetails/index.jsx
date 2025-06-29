import React, { useState } from "react"; // Importando o useState

// ==== Importando componentes do PrimeReact ==========
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
// =============== STYLED COMPONENTS =========
import {
  BuyButton,
  ColorDot,
  ColorOptions,
  CurrentPrice,
  Description,
  DetailsWrapper,
  GalleryWrapper,
  GoldenStar,
  OldPrice,
  PriceContainer,
  ProductContainer,
  ProductMeta,
  ProductName,
  RatingContainer,
  SectionTitle,
  SelectButtonStyled,
} from "./styled";

// Dados estáticos para os seletores, já que não vêm da API
const availableSizes = [
  { label: "39", value: 39 },
  { label: "40", value: 40 },
  { label: "41", value: 41 },
  { label: "42", value: 42 },
  { label: "43", value: 43 },
];
const availableColors = [
  { name: "Cor Padrão", hex: "#E6007E" },
  { name: "Preto", hex: "#444444" },
  { name: "Azul", hex: "#6B7280" },
];

export const ProductDetailsPage = ({ produto }) => {
  // Passo 1: Reintroduzindo o estado para controlar as seleções do usuário
  const [selectedSize, setSelectedSize] = useState(41); // Valor inicial
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);

  // Passo 5: Verificação para evitar erros enquanto os dados da API não chegam
  if (!produto) {
    return <div>Carregando produto...</div>; // Ou um componente de "Spinner" / "Loader"
  }

  // Passo 2: Adaptando a imagem única da API para o formato que a Galleria espera (um array)
  const images = [
    {
      itemImageSrc: produto.image,
      thumbnailImageSrc: produto.image,
      alt: produto.title,
    },
  ];

  // Templates da Galleria - agora eles recebem a imagem do array 'images'
  const itemTemplate = (item) => {
    return (
      <div style={{ background: "red" }}>
        <img
          src={item.itemImageSrc}
          alt={item.alt}
          style={{ maxWidth: "600px", maxHeight: "571px", display: "block" }}
        />
      </div>
    );
  };
  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ maxWidth: "80px", display: "block" }}
      />
    );
  };

  // ==== Simulando um preço antigo para manter o layout ====
  const oldPriceValue = produto.price * 1.25; // Ex: 25% mais caro

  return (
    <ProductContainer>
      <GalleryWrapper>
        <Galleria
          value={images} // Usando o array 'images' que criamos
          item={itemTemplate} // Passando o template para o item principal
          thumbnail={thumbnailTemplate}
          numVisible={5}
          style={{ maxWidth: "640px" }}
          showItemNavigators
        />
      </GalleryWrapper>

      <DetailsWrapper>
        <ProductName>{produto.title}</ProductName>

        {/* Usando dados reais da API: categoria e ID do produto */}
        <ProductMeta>
          {produto.category} | REF: {produto.id}
        </ProductMeta>

        <RatingContainer>
          {/* Acesso correto aos dados de rating da API */}
          <GoldenStar
            value={produto.rating.rate}
            readOnly
            cancel={false}
            stars={5}
          />
          <div className="nota">
            {`${produto.rating.rate}`}
            <i className="pi pi-star rating-star-icon"></i>
          </div>
          <span>({produto.rating.count} avaliações)</span>
        </RatingContainer>

        <PriceContainer>
          <CurrentPrice>{`R$ ${produto.price
            .toFixed(2)
            .replace(".", ",")}`}</CurrentPrice>
          <OldPrice>{`R$ ${oldPriceValue
            .toFixed(2)
            .replace(".", ",")}`}</OldPrice>
        </PriceContainer>

        <Description>
          <p className="titulo_descricao">Descrição do produto</p>
          <p>{produto.description}</p>
        </Description>

        {/* Passo 3: Reativando os seletores com dados estáticos */}
        <SectionTitle>Tamanho</SectionTitle>
        <SelectButtonStyled
          value={selectedSize}
          options={availableSizes}
          onChange={(e) => setSelectedSize(e.value)}
          optionLabel="label"
        />

        <SectionTitle>Cor</SectionTitle>
        <ColorOptions>
          {availableColors.map((color) => (
            <ColorDot
              key={color.name}
              color={color.hex}
              // Mude de 'isSelected' para '$isSelected'
              $isSelected={selectedColor.name === color.name}
              onClick={() => setSelectedColor(color)}
              title={color.name}
            />
          ))}
        </ColorOptions>

        <BuyButton>
          <Button label="COMPRAR" />
        </BuyButton>
      </DetailsWrapper>
    </ProductContainer>
  );
};
