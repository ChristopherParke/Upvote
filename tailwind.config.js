module.exports = {  
  content: [    
    './src/components/**/*.{vue,html,js}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'myGrey': '#F4F6F8',
      'myDarkGrey': '#e9e9e9',
      'myBlue': '#253CF2',
      'myLightBlue': '#E5E8FD',
      'myBlack': '#343A40',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '9': '1.5px',
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

