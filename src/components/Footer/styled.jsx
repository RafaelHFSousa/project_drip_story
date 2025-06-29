import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  /* min-height: 30vh; */
  background-color: #1F1F1F;
  flex-direction: column;
  margin-top: 100px;
  padding: 100px 100px 20px 100px;
  gap: 30px;
  color: white;

`;
export const SectionGrande1Styled = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const SectionGrande2Styled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

export const Section1Styled = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  div {
    display: flex;
    gap: 30px;
  }
`;

export const Section2Styled = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 300px; */
  gap: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }
`;
