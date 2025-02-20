import React from "react";
import { Drawer as DrawerAntd } from "antd";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import {
  faBars,
  faChurch,
  faGraduationCap,
  faThLarge,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  return (
    <>
      <ComponentDrawerAntd
        title={null}
        placement="right"
        onClose={() => onSetVisibleDrawer(false)}
        open={visibleDrawer}
      >
        <div className="wrapper-content">
          <MenuItem
            text="INICIO"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faBars}
            linkTo="/"
          />
          <MenuItem
            text="NOSOTROS"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faThLarge}
            linkTo="/about-as"
          />
          <MenuItem
            text="APOYO EDUCATIVO"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faGraduationCap}
            linkTo="/education"
          />
          <MenuItem
            text="SERVICIO SOCIAL"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faUsers}
            linkTo="/military-circle"
          />
          <MenuItem
            text="CONVENIOS"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faCircle}
            linkTo="/conventions"
          />
          <MenuItem
            text="FONDO DE SEPELIO"
            onClick={() => onSetVisibleDrawer(false)}
            icon={faChurch}
            linkTo="/funeral-fund"
          />
        </div>
      </ComponentDrawerAntd>
    </>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: ${({ theme }) => theme.colors.font1};

  .ant-drawer-header {
    .ant-drawer-close {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    background: #fff;
  }

  .wrapper-header {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 2rem 1rem;
    img {
      width: 7rem;
    }
  }
  .show-list {
    color: #000;
  }

  .wrapper-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    color: ${({ theme }) => theme.colors.dark};
    img {
      width: 5rem;
    }
    h4 {
      color: inherit;
    }
  }
`;
