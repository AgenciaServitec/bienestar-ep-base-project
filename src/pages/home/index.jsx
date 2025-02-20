import React from "react";
import styled from "styled-components";
import { Button } from "../../components/public";
import { useNavigate } from "react-router";
import { CobieneLogo } from "../../images";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="content-center">
        <img
          src={CobieneLogo}
          alt="Cobiene logo"
          onClick={() => navigate("/")}
        />
        <span style={{ fontSize: "1.7em" }}>COBIENE EP</span>
      </div>
      <Button width="100%" onClick={() => navigate("/education")}>
        APOYO EDUCATIVO
      </Button>
      <Button width="100%" onClick={() => navigate("/military-circle")}>
        SERVICIO SOCIAL
      </Button>
      <Button width="100%" onClick={() => navigate("/conventions")}>
        CONVENIOS
      </Button>
      <Button width="100%" onClick={() => navigate("/funeral-fund")}>
        FONDO DE SEPELIO
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  a {
    width: 330px;
    max-width: 500px;
    display: block;
    margin: 2rem auto 0;
  }
  button {
    font-weight: 400 !important;
  }

  .content-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    place-items: center;
    min-height: 40svh;
    img {
      width: 9em;
    }
  }
`;
