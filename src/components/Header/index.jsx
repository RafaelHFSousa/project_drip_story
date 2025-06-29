import { Logo } from "../Logo";
import {
  ActionsStyled,
  HeaderStyled,
  NavLinkStyled,
  Section1Styled,
  Section2Styled,
} from "./styled";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Lógica para realizar a busca com o valor de 'searchValue'
    // Por exemplo, redirecionar para uma página de resultados de busca
    // ou chamar uma função que atualiza uma lista de produtos.
    if (searchValue.trim() !== "") {
      console.log("Pesquisando por:", searchValue);
      
      // Aqui você implementaria a navegação ou a chamada da API
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Função para lidar com o Enter no input
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInputChange(event)
      handleSearch();
    }
  };

  return (
    <>
      <HeaderStyled>
        <Section1Styled>
          <Logo />
          <ActionsStyled>
            <div className="search-container">
              <InputText
                // value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Pesquisar produto..."
                className="search-input"
              />
              {console.log(searchValue)}
              <i
                className="pi pi-search search-icon"
                onClick={handleSearch}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            <NavLink
              to="/cadastro"
              style={{ textDecoration: "underline", color: "#333" }}
            >
              Cadastre-se
            </NavLink>

            <Button
              label="Entrar"
              className="p-button-raised p-button-rounded"
              style={{
                background: "#c92071",
                border: "none",
                padding: "10px 40px",
              }}
            />

            <div style={{ position: "relative" }}>
              <i
                className="pi pi-shopping-cart"
                style={{ fontSize: "1.5rem", color: "#c92071" }}
              ></i>
              <Badge
                value="2"
                severity="danger"
                style={{ position: "absolute", top: "-12px", right: "-18px" }}
              />
            </div>
          </ActionsStyled>
        </Section1Styled>

        <Section2Styled>
          <nav>
            <ul>
              <li>
                <NavLinkStyled to="/" end>
                  Home
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to={"produtos"}>Produtos</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to={"categorias"}>Categorias</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to={"meusPedidos"}>Meus Pedidos</NavLinkStyled>
              </li>
            </ul>
          </nav>
        </Section2Styled>
      </HeaderStyled>
    </>
  );
};
