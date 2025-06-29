import axios from "axios";
import { CarouselPrime } from "../../components/Carrossel";
import { ColecaoDestaque } from "../../components/ColecaoDestaque";
import { ColecoesDestaqueStyled, ProdutosAlta } from "./styled";
import { useEffect, useState } from "react";
import { ProductCardHome } from "../../components/ProductCardHome";
import { OfertaEspecial } from "../../components/OfertaEspecial";
import { Link } from "react-router-dom";
import { ColecoesDestaque2 } from "../../components/ColecaoDestaque2";

export const HomePage = () => {
  const [produtos, setProdutos] = useState();
  async function buscarApi() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const novaArray8 = data.filter((e) => e.id < 9);
    setProdutos(novaArray8);
  }
  useEffect(() => {
    buscarApi();
  }, []);
  return (
    <>
      <CarouselPrime />
      <section>
        <div style={{ marginLeft: "25px" }}>
          <h3>Coleções em destaque</h3>
        </div>
        <ColecoesDestaqueStyled>
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-1.png"} />
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-2.png"} />
          <ColecaoDestaque discount={"30"} bgImageSrc={"/collection-3.png"} />
        </ColecoesDestaqueStyled>
      </section>
      <ColecoesDestaque2 />
      <section >
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: "30px 80px 20px 20px", backgroundColor: "#F3F4F6"}}>
            <h3 >
              Produtos em Alta
            </h3>
            <Link style={{color:'#C92071', textDecoration:'none', fontWeight:'bold'}} to={"/produtos"}>
              Ver todos <i style={{marginLeft:'8px', color:'#C92071'}} className="pi pi-arrow-right"></i>
            </Link>
          </div>
        <ProdutosAlta>
          {produtos &&
            produtos.map((e) => <ProductCardHome key={e.id} produto={e} />)}
        </ProdutosAlta>
      </section>
      <OfertaEspecial
        imageSrc={"/ofertaEspecial.png"}
        imageAlt={"imagem da ofeta"}
      />
    </>
  );
};
