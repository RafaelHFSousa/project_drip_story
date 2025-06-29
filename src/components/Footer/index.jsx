import { FooterStyled, Section1Styled, Section2Styled, SectionGrande1Styled, SectionGrande2Styled } from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <SectionGrande1Styled>
          <Section1Styled>
            <img src="src/assets/logo-footer.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              ipsa, nemo debitis eveniet, similique quaerat excepturi sequi.
            </p>
            <div>
              <img src="src/assets/facebook.svg" alt="ss" />
              <img src="src/assets/instagram.svg" alt="" />
              <img src="src/assets/twitter.svg" alt="" />
            </div>
          </Section1Styled>
          <Section2Styled>
            <h2>Informações</h2>
            <ul>
              <li>Sobre Drip Store </li>
              <li>Segurança </li>
              <li>Wishlist </li>
              <li>Blog </li>
              <li>Trabalhe conosco </li>
              <li>Meus Pedidos</li>
            </ul>
          </Section2Styled>
          <Section2Styled>
            <h2>Categorias</h2>
            <ul>
              <li>Camisetas </li>
              <li>Calças </li>
              <li>Bonés </li>
              <li>Headphones </li>
              <li>Tênis </li>
            </ul>
          </Section2Styled>
          <Section2Styled>
            <h2>Contato </h2>
            <div>
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza-CE,
                60150-161{" "}
              </p>
              <p>(85) 3051-3411 </p>
            </div>
          </Section2Styled>
        </SectionGrande1Styled>
        <SectionGrande2Styled>
          <hr />
          <h3>@ 2025 Digital College</h3>
        </SectionGrande2Styled>
      </FooterStyled>
    </>
  );
};
