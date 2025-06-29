import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 439px;
  text-decoration: none;
  color: #8f8f8f;
  img {
    width: 292px;
    height: 321px;
    border-radius: 4px;
  }
  span {
    font-family: Inter;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #8f8f8f;
    width: 35;
    height: 24;
    /* text-decoration: none; */
    /* border-bottom: none; */
    /* top: 671px; */
    /* left: 1048px; */
  }
  h3 {
    font-family: Inter;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.75px;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
  }
`;
