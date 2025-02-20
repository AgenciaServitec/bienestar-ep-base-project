import React from "react";
import { useNavigate } from "react-router";
import { Service } from "../../images";
import { Button, InitialContent } from "../../components/public";
import styled from "styled-components";

export const ServiceSocial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InitialContent
        img={Service}
        title="Apoyo Social"
        description="El departamento de apoyo social como parte del comando de bienestar
          del ejército, realiza la suscripción de convenios de educación
          superior, descuentos por convenios en pensiones de estudios
          superiores, otorgamiento de becas, ayudas económicas para casos
          excepcionales de salud, descuento por convenios multiservicios, apoyo
          de servicio religioso, asesoramiento de apoyo a la familia y apoyo al
          personal discapacitado, orientados a lograr beneficios para el
          personal militar, civil en actividad, retiro, cesantes y sus
          familiares directos."
      />
      <Button
        width="100%"
        onClick={() => navigate("/social-service/economical-support")}
      >
        APOYO ECONOMICO
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button
        width="100%"
        onClick={() => navigate("/social-service/disabled-support")}
      >
        APOYO DISCAPACITADO
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions/companies")}>
        CONVENIOS MULTISECTORIAL
      </Button>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
`;
