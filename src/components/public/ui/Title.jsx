import React from "react";
import styled, { css } from "styled-components";

export const Title = ({ children, align = "center" }) => {
  return <TitleContainer align={align}>{children}</TitleContainer>;
};

const TitleContainer = styled.h2`
  ${({ align }) => css`
    text-align: ${align};
    line-height: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  `}
`;
