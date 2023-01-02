import styled from "styled-components";

export const Wrapper = styled.div`
  --size: 50px;
  position: absolute;

  left: calc(50% - var(---size) / 2);
  bottom: calc((var(--size) / 2) * -1);

  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: -8px;

    z-index: 0;

    width: calc(var(--size) + 16px);
    height: calc(var(--size) + 16px);

    background: white;
    border-radius: 50%;
  }

  &:hover > a > svg {
    transform: scale(1.2);
  }

  svg {
    transition: all 0.3s ease-in-out;
  }
`;

export const MyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: var(--size);
  height: var(--size);

  animation: arrowUp 1s infinite ease-in-out;
  animation-direction: alternate;

  @keyframes arrowUp {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(4px);
    }
  }

  svg {
    margin-top: 6px;
  }

  border-radius: 50%;

  color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
