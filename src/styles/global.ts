import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html{
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Inter", "Roboto", Helvetica, sans-serif;
    color: ${(p) => p.theme.colors.textColor};
  }

  h1{
    font-size: 2.986rem;
  }
  h2{
    font-size: 2.488rem;
  }
  h3{
    font-size: 2.074rem;
  }
  h4{
    font-size: 1.728rem;
  }
  h5{
    font-size: 1.44rem;
  }
  
  h6{
    font-size: 1.2rem;
  }
  p{
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  input {
    outline:none;
  }

  ul {
    list-style: none;
  }

  button {
    border:0;
    cursor:pointer;
    outline:none;
  }
  
  a{
    text-decoration: none;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaaaaa;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #868585;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }  
  }

  tr:nth-child(even) {
    filter: brightness(0.9);
  }

  ${({ theme }) => css`
    .swal-confirm {
      background-color: ${theme.colors.primary} !important;
    }

    .swal-danger {
      background-color: ${theme.colors.red} !important;
      color: ${theme.colors.white} !important;
    }

    .swal-cancel {
      background-color: ${theme.colors.lightGray} !important;
      color: ${theme.colors.gray} !important;
    }
  `}
`;

export default GlobalStyles;
