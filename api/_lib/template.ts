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
                height: 100vh;
                box-sizing: border-box;
                position: relative;
                background: #0b0e19;
                overflow: hidden;
            }
            svg {
                position: absolute;
                bottom: -125px;
            }
            main {
                padding: 125px;
                position: absolute;
                font-family: 'Inter', sans-serif;
            }
            h1 {
                font-size: 64px;
                font-weight: bold;
                color: white;
            }
            h2 {
                font-size: 24px;
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
                color: white;
                font-family: monospace;
            }
            .footer p span {
                color: #00ec86;
            }
            ${getFonts()}
          </style>
        </head>
        <body>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" preserveAspectRatio="none" viewBox="0 0 1200 630">
                <g mask="url(#SvgjsMask1042)" fill="none">
                    <path d="M353.73 671.27C486.69 662.94 555.1 430.25 820.42 414.04 1085.73 397.83 1154.74 169.92 1287.1 162.04" stroke="#00ec86" stroke-width="2"></path>
                    <path d="M504.56 750.78C643.42 714.34 691.82 335.51 898.13 332.6 1104.43 329.69 1184.56 499.11 1291.69 502.7" stroke="#00ec86" stroke-width="2"></path>
                    <path d="M153.79 715.93C263.59 710.57 348.33 519.85 547.24 519.53 746.15 519.21 743.96 598.28 940.68 598.28 1137.41 598.28 1233.82 519.92 1334.13 519.53" stroke="#00ec86" stroke-width="2"></path>
                    <path d="M691.39 726.1C776.23 691.65 706.72 456.11 907.4 430.28 1108.07 404.45 1221.59 245.36 1339.41 241.28" stroke="#00ec86" stroke-width="2"></path>
                    <path d="M733.46 666.46C823.58 625.3 750.16 364 955.7 338.35 1161.24 312.7 1281.77 177.13 1400.17 174.55" stroke="#00ec86" stroke-width="2"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1042">
                        <rect width="1200" height="630" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
            <main>
                <h1>${title}</h1>
                <div style="width: 26.3%;height: 5px;background: #00ec86;margin-top: 40px;"></div>
                <h2>${description}</h2>
                <div class="footer">
                    <p><span>siva.dev</span>/${link}/</p>
                </div>
            </main>
        </body>
      </html>
    `;
}
