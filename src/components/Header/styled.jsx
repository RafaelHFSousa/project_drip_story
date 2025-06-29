import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  gap: 20px;
`;

export const Section1Styled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  input {
    width: 500px;
    height: 60px;
    border-radius: 10px;
    text-align: start;
    padding: 20px;
    background-color: #c0c0c02b;
    border: none;
  }
  a {
    color: black;
  }
  .entrar {
    background-color: #c92071;
    padding: 10px 40px;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
  .carrinho {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Section2Styled = styled.section`
  display: flex;
  ul {
    display: flex;
    gap: 20px;
    list-style: none;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: #c92071;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: #c92071 solid 3px;
  }
  &:hover{
    color: #c92071;
  }
`;


// ============ USANDO O PRIME-REACT ===========

export const ActionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .p-inputtext {
    border-radius: 0.5rem;
    background-color: #f8f8f8;
    padding-right: 2rem;
  }

  .search-icon {
    position: relative;
    right: 2rem;
    cursor: pointer;
    color: #999;
  }
`;