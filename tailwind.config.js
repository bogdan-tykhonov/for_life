const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{vue,js}'
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans] //
      },
      spacing: {
        'minimal': 'calc(0.0625 * var(--rem, 16px))', //
        '0.5': 'calc(0.125 * var(--rem, 16px))',
        1: 'calc(0.25 * var(--rem, 16px))',
        2: 'calc(0.5 * var(--rem, 16px))',
        3: 'calc(0.75 * var(--rem, 16px))',
        4: 'calc(1 * var(--rem, 16px))',
        5: 'calc(1.25 * var(--rem, 16px))',
        6: 'calc(1.5 * var(--rem, 16px))',
        7: 'calc(1.75 * var(--rem, 16px))',
        8: 'calc(2 * var(--rem, 16px))',
        9: 'calc(2.25 * var(--rem, 16px))',
        10: 'calc(2.5 * var(--rem, 16px))',
        11: 'calc(2.75 * var(--rem, 16px))',
        12: 'calc(3 * var(--rem, 16px))',
        13: 'calc(3.25 * var(--rem, 16px))',
        14: 'calc(3.5 * var(--rem, 16px))',
        15: 'calc(3.75 * var(--rem, 16px))',
        16: 'calc(4 * var(--rem, 16px))',
        17: 'calc(4.25 * var(--rem, 16px))',
        18: 'calc(4.5 * var(--rem, 16px))',
        19: 'calc(4.75 * var(--rem, 16px))',
        20: 'calc(5 * var(--rem, 16px))',
        21: 'calc(5.25 * var(--rem, 16px))',
        22: 'calc(5.5 * var(--rem, 16px))',
        23: 'calc(5.75 * var(--rem, 16px))', //
        24: 'calc(6 * var(--rem, 16px))',
        25: 'calc(6.25 * var(--rem, 16px))',
        26: 'calc(6.5 * var(--rem, 16px))',
        27: 'calc(6.75 * var(--rem, 16px))',
        28: 'calc(7 * var(--rem, 16px))',
        30: 'calc(7.5 * var(--rem, 16px))',
        31: 'calc(7.75 * var(--rem, 16px))',
        32: 'calc(8 * var(--rem, 16px))',
        33: 'calc(8.25 * var(--rem, 16px))',
        34: 'calc(8.5 * var(--rem, 16px))',
        35: 'calc(8.75 * var(--rem, 16px))',
        36: 'calc(9 * var(--rem, 16px))',
        37: 'calc(9.25 * var(--rem, 16px))',
        38: 'calc(9.5 * var(--rem, 16px))',
        39: 'calc(9.75 * var(--rem, 16px))',
        40: 'calc(10 * var(--rem, 16px))',
        42: 'calc(10.5 * var(--rem, 16px))', //
        44: 'calc(11 * var(--rem, 16px))',
        45: 'calc(11.25 * var(--rem, 16px))',
        47: 'calc(11.75 * var(--rem, 16px))',
        48: 'calc(12 * var(--rem, 16px))',
        50: 'calc(12.5 * var(--rem, 16px))', 
        52: 'calc(13 * var(--rem, 16px))',
        54: 'calc(13.5 * var(--rem, 16px))',
        55: 'calc(13.75 * var(--rem, 16px))', //
        56: 'calc(14 * var(--rem, 16px))',
        58: 'calc(14.5 * var(--rem, 16px))',
        59: 'calc(14.75 * var(--rem, 16px))',
        60: 'calc(15 * var(--rem, 16px))',
        61: 'calc(15.25 * var(--rem, 16px))',
        62: 'calc(15.5 * var(--rem, 16px))', //
        65: 'calc(16.25 * var(--rem, 16px))',
        70: 'calc(17.5 * var(--rem, 16px))',
        72: 'calc(18 * var(--rem, 16px))', //
        73: 'calc(18.25 * var(--rem, 16px))',
        74: 'calc(18.5 * var(--rem, 16px))',
        75: 'calc(18.75 * var(--rem, 16px))', //
        76: 'calc(19 * var(--rem, 16px))',
        77: 'calc(19.25 * var(--rem, 16px))', //
        78: 'calc(19.5 * var(--rem, 16px))',
        79: 'calc(19.75 * var(--rem, 16px))',
        80: 'calc(20 * var(--rem, 16px))',
        84: 'calc(21 * var(--rem, 16px))', //
        86: 'calc(21.5 * var(--rem, 16px))', //
        88: 'calc(22 * var(--rem, 16px))', //
        100: 'calc(25 * var(--rem, 16px))', //
        118: 'calc(29.5 * var(--rem, 16px))'
      },
      colors: {
        black: 'var(--theme-color-black, #1D1D1B)',
        primary: {
          DEFAULT: 'var(--theme-color-primary, #3C7BFF)',
          hover: 'var(--theme-color-primary-hover, #3B29FF)'
        },
        gray: '#E5E5E5'
      },
      fontSize: {
        '3xs': ['calc(0.5625 * var(--rem, 16px))', {
          lineHeight: 'calc(1 * var(--rem, 16px))'
        }],
        '2xs': ['calc(0.625 * var(--rem, 16px))', {
          lineHeight: 'calc(1 * var(--rem, 16px))'
        }], //
        xs: ['calc(0.75 * var(--rem, 16px))', {
          lineHeight: 'calc(1 * var(--rem, 16px))'
        }],
        sm: ['calc(0.875 * var(--rem, 16px))', {
          lineHeight: 'calc(1.25 * var(--rem, 16px))'//
        }],
        base: ['calc(1 * var(--rem, 16px))', {
          lineHeight: 'calc(1.5 * var(--rem, 16px))'//
        }],
        lg: ['calc(1.125 * var(--rem, 16px))', {
          lineHeight: 'calc(1.75 * var(--rem, 16px))'
        }],
        xl: ['calc(1.25 * var(--rem, 16px))', {
          lineHeight: 'calc(1.75 * var(--rem, 16px))'
        }],
        '2xl': ['calc(1.5 * var(--rem, 16px))', {
          lineHeight: 'calc(2 * var(--rem, 16px))'
        }],
        '3xl': ['calc(1.625 * var(--rem, 16px))', {
          lineHeight: 'calc(2.25 * var(--rem, 16px))' //
        }],
        '4xl': ['calc(2 * var(--rem, 16px))', {
          lineHeight: 'calc(2.25 * var(--rem, 16px))' //
        }],
        '5xl': ['calc(3 * var(--rem, 16px))', {
          lineHeight: 1
        }],
        '6xl': ['calc(4 * var(--rem, 16px))', {
          lineHeight: 'calc(4.25 * var(--rem, 16px))' //
        }]
      },
      borderWidth: {
        DEFAULT: '1px' //
      },
      maxWidth: theme => ({
        ...theme('spacing')
      }),
      minWidth: theme => ({
        ...theme('spacing')
      }),
      minHeight: theme => ({
        ...theme('spacing')
      }),
      maxHeight: theme => ({
        ...theme('spacing')
      }),
      zIndex: {
        max: '999999999'
      },
      lineHeight: {
        7: 'calc(1.75 * var(--rem, 16px))',
        9: 'calc(2.25 * var(--rem, 16px))'
      },
      backgroundImage: {
        'stop-war': 'url(\'./img/stop.jpeg\')'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
