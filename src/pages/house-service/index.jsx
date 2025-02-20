import React from "react";
import { Button, InitialContent } from "../../components/public";
import { CobieneLogo } from "../../images";
import { useNavigate } from "react-router";

export const HouseService = () => {
  const navigate = useNavigate();

  return (
    <>
      <InitialContent title="Vivienda" img={CobieneLogo} />

      <Button
        width="100%"
        onClick={() => navigate("/house-service/house-services")}
      >
        Casa de servicio
      </Button>
      <Button
        width="100%"
        onClick={() => NavigateGoToLink("https://fovime.com/")}
      >
        FOVIME
      </Button>
    </>
  );
};
