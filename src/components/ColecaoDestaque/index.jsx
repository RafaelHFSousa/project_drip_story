import {
    CardContainer,
    DiscountBadge,
    ShopButton
} from './styled';

export const ColecaoDestaque = ({ discount, bgImageSrc }) => {
    return (
        // O container agora recebe a imagem de fundo via prop
        <CardContainer $bgImageSrc={bgImageSrc}>
            {/* Os únicos elementos "reais" dentro do card agora */}
            <DiscountBadge>{discount}% OFF</DiscountBadge>
            <ShopButton label="Comprar" />
        </CardContainer>
    );
};