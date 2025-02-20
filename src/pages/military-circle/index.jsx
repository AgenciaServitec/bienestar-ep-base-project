import React from "react";
import { Text, Title } from "../../components/public";
import { CobieneLogo } from "../../images";
import styled from "styled-components";

export const MilitaryCircle = () => {
  return (
    <Container>
      <div className="content-initial">
        <img src={CobieneLogo} alt="Cobien logo" />
        <Title>Recreación</Title>
        <Text>
          El Comando de Bienestar del Ejército brinda al personal de Oficiales,
          Supervisores, Técnicos, Sub Oficiales en situación de actividad o
          retiro y sus familiares directos, los centros de recreación mediante
          las instalaciones de sus diferentes círculos militares.
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
    img {
      width: 8em;
      height: auto;
      object-fit: contain;
      margin-bottom: 1rem;
    }
  }
  .social-icons {
    width: 100%;
    padding-top: 1rem;

    .list-icon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;

      .item-icon {
        margin: 0 1rem;

        a,
        span {
          color: inherit;
        }
      }
    }
  }
`;
