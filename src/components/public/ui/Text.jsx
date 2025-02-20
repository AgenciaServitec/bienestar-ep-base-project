import React from "react";
import styled, { css } from "styled-components";

export const Text = ({ children, align = "justify" }) => {
  return <TextContainer align={align}>{children}</TextContainer>;
};

const TextContainer = styled.p`
  ${({ theme, align }) => css`
    text-align: ${align} !important;
    font-size: 19px;
    margin: 1rem 0;
    line-height: 1.5rem;
  `}
`;
