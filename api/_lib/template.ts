import { readFileSync } from 'fs';
import { ParsedRequest } from './types';

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');

function getFonts() {
    return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { title, description, link } = parsedReq;

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            /* http://meyerweb.com/eric/tools/css/reset/ 
                v2.0 | 20110126
                License: none (public domain)
            */
        
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article, aside, details, figcaption, figure, 
            footer, header, hgroup, menu, nav, section {
                display: block;
            }
            body {
                line-height: 1;
            }
            ol, ul {
                list-style: none;
            }
            blockquote, q {
                quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
                content: '';
                content: none;
            }
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
          </style>
          <style>
            body {
                line-height: 1;
                background: #161c27;
                height: 100vh;
                box-sizing: border-box;
                border: 10px solid #cbe7f0;
            }
            main {
                padding: 125px;
                font-family: 'Inter', sans-serif;
            }
            h1 {
                font-size: 72px;
                font-weight: bold;
                color: white;
            }
            h2 {
                font-size: 36px;
                margin-top: 40px;
                color: #c6c8ca;
                line-height: 1.2;
            }
            .footer {
                position: fixed;
                bottom: 125px;
            }
            .footer p {
                font-size: 24px;
                text-decoration: underline;
                color: #cbe7f0;
            }
            ${getFonts()}
          </style>
        </head>
        <body>
            <main>
                <h1>${title}</h1>
                <h2>${description}</h2>
                <div class="footer">
                    <p>siva.dev/${link}/</p>
                </div>
            </main>
        </body>
      </html>
    `;
}
