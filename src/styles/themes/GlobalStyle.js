import { css, createGlobalStyle } from "styled-components";
import { mediaQuery } from "../constants/mediaQuery";

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.dark};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    overflow-x: hidden;
  }

  h1 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.xxx_large};
    font-weight: bold;
  }

  h2 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.xx_large};
    font-weight: bold;

    ${mediaQuery.minTablet} {
      font-size: 2rem;
    }
  }

  h3 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.x_large};
    font-weight: bold;
  }

  h4 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.large};
  }

  h5 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.medium};
  }

  h6 {
      font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.font_sizes.small};
  }

  h1,
  h2,
  h3 {
    line-height: 2.7rem;
    font-family: "MontserratRegular", serif;
  }
  p,
  ul {
    font-size: ${({ theme }) => theme.font_sizes.small};
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const antd = {
  modals: css`
    .ant-modal {
      background: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.font2};
      .ant-modal-content {
        background: inherit;
        .ant-modal-body {
          color: inherit;
          .ant-modal-confirm-body-wrapper {
            .ant-modal-confirm-title,
            .ant-modal-confirm-content {
              color: inherit;
            }
          }
        }
        .ant-modal-confirm-btns {
          .ant-btn {
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.font1};
            &:hover,
            &:focus {
              border-color: ${({ theme }) => theme.colors.secondary};
            }
          }
          .ant-btn-dangerous {
            background: ${({ theme }) => theme.colors.error};
            color: ${({ theme }) => theme.colors.font1};
          }
        }
      }
    }
  `,
  datePicker: css`
    .ant-calendar-picker-container {
      .ant-calendar {
        background: ${({ theme }) => theme.colors.secondary} !important;
        color: ${({ theme }) => theme.colors.font2} !important;
        border: none;
        .ant-calendar-input-wrap {
          border: none;
          .ant-calendar-input {
            color: ${({ theme }) => theme.colors.font2};
            background: ${({ theme }) => theme.colors.secondary};
          }
        }
        .ant-calendar-date-panel {
          .ant-calendar-header {
            border: none;
            .ant-calendar-my-select {
              .ant-calendar-month-select,
              .ant-calendar-year-select {
                color: ${({ theme }) => theme.colors.font1};
              }
            }
          }

          .ant-calendar-body {
            border: none;
            .ant-calendar-date {
              color: ${({ theme }) => theme.colors.font2};
              font-weight: 600;
              &:hover {
                background: rgba(102, 101, 101, 0.54);
              }
            }
            .ant-calendar-selected-day .ant-calendar-date {
              background: ${({ theme }) => theme.colors.secondary};
              border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
            }
            .ant-calendar-today .ant-calendar-date {
              color: ${({ theme }) => theme.colors.font2};
              border: ${({ theme }) => `1px solid ${theme.colors.font2}`};
            }
            .ant-calendar-last-month-cell .ant-calendar-date,
            .ant-calendar-next-month-btn-day .ant-calendar-date,
            .ant-calendar-last-month-cell .ant-calendar-date:hover,
            .ant-calendar-next-month-btn-day .ant-calendar-date:hover {
              color: ${({ theme }) => theme.colors.font1};
              font-weight: 400;
            }
          }

          .ant-calendar-footer {
            border: none;
            .ant-calendar-today-btn {
              color: ${({ theme }) => theme.colors.font2};
            }
          }
        }
      }
    }

    .ant-calendar-picker {
      div {
        .ant-calendar-picker-icon {
          color: ${({ theme }) => theme.colors.font2} !important;
        }
      }
    }
  `,
  radio: css`
    .ant-radio-checked .ant-radio-inner {
      border-color: ${({ theme }) => theme.colors.primary};
      &::after {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  `,
  checkbox: css`
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-checked:after {
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background: ${({ theme }) => theme.colors.primary} !important;
      color: ${({ theme }) => theme.colors.font2} !important;
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }

    .ant-checkbox-inner {
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  `,
  input: css`
    .ant-input,
    .ant-input-number {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.font2};
    }

    // .ant-input-placeholder {
    //   color: //({ theme }) => theme.colors.black40};
    // }

    .ant-input-affix-wrapper {
      .ant-input-suffix {
        .ant-input-clear-icon {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    .ant-input-number-handler-wrap {
      display: none;
    }
  `,
  select: css`
    .ant-select {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.font2};

      .ant-select-clear {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .ant-select-dropdown {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: ${({ theme }) => theme.border_radius.xx_small};

      .ant-select-item {
        color: ${({ theme }) => theme.colors.font2};
      }

      .ant-select-item-option-selected {
        font-weight: 600;
      }

      .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background: ${({ theme }) => theme.colors.quinary};
        color: ${({ theme }) => theme.colors.font2};
      }
      .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  `,
  notification: css`
    .ant-notification {
      .ant-notification-notice {
        margin: 5px 0;
        background: ${({ theme }) => theme.colors.secondary};
      }
      .ant-notification-notice-message {
        color: ${({ theme }) => theme.colors.font2};
      }
      .ant-notification-notice-description {
        color: ${({ theme }) => theme.colors.font2};
      }
      .ant-notification-notice-close {
        color: ${({ theme }) => theme.colors.font2};
      }
    }
  `,
  carousel: css`
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 46%;
    }
    .ant-carousel .slick-next,
    .ant-carousel .slick-next {
      top: 46%;
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      color: white;
      z-index: 99999;
    }
    .slick-arrow.slick-prev {
      left: 3%;
    }
    .slick-arrow.slick-next {
      right: 3%;
    }

    .ant-carousel .slick-dots-bottom {
      display: none !important;
    }
  `,
  collapse: css`
    .ant-collapse {
      background: transparent;
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      padding: 0;
      display: block;
      .ant-collapse-expand-icon {
        display: none;
      }
    }

    [data-theme="compact"]
      .site-collapse-custom-collapse
      .site-collapse-custom-panel,
    .site-collapse-custom-collapse .site-collapse-custom-panel {
      margin-bottom: 1rem;
      overflow: hidden;
      background: transparent;
    }

    .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content {
      color: ${({ theme }) => theme.colors.font1};
    }

    .ant-collapse-borderless > .ant-collapse-item {
      border: none;
    }

    .ant-collapse-borderless
      > .ant-collapse-item
      > .ant-collapse-content
      > .ant-collapse-content-box {
      margin-top: 0.7rem;
      padding: 0 0.5rem;
    }
  `,
};

const scroll = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: darkgrey;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${global}
    ${Object.values(antd).map((antdComponent) => antdComponent)}
    ${mediaQuery.minTablet}{    
        ${scroll}
    }
`;
