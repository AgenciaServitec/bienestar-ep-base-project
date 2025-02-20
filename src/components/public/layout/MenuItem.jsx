import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItem = ({ onClick, text, icon, linkTo }) => {
  return (
    <Container onClick={() => onClick()}>
      <Link to={linkTo} className="section-link">
        <div className="item-left">
          <div className="box-icon">
            <FontAwesomeIcon className="item-icon" icon={icon} />
          </div>
        </div>
        <div className="box-text">
          <h3>{text}</h3>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  .section-link {
    display: grid;
    grid-template-columns: 13% 1fr;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .box-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.dark};
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-icon {
      color: #fff;
      font-size: 1.2em;
    }
  }
  .box-text {
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    h3 {
      font-family: Arial, Helvetica, sans-serif;
      color: ${({ theme }) => theme.colors.dark};
      margin: 0;
    }
  }
`;
