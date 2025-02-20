import styled from "styled-components";
import { CobieneLogo, ImgCuartelCobiene } from "../../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const HeaderHomePage = ({ onSetVisibleDrawer }) => {
  return (
    <Container>
      <img
        src={ImgCuartelCobiene}
        alt="Imagen Cuartel Cobiene"
        width="100%"
        height="100%"
      />
      <div className="content-right" onClick={() => onSetVisibleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
      <div className="horizontal-line" />
      <WrapperHeader>
        <div className="img-box">
          <img
            src={CobieneLogo}
            alt="Logo Cobiene"
            width="100%"
            height="100%"
          />
        </div>
        <div className="item-titles">
          <h3>COMANDO DE BIENESTAR</h3>
          <p>Del Ejército del Perú</p>
        </div>
      </WrapperHeader>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  img {
    width: 100%;
    height: 12rem;
  }
  .content-right {
    background-color: #7f9e47;
    padding: 0.5rem 0.7rem;
    border-radius: 0.7em;
    position: absolute;
    right: 4%;
    top: 5%;
    box-shadow: 2px 2px 3px #999;
  }
  .horizontal-line {
    width: 100%;
    height: 8px;
    background-color: #7f9e47;
  }
`;

const WrapperHeader = styled.div`
  width: 100%;
  display: grid;
  position: absolute;
  top: 8.4rem;
  padding: 0 1rem;
  grid-template-columns: auto 1fr;
  grid-gap: 0.7rem;
  .img-box {
    background: radial-gradient(#11581e, #041607);
    border: 7px solid #7f9e47;
    padding: 1rem;
    border-radius: 50%;
    width: 7em;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 4.3rem;
      height: 4.3rem;
      object-fit: contain;
    }
  }
  .item-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 1rem 0 0 0;
    h3,
    p {
      text-align: center;
      line-height: 1rem;
      font-size: 0.8rem;
    }
    h3,
    p {
      margin: 0;
    }
  }
  ${mediaQuery.minMobileM} {
    grid-template-columns: auto 1fr;
    grid-gap: 0.7rem;
    .img-box {
      width: auto;
      img {
        width: 4.7rem;
        height: 4.7rem;
        object-fit: contain;
      }
    }
    .item-titles {
      position: initial;
      padding: 1rem 0 0 0;
      h3 {
        line-height: 1.7rem;
        font-size: 1rem;
      }
    }
  }
`;
