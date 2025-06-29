import React from 'react';
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #c92071;
  display: flex;
  align-items: center;

  i {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #333;
    position: relative;

    &.active {
      font-weight: bold;
      color: #c92071;
      border-bottom: 3px solid #c92071;
      padding-bottom: 2px;
    }
  }
`;

const Actions = styled.div`
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

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <i className="pi pi-angle-right"></i> Digital Store
      </Logo>

      <Nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/meus-pedidos">Meus Pedidos</NavLink>
      </Nav>

      <Actions>
        <div style={{ position: 'relative' }}>
          <InputText placeholder="Pesquisar produto..." />
          <i className="pi pi-search search-icon"></i>
        </div>

        <NavLink to="/cadastro" style={{ textDecoration: 'underline', color: '#333' }}>
          Cadastre-se
        </NavLink>

        <Button label="Entrar" className="p-button-raised p-button-rounded" style={{ background: '#c92071', border: 'none' }} />

        <div style={{ position: 'relative' }}>
          <i className="pi pi-shopping-cart" style={{ fontSize: '1.5rem', color: '#c92071' }}></i>
          <Badge value="2" severity="danger" style={{ position: 'absolute', top: '-8px', right: '-8px' }} />
        </div>
      </Actions>
    </HeaderContainer>
  );
};
