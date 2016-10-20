import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Arvo',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '100',
        '100i',
        '400',
        '400i',
        '700',
        '700i'
      ]
    },
    {
      name: 'Roboto Mono',
      styles: [
        '100',
        '100i',
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  headerFontFamily: ['Roboto Mono', 'sans-serif'],
  bodyFontFamily: ['Roboto Mono', 'sans-serif'],
  baseFontSize: '18px',
  headerWeight: 400,
  bodyWeight: 100,
  baseLineHeight: 1.65,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
