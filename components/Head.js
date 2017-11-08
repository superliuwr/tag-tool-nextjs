import Head from 'next/head'

const CustomHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <link href="https://unpkg.com/normalize.css@^4.1.1" rel="stylesheet" />
    <link href="https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css" rel="stylesheet" />
  </Head>
)

export default CustomHead