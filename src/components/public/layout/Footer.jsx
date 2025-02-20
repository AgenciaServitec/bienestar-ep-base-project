import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <div className="social-icons">
        <p>
          <Link to="/policies-and-privacy" className="politicas">
            POLÍTICAS Y PRIVACIDAD
          </Link>
        </p>

        <p className="copyright-text">
          Copyright 2022. Todos los derechos reservados - Diseñado con{" "}
          <FontAwesomeIcon icon={faHeart} size="sm" /> por{" "}
          <a href="https://servitec.site/" target="_blank">
            Servitec Site
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;

  .social-icons {
    width: 100%;
    .social-links {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .section-btn-tel {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.7em auto;
      a {
        display: flex;
        gap: 0.5em;
        background: ${({ theme }) => theme.colors.secondary};
        padding: 0.7em 1em;
        border-radius: 1em;
        color: #fff;
      }
    }

    p {
      justify-content: center;
      text-align: center;

      a {
        color: white;
      }

      .politicas {
        text-decoration: none;
        font-size: small;
      }
    }

    .copyright-text {
      font-size: small;
      text-align: center;
      color: white;
      padding: 0.5rem;

      svg {
        color: red;
      }

      a {
        color: #d7b405;
      }
    }
  }
`;
