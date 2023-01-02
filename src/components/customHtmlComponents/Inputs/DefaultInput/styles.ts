import styled from "styled-components";

type WrapperData = {
  $error: boolean;
};

export const Wrapper = styled.div<WrapperData>`
  width: 100%;
  position: relative;

  transition: all ${(p) => p.theme.transition.fast};

  .styled__textarea {
    height: 10rem !important;
    resize: none;
    overflow: scroll;
    padding:  1rem !important;
    font-family: "Inter";
  }

  .styled__input {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    border: 1px solid ${(p) => (p.$error ? p.theme.colors.red : "#bbbbbb")};
    border-radius: 5px;
    font-size: 1rem;
    color: ${(p) => (p.$error ? p.theme.colors.red : "#333333")};
    transition: inherit;
    outline: none;
  }

  label {
    cursor: text;
    position: absolute;
    background: white;
    font-size: 1rem;
    top: 0.9rem;
    left: 0.5rem;
    color: ${(p) => (p.$error ? p.theme.colors.red : "#888888")};
    padding: 0 0.4rem;
    transition: inherit;
    user-select: none;
  }

  .styled__input:not([value=""]) {
    & ~ label {
      color: ${(p) => (p.$error ? p.theme.colors.red : "#888888")};
      font-size: 0.75rem;
      top: -0.4rem;
    }
  }

  .styled__input:focus {
    border-color: ${(p) =>
      p.$error ? p.theme.colors.red : p.theme.colors.primary};

    & ~ label {
      color: ${(p) => (p.$error ? p.theme.colors.red : p.theme.colors.primary)};
      font-size: 0.75rem;
      top: -0.4rem;
    }
  }

  span {
    color: ${(p) => p.theme.colors.red};
    font-size: 0.9rem;
  }
`;
