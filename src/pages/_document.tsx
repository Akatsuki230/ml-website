import FinalFooter from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" data-bs-theme="dark">
            <Head />
            <body>
                <Main />
                <FinalFooter />
                <NextScript />
            </body>
        </Html>
    );
}
