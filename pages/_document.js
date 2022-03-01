/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable prettier/prettier */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            href="https://www.cdnfonts.com/architects-daughter.font"
            rel="canonical"
          />

          <link 
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.css"
          />    



          <link href="/assets/css/main.css" rel="stylesheet" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link 
                  rel="stylesheet"
                  href="http://fonts.cdnfonts.com/css/architects-daughter"   
                  type="text/css"
/>
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Dosis:500,700"
            type="text/css"
          />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <link
            rel="stylesheet"
            href="./components/Light/js/tipsy/tipsy.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="./components/Light/js/prettyPhoto/css/prettyPhoto.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="./css/styles.css"
            type="text/css"
            media="all"
          />

          <script
            type="text/javascript"
            src="./components/Light/js/jquery/jquery-1.7.1.min.js"
          ></script>
          <script
            type="text/javascript"
            src="./components/Light/js/jquery/jquery-ui-1.8.18.custom.min.js"
          ></script>
          <script
            type="text/javascript"
            src="./components/Light/js/jquery/jquery.ui.touch-punch.jsjs/jquery/jquery.ui.touch-punch.js"
          ></script>
          <script
            type="text/javascript"
            src="./components/Light/js/prettyPhoto/js/jquery.prettyPhoto.js"
          ></script>
          <script
            type="text/javascript"
            src="../components/Light/js/tipsy/jquery.tipsy.js"
          ></script>
          <script
            type="text/javascript"
            src="./components/Light/js/audiojs"
          ></script>
          <script
            type="text/javascript"
            src="../components/Light/js/tinyscrollbar/jquery.tinyscrollbar.js"
          ></script>
          <script
            type="text/javascript"
            src="../components/Light/js/jquery.timeline.js"
          ></script>

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-slate-800 text-blue-500 font--sans dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
