
import {
    OfertaContainer,
    ImageWrapper,
    ProductImage,
    TextWrapper,
    Subheading,
    Title,
    Description,
    CtaButton
} from './styled';

export const OfertaEspecial = ({ imageSrc, imageAlt }) => {
    return (
        <OfertaContainer>
            {/* Coluna da Esquerda: Imagem e sua "máscara" roxa */}
            <ImageWrapper>
                <ProductImage src={imageSrc} alt={imageAlt} />
            </ImageWrapper>

            {/* Coluna da Direita: Textos e botão */}
            <TextWrapper>
                <Subheading>Oferta especial</Subheading>
                <Title>Air Jordan edição de colecionador</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Description>
                <CtaButton>Ver Oferta</CtaButton>
            </TextWrapper>
        </OfertaContainer>
    );
};