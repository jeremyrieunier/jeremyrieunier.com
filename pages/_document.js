import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased min-h-screen overflow-y-scroll bg-dark-navy">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
