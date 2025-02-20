import React from "react";
import styled from "styled-components";
import {
  faBars,
  faCircleChevronLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CobieneLogo } from "../../../images";
import { useNavigate } from "react-router";

export const Header = ({ onSetVisibleDrawer }) => {
  const navigate = useNavigate();

  const pathName = window.location.pathname;

  return (
    <Container>
      <div className="content-left" onClick={() => onSetVisibleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="content-center">
        <img
          src={CobieneLogo}
          alt="Cobiene logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="content-right">
        <div className="item" onClick={() => pathName !== "/" && navigate(-1)}>
          {pathName !== "/" ? (
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  .content-left,
  .content-right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
  }
  .content-center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    img {
      width: 2.6rem;
      height: auto;
      object-fit: contain;
      cursor: pointer;
    }
  }
`;
