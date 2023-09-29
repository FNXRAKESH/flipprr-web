// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "@/layout";
import localFont from "next/font/local";

// const myFont = localFont({ src: "../public/fonts/BryantPro-Regular.woff2" });

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
