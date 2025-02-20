import React from "react";
import { Convenios, ImgLogoConvention, ImgLogoConvention2 } from "../../images";
import { Text, Title } from "../../components/public";
import styled from "styled-components";

export const Conventions = () => {
  return (
    <Container>
      <div className="content-initial">
        <div className="section-images">
          <img src={ImgLogoConvention} alt="Convenios" />
          <img src={Convenios} alt="Apoyo educativo" />
          <img src={ImgLogoConvention2} alt="convenios" />
        </div>
        <Title>
          Convenios vigentes con entidades educativas y empresas privadas
        </Title>
        <Text>
          El Comando de Bienestar del Ejército ha suscrito convenios con
          universidades, institutos superiores, empresas privadas y bancos en
          beneficio de todo el personal militar, civil en actividad o retiro y
          sus familiares directos los cuales podrán disfrutar de tarifas o
          costos diferenciados en todos sus servicios.
        </Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  .content-initial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    .section-images {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.5em;
      align-items: center;
      img {
        width: 6em;
        height: auto;
        object-fit: contain;
        margin-bottom: 1rem;
      }
    }
  }
  .list-convenios {
    color: dodgerblue;
    text-decoration: underline;
    text-transform: uppercase;
    margin: 1.5rem 0;
    font-size: 1em;
    a {
      margin-bottom: 1.5rem;
      display: flex;
      align-items: start;
      svg {
        margin-right: 1rem;
      }
    }
  }
`;
