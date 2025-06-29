import { CardStyled } from "./styled";

export const ProductCardHome = ({ produto }) => {
  return (
    <CardStyled to={`/produtos/${produto.id}`}>
      <img src={produto.image} alt={`imagem do ${produto.title}`} />
      <span>{produto.category}</span>
      <h3>{produto.title}</h3>
      <p>{`$${produto.price}`}</p>
    </CardStyled>
  );
};
