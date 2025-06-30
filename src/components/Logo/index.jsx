import { LogoStyled } from "./steled";
import logoHeader from '../../assets/logo-header.svg';
export const Logo = () => {
  return (
    <>
      <LogoStyled to={"/"}>
        <img src={logoHeader} alt="Drip Store Logo" />
      </LogoStyled>
    </>
  );
};
