import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "./Drawer";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { breakPoints } from "../../../styles/constants/breakPoints";

export const BaseLayout = ({ children }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleFormContact, setVisibleFormContact] = useState(false);

  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  return (
    <Container>
      <div className="overlay"></div>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        visibleFormContact={visibleFormContact}
        handleVisibleFormContact={handleVisibleFormContact}
      />
      <Header onSetVisibleDrawer={setVisibleDrawer} />
      <div className="body">{children}</div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: ${breakPoints.tablet}px;
  margin: auto;
  min-height: 100vh;
  height: auto;
  position: relative;
  background: #fff;
  padding: 0.4em;
  .body {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;
