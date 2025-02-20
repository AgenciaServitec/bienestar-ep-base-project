import React, { useState } from "react";
import { Button, IconList, Text } from "../../components/public";
import styled, { css } from "styled-components";
import { FondoSepelio } from "../../images";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";

export const FuneralFund = () => {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [buttonHidden2, setButtonHidden2] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="content-logo">
        <img src={FondoSepelio} alt="Apoyo educativo" />
        <h2>Fondo Solidario De Sepelio Del Ejército Del Perú</h2>
        <Text>
          Institución de apoyo solidario y sentido humanista, creado para
          atender los casos de fallecimiento de sus afiliados. Pueden afiliarse
          de manera voluntaria el personal de oficiales, técnicos, sub
          oficiales, empleados civiles y sus familiares directos excepto los
          mayores de 75 años.
        </Text>
      </div>

      <div className="servicies-section">
        <Text>El Fossep brinda los siguientes servicios:</Text>

        <Button width="100%" onClick={() => setButtonHidden(!buttonHidden)}>
          Servicio de inhumación
        </Button>

        {buttonHidden && (
          <div className="content-hidden">
            <ul>
              <li>ATAÚD</li>
              <li>CARROZA</li>
              <li>CAPILLA ARDIENTE</li>
              <li>SALA VELATORIA</li>
              <li>TRASLADO (F) AL VELATORIO</li>
              <li>VEHÍCULO PORTA FLORES</li>
              <li>TRÁMITE ADMINISTRATIVO </li>
              <li> PREPARACIÓN DE CUERPO</li>
              <li> VEHÍCULO FAMILIAR O CARGADORES</li>
              <li> TUMBA O NICHO</li>
            </ul>
          </div>
        )}

        <Button width="100%" onClick={() => setButtonHidden2(!buttonHidden2)}>
          Servicio de cremación
        </Button>

        {buttonHidden2 && (
          <div className="content-hidden">
            <ul>
              <li> ALQUILER DE ATAÚD</li>
              <li>CARROZA</li>
              <li>CAPILLA ARDIENTE</li>
              <li>SALA VELATORIA</li>
              <li>TRASLADO (F) AL VELATORIO</li>
              <li>VEHÍCULO DE FLORES</li>
              <li>TRÁMITE ADMINISTRATIVO</li>
              <li>PREPARACIÓN DE CUERPO</li>
              <li>VEHÍCULO FAMILIAR O CARGADORES</li>
              <li>URNA, HORNO CREMATORIO Y NECROPSIA</li>
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    .content-logo {
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
    .servicies-section {
      padding-bottom: 2em;
    }

    .content-hidden {
      padding: 0.5em 2em;
    }
    .icon-section {
      h2 {
        line-height: 2.2rem;
      }
      .icon-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 1rem;
      }
    }

    .link-list {
      padding: 1rem;
    }
  `}
`;
