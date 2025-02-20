import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const IconList = ({ link, icon, text }) => {
  return (
    <Container>
      <a href={link} rel="nofollow">
        <FontAwesomeIcon icon={icon} size="2x" aria-label={text} />
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  a {
    color: #fff;
  }
`;
