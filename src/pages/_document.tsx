import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            function enhance(props) {
              return sheet.collectStyles(<App {...props} />);
            },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content="Paróquia Nossa Senhora do Brasil" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
            rel="stylesheet"
          ></link>

          {
            /* prettier-ignore */
            <>
              <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
              <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
              <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
              <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
              <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
              <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
              <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
              <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
              <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
              <link rel="icon" type="image/png" sizes="192x192"  href="/fav/android-icon-192x192.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
              <link rel="manifest" href="/fav/manifest.json" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
              <meta name="theme-color" content="#ffffff"></meta>
            </>
          }

          <meta
            property="og:title"
            content="Paróquia Nossa Senhora do Brasil"
          />
          <meta property="og:type" content="Paróquia Nossa Senhora do Brasil" />
          <meta property="og:url" content="https://pnsbrasil.org.br/" />
          <meta property="og:image" content="/img/foto-igreja.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
