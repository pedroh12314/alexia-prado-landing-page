module.exports = {
  purge: {
    enabled: false
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fdfdfd',
      black: '#000000',
      gray: {
        50: '#fdfdfd',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      }, purple: {
        50: '#EAC7FF',
        100: '#8C05E6',
        200: '#8A05E3',
        300: '#8704DE',
        400: '#7E04CF',
        500: '#6903AD',
        600: '#6603A8',
        700: '#5D0399',
        800: '#510385',
        900: '#4e0280'
      }, red: {
        50: '#fbd3d9',
        100: '#f8a8b4',
        200: '#f57d8e',
        300: '#f3677c',
        400: '#f25269',
        500: '#ef2744',
      }, yellow: {
        50: '#fef5d0',
        100: '#fdf0b8',
        200: '#fdeba1',
        300: '#fde68a',
        400: '#fcd34d',
        500: '#fbbf24',
      }, green: {
        50: '#d4f4e3',
        100: '#beefd5',
        200: '#a9eac7',
        300: '#7edfab',
        400: '#53d58f',
        500: '#29cb74',
      },
    },
    fontFamily: {
      display: [
        '"DM Sans"',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        'Poppins',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}