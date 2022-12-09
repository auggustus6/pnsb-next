import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  transition: all ${(p) => p.theme.transition.fast};

  input {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    font-size: 1rem;
    color: #333333;
    transition: inherit;
  }

  label {
    cursor: text;
    position: absolute;
    background: white;
    font-size: 1rem;
    top: calc(50% - 0.6rem);
    left: 0.5rem;
    color: #888888;
    padding: 0 0.4rem;
    transition: inherit;
    user-select: none;
  }

  input:not([value=""]) {
    & ~ label {
      color: #888888;
      font-size: 0.75rem;
      top: -0.4rem;
    }
  }

  input:focus {
    border-color: ${(p) => p.theme.colors.primary};

    & ~ label {
      color: ${(p) => p.theme.colors.primary};
      font-size: 0.75rem;
      top: -0.4rem;
    }
  }
`;
