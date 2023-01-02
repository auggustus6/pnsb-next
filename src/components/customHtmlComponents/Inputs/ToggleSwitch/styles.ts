import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SwitchWrapper = styled.label`
  --height: 1.8rem;
  --width: 4rem;
  position: relative;
  display: block;
  user-select: none;

  cursor: pointer;

  /* background: ${(p) => p.theme.colors.primary}; */

  input {
    display: none;
  }

  input:checked ~ .toggle__circle {
    left: calc(100% - var(--height) - 0.1rem);
    background: white;
  }

  input:checked ~ .toggle__background {
    background: ${(p) => p.theme.colors.primary};
  }

  input:checked ~ .toggle__text {
    color: white;
    left: 0.4rem;
  }

  .toggle__circle {
    position: absolute;
    height: var(--height);
    width: var(--height);
    background: #bbb;
    border-radius: 50%;
    transform: scale(0.8);
    left: 0.1rem;
    top: 0;
    transition: all 0.3s ease;
  }

  .toggle__text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(48%);
    color: ${(p) => p.theme.colors.textColor};
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .toggle__background {
    position: relative;
    inset: 0;
    height: var(--height);
    width: var(--width);
    background: #eee;
    border-radius: var(--height);
    transition: all 0.3s ease;
  }
`;
