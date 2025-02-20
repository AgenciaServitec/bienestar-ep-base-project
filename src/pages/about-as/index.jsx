import React, { useState } from "react";
import { ImgCuartelCobiene } from "../../images";
import { Button, Text, Title } from "../../components/public";
import styled from "styled-components";

export const AboutAs = () => {
  const [buttonHidden, setButtonHidden] = useState(false);
  const [buttonHidden1, setButtonHidden1] = useState(false);
  const [buttonHidden2, setButtonHidden2] = useState(true);

  return (
    <Container>
      <div className="content-initial">
        <img src={ImgCuartelCobiene} alt="base" />
        <div className="wrapper-texts">
          <Title>NOSOTROS</Title>
        </div>
      </div>
      <Button width="100%" onClick={() => setButtonHidden(!buttonHidden)}>
        PRESENTACIÓN
      </Button>
      {buttonHidden && (
        <div className="content">
          <Text>
            Les doy la más cordial bienvenida al aplicativo móvil del COBIENE,
            cuyo principal objetivo es dar a conocer al personal de la
            Institución y sus familias, los servicios y convenios que se
            encuentran disponibles para ustedes.
            <br />
            <br />
            Cabe resaltar que, el bienestar de nuestro personal y sus
            respectivas familias es una prioridad del COBIENE, por eso se ha
            constituido como uno de sus pilares, esperamos que sea de su total
            agrado y por sobre todas las cosas, valoramos su opinión, la que nos
            servirá para ir mejorando permanentemente.
          </Text>
        </div>
      )}

      <Button width="100%" onClick={() => setButtonHidden1(!buttonHidden1)}>
        MISIÓN Y VISIÓN
      </Button>
      {buttonHidden1 && (
        <div className="content">
          <Text>
            <h3>Misión</h3>
            Promover y desarrollar actividades que aseguren el bienestar del
            personal de la institución y de sus familiares directos, con la
            finalidad de contribuir a elevar su moral y rendimiento.
            <h3>Visión</h3>
            Ser una organización eficiente, reconocida, valorada y transparente,
            comprometida con la calidad de servicio, que brinde el mayor
            bienestar posible al personal militar, civil y familiares directos
            de la institución.
            <h3>Lema</h3>
            "TRABAJANDO POR EL BIENESTAR DE LA FAMILIA MILITAR"
          </Text>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  h5 {
    padding: 0.5rem 0;
    text-align: center;
    justify-content: center;
  }
  h4 {
    text-align: center;
  }
  h3 {
    text-align: center;
    padding: 0.5rem 0;
  }
  .content-initial {
    margin: 1rem 0;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: 1rem;
    }

    .wrapper-texts {
      margin: 1rem 0;
    }
  }
  .agencia-servitec {
    text-align: center;
    padding: 1rem 0;
    .img-agencia-servitec {
      width: 80%;
      max-width: 20rem;
      object-fit: contain;
    }
  }

  .content {
    padding: 0 0.5rem;
    ul {
      margin: auto;
      text-align: center;
      list-style-type: none;
    }
  }
`;
